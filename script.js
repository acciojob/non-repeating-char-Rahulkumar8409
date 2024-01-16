function firstNonRepeatedChar(str) {
 // Write your code here
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (s.indexOf(char) === s.lastIndexOf(char)) {
        return char;
    }
}
return null;
}
const input = prompt("Enter a string");
console.log( alert(firstNonRepeatedChar(input)));
