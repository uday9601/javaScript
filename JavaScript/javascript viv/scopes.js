
//^scopes?
//scopes define the accesibility of variables ,objects,functions from different part of code..
//we have three type of scopes in javascript:-
//1.global and script scope.
//global scope:-
//whenever u r going to use var keyword ur identifier must be present in global scope.
//var a=10;
//console.log(a);  //present in global scope 

//script scope:-
//whenever u r going to use let and const ur identifier must be present in sript scope.
//let b=10;
//console.log(a); //present in script scope
//const c=10;
//console.log(c); //present in script scope
//2.block scope:-
// if u declare anything by using var,let,const keyword outside of blocks scope,u can access variable outside the block scopes,u can access varaiable inside block scope
//if u declare anything by using var,let,const keyword outside of blocks scope,u can access variable inside the block scopes,u can access only var keyword from block scopes

// var d=5;
// let e=1;
// const f=20;

// {
//     var a=10;
//     let b=10;
//     const c=10;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);

//3.function scope or locally scope?
//they can only be accessed within the function.
//local vaaiables are only recognised inside their funcctions,variables with the same name can be used in different functions.
//local variables are created when function starts,and deleted when function is completed.
//variables declared inside a function are not accessible (visible) from outside of the function.

// var d=40;
// let e=50;
// const f=60;

// function demo(){
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }demo()
// console.log(a);

