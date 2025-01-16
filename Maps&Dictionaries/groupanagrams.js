
// 5. Group Anagrams
// Problem: Group a list of strings into anagrams using a HashMap.
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]


function groupAnagrams(strs) {
    const map = new Map(); // Map to group anagrams by their sorted key
    for (const str of strs) { // Iterate through each string in the input array
        const key = str.split("").sort().join(""); // Sort the string to create a key
        if (!map.has(key)) map.set(key, []); // If the key is new, initialize an empty array
        map.get(key).push(str); // Add the current string to the group
    }
    return Array.from(map.values()); // Convert the grouped values to an array
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]