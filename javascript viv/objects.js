//objects:-
//objects is a real world entity where we can store the data in the form of keys and values.

// ways to create an object
//1.object literal
// let obj={
//     name:'uday',
//     id:100
// }
// console.log(obj);

// update the object value
// obj.name="ram"
// console.log(obj);

// insert
// obj.city='bangalore'
// console.log(obj);

// delete
// delete obj.id
// console.log(obj);
// console.log(Object.entries(obj));

//2way:-object.create
// let obj=Object.create({name:'uday',id:100})
// console.log(obj);

//3rd way:-new keyword
// let obj=new Object({name:'uday'})
// console.log(obj);

//4th way:-object  to asign
// let obj=Object.assign({},{name:'uday'})
// console.log(obj);

//& convert object to array
//by using object.assign
//ex:-
// let obj={
//   name:'uday',
//   id:100,
//   sal:'3.0l'
// }
// let obj1=Object.assign([],obj)
// console.log(obj1);

//*convert array to object
//by using object.assign
//let obj=[1,2,3]
//let obj1=Object.assign({},obj)
//console.log(obj1);
//let obj2=Object.fromEntries(obj)
//console.log(obj2);

//5th way
// function obj(name,id,sal){
// this.name=name;
// this.id=id;
// this.sal=sal
// }
// let obj1=new obj('uday',100,1000000)
// console.log(obj1);
// let obj2=new obj('ram',123,'1cr')
// console.log(obj2);
// let res=[obj1,obj2]
// console.log(res);
// res.map(m=>{
//     console.log(m.name,m.sal);
// }) 

//

//6th way:we can pass only single value.
// let obj=Object.defineProperty({},'name',{
// value:'uday'
// })
// console.log(obj);

//7thway:we can pass multiple values.
// let obj=Object.defineProperties({},{
//     'name':{value:'uday'},
//     'id':{value:100}
// })
// console.log(obj);

//8thwaay:-
//let obj=structuredClone({name:'uday',id:100})
//console.log(obj);

//objects method
//1.object.keys()
//it will return only keys.in the form of arrays
// let obj={
//     name:'uday',
//     id:100
// }
// console.log(obj);
//console.log(Object.keys(obj));

//2.object values:
//it will return only values..in the form of arrays.
//console.log(Object.values(obj));

//3.object.entries
//it will return both keys and values.in the form of array.
//console.log(Object.entries(obj));

//copy of 0bject:

// let obj={
//     name:'uday',
//     id:100
// }
// console.log(obj);

//1st way
//let obj1=obj
//console.log(obj1);

//2nd way
//let obj2=Object.assign({},obj)
//console.log(obj2);

//3rd way
//let obj1=new Object(obj)
//console.log(obj1);

//4th way
//let obj2={...obj}
//console.log(obj2);

//5th way
//let obj1=structuredClone(obj)
//console.log(obj1);

//6th way
//let {...obj2}=obj
//console.log(obj2);

//var x={}
// for(let in obj){
//     x[i]=obj[i]
// }
// console.log(x)

//cloning of an object:-
//"cloning" an object means creating a new object with the same properties as the original object.objects in javascript are stored by reference,which means that two variables can point to same objet  in memory.
//copying data you can modify the object without affecting the original object.
//parent object wll not get affected.

// let obj={
//     name:'uday',
//     company:'tcs'
// }
// console.log(obj)

// //1st way
// let obj2=Object.assign({},obj)
// console.log(obj2)
// obj2.name='ram'
// console.log(obj2)
// console.log(obj)

//2nd way
// let {...obj2}=obj
// console.log(obj2)
// obj2.name='ram'
// console.log(obj2)
// console.log(obj)

//3rd way
// var x={}
// for(let i in obj){
//     x[i]=obj
// }
// console.log(x)
// x.name="ram"
// console.log(x)
// console.log(obj)
// console.log(x==obj)

//shallow copy:-
//when a reference variable is copied into a new reference variable using the assignment operator,a shallow copy of the referenced objefct is created.
//in simple words,a reference varaible mainly stored the adress of the object it refers to.when a new reference variable is assigned value of old refernce variable.
//the adress stored in the old refernce variable is copied into new one.this means both old and new reference variable point to same object in memory.
//if the state of object changes through of refernce variable it is reflectd for both. 
//it will affect parent object and only in nested object.

let obj={
    name:'uday',
    company:'tcs',
    address:{
city:'bangalore',
state:'karnataka'
    }
}
console.log(obj)
// //1st way
let obj2=Object.assign({},obj)
obj.name='ram'
console.log(obj2)
obj2.city="andhra"
console.log(obj2)
// console.log(obj)

//deep copy:-
//deep copy makes a copy of all members of the old object,allocates a seperate memory location for the new object,and then asssign copied members to new object.
//in this way,both objects are independent of each other and in case of any modification to either one,the other is not affected.
//it will not affect orginal object.
// let obj={
//         name:'uday',
//         company:'tcs',
//         address:{
//     city:'bangalore',
//     state:'karnataka'
//         }
//     }
//     console.log(obj)
    //1st way
    // let obj2=JSON.parse(JSON.stringify(obj))
    // console.log(obj2)
    // obj2.address.city="andhra"
    // console.log(obj2)
    // console.log(obj)

 //2nd way
//  let obj2=structuredClone(obj)
//  console.log(obj2)   
//  obj2.address.city="andhra"
//  console.log(obj2)
//  console.log(obj)

//!questions.
// console.log(typeof 2-5)
// console.log(typeof 2.5)
// console.log(typeof"")
// console.log(typeof 2/5)
// console.log(typeof 2/10)
// console.log(typeof a)
// console.log(typeof $)
// console.log(typeof typeof 1)
// console.log(typeof null)
// console.log(typeof this)
// console.log(typeof window)
// console.log(typeof Array())
// console.log(typeof Array)
// console.log(typeof Object())
// console.log(typeof Object)
// console.log(typeof 1+(2/5))

//&time object.
// let x=new Date()
// console.log(x)
// console.log(x.getTime())
// console.log(x.getFullYear())
// console.log(x.getMonth())
// console.log(x.getDay())
// console.log(x.getMilliseconds())
// console.log(x.getUTCFullYear());

//*math object
//floor:it will give the lowest number.
//console.log(Math.floor(3.5))
//console.log(Math.floor(-2.5))

//ceil:it will give upper number
//console.log(Math.ceil(3.2))
//console.log(Math.ceil(-3.2))

//trunc:it will remove fractional  numbers.
//console.log(Math.trunc(1.10))
//console.log(Math.trunc(-2.1))

//round:it will rounds to nearest number.
//console.log(Math.round(1.6))
//console.log(Math.round(-1.4))

//abs:it will give absolute number.
//console.log(Math.abs(1.5))
//console.log(Math.abs(5.0))

//random:it will give the random number.
//console.log(Math.floor(Math.random()*(10000-1000)+100))