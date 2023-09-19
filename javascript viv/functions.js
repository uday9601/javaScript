//functions:-
//it is a block of code used to perform a specific task.
//javascript function executed when 'something'involves it (calls it).

//syntax:-
//it is defined with function keyword,followed by a name,followed by parenthesis()
//function names contain letters ,digits,underscores,dollar signs.
//the parenthesis may include parameter names seperated by commas(parameter1,parameter2)
//the code to be executed,by the function is placed insidencurly brackets{}

//function name(parameter1,parameter2){
    //code to be executed
//}

//function return:-
//when js reaches a return statment,the function will stop executing.
//if the fuction was invoked fromm a statment,js will return to execute the code after imvoking statment.

//why functions:-
//with the functions we can redduce code.
//you can write code that can be used many times.
//u can use the same code with differnt argumnents,to produce diiferert results.

//the()operator:-
//the ()operator invokesn(calls) function.

//types:-
// 1.ananymous function
// 2.function with expession
// 3.named function
// 4.nested function
// 5.callbackfunction
// 6.hof(higher order function)
// 7.arrow function
// 8.iife(immediatly invoked function expression)
// 9.generator function.
// 10.first class or first citizen function.
//11.recusion function.
//12.currying function.

//1.ananymous function:-
//syntax:- function(){

//}

//2.function with expresssion:-
// let x=function(){
//     console.log('hi');
// }
// x()

//3.named function:-
// function demo(){
//     console.log('hi');
// }demo()

//implict return:-
// function demo(){
//     return;              //output-undefined
// }demo()

//     (or)

// function demo(){
//                         //output-undefined
// }console.log(demo());

//expilct return:-
// function demo(){
//     return "hello";
// }                       output:=hello
// console.log(demo())

//this keyword:-
// "use strict"
// function demo(){
//     console.log(this);         //output=undeifined
//     console.log(window);      //output=window
// }demo()

//note:-
//with & without usong "use strict" if u are trying to print "window" keyword inside function it will always point to window object.
//if u r using "use strict" & you you are trying to print 'this' keyword inside function.it will always point to current object.//undefined.
//if u dont use "use strict" and u r trying to print "this" keyword inside function.it will return window object.//window.

//this keyword:-it will always to pint to window object.
// 'use strict'
// var a=100;
// function demo(){
//     console.log(this.a);     //error='a' is not definede
// }demo()


// var a=100;
// function demo(){
//     console.log(this.a);
// }                              //output=100
// demo()


//window keyword:-
// var a=100;
// function demoj(){
//     console.log(window.a);      //output=100
// }
// demoj()

// function demo(){
//     var a=100;                  //can not access outside function
// }demo()
// console.log(window.a);              //output=undefined



//5.hof(higher order function):-
//a function ehich takes another function as argumeent is called HOF.

//6.callback function:-
//a fucntion which is passed as value to anther function is known as callbackfunction.

//hof:-
//function hof(){
//    console.log('im hof');   //hof function
// }hof(callback())

// callback:-
// function callback(){                  //callback function.
//     console.log('im call back');
// }

//ex-2:-
// function mathoperation(a,b,task){
// return task(a,b)
// }
// let result=mathoperation(10,20,function(a,b){
//     return(a+b)
// })
// console.log(result);

//ex-3:-
// function mathoperation(a,b,callback){
//     return callback(a,b)
// }let result=mathoperation(10,20,(a,b)=>{
//     return a+b
// })
// console.log(result);
// let result1=mathoperation(10,20,(a,b)=>{
//     return a*b
// })
// console.log(result1);

//ex-4:-
// function mathoperation(l,b,r,callback){
//     return callback(l,b,r)
// }
// console.log(`the area of circlr is ${mathoperation(null,null,4,(l,b,r)=>{
//     return 3.14*r*r
// })}`);
//   console.log(`the area of traingle is ${mathoperation(2,3,4,(l,b,r)=>{
//     return 0.15*l*b
// })}`);
//ex-5:-by using prompt.
// let radius=Number(prompt('enter radius'))
// let lenght=Number(prompt('enter length'))
// let breadth=Number(prompt('enter breadth'))

// function mathoperation(radius,lenght,breadth,callback){
//     return callback(radius,lenght,breadth)
// }
// console.log(`the area os circle is ${mathoperation(radius,lenght,breadth,(radius,lenght,breadth)=>{
//     return 3.14*radius*radius
// })}`);

// console.log(`the area of traingle is ${mathoperation(radius,lenght,breadth,(radius,lenght,breadth)=>{
//     return 0.15*lenght*breadth
// })}`);

// console.log(`the area of reactangle  is ${mathoperation(radius,lenght,breadth,(radius,lenght,breadth)=>{
//     return breadth*lenght
// })}`);

// console.log(`the area of parallelogram is ${mathoperation(radius,lenght,breadth,(radius,lenght,breadth)=>{
//     return breadth*length
// })}`);

//10.first class or first citizen function.
//we are going to pass function as a value to an identifier is known as first class or first citizen.
//ex:-
// let x=function(){
//     console.log('im first class or first citizen');
// }
// console.log(x);

//4.nested function:-
//a function inside another function is known as nested function.
//ex:-1.
// function gp(){
//     console.log('im gp function');
//     function p(){
//         console.log('im parent function');
//     }p()
// }gp()

//ex-2.
// function gp(){
//     console.log('im gp function');
//     function p(){
//         console.log('im p function');
//     }return p
// }gp()()

//closure (or) lexical scope:-
//whenever we are going to access outer function variable inside inner function variable ,then closure will create.closure is memory scope.
//ex:-
// var a='global'
// let b='script'
// function gp(){
//     console.log(a);
//     console.log(b);
//     var m=10;
//     var n=20;
//     function p(){
//         console.log(m);
//         console.log(n);
//         var o=100;
//         var p=200;
//         function c(){
//             console.log(p);
//             console.log(o);
//         }return c
//     }return p
// }gp()()()

//GEC:-global execution context.
//this is the default execution context in js code start it execution when the file first loads in the browser.
//all of the global code i.e.code which is not inside any function or ojbect is executed inside global execcution context.

//FEC:-function execution context.
//this is defied as the context created by js engine whenever it finds any function call.
//each function has its own execution context.

//LIFO(lasi in first out):-
//ex:-
// function demo1(){
//     console.log('first');
// }
// function demo2(){
//     console.log('second');
//     demo1()
// }demo2()

//11.recusion function.:-calling the function again and again.
// function demo(){
//     console.log('im demo');
//     demo()
// }
// demo()

//12.currying function:-
//currying in js is a process in functional programming in which u can transform a function with multiple arguments into a sequence of nesting functions.
//ex:-1:-
// function number(){
//     return function (length){
//         return function (breadth){
//             return length*breadth
//         }
//     }
// }
// console.log(number()(10)(20));

// ex-2:-
// let traingle=(l,b)=>{
//     return l*b
// }
// console.log(traingle(10,20));

//interview question:-without calling paramenters ,we can use arguments to call.
// function demo(){
// console.log(arguments[0]);
// }demo(10,20,30)

//8.IIFE funciton:-
//an IIFE function is a function that runs the momemnt it  is invoked or called in javascript event loop.
//having a function that behaves that way can be useful in certain situations.
//iife prevents pollution of the global js scope.
//it will show undefined.
//ex:-
// (function(){
//     var a=10;
//     console.log(a);
// })()
// function demo(){
// console.log(a);
// }demo()

//9.generator function:-
//generatorr function is defined like a normal function,but whenever it needs to generate a value,it does so with yield keyword rather than return.
//the yield statment suspends the functions execution and sends a value back to caller,but reatains enough state to enable the function to resume where is left off.
//when resumed function continues execution immediately after the yield last run.
//ex:-
// function* demo(i){
// var a=10
// console.log(a);
// yield i;
// var b=200;
// console.log(b);
// yield;
// var c=300;
// console.log(c);
// }
// let x=demo(10)
// console.log(x.next().value);
// x.next()
// x.next()
// x.next()