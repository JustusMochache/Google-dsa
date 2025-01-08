
// Frequency Counter
// Problem: Given an array of integers, count the frequency of each integer using a HashMap.
// Input: [1, 2, 2, 3, 3, 3]
// Output: {1: 1, 2: 2, 3: 3}

function frequencyCounter(arr) {
    const freqMap = new Map(); // Create a Map to store frequencies
    for (const num of arr) { // Iterate through each number in the array
        // Update the frequency count for the current number
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    // Convert the Map to a regular object and return
    return Object.fromEntries(freqMap);
}

console.log(frequencyCounter([1, 2, 2, 3, 3, 3])); // {1: 1, 2: 2, 3: 3}
