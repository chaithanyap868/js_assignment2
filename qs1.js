// 1. write a js program to console the multiplication table of a number
var readlineSync = require('readline-sync');
let a= parseInt(readlineSync.question('enter the number '));
let b=parseInt(readlineSync.question('enter the range'))
console.log("Multiplication table of ",a)
for(let i=1; i<=b; i++){
    
    console.log(a," * ",i," = ",a*i)

}