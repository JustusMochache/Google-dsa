// 4. Two Sum
// Problem: Find two numbers in an array that add up to a given target using a HashMap.
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1] (Indices of numbers 2 and 7)

function twoSum(nums, target) {
    const map = new Map(); // Map to store numbers and their indices
    for (let i = 0; i < nums.length; i++) { // Iterate through the array
        const complement = target - nums[i]; // Calculate the complement for the current number
        if (map.has(complement)) { // If complement exists in the map, we found the pair
            return [map.get(complement), i]; // Return indices of the pair
        }
        map.set(nums[i], i); // Store the current number and its index in the map
    }
    return []; // Return empty array if no pair is found
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]