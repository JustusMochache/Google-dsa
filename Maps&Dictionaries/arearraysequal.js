// Problem: Check if two arrays contain the same elements with the same frequency using a HashMap.
// Input: [1, 2, 2, 3], [2, 1, 3, 2]
// Output: true


function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false; // If lengths differ, arrays aren't equal
    const freqMap = new Map(); // Map to track frequency of elements
    for (const num of arr1) { // Count frequencies in the first array
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    for (const num of arr2) { // Check frequencies in the second array
        if (!freqMap.has(num) || freqMap.get(num) === 0) return false;
        freqMap.set(num, freqMap.get(num) - 1); // Decrement count for matched element
    }
    return true; // Arrays are equal if all counts matched
}

console.log(areArraysEqual([1, 2, 2, 3], [2, 1, 3, 2])); // true