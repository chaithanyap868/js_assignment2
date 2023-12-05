// Write a program to find the number of even numbers in an array
// a. 	The program should accept an array and display the number of even numbers contained in that array
// E.g.: Output: Enter the size of an array
// Input: 5
// Output: Enter the values of array
// Input: 11, 20, 34, 50, 33
// Output: Number of even numbers in the given array is 3
var readlineSync = require("readline-sync");
let number= parseInt(readlineSync.question('enter no of elements'));
let array=[];
for (let i = 0; i < number; i++) {
    array[i] = parseInt(readlineSync.question('enter ' +i+'th element'))   ;
}
count=0
for(i=0;i<=array.length;i++){
    if (array[i]%2==0){
        count=count+1
     }
}
console.log("count of even numbers in given array is",count)