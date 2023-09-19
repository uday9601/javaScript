let form=document.querySelector('form')
console.log(form);
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let lname=document.getElementById("LName").value
    let password=document.getElementById("lPwd").value
    console.log(lname,password);
    let username=localStorage.getItem("username")
    let lpassword=localStorage.getItem("password")
    console.log(username,lpassword);
    if(lname==username,lpassword){
        alert("login succesful")
        window.open("./home.html")
    }
    else{
        alert("login faailed")
    }
})

