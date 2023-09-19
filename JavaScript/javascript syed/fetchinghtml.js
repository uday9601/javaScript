 async function demo(){
    let card=document.querySelector("div")
    let data= await fetch("https://api.github.com/users")
    let finaldata=await data.json()
    console.log(finaldata);

    finaldata.map((m)=>{

        card.innerHTML +=`<div class="nm">
        <div class="naimg">
        <img src="${m.avatar_url}" alt="">
        <h2>${m.login} </h2></div>
        <div class="naimg">
        <h2>id:${m.id} </h2>
        <h2>usertype:${m.type} </h2>
        </div>
    </div> <br>`
    })

}
demo()




let btn=document.getElementById("btn")


async function demo1(){

let  card=document.querySelector("div")
let search=document.getElementById("search").value

let data=await fetch("https://api.github.com/users")
let finaldata=await data.json()
console.log(finaldata)


card.innerHTML=""
let user=finaldata.filter(({avatar_url,login,id,type})=>{

    return login===search

})

user.map((m)=>{
    card.innerHTML +=`<div class="nm">
    <div class="naimg">
    <img src="${m.avatar_url}" alt="">
    <h2>${m.login} </h2></div>
    <div class="naimg">
    <h2>id:${m.id} </h2>
    <h2>usertype:${m.type} </h2>
    </div>
</div> <br>`
})





} btn.addEventListener('click',demo1)