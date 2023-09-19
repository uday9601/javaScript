let fetchdata=async()=>{
    let URL="https://jsonplaceholder.typicode.com/users"
  let responce= await fetch (URL)
  let data=await responce.json()
  //console.log(data[0].name);
  data.map((x)=>{
    console.log(x.name);

  })
}
fetchdata()