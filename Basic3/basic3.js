// Basic ex 3
// Create an array of names, this array should only accept strings.
// 1. Print only the index of the elements.
// 2. Print only the values. 
// 3. Print both index and values.
// another type of declaration:
// var myArray : string[] = [...]
var myArray = ["Andrea", "Julia", "another Name"];
for (var index in myArray) {
    document.getElementById("output").innerHTML += myArray[index] + "<br>"; // for-in prints actual values
    // returns the actual names like "Andrea" etc.
    console.log(index); // for-in prints actual indexes
    // returns the index - 0, 1, 2
}
// array[Number(index)] 
