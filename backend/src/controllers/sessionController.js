import { streamClient } from "../lib/stream.js"
import { chatClient } from "../lib/stream.js"
import Session from "../models/Session.js"


export async function createSession(req,res) {
    try{
        const {problem,difficulty}=req.body
        const userId=req.user._id
        const clerkId=req.user.clerkId

        if(!problem || !difficulty){
            return res.status(400).json({msg:"Problem and difficulty are required"})
        }

        // generating a  unique call id for stream video
        const callId=`session_${Date.now()}_${Math.random().toString(36).substring(7)}`

        const session =await Session.create({
            problem,
            difficulty,
            host:userId,
            callId
        })

        await streamClient.video.call("default",callId).getOrCreate({
            data:{
                created_by_id:clerkId,
                custom:{
                    problem,
                    difficulty,
                    sessionId:session._id.toString()
                }
            }
        })

        const channel=chatClient.channel("messaging",callId,{
            name:`${problem} Session`,
            created_by_id:clerkId, 
            members:[clerkId]
        })

        await channel.create()

        res.status(201).json({session:session});
    }catch(err){
        console.log("Error in createSession controller:", err.message);
        res.status(500).json({msg:"Internal Server Error"})
    }
}

export async function getActiveSessions(_,res) {
    try{
        const sessions=await Session.find({status:"active"}).populate("host","name profileImage email clerkId").populate("participant","name profileImage email clerkId").sort({createdAt:-1}).limit(20);

        res.status(200).json({sessions})
    }catch(err){
        console.log("Error in getActiveSession controller:", err.message);
        res.status(500).json({msg:"Internal Server Error"})
    }
}

export async function getMyRecentSessions(req,res) {
    try{
        const userId=req.user._id

        const session=await Session.find({
            status:"completed",
            $or:[{host:userId},{participant:userId}]
        }).sort({createdAt:-1})
        .limit(20);

        res.status(200).json({session});
    }catch(err){
        console.log("Error in getMyRecentSession controller",err.message);
        res.status(500).json({msg:"Internal Server Error"});
    }
}

export async function getSessionById(req,res) {
    try{
        const {id}=req.params

        const session=await Session.findById(id)
        .populate("host","name email profileImage clerkId")
        .populate("participant", "name email profileImage clerkId")

        if(!session) return res.status(404).json({msg:"Session not found"})

        res.status(200).json({session})

    }catch(err){
        console.log("Error in getSessionId controller",err.message);
        res.status(500).json({msg:"Internal Server Error"})
    }
}

export async function joinSession(req,res) {
    try{
        const{id} =req.params
        const userId=req.user._id
        const clerkId=req.user.clerkId

        const session=await Session.findById(id);

        if(!session) return res.status(404).json({msg:"Session not found"});

        if(session.status!== "active"){
            return res.status(400).json({msg:"Cannot join a completed session"});
        }

        if(session.host.toString()===userId.toString()){
            return res.status(400).json({msg:"Host cannot join their own session as participant"});
        }

        if(session.participant) return res.status(404).json({msg:"Session is full"});

        session.participant=userId
        await session.save()

        const channel=chatClient.channel("messaging",session.callId)
        await channel.addMembers([clerkId])

        res.status(200).json({session});
    }catch(err){
        console.log("Error in joinSession controller",err.message);
        res.status(500).json({msg:"Internal Server Error"})
    }
}

export async function endSession(req,res) {
    try{
        const {id}=req.params
        const userId=req.user._id

        const session=await Session.findById(id);

        if(!session) return res.status(404).json({msg:"Session not found"})

        if(session.host.toString()!==userId.toString()){
          return res.status(403).json({msg:"Only the host can end the session"})  
        }

        if(session.status==="completed"){
            return res.status(400).json({msg:"Session is already completed"})
        }

        // now we will delete stream video call and chat

        const call=streamClient.video.call("default",session.callId)
        await call.delete({hard:true})

        const channel=chatClient.channel("messaging",session.callId);
        await channel.delete()

        session.status="completed"
        await session.save()

        res.status(200).json({msg:"Session ended successfully"})

    }catch(err){
        console.log("Error in endSession controller",err.message);
        res.status(500).json({msg:"Internal Server Error"})
    }
}