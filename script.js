function firstNonRepeatedChar(str) {
   if (!str) return null;

	    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }

    return null;
}

const input = prompt("Enter a string");
console.log( alert(firstNonRepeatedChar(input)));
