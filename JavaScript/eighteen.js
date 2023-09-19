// let btn=document.getElementById('btn')
// let email=document.getElementById('email')
// let h=document.getElementById('h')


// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log(email.value);
//     alert(email.value)
//     h.textContent=email.value
//     h.style.color=email.value
//     document.body.style.backgroundColor=email.value
// })

let btn=document.getElementById('btn')
let age=document.getElementById("age")
let h=document.getElementById('h')

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let date=new Date()
    h.textContent=date.getFullYear()-age.value
})