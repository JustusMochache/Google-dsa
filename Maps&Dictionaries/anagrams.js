// Check for Anagrams
// Problem: Check if two strings are anagrams (contain the same characters in the same frequency).
// Input: "listen", "silent"
// Output: true
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false; // If lengths differ, they can't be anagrams
    const countMap = new Map(); // Map to store character frequencies
    for (const char of str1) { // Count characters in the first string
        countMap.set(char, (countMap.get(char) || 0) + 1);
    }
    for (const char of str2) { // Check if the second string matches the character frequencies
        if (!countMap.has(char) || countMap.get(char) === 0) return false;
        countMap.set(char, countMap.get(char) - 1); // Decrement count for matched character
    }
    return true; // All character counts matched, it's an anagram
}

console.log(areAnagrams("listen", "silent")); // true