function firstNonRepeatedChar(str) {
 // Write your code here
 const charFrequency = {};

    // Iterate through the string and update the frequency
    for (let char of s) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }

    // Iterate through the string again to find the first non-repeated character
    for (let char of s) {
        if (charFrequency[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
}

const input = prompt("Enter a string");
console.log( alert(firstNonRepeatedChar(input)));
