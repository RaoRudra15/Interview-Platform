export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },
  
  "contains-duplicate": {
  id: "contains-duplicate",
  title: "Contains Duplicate",
  difficulty: "Easy",
  category: "Array • Hash Set",
  description: {
    text: "Given an integer array nums, return true if any value appears at least twice in the array.",
    notes: [],
  },
  examples: [
    { input: "[1,2,3,1]", output: "true" },
    { input: "[1,2,3,4]", output: "false" },
  ],
  constraints: ["1 ≤ nums.length ≤ 10⁵"],
  starterCode: {
    java: `class Solution {
  public static boolean containsDuplicate(int[] nums) {
    return false;
  }
}`
  },
  expectedOutput: { java: "true\nfalse" }
},

"best-time-stock": {
  id: "best-time-stock",
  title: "Best Time to Buy and Sell Stock",
  difficulty: "Easy",
  category: "Array • DP",
  description: {
    text: "Find maximum profit from one transaction.",
    notes: [],
  },
  examples: [
    { input: "[7,1,5,3,6,4]", output: "5" },
  ],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static int maxProfit(int[] prices) {
    return 0;
  }
}`
  },
  expectedOutput: { java: "5" }
},

"valid-anagram": {
  id: "valid-anagram",
  title: "Valid Anagram",
  difficulty: "Easy",
  category: "String • Hash Map",
  description: {
    text: "Return true if t is an anagram of s.",
    notes: [],
  },
  examples: [
    { input: `"anagram","nagaram"`, output: "true" },
  ],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static boolean isAnagram(String s, String t) {
    return false;
  }
}`
  },
  expectedOutput: { java: "true" }
},

"merge-sorted-array": {
  id: "merge-sorted-array",
  title: "Merge Sorted Array",
  difficulty: "Easy",
  category: "Array • Two Pointers",
  description: {
    text: "Merge nums2 into nums1 sorted.",
    notes: [],
  },
  examples: [
    { input: "[1,2,3],[2,5,6]", output: "[1,2,2,3,5,6]" }
  ],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static void merge(int[] nums1, int m, int[] nums2, int n) {

  }
}`
  },
  expectedOutput: { java: "[1,2,2,3,5,6]" }
},

"move-zeroes": {
  id: "move-zeroes",
  title: "Move Zeroes",
  difficulty: "Easy",
  category: "Array • Two Pointers",
  description: {
    text: "Move all 0s to end.",
    notes: [],
  },
  examples: [
    { input: "[0,1,0,3,12]", output: "[1,3,12,0,0]" }
  ],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static void moveZeroes(int[] nums) {

  }
}`
  },
  expectedOutput: { java: "[1,3,12,0,0]" }
},

"climbing-stairs": {
  id: "climbing-stairs",
  title: "Climbing Stairs",
  difficulty: "Easy",
  category: "DP",
  description: {
    text: "How many ways to climb n stairs?",
    notes: [],
  },
  examples: [
    { input: "n=3", output: "3" }
  ],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static int climbStairs(int n) {
    return 0;
  }
}`
  },
  expectedOutput: { java: "3" }
},

"linked-list-cycle": {
  id: "linked-list-cycle",
  title: "Linked List Cycle",
  difficulty: "Easy",
  category: "Linked List",
  description: {
    text: "Detect cycle in linked list.",
    notes: [],
  },
  examples: [],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static boolean hasCycle(ListNode head) {
    return false;
  }
}`
  },
  expectedOutput: { java: "true/false" }
},

"binary-search": {
  id: "binary-search",
  title: "Binary Search",
  difficulty: "Easy",
  category: "Binary Search",
  description: {
    text: "Return index of target.",
    notes: [],
  },
  examples: [],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static int search(int[] nums, int target) {
    return -1;
  }
}`
  },
  expectedOutput: { java: "index" }
},

"fibonacci": {
  id: "fibonacci",
  title: "Fibonacci Number",
  difficulty: "Easy",
  category: "Recursion • DP",
  description: {
    text: "Return nth fibonacci.",
    notes: [],
  },
  examples: [{ input: "n=4", output: "3" }],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static int fib(int n) {
    return 0;
  }
}`
  },
  expectedOutput: { java: "3" }
},

"reverse-linked-list": {
  id: "reverse-linked-list",
  title: "Reverse Linked List",
  difficulty: "Easy",
  category: "Linked List",
  description: {
    text: "Reverse singly linked list.",
    notes: [],
  },
  examples: [],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static ListNode reverseList(ListNode head) {
    return null;
  }
}`
  },
  expectedOutput: { java: "reversed list" }
},

"min-stack": {
  id: "min-stack",
  title: "Min Stack",
  difficulty: "Medium",
  category: "Stack",
  description: {
    text: "Design stack supporting min().",
    notes: [],
  },
  examples: [],
  constraints: [],
  starterCode: {
    java: `class MinStack {

}`
  },
  expectedOutput: { java: "works" }
},

"valid-parentheses": {
  id: "valid-parentheses",
  title: "Valid Parentheses",
  difficulty: "Easy",
  category: "Stack",
  description: {
    text: "Check valid parentheses.",
    notes: [],
  },
  examples: [{ input: "()[]{}", output: "true" }],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static boolean isValid(String s) {
    return false;
  }
}`
  },
  expectedOutput: { java: "true" }
},

"majority-element": {
  id: "majority-element",
  title: "Majority Element",
  difficulty: "Easy",
  category: "Array",
  description: {
    text: "Find element > n/2.",
    notes: [],
  },
  examples: [],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static int majorityElement(int[] nums) {
    return 0;
  }
}`
  },
  expectedOutput: { java: "element" }
},

"single-number": {
  id: "single-number",
  title: "Single Number",
  difficulty: "Easy",
  category: "Bit Manipulation",
  description: {
    text: "Find element appearing once.",
    notes: [],
  },
  examples: [],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static int singleNumber(int[] nums) {
    return 0;
  }
}`
  },
  expectedOutput: { java: "number" }
},

"intersection-arrays": {
  id: "intersection-arrays",
  title: "Intersection of Two Arrays",
  difficulty: "Easy",
  category: "Hash Set",
  description: {
    text: "Return intersection.",
    notes: [],
  },
  examples: [],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static int[] intersection(int[] a, int[] b) {
    return new int[0];
  }
}`
  },
  expectedOutput: { java: "[...]" }
},

"sqrtx": {
  id: "sqrtx",
  title: "Sqrt(x)",
  difficulty: "Easy",
  category: "Binary Search",
  description: {
    text: "Compute integer sqrt.",
    notes: [],
  },
  examples: [{ input: "8", output: "2" }],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static int mySqrt(int x) {
    return 0;
  }
}`
  },
  expectedOutput: { java: "2" }
},
"longest-substring": {
  id: "longest-substring",
  title: "Longest Substring Without Repeating Characters",
  difficulty: "Medium",
  category: "String • Sliding Window",
  description: { text: "Find the length of the longest substring without repeating characters.", notes: [] },
  examples: [{ input: `"abcabcbb"`, output: "3" }],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static int lengthOfLongestSubstring(String s) {
    return 0;
  }
}`
  },
  expectedOutput: { java: "3" }
},

"product-array-except-self": {
  id: "product-array-except-self",
  title: "Product of Array Except Self",
  difficulty: "Medium",
  category: "Array",
  description: { text: "Return array where each element is product except itself.", notes: [] },
  examples: [{ input: "[1,2,3,4]", output: "[24,12,8,6]" }],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static int[] productExceptSelf(int[] nums) {
    return new int[0];
  }
}`
  },
  expectedOutput: { java: "[24,12,8,6]" }
},

"3sum": {
  id: "3sum",
  title: "3Sum",
  difficulty: "Medium",
  category: "Array • Two Pointers",
  description: { text: "Find all unique triplets that sum to zero.", notes: [] },
  examples: [{ input: "[-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" }],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static List<List<Integer>> threeSum(int[] nums) {
    return new ArrayList<>();
  }
}`
  },
  expectedOutput: { java: "[[-1,-1,2],[-1,0,1]]" }
},

"group-anagrams": {
  id: "group-anagrams",
  title: "Group Anagrams",
  difficulty: "Medium",
  category: "Hash Map",
  description: { text: "Group strings that are anagrams.", notes: [] },
  examples: [{ input: `["eat","tea","tan","ate","nat","bat"]`, output: "[[eat,tea,ate],[tan,nat],[bat]]" }],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static List<List<String>> groupAnagrams(String[] strs) {
    return new ArrayList<>();
  }
}`
  },
  expectedOutput: { java: "[[eat,tea,ate],[tan,nat],[bat]]" }
},

"top-k-frequent": {
  id: "top-k-frequent",
  title: "Top K Frequent Elements",
  difficulty: "Medium",
  category: "Heap",
  description: { text: "Return k most frequent elements.", notes: [] },
  examples: [{ input: "[1,1,1,2,2,3], k=2", output: "[1,2]" }],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static int[] topKFrequent(int[] nums, int k) {
    return new int[0];
  }
}`
  },
  expectedOutput: { java: "[1,2]" }
},

"decode-string": {
  id: "decode-string",
  title: "Decode String",
  difficulty: "Medium",
  category: "Stack",
  description: { text: "Decode encoded strings like 3[a2[c]].", notes: [] },
  examples: [{ input: `"3[a2[c]]"`, output: "accaccacc" }],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static String decodeString(String s) {
    return "";
  }
}`
  },
  expectedOutput: { java: "accaccacc" }
},

"search-rotated": {
  id: "search-rotated",
  title: "Search in Rotated Sorted Array",
  difficulty: "Medium",
  category: "Binary Search",
  description: { text: "Search target in rotated sorted array.", notes: [] },
  examples: [{ input: "[4,5,6,7,0,1,2], target=0", output: "4" }],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static int search(int[] nums, int target) {
    return -1;
  }
}`
  },
  expectedOutput: { java: "4" }
},

"spiral-matrix": {
  id: "spiral-matrix",
  title: "Spiral Matrix",
  difficulty: "Medium",
  category: "Matrix",
  description: { text: "Return elements in spiral order.", notes: [] },
  examples: [{ input: "[[1,2,3],[4,5,6],[7,8,9]]", output: "[1,2,3,6,9,8,7,4,5]" }],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static List<Integer> spiralOrder(int[][] matrix) {
    return new ArrayList<>();
  }
}`
  },
  expectedOutput: { java: "[1,2,3,6,9,8,7,4,5]" }
},

"coin-change": {
  id: "coin-change",
  title: "Coin Change",
  difficulty: "Medium",
  category: "DP",
  description: { text: "Find minimum coins to make amount.", notes: [] },
  examples: [{ input: "coins=[1,2,5], amount=11", output: "3" }],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static int coinChange(int[] coins, int amount) {
    return -1;
  }
}`
  },
  expectedOutput: { java: "3" }
},

"longest-palindrome-substring": {
  id: "longest-palindrome-substring",
  title: "Longest Palindromic Substring",
  difficulty: "Medium",
  category: "String • DP",
  description: { text: "Return longest palindromic substring.", notes: [] },
  examples: [{ input: `"babad"`, output: "bab" }],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static String longestPalindrome(String s) {
    return "";
  }
}`
  },
  expectedOutput: { java: "bab" }
},
"merge-k-lists": {
  id: "merge-k-lists",
  title: "Merge K Sorted Lists",
  difficulty: "Hard",
  category: "Heap • Linked List",
  description: { text: "Merge k sorted linked lists.", notes: [] },
  examples: [],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static ListNode mergeKLists(ListNode[] lists) {
    return null;
  }
}`
  },
  expectedOutput: { java: "" }
},

"trapping-rain-water": {
  id: "trapping-rain-water",
  title: "Trapping Rain Water",
  difficulty: "Hard",
  category: "Two Pointers",
  description: { text: "Compute trapped rain water.", notes: [] },
  examples: [{ input: "[0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" }],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static int trap(int[] height) {
    return 0;
  }
}`
  },
  expectedOutput: { java: "6" }
},

"largest-rectangle": {
  id: "largest-rectangle",
  title: "Largest Rectangle in Histogram",
  difficulty: "Hard",
  category: "Stack",
  description: { text: "Find largest rectangle area.", notes: [] },
  examples: [{ input: "[2,1,5,6,2,3]", output: "10" }],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static int largestRectangleArea(int[] heights) {
    return 0;
  }
}`
  },
  expectedOutput: { java: "10" }
},

"edit-distance": {
  id: "edit-distance",
  title: "Edit Distance",
  difficulty: "Hard",
  category: "DP",
  description: { text: "Minimum operations to convert one string to another.", notes: [] },
  examples: [{ input: `"horse","ros"`, output: "3" }],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static int minDistance(String a, String b) {
    return 0;
  }
}`
  },
  expectedOutput: { java: "3" }
},

"median-two-sorted": {
  id: "median-two-sorted",
  title: "Median of Two Sorted Arrays",
  difficulty: "Hard",
  category: "Binary Search",
  description: { text: "Find median of two sorted arrays.", notes: [] },
  examples: [{ input: "[1,3],[2]", output: "2.0" }],
  constraints: [],
  starterCode: {
    java: `class Solution {
  public static double findMedianSortedArrays(int[] a, int[] b) {
    return 0.0;
  }
}`
  },
  expectedOutput: { java: "2.0" }
},


};

export const LANGUAGE_CONFIG = {
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};