let email=document.getElementById("email")
let password=document.getElementById('password')
let btn=document.getElementById('btn')
let image=document.getElementById('image')

btn.addEventListener('click',(a)=>{
a.preventDefault()
if(email.value== "u@gmail.com" && password.value==12345){
    alert('login succesful')
}
else{
    //alert('login failed')
    image.src="data:image/jpeg;base64,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"
}
})