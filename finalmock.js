// let pro1 = document.getElementById('pro1')
// let pro2 = document.getElementById('pro2')
// let pro3 = document.getElementById('pro3')


// let fetchData = async() => {
//     let URL = 'https://jsonplaceholder.typicode.com/users'
//     let response = await fetch(URL)
//     let data = await response.json()
    
// pro1.addEventListener('click',(e)=>{
//     e.preventDefault();
    
//     pro1.innerText=data[0].name
// })
  
// pro2.addEventListener('click',(e)=>{
//     e.preventDefault();
//     pro2.innerText=data[1].name
// })
  
// pro3.addEventListener('click',(e)=>{
//     e.preventDefault();
//     pro3.innerText=data[2].name
// })
// }
// fetchData()







let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let btn3=document.getElementById("btn3")
let btn4=document.getElementById("btn4")
let btn5=document.getElementById("btn5")



async function demo(){
    let data=await fetch("https://api.github.com/users")
  let finaldata=await data.json();
     console.log(finaldata);

     
     
btn1.addEventListener('click',(a)=>{
    a.preventDefault()
 btn1.innerText=finaldata[0].login

})

btn2.addEventListener('click',(a)=>{
    btn2.innerText=finaldata[1].login
})
 btn3.addEventListener('click',()=>{
    btn3.innerText=finaldata[3].login
 })

 btn4.addEventListener('click',(a)=>{
    btn4.innerText=finaldata[4].login
 })
 btn5.addEventListener('click',()=>{
    btn5.innerText=finaldata[5].login
 })



 
pro1.addEventListener('click',(e)=>{
    e.preventDefault();
    
    pro1.innerText=finaldata[0].login
})
  
pro2.addEventListener('click',(e)=>{
    e.preventDefault();
    pro2.innerText=finaldata[1].login
})
  
pro3.addEventListener('click',(e)=>{
    e.preventDefault();
    pro3.innerText=finaldata[2].login
})




 }demo()


