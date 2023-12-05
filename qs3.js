// 3 .  write a js program to console the grade of a student using if else if
var readlineSync = require('readline-sync');
let name= readlineSync.question('enter the name ');

let mark= parseInt(readlineSync.question('enter the mark '));
if (mark>=90)
{
    console.log(name,"you got A grade");
}
else if(mark>=80 && mark<90)
{
    console.log(name,"you got a B grade")
}
else if(mark>=70 && mark<80)
{
    console.log(name,"you got a C grade")
}
else if(mark>=60 && mark<70)
{
    console.log(name,"you got a D grade")
}
else if(mark>=50 && mark<60)
{
    console.log(name,"you got a E grade")
}
else{
    console.log("you are failed")
}