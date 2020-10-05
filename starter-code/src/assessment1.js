// // // Write a function that returns the product of 2 numbers
let x = 6;
let y = 5;

function product(x, y) {
  product= x * y;
  return product
}

 // Write a function that returns whether a given number is even

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
  
}

 // Return the largest of 2 numbers
let a = 10;
let b = 5;

function maxOfTwoNumbers(a, b) {
  return Math.max(a, b)
}

// Return the largest of 3 numbers
// let a = 102;
// let b = 255;
// let c = 360;

// function maxOfThreeNumbers(a, b, c) {
//   if(a>b){
//     return a
//   }else if(b>c){
//     return b
//   }else{
//     return c
//   }
// }

// Calculate the sum of an array of numbers
// let numbers = [1, 5, 9, 6]

// function sumArray(numbers) {
//   for (let i = 0; i <= numbers.length; i++) {
//     numbers = numbers[i];
//     sumArray += numbers;
//   }
//   return sumArray;
// }


// Return the largest number of a non-empty array
let numbers = [1, 5, 9, 6]

function maxOfArray(numbers) {
  return Math.max.apply(null, numbers);
}

// Return the longest string in an array
strings = ["perro", "coche", "zapatilla"]

function longestString(strings) {
  var count = strings[0];
  for(let i=0; i<strings.length; i++) {
    if(strings[i].length > count.length){
      count = string[i];
    }
  }
  return count
}

// Return whether a word is in an array
let wordsArr = ["perro", "coche", "zapatilla"]
function doesWordExist(wordsArr, word) {
 var a = wordsArr.indexOf("perro")
 return true

}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
