let msd=()=>{
    return 'definitely not'
}
let vk=()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('ee sala cup namde')
    }, 3000);
  })
}
let abd=()=>{
    return"mr360"
}

let res=async()=>{
    console.log(msd());
    console.log(await vk());
    console.log(abd());
}
res()