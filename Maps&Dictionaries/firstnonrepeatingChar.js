// Find First Non-Repeating Character
// Problem: Find the first character in a string that does not repeat.
// Input: "swiss"
// Output: 'w'




function firstNonRepeatingChar(str) {
    const freqMap = new Map(); // Map to count character frequencies
    for (const char of str) { // Populate the Map with character counts
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }
    for (const char of str) { // Find the first character with a count of 1
        if (freqMap.get(char) === 1) return char;
    }
    return null; // Return null if no non-repeating character is found
}

console.log(firstNonRepeatingChar("swiss")); // w