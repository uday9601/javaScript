
let fetchData=async()=>{
    let card=document.querySelector("div")
    let URL='https://api.github.com/users'
    let response= await fetch(URL)
     let data=await response.json()
console.log(data)

     data.map((m)=>{
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
fetchData()


let btn=document.getElementById("btn")

let getAPI=async()=>{
    let card=document.querySelector("div")
    let search=document.getElementById("search").value;
    let URL='https://api.github.com/users'
        let response= await fetch(URL)
     let data=await response.json()
        console.log(data)
        card.innerHTML=""
        let user=data.filter(({login,id,type,avatar_url})=>{
            return login===search || id===parseInt(search)
            
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
}
btn.addEventListener("click",getAPI)





