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
    text: "Given an integer array nums, return true if any value appears at least twice in the array. Return false if every element is distinct.",
    notes: [
      "Use a HashSet to track seen values.",
      "Try solving in O(n) time."
    ],
  },
  examples: [
    {
      input: "nums = [1,2,3,1]",
      output: "true",
      explanation: "1 appears twice."
    },
    {
      input: "nums = [1,2,3,4]",
      output: "false",
      explanation: "All values are unique."
    }
  ],
  constraints: [
    "1 ≤ nums.length ≤ 10⁵",
    "-10⁹ ≤ nums[i] ≤ 10⁹"
  ],
  starterCode: {
    java: `import java.util.*;

class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1}));
        System.out.println(containsDuplicate(new int[]{1,2,3,4}));
    }
}`
  },
  expectedOutput: {
    java: "true\nfalse"
  },
},

"best-time-stock": {
  id: "best-time-stock",
  title: "Best Time to Buy and Sell Stock",
  difficulty: "Easy",
  category: "Array • Dynamic Programming",
  description: {
    text: "You are given prices where prices[i] is stock price on day i. Return maximum profit from one transaction.",
    notes: [
      "Buy before sell.",
      "Return 0 if no profit possible."
    ],
  },
  examples: [
    {
      input: "prices = [7,1,5,3,6,4]",
      output: "5",
      explanation: "Buy at 1, sell at 6."
    },
    {
      input: "prices = [7,6,4,3,1]",
      output: "0",
      explanation: "Prices only decrease."
    }
  ],
  constraints: [
    "1 ≤ prices.length ≤ 10⁵",
    "0 ≤ prices[i] ≤ 10⁴"
  ],
  starterCode: {
    java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }
}`
  },
  expectedOutput: {
    java: "5\n0"
  },
},

"valid-anagram": {
  id: "valid-anagram",
  title: "Valid Anagram",
  difficulty: "Easy",
  category: "String • Hash Map",
  description: {
    text: "Return true if t is an anagram of s.",
    notes: [
      "Same characters with same frequency."
    ],
  },
  examples: [
    {
      input: `"anagram","nagaram"`,
      output: "true",
      explanation: "Same letters."
    },
    {
      input: `"rat","car"`,
      output: "false",
      explanation: "Different letters."
    }
  ],
  constraints: [
    "1 ≤ s.length, t.length ≤ 5×10⁴"
  ],
  starterCode: {
    java: `class Solution {
    public static boolean isAnagram(String s, String t) {
        // Write your solution here
        return false;
    }
}`
  },
  expectedOutput: {
    java: "true\nfalse"
  },
},

"move-zeroes": {
  id: "move-zeroes",
  title: "Move Zeroes",
  difficulty: "Easy",
  category: "Array • Two Pointers",
  description: {
    text: "Move all zeroes to end while maintaining order of non-zero elements.",
    notes: [
      "Must be in-place."
    ],
  },
  examples: [
    {
      input: "[0,1,0,3,12]",
      output: "[1,3,12,0,0]",
      explanation: "Zeroes shifted right."
    }
  ],
  constraints: [
    "1 ≤ nums.length ≤ 10⁴"
  ],
  starterCode: {
    java: `class Solution {
    public static void moveZeroes(int[] nums) {
        // Write your solution here
    }
}`
  },
  expectedOutput: {
    java: "[1,3,12,0,0]"
  },
},

"binary-search": {
  id: "binary-search",
  title: "Binary Search",
  difficulty: "Easy",
  category: "Binary Search",
  description: {
    text: "Return index of target in sorted array or -1.",
    notes: [
      "Must run in O(log n)."
    ],
  },
  examples: [
    {
      input: "[-1,0,3,5,9,12], target=9",
      output: "4",
      explanation: "9 found at index 4."
    }
  ],
  constraints: [
    "Array sorted ascending."
  ],
  starterCode: {
    java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }
}`
  },
  expectedOutput: {
    java: "4"
  },
},

// ================= MEDIUM =================

"longest-substring": {
  id: "longest-substring",
  title: "Longest Substring Without Repeating Characters",
  difficulty: "Medium",
  category: "String • Sliding Window",
  description: {
    text: "Find length of longest substring without repeating characters.",
    notes: [
      "Use sliding window."
    ],
  },
  examples: [
    {
      input: `"abcabcbb"`,
      output: "3",
      explanation: "Substring 'abc'."
    }
  ],
  constraints: [
    "0 ≤ s.length ≤ 5×10⁴"
  ],
  starterCode: {
    java: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }
}`
  },
  expectedOutput: {
    java: "3"
  },
},

"product-array-except-self": {
  id: "product-array-except-self",
  title: "Product of Array Except Self",
  difficulty: "Medium",
  category: "Array",
  description: {
    text: "Return array where each element is product of all others.",
    notes: [
      "No division allowed."
    ],
  },
  examples: [
    {
      input: "[1,2,3,4]",
      output: "[24,12,8,6]",
      explanation: "Each index excludes itself."
    }
  ],
  constraints: [
    "2 ≤ nums.length ≤ 10⁵"
  ],
  starterCode: {
    java: `class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        return new int[0];
    }
}`
  },
  expectedOutput: {
    java: "[24,12,8,6]"
  },
},

"3sum": {
  id: "3sum",
  title: "3Sum",
  difficulty: "Medium",
  category: "Array • Two Pointers",
  description: {
    text: "Given an integer array nums, return all unique triplets [nums[i], nums[j], nums[k]] such that they sum to zero.",
    notes: [
      "Triplets must be unique.",
      "Array can contain both negative and positive numbers."
    ],
  },
  examples: [
    {
      input: "nums = [-1,0,1,2,-1,-4]",
      output: "[[-1,-1,2],[-1,0,1]]",
      explanation: "Two unique triplets sum to zero."
    }
  ],
  constraints: [
    "3 ≤ nums.length ≤ 3000",
    "-10⁵ ≤ nums[i] ≤ 10⁵"
  ],
  starterCode: {
    java: `import java.util.*;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }
}`
  },
  expectedOutput: {
    java: "[[-1,-1,2],[-1,0,1]]"
  },
},

"group-anagrams": {
  id: "group-anagrams",
  title: "Group Anagrams",
  difficulty: "Medium",
  category: "Hash Map",
  description: {
    text: "Group strings that are anagrams of each other.",
    notes: [
      "Order of groups does not matter."
    ],
  },
  examples: [
    {
      input: `["eat","tea","tan","ate","nat","bat"]`,
      output: "[[eat,tea,ate],[tan,nat],[bat]]",
      explanation: "Strings grouped by sorted character keys."
    }
  ],
  constraints: [
    "1 ≤ strs.length ≤ 10⁴"
  ],
  starterCode: {
    java: `import java.util.*;

class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        return new ArrayList<>();
    }
}`
  },
  expectedOutput: {
    java: "[[eat,tea,ate],[tan,nat],[bat]]"
  },
},

"top-k-frequent": {
  id: "top-k-frequent",
  title: "Top K Frequent Elements",
  difficulty: "Medium",
  category: "Heap",
  description: {
    text: "Return the k most frequent elements.",
    notes: [
      "Order does not matter."
    ],
  },
  examples: [
    {
      input: "[1,1,1,2,2,3], k=2",
      output: "[1,2]",
      explanation: "1 and 2 appear most frequently."
    }
  ],
  constraints: [
    "1 ≤ nums.length ≤ 10⁵"
  ],
  starterCode: {
    java: `class Solution {
    public static int[] topKFrequent(int[] nums, int k) {
        // Write your solution here
        return new int[0];
    }
}`
  },
  expectedOutput: {
    java: "[1,2]"
  },
},

"spiral-matrix": {
  id: "spiral-matrix",
  title: "Spiral Matrix",
  difficulty: "Medium",
  category: "Matrix",
  description: {
    text: "Return all elements of the matrix in spiral order.",
    notes: [
      "Traverse layer by layer."
    ],
  },
  examples: [
    {
      input: "[[1,2,3],[4,5,6],[7,8,9]]",
      output: "[1,2,3,6,9,8,7,4,5]",
      explanation: "Clockwise spiral traversal."
    }
  ],
  constraints: [
    "m,n ≤ 10"
  ],
  starterCode: {
    java: `import java.util.*;

class Solution {
    public static List<Integer> spiralOrder(int[][] matrix) {
        // Write your solution here
        return new ArrayList<>();
    }
}`
  },
  expectedOutput: {
    java: "[1,2,3,6,9,8,7,4,5]"
  },
},

"coin-change": {
  id: "coin-change",
  title: "Coin Change",
  difficulty: "Medium",
  category: "Dynamic Programming",
  description: {
    text: "Return minimum coins required to make amount.",
    notes: [
      "Return -1 if impossible."
    ],
  },
  examples: [
    {
      input: "coins=[1,2,5], amount=11",
      output: "3",
      explanation: "11 = 5+5+1"
    }
  ],
  constraints: [
    "1 ≤ coins.length ≤ 12"
  ],
  starterCode: {
    java: `class Solution {
    public static int coinChange(int[] coins, int amount) {
        // Write your solution here
        return -1;
    }
}`
  },
  expectedOutput: {
    java: "3"
  },
},

"longest-palindrome-substring": {
  id: "longest-palindrome-substring",
  title: "Longest Palindromic Substring",
  difficulty: "Medium",
  category: "String • DP",
  description: {
    text: "Return the longest palindromic substring.",
    notes: [
      "Multiple answers possible."
    ],
  },
  examples: [
    {
      input: `"babad"`,
      output: "bab",
      explanation: "bab is a palindrome."
    }
  ],
  constraints: [
    "1 ≤ s.length ≤ 1000"
  ],
  starterCode: {
    java: `class Solution {
    public static String longestPalindrome(String s) {
        // Write your solution here
        return "";
    }
}`
  },
  expectedOutput: {
    java: "bab"
  },
},

// ================= HARD =================

"trapping-rain-water": {
  id: "trapping-rain-water",
  title: "Trapping Rain Water",
  difficulty: "Hard",
  category: "Two Pointers",
  description: {
    text: "Compute total trapped rain water.",
    notes: [
      "Use two pointers or stack."
    ],
  },
  examples: [
    {
      input: "[0,1,0,2,1,0,1,3,2,1,2,1]",
      output: "6",
      explanation: "6 units trapped."
    }
  ],
  constraints: [
    "1 ≤ height.length ≤ 2×10⁴"
  ],
  starterCode: {
    java: `class Solution {
    public static int trap(int[] height) {
        // Write your solution here
        return 0;
    }
}`
  },
  expectedOutput: {
    java: "6"
  },
},

"largest-rectangle": {
  id: "largest-rectangle",
  title: "Largest Rectangle in Histogram",
  difficulty: "Hard",
  category: "Stack",
  description: {
    text: "Find the largest rectangle area.",
    notes: [
      "Use monotonic stack."
    ],
  },
  examples: [
    {
      input: "[2,1,5,6,2,3]",
      output: "10",
      explanation: "Rectangle using bars 5 and 6."
    }
  ],
  constraints: [
    "1 ≤ heights.length ≤ 10⁵"
  ],
  starterCode: {
    java: `class Solution {
    public static int largestRectangleArea(int[] heights) {
        // Write your solution here
        return 0;
    }
}`
  },
  expectedOutput: {
    java: "10"
  },
},

"edit-distance": {
  id: "edit-distance",
  title: "Edit Distance",
  difficulty: "Hard",
  category: "Dynamic Programming",
  description: {
    text: "Return minimum operations to convert one string to another.",
    notes: [
      "Insert, delete or replace."
    ],
  },
  examples: [
    {
      input: `"horse","ros"`,
      output: "3",
      explanation: "horse → ros in 3 steps."
    }
  ],
  constraints: [
    "1 ≤ word1.length, word2.length ≤ 500"
  ],
  starterCode: {
    java: `class Solution {
    public static int minDistance(String a, String b) {
        // Write your solution here
        return 0;
    }
}`
  },
  expectedOutput: {
    java: "3"
  },
},

"median-two-sorted": {
  id: "median-two-sorted",
  title: "Median of Two Sorted Arrays",
  difficulty: "Hard",
  category: "Binary Search",
  description: {
    text: "Find median of two sorted arrays.",
    notes: [
      "Must run in O(log(min(m,n)))."
    ],
  },
  examples: [
    {
      input: "[1,3],[2]",
      output: "2.0",
      explanation: "Median is 2."
    }
  ],
  constraints: [
    "0 ≤ m+n ≤ 2000"
  ],
  starterCode: {
    java: `class Solution {
    public static double findMedianSortedArrays(int[] a, int[] b) {
        // Write your solution here
        return 0.0;
    }
}`
  },
  expectedOutput: {
    java: "2.0"
  },
},

"merge-sorted-array": {
  id: "merge-sorted-array",
  title: "Merge Sorted Array",
  difficulty: "Easy",
  category: "Array • Two Pointers",
  description: {
    text: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n representing the number of elements in nums1 and nums2 respectively. Merge nums2 into nums1 as one sorted array.",
    notes: [
      "nums1 has a length of m + n, where the last n elements are set to 0.",
      "Modify nums1 in-place."
    ],
  },
  examples: [
    {
      input: "nums1 = [1,2,3,0,0,0], nums2 = [2,5,6], m = 3, n = 3",
      output: "[1,2,2,3,5,6]",
      explanation: "Merged sorted array."
    }
  ],
  constraints: [
    "0 ≤ m,n ≤ 200",
    "nums1.length == m + n"
  ],
  starterCode: {
    java: `import java.util.*;

class Solution {
    public static void merge(int[] nums1, int m, int[] nums2, int n) {
        // Write your solution here
    }

    public static void main(String[] args) {
        int[] nums1 = {1,2,3,0,0,0};
        merge(nums1,3,new int[]{2,5,6},3);
        System.out.println(Arrays.toString(nums1));
    }
}`
  },
  expectedOutput: {
    java: "[1,2,2,3,5,6]"
  },
},

"climbing-stairs": {
  id: "climbing-stairs",
  title: "Climbing Stairs",
  difficulty: "Easy",
  category: "Dynamic Programming",
  description: {
    text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb either 1 or 2 steps. Return how many distinct ways you can climb to the top.",
    notes: [
      "This is a classic Fibonacci-based DP problem."
    ],
  },
  examples: [
    {
      input: "n = 3",
      output: "3",
      explanation: "1+1+1, 1+2, 2+1."
    }
  ],
  constraints: [
    "1 ≤ n ≤ 45"
  ],
  starterCode: {
    java: `class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        return 0;
    }
}`
  },
  expectedOutput: {
    java: "3"
  },
},

"linked-list-cycle": {
  id: "linked-list-cycle",
  title: "Linked List Cycle",
  difficulty: "Easy",
  category: "Linked List",
  description: {
    text: "Given head of a linked list, determine if the linked list has a cycle.",
    notes: [
      "Use fast and slow pointers."
    ],
  },
  examples: [
    {
      input: "head = [3,2,0,-4], pos = 1",
      output: "true",
      explanation: "Tail connects to node index 1."
    }
  ],
  constraints: [
    "0 ≤ nodes ≤ 10⁴"
  ],
  starterCode: {
    java: `class Solution {
    public static boolean hasCycle(ListNode head) {
        // Write your solution here
        return false;
    }
}`
  },
  expectedOutput: {
    java: "true"
  },
},

"fibonacci": {
  id: "fibonacci",
  title: "Fibonacci Number",
  difficulty: "Easy",
  category: "Recursion • DP",
  description: {
    text: "Return the nth Fibonacci number.",
    notes: [
      "Use memoization or iteration."
    ],
  },
  examples: [
    {
      input: "n = 4",
      output: "3",
      explanation: "Fib sequence: 0,1,1,2,3"
    }
  ],
  constraints: [
    "0 ≤ n ≤ 30"
  ],
  starterCode: {
    java: `class Solution {
    public static int fib(int n) {
        // Write your solution here
        return 0;
    }
}`
  },
  expectedOutput: {
    java: "3"
  },
},

"reverse-linked-list": {
  id: "reverse-linked-list",
  title: "Reverse Linked List",
  difficulty: "Easy",
  category: "Linked List",
  description: {
    text: "Reverse a singly linked list.",
    notes: [
      "Iterative or recursive approaches allowed."
    ],
  },
  examples: [
    {
      input: "[1,2,3,4,5]",
      output: "[5,4,3,2,1]",
      explanation: "List reversed."
    }
  ],
  constraints: [
    "0 ≤ nodes ≤ 5000"
  ],
  starterCode: {
    java: `class Solution {
    public static ListNode reverseList(ListNode head) {
        // Write your solution here
        return null;
    }
}`
  },
  expectedOutput: {
    java: "[5,4,3,2,1]"
  },
},

"min-stack": {
  id: "min-stack",
  title: "Min Stack",
  difficulty: "Medium",
  category: "Stack",
  description: {
    text: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
    notes: [
      "All operations must run in O(1) time."
    ],
  },
  examples: [
    {
      input: "push(-2), push(0), push(-3), getMin(), pop(), top(), getMin()",
      output: "-3,0,-2",
      explanation: "Minimum updates dynamically."
    }
  ],
  constraints: [
    "Operations ≤ 3×10⁴"
  ],
  starterCode: {
    java: `class MinStack {

    public MinStack() {}

    public void push(int val) {}

    public void pop() {}

    public int top() {
        return 0;
    }

    public int getMin() {
        return 0;
    }
}`
  },
  expectedOutput: {
    java: "-3\n0\n-2"
  },
},

"valid-parentheses": {
  id: "valid-parentheses",
  title: "Valid Parentheses",
  difficulty: "Easy",
  category: "Stack",
  description: {
    text: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    notes: [
      "Every opening bracket must be closed in the correct order."
    ],
  },
  examples: [
    {
      input: "()[]{}",
      output: "true",
      explanation: "All brackets match."
    },
    {
      input: "(]",
      output: "false",
      explanation: "Mismatched brackets."
    }
  ],
  constraints: [
    "1 ≤ s.length ≤ 10⁴"
  ],
  starterCode: {
    java: `class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        return false;
    }
}`
  },
  expectedOutput: {
    java: "true\nfalse"
  },
},

"majority-element": {
  id: "majority-element",
  title: "Majority Element",
  difficulty: "Easy",
  category: "Array",
  description: {
    text: "Return the element that appears more than ⌊n/2⌋ times.",
    notes: [
      "Majority element always exists."
    ],
  },
  examples: [
    {
      input: "[3,2,3]",
      output: "3",
      explanation: "3 appears twice."
    }
  ],
  constraints: [
    "n ≤ 5×10⁴"
  ],
  starterCode: {
    java: `class Solution {
    public static int majorityElement(int[] nums) {
        // Write your solution here
        return 0;
    }
}`
  },
  expectedOutput: {
    java: "3"
  },
},

"single-number": {
  id: "single-number",
  title: "Single Number",
  difficulty: "Easy",
  category: "Bit Manipulation",
  description: {
    text: "Every element appears twice except for one. Find that single one.",
    notes: [
      "Use XOR."
    ],
  },
  examples: [
    {
      input: "[4,1,2,1,2]",
      output: "4",
      explanation: "4 appears once."
    }
  ],
  constraints: [
    "1 ≤ nums.length ≤ 3×10⁴"
  ],
  starterCode: {
    java: `class Solution {
    public static int singleNumber(int[] nums) {
        // Write your solution here
        return 0;
    }
}`
  },
  expectedOutput: {
    java: "4"
  },
},

"intersection-arrays": {
  id: "intersection-arrays",
  title: "Intersection of Two Arrays",
  difficulty: "Easy",
  category: "Hash Set",
  description: {
    text: "Return intersection of two arrays.",
    notes: [
      "Each element in result must be unique."
    ],
  },
  examples: [
    {
      input: "[1,2,2,1], [2,2]",
      output: "[2]",
      explanation: "Only common element is 2."
    }
  ],
  constraints: [
    "0 ≤ nums.length ≤ 1000"
  ],
  starterCode: {
    java: `class Solution {
    public static int[] intersection(int[] a, int[] b) {
        // Write your solution here
        return new int[0];
    }
}`
  },
  expectedOutput: {
    java: "[2]"
  },
},

"sqrtx": {
  id: "sqrtx",
  title: "Sqrt(x)",
  difficulty: "Easy",
  category: "Binary Search",
  description: {
    text: "Compute and return the square root of x, rounded down.",
    notes: [
      "Do not use built-in sqrt."
    ],
  },
  examples: [
    {
      input: "8",
      output: "2",
      explanation: "sqrt(8) ≈ 2.82 → 2"
    }
  ],
  constraints: [
    "0 ≤ x ≤ 2³¹-1"
  ],
  starterCode: {
    java: `class Solution {
    public static int mySqrt(int x) {
        // Write your solution here
        return 0;
    }
}`
  },
  expectedOutput: {
    java: "2"
  },
},

"decode-string": {
  id: "decode-string",
  title: "Decode String",
  difficulty: "Medium",
  category: "Stack",
  description: {
    text: "Decode encoded string such as 3[a2[c]].",
    notes: [
      "Nested encodings supported."
    ],
  },
  examples: [
    {
      input: `"3[a2[c]]"`,
      output: "accaccacc",
      explanation: "Decoded recursively."
    }
  ],
  constraints: [
    "1 ≤ s.length ≤ 30"
  ],
  starterCode: {
    java: `class Solution {
    public static String decodeString(String s) {
        // Write your solution here
        return "";
    }
}`
  },
  expectedOutput: {
    java: "accaccacc"
  },
},

"search-rotated": {
  id: "search-rotated",
  title: "Search in Rotated Sorted Array",
  difficulty: "Medium",
  category: "Binary Search",
  description: {
    text: "Search target in rotated sorted array.",
    notes: [
      "Must be O(log n)."
    ],
  },
  examples: [
    {
      input: "[4,5,6,7,0,1,2], target=0",
      output: "4",
      explanation: "0 found at index 4."
    }
  ],
  constraints: [
    "1 ≤ nums.length ≤ 5000"
  ],
  starterCode: {
    java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }
}`
  },
  expectedOutput: {
    java: "4"
  },
},

"merge-k-lists": {
  id: "merge-k-lists",
  title: "Merge K Sorted Lists",
  difficulty: "Hard",
  category: "Heap • Linked List",
  description: {
    text: "Merge k sorted linked lists into one sorted list.",
    notes: [
      "Use priority queue."
    ],
  },
  examples: [
    {
      input: "[[1,4,5],[1,3,4],[2,6]]",
      output: "[1,1,2,3,4,4,5,6]",
      explanation: "Merged sorted."
    }
  ],
  constraints: [
    "0 ≤ k ≤ 10⁴"
  ],
  starterCode: {
    java: `class Solution {
    public static ListNode mergeKLists(ListNode[] lists) {
        // Write your solution here
        return null;
    }
}`
  },
  expectedOutput: {
    java: "[1,1,2,3,4,4,5,6]"
  },
},

};



export const LANGUAGE_CONFIG = {
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};