let title=document.getElementById("title")
//let btn=document.getElementById("btn")
let a=document.getElementsByClassName("a")


//  btn.addEventListener("click",() => {
// title.innerText='hi'
//  if(title.innerText=="hello"){
//      title.innerText="h1"
//  }    else{
//      title.innerText="hello"
//  }
//  title.innerText++
        
        
//      })



a[0].addEventListener("click",()=>{

    title.textContent++
    title.style.color='red'
})

a[1].addEventListener("click",()=>{
    if (title.textContent>0) {
        title.textContent--    
    }
    
    title.style.color='green'
})


a[2].addEventListener("click",()=>{
    title.textContent=0
    title.style.color='blue'
})
l
