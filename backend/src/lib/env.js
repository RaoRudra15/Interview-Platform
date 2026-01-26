import dotenv from 'dotenv';
import dns from "node:dns/promises";

dotenv.config();

if ((process.env.NODE_ENV === "development")) {
  dns.setServers(["1.1.1.1", "8.8.8.8"]);
}

export const ENV={ 
    PORT:process.env.PORT,
    DB_URL:process.env.DB_URL,
    NODE_ENV:process.env.NODE_ENV,
    INGEST_EVENT_KEY:process.env.INGEST_EVENT_KEY,
    INNGEST_SIGNING_KEY:process.env.INNGEST_SIGNING_KEY,
    STREAM_API_KEY:process.env.STREAM_API_KEY,
    STREAM_API_SECRET:process.env.STREAM_API_SECRET,
    CLERK_PUBLISHABLE_KEY:process.env.CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY:process.env.CLERK_SECRET_KEY,
    CLIENT_URL:process.env.CLIENT_URL
};