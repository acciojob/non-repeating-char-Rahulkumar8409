function firstNonRepeatedChar(str) {
   if (!s) return null;

    for (let char of s) {
        if (s.indexOf(char) === s.lastIndexOf(char)) {
            return char;
        }
    }

    return null;
}

const input = prompt("Enter a string");
console.log( alert(firstNonRepeatedChar(input)));
