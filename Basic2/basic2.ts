// Basic ex 2

// 1. Print your full name in the browser (you will have an object that has 2 properties fName and lName).
// 2. Print your first name 10 times in the browser using a forEach loop (don't forget that forEach loop work on arrays, so you can put the object in an array and repeat it). 
// 3. A function should be triggered 5 seconds after opening the page that prints your last name in the console 10 times.

var myArray: Array <{
  fName: string;
  lName: string;
  
}> = [
  {
    fName: "Julia",
    lName: "Demel",
  },
  {
    fName: "Andrea",
    lName: "Mikula",
   
  },
    ];
    
console.log(myArray);


let myArray2 = ["Andrea"];
// myArray2.forEach(function (value) {
//   for (let i = 0; i < 10; i++) {
//     document.write('<br>' + myArray2[0]);
//   }
// });

setTimeout(function () {
  for (let i = 0; i < 10; i++) {
    document.write('<br>' + myArray2[0]);
  }
}, 5000);



