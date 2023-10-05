// to filter out the odd numbers from the arrays given we can paste the given arrays into our file using the const attribute
// create a for loop from beginning to end with the index i, and a nested for loop that does the same with the index called j
// use the if condition with the array element given and the parameters of index i and j
// after that condition console.log the array with both indices and close the block

const onlyOdd1 = [
  [2, 4, 6, 8, 11, 20, 15, 22],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [70, 42, 55, 81, 21, 91, 34],
  [2, 4, 6, 8, 10, 11, 12],
];

for (let i = 0; i < onlyOdd1.length; i++) {
  for (let j = 0; j < onlyOdd1[i].length; j++) {
    if (onlyOdd1[i][j] % 2 == 1) {
      console.log(onlyOdd1[i][j]);
    }
  }
}

// create two const arrays with with the given strings, and vowels. Name them inputArr and vowels
// first we have to create a forward loop that goes through our inputArr from beginning to end
// create to let variables that can allow our const arrays to be altered into a new array. Name them vowelCount, and consonantCount with the value of 0
// these new mutable arrays caller vowelCount and consonantCount allow our array to change based on the included vowels all the other letters considered consonants
// create a nested loop that loops through these strings because string elements are considered an array for each leter in the string
// create if else statement with the object method includes on the element vowels and adds to the vowelCount element
// the else statement will not have any condition so if it the index is not a vowel it will add to the consonantCount element
// console.log the inputArray[i] the consonantCount and the vowelCount with the appropriate strings to define the values returned

const inputArr = ["hello", "ukelele", "awesome", "onomonopia", "textbook"];
const vowel = ["a", "e", "i", "o", "u"];

for (let i = 0; i < inputArr.length; i++) {
  let vowelCount = 0;
  let consonatCount = 0; // allows variables to reset every word
  for (let j = 0; j < inputArr[i].length; j++) {
    if (vowel.includes(inputArr[i][j])) {
      vowelCount++;
    } else {
      consonatCount++;
    }
  }
  console.log(
    inputArr[i],
    "has",
    consonatCount,
    "consonants and",
    vowelCount,
    "vowels"
  );
}

// copy and paste the given array into VsCode
// were gonna create a for loop that starts at the end of the array, ends at the start, and goes down the index instead of forward
// we need a nested loop inside of that loop that does the same thing as the i index, but call it j
// and nested inside that loops block lets run a console log that logs the index of i and the index of j
// this should give us the reverse order of our array from the last array to the first

const revArr = [
  [1, 2, 3],
  [1, 3, 5, 7, 9, 11],
  [20, 50, 30, 60, 200],
  [1, -1, 2, -3, 5, -8, 13],
];

for (let i = revArr.length - 1; i >= 0; i--) {
  for (let j = revArr[i].length - 1; j >= 0; j--) {
    console.log(revArr[i][j]);
  }
}

// create a javascript code that prints numbers 1 - 100 on a new line
// create a for loop that begins at the index 0 of an array i = 0
// set the end of the loop to the index less than or equal to 100 i <= 100
// once the loop reaches the index 99 or the count of 100 it will stop
// now i need an if condition that can filter multiples of 3 and 5 to print fizz or buzz
// to do this write two if statements that divide 3 and 5 to the index as it passes through the loop

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
  if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
  if (i % 3 === 0 || i % 5 === 0) {
    console.log("fizzbuzz");
  }
}
