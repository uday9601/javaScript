
//string:-
//strings are the group of charecters written in single quotes' ' or double quotes " "

//1st way
// let a='hii'
// console.log(a);

// let b="hiii"
// console.log(b);

// let c=`hii`
// console.log(c);

// 2nd way
// let d=String('hii')
// console.log(d);

// 3rd way
// let e=new String('hii')
// console.log(e);

//string methods:-
//1.length property:-the length property returns the length of string.
//let a='asdfghjkl'
//console.log(a.length);

//ways to extract the string parts:-
//1.slice(start,end)
//2.substring(start,end)
//3.substr(start,length)

//1.slice:-it extracts part of a string and returns extracted part in a new string.
//method takes 2 parameters:start position and end position.
//let str='qwertyuiop'
//console.log(str.slice(0,4));

//2.substring():-substring() is similar to slice()
//let str='qwertyuiop'
//console.log(str.substring(0,4));

//3.substr:-substr() i similaar to slice()
//the difference is second parameter specifies length of extracted part. 
//let a='qwertyui'
//console.log(a.substr(4,6));

//4.replace:-the replace method replaces a specified value with another value in  a string..
//replace method replaces only first match.
//let str='apple,pineapple,banana,apple'
//console.log(str.replace('apple','mango'));

//to replace insensitive ,se a regular expression with an /i flag.
//let str1='Apple ,mango'
//console.log(str1.replace(/apple/i,'Banana'));

//to replace all matches ,use a regular expression with /g flag.
//let str2=('apple,banana,mango,apple')
//console.log(str2.replace(/apple/g,'carrot'));

//5.replaceall meethod:-this method allows you to specify a regular expression instead of string replaced.
//let str=('apple,banana,apple')
//console.log(str.replaceAll('apple','carrot'));

//6.tolowercase:-
//let str='JAVASCRIPT'
//console.log(str.toLowerCase());

//7.touppercase
//let str1='uday'
//console.log(str.toUpperCase());

//8.concat:-join two are more strings.
//this method can be used instead of plus operator.
//et str='hello'
//let str1='world'
//console.log(str+str1);
//console.log(str.concat(str1));

//9.trim:=trim method removes whitespace from both sides of string.
//let str='   hello world       '
//console.log(str);
// console.log(str.length);
// let a=str.trim();
// console.log(a);
// console.log(a.length);

//10.trim start:-this method removes white space only from the starting itself.
// let str='       hello world       '
// console.log(str);
// console.log(str.length);
// let a=str.trimStart();
// console.log(a);
// console.log(a.length);

//11.trim end:-this method removes white space only from the ending itself
// let str='hello world          '
// console.log(str);
//  console.log(str.length);
//  let a=str.trimEnd();
//  console.log(a);
//  console.log(a.length);

//12.padstart():-this methods pads a string from the start.
//let str='6'
//console.log(str.padStart(5,0));

//13.padend():-this method pads a string from the end.
//let str1='3'
//console.log(str.padEnd(5,9));

//14.extracting string charecters:-
//charat()
//charcodeat()
//property access[]

//15.charat() method returns charecter at specified index position.
//let str='apple'
//console.log(str.charAt(4));

//16.charcodeat():-this method returns asky values.
//let str='apple'
//console.log(str.charCodeAt(1));






// let obj={
//     name:'salar',
//     id:100
// }
// console.log(obj);
// let obj1=JSON.stringify(obj)  //it will convert into stringify.
// console.log(obj1);
// let obj2=JSON.parse(obj1)    //it will convert into normal object
// console.log(obj2)









