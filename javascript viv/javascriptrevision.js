//!1.what is javascrirpt?
//javascript is a scripting language that enables you to create web pages dynamically updating content, control multimedia, animate images, and pretty much everything else. 
//it is single threaded,weakly type or loose type,synchronous,interpritend.

//*2.where the semicloumn is mandatory?
//

//& 3.what is the use of 'use strict'?
//if u dont use any variable to store the value,it stores in the global variable;after using 'use strict' it throws an error
// "use strict"
// a= 10;
// console.log(a);

//^4.difference between var,let,const?

//re declaration possible is var                      re intialization is possible
//var x=10                                                 var x=5
//var x=5                                                  x=1
//console.log(x);                                         console.log(x);


//re declaration not possible is let                    re intialization is possible
// let x=5                                               let x=8
// let x=3                                                x=5
// console.log(x);                                        console.log(x);

//re declaration is not poosible is const              re intialization is not possible
//const x=5                                              const x=6
//const x=3                                              const x=1
// console.log(x);                                       console.log(x)

//var is function scope we can access inside and outside of the block
//let and const is block scope we can accces inside of the block
// {
//     const x=3
//    //console.log(x);
// }
// console.log(x);

//!5:-errors in javascript?
//syntax error,reference error,type error,evaluation error,range error,uri error,internal error

//*6:-tokens in javascrpt?
//

//*7:-when you get boolean false?
//boolean value is 0,null,undefined,false
// ex:-
// let b=Boolean(undefined)
// console.log(b);

//& 8:-whatt is TDZ?
// temporial dead zone

//^9:_what is variable hoisting?
//moving the declararions to top of current scope using 'var' keyword is called as hoisting
// console.log(a);
// var a=1

// console.log(x); //reference error
// let x=2

// console.log(v);  //reference error
// const v=3

//!9:-what is function hoisting?
//moving the declararions to top of current scope
// ex:-
// demo()
// function demo(){
//     console.log("hi");
// }

//*10:-what is closures?
//going to access outer function variable inside inner function then closure will created
// function demo(){
//     let a=3
//     function demo1(){
//         console.log(a);
//     }demo1()
// }demo()

//&11:-what is immuatable and mutable?
//immutable:-values will not change.
// let a=1;
// console.log(a); //1
// let b=2;
// console.log(b); //2

//mutable:-values will change.
// let array=[10,20,30,40]
// array[0]=20
// console.log(array); //20,20,30

//^12:-
// function demo(){
//     let a=10;
//     function demo1(){
//         console.log(a);
//         let b=20;
//         function demo2(){
//             console.log(b);
//         }return demo2
//     }return demo1
// }demo()()()

//!13:-how can u prove window keyword and this keyword?
//  console.log(this);
//  console.log(window);
//  console.log(window==this);
//  var a=2
//  console.log(this.a);
//  console.log(window.a);

//*14:-what is array helper methods?
// push,pop,splice,slice,shift,unshift

//&15:-what are array higher order methods?
//we will pass functions, ex:map()

//^16:-array methods?

//array methods
//1-push methos is used to add an element to last index of an Array

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
//let array=[1,2,3,4,5,6,7,8]
//array.splice(1,1,1000)
//console.log(array);

//!17:-difference between slice and splice?
//slice will not affect your orginal array
//splice will affect your orginal array

//*18:-ways to create an array?
//1st way:-
//let array=[1,2,3,4,]
//console.log(array);

//2ndway
//let array=new Array("hi") //you cant pass single number
//console.log(array);

//3rd way
//let array=Array.of(1,2,3,4)
//console.log(array);

//4thway
//let array=Object.assign([],{name:"uday"})
//console.log(array);

//^19:-for each?
//it is not a loop,it is array higher order methods;it will display one by one
//let array=[1,2,3,4,5]
//array.forEach((index,val)=>{
//console.log(index);
//})

//!20:-for of?
//it will get values in array
//let array=[1,2,3,4,5]
//for(let i of array){
//  console.log(i);
//}

//*21:-for in loop?:-it will get index positions
//let array=[1,2,3,4,5]
//for(let i in array){
//  console.log(array);
//}

//^22:-difference between find and filter?
//find:-if we use find method it will give firsst value and not in the form of array
//let array=[1,2,3,4,5]
//let array1=array.find(m=>m>2)
//console.log(array1);
//filter:-if we use filter method it will give all  remainning values in the form of array
//let array=[1,2,3,4,5]
//let array1=array.filter(m=>m>2)
//console.log(array1);

//!23:-difference between some and every?
//some:-in some if only one array satisfies it will give true
//let  array=Array.of(1,2,3,4,5)
//let array1=array.some((m)=>m>2);
//console.log(array1);                    //output=true

//every:-in every all the array should get satisfy then it will give true
//let array=new Array(1,2,3,4,5)
//let array1=array.every((m)=>m>4)
//console.log(array1);                     //outpit=flase

//24:-what is object?
//objects is a collection of data in the form of keys and values

//*25:-how many ways to create an object?
//1st way
//let obj={
// name:'uday',
// id:100,
//  sal:'3.0l'
//}
//console.log(obj);

//2nd way
// function demo(name,id,sal){
//   this.name=name;
//   this.id=id
//   this.sal=sal
// }
// let obj=new demo('uday',100,'3.0l')
// console.log(obj);

//3rd way
// let obj1={}
// let obj=Object.create(obj1)
//   obj.name='uday'
//   obj.id=100
// console.log(obj);

//4th way
// let obj=new Object({name:'uday'})
// console.log(obj);

//5thway :-we can pass only single value
// let obj=Object.defineProperty({},'name',{value:'uday'})
// console.log(obj);

//6th way
// let obj=Object.defineProperties({},{
//   'name':{value:'uday'},
//    'id':{value:100}
// })
// console.log(obj);

//^26:-how to delete the object?
//let obj=new Object({name:'uday',id:100,sal:'3.0l'})
//console.log(obj);
//obj.name='ravi'
//console.log(obj);
//delete obj.id;
//console.log(obj);
//console.log(Object.keys(obj));
//console.log(Object.values(obj));
//console.log(Object.entries(obj));

//!27.how to convert objects to array?
// let obj={
//   name:'uday',
//   id:100,
//   sal:'3.0l'
// }
// let obj1=Object.assign([],obj)
// console.log(obj1);

//*28.how to convert array to object?
// let a=[['name','uday'],['id','100']]
// console.log(a);
// let object=Object.fromEntries(a)
// console.log(object);

//^29.what is freeze in object?
//by using freeze,we cant update,delete,add
// let obj={
//   name:'uday',
//   id:100,
//   sal:'3.0l'
// }
// console.log(Object.freeze(obj));
// obj.name='react'
// console.log(obj);
// delete obj.name
// console.log(obj);
// obj.state='andhra'
// console.log(obj);
// console.log(Object.isFrozen(obj));//frozen will return true or false;if object is in freeze will return true or false

//^30.what is seal in objects?
//by using seal,we can update object,we cant delete or add values to object
//by using is sealed,we can check obect is sealed or not
// let obj={
//   name:'uday',
//   id:100,
//   sal:'3.0l'
// }
// console.log(Object.seal(obj));
// obj.name='reacct'
// console.log(obj);
// delete obj.name
// console.log(obj);
// obj.state='andhra'
// console.log(obj);
// console.log(Object.isSealed(obj));




//!31.copy of an object

// let obj={
//     name:"uday",
//     id:'100',
//     salary:"3.0l"

// }
// console.log(obj);
// console.log(obj.name);
// console.log(obj['name']);

// //1st
// let b=obj;
// console.log(b);

// //2nd
// let c={...obj}
// console.log(c);

// //3rd
// let d=object.assign({},obj)
// console.log(d);

// //4th
// let e=new object(obj)
// console.log(e);

// //5th
// let {...f}=obj
// console.log(f);

// //6th
// let x={}
// for(let i in obj){
//     x[i]=obj[i]
// }
// console.log(x);

//*32.difference between cloning and object?

//*33.cloning:-
//parent object will not affect in cloning
// let obj={
//     name:"uday",
// }
// console.log(obj);

// let x=obj;
// console.log(x);
// x.name="abhishek"
// console.log(x);
// console.log(obj);
// console.log(obj==x);


//1st way
// let obj1=object.assign({},obj)
// console.log(obj1);
// obj1.name="abhi"
// console.log(obj1);
// console.log(obj);

//2nd way
// let {...obj1}=obj
// console.log(obj1);
// obj1.name="abhi"
// console.log(obj);
// console.log(obj1==obj);

// //3rd
// let obj1=new object(obj)
// console.log(obj1);
// obj1="abhi"
// console.log(obj1);
// console.log(obj);
// console.log(obj==obj1);

// //4th
// var x={}
// for(let keys in obj){
//     x[keys]=obj[keys]
// }
// console.log(x);
// x.name="abhi"
// console.log(x);
// console.log(obj);
// console.log(obj==x);


//&34.shallow copy=nested object will get affected
//a shallow copy of an object is a copy whose properties share the same references as those of source object from which the copy is made  
// let obj={
//     name:'uday',
//     id:'100',
//     salary:"3l",
//     adresss:{
//         city:'bangalore',
//         state:"karnataka"

//     }
// }
// console.log(obj);
// let {...obj1}=obj;
// console.log(obj1);
// obj1.adresss.city='andhra'
// console.log(obj1);


//^35.deep copy :-nested objecct will not affected
//a deep copy of an object is a copy whose properties will not share the same references 
// let obj={
//     name:'uday',
//     id:'100',
//     salary:"3l",
//     adresss:{
//         city:'bangalore',
//         state:"karnataka"

//     }
// }
//1st 

// let obj1=JSON.parse(JSON.stringify((obj)))
// console.log(obj1);
// obj1.adresss.city='andhra'
// console.log(obj1);
// console.log(obj);

// //2nd
// let obj1=structuredClone((obj))
// console.log(obj1);
// obj1.adresss.city="andhra"
// console.log(obj1);
// console.log(obj);

//!36.difference between shallow copy and deep copy?

//*37.what is inheritance?
//the ability of a class to derive properties and charecteristics from another class using extends keyword.

//&38.wt is prototype inheritance?
//the oject from where the properties are inherited is called the prototype inheritance
//prototype inheritence

// //1st way
// let obj={
//     name:'uday',
//     id:100,
//     company:'tcs'
// }
// let obj1={
//     adress:{
//         city:'bangalore',
//         state:'karnataka'
//     }
// }
// obj1.__proto__ =obj
// obj1.__proto__.__proto__={city:'andhra'}
// console.log(obj1);

//2nd way
// function demo(name,id ,salary){
//     this.name=name;
//     this.id=id;
//     this.salary=salary
// }
// let e1=new demo('react',100,'3.0l')
// console.log(e1);
// demo.prototype={state:'andhra'}
// console.log(e1);

//^39.without arguments or parameters how to call the function?
//function demo(){
// console.log("hi");
//console.log(arguments[0]);
// console.log(arguments[1]);
//}demo('reactjs',123)

//*40.rest operator and spread operator?

//using ... inside parameters is called rest operator
//using ...inside console.log is called spread operator

//^41.how to store remaining values in the  one array?
// let array=[10,20,30,40,50,60]
// console.log(array);
// let [a,b,...f]=array
// console.log(a);
// console.log(b);
// console.log(f);

// function demo(a,b,c,d){
// console.log(a);
// console.log(b);
// console.log(...c); //error:-we cant use spread operator with out using rest operator
// } demo(10,20,30,40)

//if we have values in the form of array...we can use spread operator
// function demo(a,b,c){
// console.log(a);
// console.log(b);
// console.log(...c);
// }demo(10,20,[30,40,50,60])


//&42. spread and rest operator in the objects?
// let obj={
//     name:'react',
//     id:100,
//     salary:'3.0l',
//     adress:{
//         city:'bangalore'
//     }
// }
// console.log(obj);
// let {name, ...id}=obj;
// console.log(name);
// console.log(id);//u cant use spread opertor to objects and u can use rest operator.

//**43.convert this into simple array?
// let array=[1,2,[[[[[[[[3]]]]]]],[[[[[4]]]]]]]
// console.log(array.flat(Infinity));


//&44.types of functions?
// it is a block of code to perform specific task
//types of fucntions:-
//1.ananymous function:-the function does not have any name associated with it
//ex.
// let demo=function (){
//   console.log('hello');
// }
// demo()

//first classs and first object function?
//passing function and storing into the variable is called first class and first object function
// ex:-let demo=function (){
//   console.log('hello');
// }
// demo()

//2.named function?:=using names to store the function is known as anamed function.
//ex.
// function demo(){
//   console.log(hi);
// }demo()

//3.higher order function (hof)?
//a function which takes another function as an argument is known as hof

//4.call back function?
//a function which is passed as a value to another function is called as call back function.

// ex:-
// function HOF(){
//   console.log('hi');  //higher order function
// }
// HOF(callback())

// function callback(){
//   console.log('hello');   //call back function
// }

//5.arrow function:-it is used to do a specific operation.()=>{}
//ex:
// function operation(a,b,cb){
//   return cb(a,b)
// }
// let result =operation (2,5,(a,b)=>a+b)
// console.log(result);

//6.generator function:-it is used to generate the values.the yield keyword is used within genrerator to pass and resume code
//ex:
// function* demo(){
//   console.log('im  a generator');
//   yield
//   console.log('hello');
// }
// let a=demo()
// a.next()
// a.next()

//7.immediately invoked function expression..(IIfe)?
//IIFE function that runs as soon as it deefined
//ex:
// (function (){
//   var a=10;
//   console.log(a);
// })()

// function demo(){
//   console.log(a);
// }demo()


//& 45.what is arity?
//to refer the numbers of arguments in a  function
//ex:
// function demo(a,b,c,d){
//   let x=demo.length
//   console.log(x);
//   if(x==1){
//     console.log('hi im unary');
//   }
//   else if(x==2){
//     console.log('hi im binary');
//   }
// else{
//   console.log('hi im ternary');
// }

// }demo()

//*46.ways to create string?
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

//**47asynchronous?

// console.log('first');
// console.log('second');
// console.log('third');
// setTimeout(()=>{
//   console.log('fourth');
// })
// console.log('five');


//how to convert synchronous to asynchronous programming language?
// console.log('first');
// console.log('second');
// console.log('third');
// let data=window.fetch()
// console.log(data)
// data.then((data)=>{
//   console.log(data);
// }).catch((error)=>{
//   alert(error)
// })
// console.log('fourth');
// setTimeout(()=>{
//   console.log('set timeout');
// })

//&48.what is callback hell?
//callback hell is essentially nested callbacks stacked below one another forming a pyramid structure.every callback depends/waits for the previous callback,therby making a pyramid steucture that affects the readability and maintainability of code.

// function addition(val, callback) {
//   return callback(val + 5, false)
// }
// function substraction(val, callback) {
//   return callback(val - 5, false)
// }
// function multiplication(val, callback) {
//   return callback(val * 5, false)
// }
// function division(val, callback) {
//   return callback(val / 5), false
// }
// addition(10, (Addres, error) => {
//   console.log(Addres);
//   if (!error) {
//     substraction(Addres, (subres, error) => {
//       console.log(subres);
//       if (!error) {
//         multiplication(subres,(mulres, error)=> {
//           console.log(mulres);
//           if(!error) {
//             division(mulres, (divres, error) => {
//               console.log(divres);
//             })
//           }
//         })
//       }
//     })
//   }
// })



//!49.promise?
//a promise is a proxy for a value not necessary known then the promise is created.it has 3 states a.pending b.fullfilled c.reject
//methods
//1.static methods
//a.promise.all
//b.promise.allsettled
//c.promise.race
//d.promise.any
//2.instence
//a.then
//b.catch
//c.finally.

//promise 
// pending-
// let p1= new Promise((resolve,reject)=>{

// })
//  console.log(p1);

// fullfilled-
// let p2= new Promise((resolve,reject)=>{
// resolve('im resolved')
// })
// console.log(p2);

// reject-
// let p3=new Promise((resolve,reject)=>{
// reject('im rejected')
// })
// console.log(p3);


//*ex1:-

// let x1=new Promise((resolve,reject)=>{
//   let isCompleted =confirm('work is completed or not')
//   if(isCompleted){
//   resolve('im resolve')
//   }else{
//     reject('im reject')
//   }
// })
// console.log(x1);
// x1.then((data)=>{
//   console.log(data);
// }).catch((error)=>{
//   console.log(error);
// })

//&ex-2:-
// let p=new Promise((resolve,reject)=>{
//   let task=confirm('have u cmplt ur task')
//   if(task){
//     resolve('gud boy')
//   }
//   else{
//     reject('bad boy')
//   }
// })
// p.then((data)=>{
//   console.log(data);
// })
// p.catch((error)=>{
//   console.log(error);
// })
// p.finally(()=>{
//   console.log('i will get executed');
// })

//in promise when u will get aggregate error?
//if all the promises where rejected,then we get aggregate error.


// let x1=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('im resolved')
//     reject('im rejected')
//   },1000)
// })
// console.log(x1);




//^static methods
//ex:-
// let p1=new Promise((resolve,reject)=>{
// resolve('im resolve 1')
// reject('im rejcted 1')
// })
// let p2=new Promise((resolve,reject)=>{ 
//   resolve('im resolve 2')
// reject('im reject 2')
// })
 
// let p3=new Promise((resolve,reject)=>{ 
//   resolve('im resolve 3')
// reject('im reject 3')
// })
 
// let p4=new Promise((resolve,reject)=>{ 
//   resolve('im resolve 4')
// reject('im reject 4')
// })
 
// let p5=new Promise((resolve,reject)=>{ 
//   resolve('im resolve 5')
// reject('im reject 5')
// })

// //all
// let res=Promise.all([p1,p2,p3,p4,p5])
// .then((data)=>{
//   console.log(data);
// }).catch((error)=>{
//   console.log(error);
// })

// allsettled
// let res=Promise.allSettled([p1,p2,p3,p4,p5]).then((data)=>{
//   console.log(data);
// }).catch((error)=>{
//   console.log(error);
// })

// any
// let res=Promise.any([p1,p2,p3,p4,p5]).then((data)=>{
//   console.log(data);
// }).catch((error)=>{
//   console.log(error);
// })


//!50.promise.race()?

//promise.race() static method takes an iterable promise and a returns a single promise.
// // ex:-
// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('resolve1')
//     },3000)
//     setTimeout(()=>{
//         reject('resolve 1')
//     },3000)

// })
// let p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('resolve 2')
//     },1000)
//     setTimeout(()=>{
//         reject('resolve 2')
//     },1000)
// })
// let res=Promise.race([p1,p2])
// .then((msg)=>{
//     console.log(msg);
// })


//promise example:-

// //team rcb
// var aa1=true;
// var aa2=true;
// var aa3=true;
// let p1=new Promise((resolve,reject)=>{
//     if(aa1&&aa2&&aa3){
//         resolve('RCB will play')
//     }
//     else{
//         reject('rcb will not play')
//     }
// })
// p1.then((data)=>{
//     console.log(data);
// })
//  p1.catch((error)=>{
//      console.log(error);
//  })

// //team csk
// var bb1=true;
// var bb2=true;
// var bb3=true;
// let p2=new Promise((resolve,reject)=>{
//     if(bb1&&bb2&&bb3){
//         resolve('csk will play')
//     }else{
//         reject('csk will not play')
//     }
// })
// p2.then((data)=>{
//     console.log(data);
// })
// p2.catch((error)=>{

// })

// //team MI
// var cc1=true;
// var cc2=true;
// var cc3=true;
// let p3=new Promise((resolve,reject)=>{
//     if(cc1&&cc2&&cc3){
//         resolve('MI Will play')
//     }else{
//         reject('MI will not play')
//     }  
// })
// p3.then((data)=>{
//     console.log(data);
// })
// p3.catch((error)=>{
//     console.log(error);
// })

// let result=new Promise((resolve,reject)=>{
//     if(aa1&&aa2&&aa3&&bb1&&bb2&&bb3&&cc1&&cc2&&cc3){
//         resolve('every team wll allowed to play')
//     }else{
//         reject('practice well')
//     }
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })



///assignment1:-
// // Team1
// var chandu = true;
// var tharun = true;
// var venky = true;
// let p1 = new Promise((resolve, reject) => {
//     if(chandu&&tharun&&venky) {
//         resolve("Team will going to picnic")
//     }else{
//         reject("Team will not going to picnic")
//     }
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// // Team2
// var chandu1 = true;
// var tharun1 = true;
// var venky1 = true;
// let p2 = new Promise((resolve, reject) => {
//     if(chandu1&&tharun1&&venky1) {
//         resolve("Team will going to picnic")
//     }else{
//         reject("Team will not going to picnic")
//     }
// })

// // Team3
// var chandu2 = true;
// var tharun2 = true;
// var venky2 = true;
// let p3 = new Promise((resolve, reject) => {
//     if(chandu2&&tharun2&&venky2) {
//         resolve("Team will going to picnic")
//     }else{
//         reject("Team will not going to picnic")
//     }
// })

// let result = new Promise((resolve, reject)=>{
//     if(chandu&&tharun&&venky&&chandu1&&tharun1&&venky1&&chandu2&&tharun2&&venky2) {
//         resolve("Team will going to picnic")
//     }else{
//         reject("Team will not going to picnic")
//     }
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

//assignment2:-
// //team1
// let uday=true;
// let rama=true;
// let p1=new Promise((resolve,reject)=>{
//     if(uday&&rama){
//         resolve( ' team1 will play')
//     }else{
//         reject('team1 will not play')
//     }
// })
// p1.then((data)=>{
//     console.log(data);
// })
// p1.catch((error)=>{
//     console.log(error);
// })
// //team2
// let uday1=false;
// let rama1=true;
// let p2=new Promise((resolve,reject)=>{
//     if(uday1&&rama1){
//         resolve('team2 will play')
//     }else{
//         reject('team2 will not play')
//     }
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// let result=new Promise((resolve,reject)=>{
//     if(uday&&rama&&uday1&&rama1){
//         resolve('all will play')
//     }else{
//         reject('all will  not play')
//     }
// }).then((error)=>{
//     console.log(error);
// }).catch((error)=>{
//     console.log(error);
// })
    


//^51.what is promise chaining?
//promise chaining is basically several asynchronous function calls and executing them in a synchronised manner one after using .then() method.
//ex:-
// let p=new Promise((resolve,reject)=>{
//     resolve(10)
// })
// p.then((msg)=>{
// console.log(msg);
// return msg+10
// }).then((msg)=>{
//     console.log(msg);
//     return msg*10
// }).then((msg)=>{
//     console.log(msg);
//     return msg-10
// }).then((msg)=>{
//     console.log(msg);
//     return msg/10
// }).then((msg)=>{
//     console.log(msg);
//     return msg%10
// }).then((msg)=>{
//     console.log(msg);
//     return msg+10-10
// })


//^52.
//;console.log('hi') output?  //hi

//&53:-
//undefined =10;
//console.log(undefined); output? //undefined

//*54.local storage and session storage?
//localstorage:-it will store permanently until we delete it.
// let name='react'
// localStorage.setItem('subject',name)
// let data=localStorage.getItem('subject')
// console.log(data);
//  localStorage.removeItem('subject')

//session storage:-
//let name='react'
//sessionStorage.setItem('subject',name)
//let data=sessionStorage.getItem('subject')
//console.log(data);
//let data=sessionStorage.removeItem('subject')

//&55.API?
//API stands for Appilication programming interface,which is a set of definitions and protocals for building and integrating appication software.

//ways to create an API

// 1st  method
// let data = window.fetch("https://api.github.com/users")
// console.log(data);
// data.then((msg)=>{
//     console.log(msg);
//     let finaldata = msg.json()
//     console.log(finaldata);
//     finaldata.then((msg)=>{
//         console.log(msg);
//         msg.map(m=>{
//             let div = document.getElementById("div")
//             console.log(div);
//             div.innerHTML += `
//             <ul>
//                 <li>
//                     ${m.login}
//                 </li>
//             </ul>
//             <img src="${m.avatar_url}">
//             `
//         })
//     })
// })

// // 2nd method
// async function demo(){
//    let data=await fetch("https://api.github.com/users")
//     console.log(data);
//  let finaldata=await data.json();
//     console.log(finaldata);
//     finaldata.map((m)=>{
//         console.log(m.login);
//     })
// }demo()

// //3rd method:-
// function test() {
//     xhr = new XMLHttpRequest();
//     console.log(xhr);
//     xhr.open("GET", "https://api.github.com/users")
//     xhr.onload = function(){
//         console.log(xhr);
//         let data = JSON.parse(xhr.response)
//         console.log(data);
//         data.map((m)=>{
//             console.log(m.id);
//             console.log(m.node_id);
//         })
//     }
//     xhr.send()
// }
// test()

//4th method..
// function fetchdata(){
//   fetch("https://jsonplaceholder.typicode.com/users")

//     .then((res)=>{
//         res.json()
//     })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
// console.log(err)
// })
// }
// fetchdata()


//56.covert normal object into stringify object?
// let obj={
//      name:'uday',
//      id:'100'
//  }
//  console.log(obj);
// let obj1=JSON.stringify(obj)
//  console.log(obj1);

// let obj2=JSON.parse(obj1) 
// console.log(obj2);         //57.convert stringify into normal object?









//problems..
// function person(firstname,lastname){
// this.firstname=firstname;
// this.lastname=lastname;
// }
// const lydia=new person('lydia','hallie')
// const sarah=person('sarah','smith')
// console.log(lydia);
// console.log(sarah);

// function sum(a,b){
//     return a+b;
// }
// sum(1,'2')


// function getAge(...args){
//     console.log(typeofargs);
// }getAge(21)

// const obj={a:'one',b:'two',a:'three'}
// console.log(obj);

// for(let i=1;i<5;i++){
//     if(i===3)continue;
//     console.log(i);
// }


// function* generator(i){
// yield i;
// yield i*2;
// }
// const gen=generator(10)
// console.log(gen.next().value);
// console.log(gen.next().value);

// const numbers=[1,2,3,4,5]
// const [y]=numbers;
// console.log(y);

//!56.questions

// console.log(typeof 2-5)   //nan
// console.log(typeof 2.5)   //number
// console.log(typeof"")     //string
// console.log(typeof 2/5)     //nan
// console.log(typeof 2/10)    //nan
// console.log(typeof a)       //undefined
// console.log(typeof $)        //undefined
// console.log(typeof typeof 1) //string
// console.log(typeof null)     //  object
// console.log(typeof this)     //object
// console.log(typeof window)   //undefined
// console.log(typeof Array())  //object
// console.log(typeof Array)     //function
// console.log(typeof Object())   //object
// console.log(typeof Object)    //function
// console.log(typeof 1+(2/5))   //number0.4