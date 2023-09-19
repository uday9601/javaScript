// let a=[1,2,3,4,5,]
// for (let i=0;i<a.length;i++)
// {
//     console.log('square of '+a[i]+'is ',a[i]**2);
// }

// function square(a){
//     for (let i=0;i<a.length;i++){
//         console.log('square of '+a[i]+'is ',a[i]**2);
//     }
// }
// square([1,2,3,4,5])

// arrow functions

//let square=x=>x**2
//console.log(square(5));

//map function

// let a=[1,2,3,4,5]
// let result=a.map((x) =>{
//     return x**2
// })
// console.log(result);

//map function with arrow function

// let a=[1,2,3,4,5]
// let result=a.map((x) =>x**2)
// console.log(result);

// filter function
 //to find even numbers
//  let a=[1,2,3,4,5]
//  let result=a.filter((x) =>{
//  return x%2==0
//  })
//  console.log(result);

//to find greatest number than 2
//  let a=[1,2,3,4,5]
//  let result=a.filter((x) =>{
//  return x>2
//  })
//  console.log(result);

//  reduce function
//to find sum of numbers in array
//  let a=[1,2,3,4,5]
//  let result=a.reduce((sum,x) =>{
//  return sum+=x
//  },0)
//  console.log(result);

// let food =[
//     {
//         title:'biriyani',
//         price:300,
//         rating:5,
//     },
//     {
//         title:'curd rice',
//         price:100,
//         rating:4,

//     },
//     {title:'prawns',
//     price:1000,
//     rating:5,
        
//     }
// ]
// let res=food.map((x) =>{
//     return x.title
// })
// console.log(res);

// let res1=food.filter((x) =>{
//     return x.rating>4
// })
// console.log(res1);

// let res2=food.reduce((sum,x) =>{
//     return sum+=x.price
// },0)
// console.log(res2);


