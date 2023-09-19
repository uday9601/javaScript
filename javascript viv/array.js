//array:-array is a huge block of memory which state both homogeneous and hetrageneous DataType or values
//!ways to create an array?
//1st method 
// let array=[1,2,3,4]
// console.log(array);

// let array1=['hi','javascript']
// console.log(array1);

// let array2=[100,'hi',BigInt,null]
// console.log(array2);

//2nd method:-arrayconstructor= we cant pass single number
// let array=new Array(1)
// console.log(array);

//let array2=new Array("hi")
//console.log(array2);

//3rd method array.of()
//let array=Array.of(2,'hi','javascript')
//console.log(array);

//4th way object.assign()
// let array=Object.assign([],{name:"react"})
// console.log(array);

//~array methods...array helper methods
//1-push method is used to add an element to last index of an Array

//let array=[1,2,3,4,5,6,7,8]
//console.log(array);
//array.push(100)
//console.log(array);

//2-unshift method=it add element to the first index position of an array
//let array=[1,2,3,4,5,6,7,8]
//array.unshift(100)
//console.log(array);

//3rd-pop method=it is used to delete the last elemnt from an array
//let array=[1,2,3,4,5,6,7,8]
//array.pop()
//console.log(array);

//4th-shift method=it is used to remove the element from first index position
//let array=[1,2,3,4,5,6,7,8]
//array.shift()
//console.log(array);

//5th -slice method=it is used to extract the specific part of an array
//let array=[1,2,3,4,5,6,7,8]
 //let array1=array.slice(1,5)
//console.log(array1);

//6th -splice method=it is used to remove and add new elements to given index position
// let array=[1,2,3,4,5,6,7,8]
// array.splice(1,1,1000)
// console.log(array);

//indexof:-it will return index of given charecters
//it will retuns -1 if value is not found
//let array=[10,20,30,40,50,30]
//let array1=array.indexOf(300)
//console.log(array1);

//lastindexof:-it will return the last index position value .
//console.log(array.lastIndexOf(30));

//fill:-it is used to fill the values.syntax:-value,start index.endindex(excluded).
//console.log(array.fill(100,1,5));

//flat:-it is  used to convert multi dimesional array into single array.
//let array=[1,2,[[[[[[[4]]]]]]],5]
//console.log(array);
//console.log(array.flat(Infinity));

//reversse:- it is used to reverse the array
//let array=[1,2,3,4,5,6,7]
//console.log(array.reverse());

//at:-it is used to get the value of index position.
//let array=[1,2,3,4,5,6,7]
//let res=array.at(2)
//console.log(res);

//join:
// let array=[1,2,3,4,5]
// console.log(array.join('+'));


//!array higher order methods:-we will pass functions
//find method:-it return the first value of  element 
//let array=[1,2,3,4,5,6,7]
//console.log(array.find(m=>m>2));

//filter method:-it returns all the remaining values,in the form of array
// console.log(array.filter(m=>m>4));

//map method:=creates a array from calling a function for every array element,it is used to perform specific task.it is used to iterate the aray values
// let res=array.map((m)=>{
//     console.log(m+10);
//     })

// let res1=array.map((m,i)=>{
//     console.log(m,i);
// })    

//for each method:-it will display one by one,it is used to iterate the aray values
// array.forEach((i,v)=>{
//     console.log(i,v);
// })

//entries method:-
//entries method returns a new array iterator object that contains key/value pairs for each index in array.
// let res=array.entries()
// for(let i of res){
//     console.log(i);
// }

//for of loop:-it is also used to iterate the array values
// for(let i of array){
//     console.log(i);
// }

//reduce:-
//this method executes a reduce function array element
// let array=[1,2,3,4,5,6,7]
// let res=array.reduce((acc,val)=>{
//  return acc-val;
// })
// console.log(res);

//sort:-
// let array=[5,7,3,6,]
// let res=array.sort((a,b)=>b-a)
//     console.log(res);

//some:-only one value should get satisfy then it will return true
// let array=[1,2,3,4,5,6]
// let res=array.some((a)=>{
//     return a<2
    
// })
// console.log(res);

//every:-all values shoud get satisfy then only it will return true 
// let array=[1,2,3,4,5,6]
// let res=array.some((a)=>{
//     return a<2
    
// })
// console.log(res);

