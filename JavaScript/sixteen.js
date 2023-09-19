//fetching the element

//let title =document.getElementById("title")

//updating
//title.textContent="new content"
//update the structure
//title.innerHTML="<a href=''>new content</a>"

//update the style
// title.style.backgroundColor='white'
// title.style.color='white'
// title.style.fontsize='100px'
// title.style.background="linear-gradient(red,green,blue)"

//  let title=document.getElementsByClassName('title')
//  for (let i = 0; i< title.length; i++) {
//    title[i].style.textContent="new content"
//    title[i].style.color='grey'
//     }

let title=document.getElementsByClassName('title')
for (let i= 0; i < title.length; index++) {
    if(i%3==0){
        title[i].style.color="red"
        title[i+1].style.color='green'
        title[i+2].style.color='blue'
    }
  
    
}


let time=document.getElementsByClassName('time')
setInterval(()=>{

    time[0].textContent=new Date().getHours()
    time[1].textContent=new Date().getMinutes()
    time[2].textContent=new Date().getSeconds()
},1000)
