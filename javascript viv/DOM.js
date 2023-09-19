//^selectors used to select the HTML elements 

//!1...getting by ID
// let x= document.getElementById("head1")
// console.log(x)
// let y=document.getElementById("head2")
// console.log(y);

//!2..getting by class name
// let x= document.getElementsByClassName("head1")
// console.log(x)

//!3...getting by tag name
// let x=document.getElementsByTagName("h1")
// console.log(x)

//!4...getting y query selector
// let x=document.querySelector(".head")
// console.log(x)

// let y=document.querySelector("#head2")
// console.log(y)

//!5..getting element by query selectorAll
// let x=document.querySelectorAll('.head')
// console.log(x)

//!adding styles
// let x=document.getElementById("style")
// console.log(x)
// x.style.color="red"


let x=document.getElementById("head2")


// let fetchdata=async()=>{
//     // let URL="https://jsonplaceholder.typicode.com/users"
//   let responce= await fetch ("https://jsonplaceholder.typicode.com/users")
//   let data=await responce.json()
// console.log(data)

// x.addEventListener('click',(a)=>{
//     x.innerText=data[0].name    
// })

//  }
// fetchdata()











async function demo(){
    let data=await fetch("https://jsonplaceholder.typicode.com/users")
    let finaldata=await data.json()
    console.log(finaldata)

x.addEventListener('click',()=>{
    x.innerText=finaldata[0].name
})




}demo()