let btn=document.getElementById("btn")
btn.addEventListener("click",e=>{

    e.preventDefault()
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let password=document.getElementById("pass").value
    let pohne=document.getElementById("phone").value
    let type=typeof pohne
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
    else if(type !== "Number"){
        let ph=document.getElementById("ph");
        ph.textContent="mobile must be number"
    }
    
    else{
        localStorage.setItem("username",email);
        localStorage.setItem("password",password);
        alert("registered success full")
        
        

    }
    console.log(type)
})