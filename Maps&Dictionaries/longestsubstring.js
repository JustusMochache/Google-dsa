// 6. Longest Substring Without Repeating Characters
// Problem: Find the length of the longest substring without repeating characters.
// Input: "abcabcbb"
// Output: 3 (Substring is "abc")

function lengthOfLongestSubstring(s) {
    const set = new Set(); // Set to track unique characters in the substring
    let left = 0, maxLen = 0; // Initialize pointers and max length
    for (let right = 0; right < s.length; right++) { // Iterate through the string
        while (set.has(s[right])) { // If character is repeated, remove from the set
            set.delete(s[left++]); // Move the left pointer to shrink the window
        }
        set.add(s[right]); // Add the current character to the set
        maxLen = Math.max(maxLen, right - left + 1); // Update the max length
    }
    return maxLen; // Return the maximum length of substring found
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3