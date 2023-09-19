let btn=document.getElementById("btn")
let name=document.getElementById("name")
name.addEventListener("click",e=>{
    e.preventDefault();
    let nm=document.getElementById("nm")
        nm.textContent=" "

})

let email=document.getElementById("email")
email.addEventListener("click",e=>{
    e.preventDefault();
    let em=document.getElementById("em")
        em.textContent=" "

})
let password=document.getElementById("pass");
password.addEventListener("click",e=>{
    e.preventDefault();
    let ps=document.getElementById("ps")
        ps.textContent=" "
})
let pohne=document.getElementById("phone");
pohne.addEventListener("click",e=>{
    e.preventDefault();
    let ph=document.getElementById("ph");
        ph.textContent=""
})



btn.addEventListener("click",e=>{

    e.preventDefault()
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let password=document.getElementById("pass").value
    let pohne=document.getElementById("phone").value
    
    let nameArr=name.split('')
    for(let i=0;i<nameArr.length;i++){
        if(nameArr[i]==='0' || nameArr[i]==='1' || nameArr[i]==='2' ||nameArr[i]==='3' || nameArr[i]==='4' ||nameArr[i]==='5' ||nameArr[i]==='6' || nameArr[i]==='7' || nameArr[i]==='8' || nameArr[i]==='9' ){
            let nm=document.getElementById("nm")
            nm.textContent="name should contain string only"
        }
    }
    if(name==="" ){
        let nm=document.getElementById("nm")
        nm.textContent="please provide your name"
    }
    
    else if(name.length<4 ){

        let nm=document.getElementById("nm")
        nm.textContent="name should contain at least 4 "
    }
    else if(name.length>10){
        let nm=document.getElementById("nm")
        nm.textContent="name should contain less than 10"
    }
    else if(email===""){
        let em=document.getElementById("em")
        em.textContent="please provide your email"
    }
    
    else if(password===""){
        let ps=document.getElementById("ps")
        ps.textContent="please provide your password"
    }
    
    else if(pohne==="" ){
        let ph=document.getElementById("ph");
        ph.textContent="provide mobile no"
    }
    else if(typeof pohne != "number"){
        let ph=document.getElementById("ph");
        ph.textContent="mobile no should in number"
    }
    
    else{
        localStorage.setItem("username",email);
        localStorage.setItem("password",password);
        alert("registered success full")
        
        

    }
    console.log(type)
})