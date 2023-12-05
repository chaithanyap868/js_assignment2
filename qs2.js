// find the square of each number in an array=[1,3,9,12,15,18,21] using loop 
var readlineSync = require('readline-sync');
let arr1=[1,3,9,12,15,18,21]
console.log(arr1.length)
for (let i=0;i<arr1.length;i++)
{
    console.log("the square of",arr1[i],"is",arr1[i]**2)
}