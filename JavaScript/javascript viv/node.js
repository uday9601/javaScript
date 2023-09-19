
// function sort(arr){
//     // let arr=[5,3,8,2,0]
// do {
//     swap=false

//     for(let i=0; i<arr.length-1,i++;){
//         if (arr[i]>arr[i]+1){
//             let temp =arr[i]
//             arr[i+1]=temp
//             swap=true;
//         }
       
//     }
// }while (swap)
// return arr
// }

// let sorted=sort[5,3,8,2,0]
// let sortedarr = sort(sorted)
// console.log(sortedarr)




// let arr=[1,5,5,3,2,0]
// function dupilicate(arr){
// let uniquearray=[]
// for(let i=0; i<arr.length,i++;){
//     if(uniquearray.includes(arr[i])){

//     }
// return uniquearray
// }
// }
// console.log(uniquearray)





let a=document.getElementById("main1")

async function demo(){
       let data=await fetch("https://fakestoreapi.com/products")
        console.log(data);
     let finaldata=await data.json();
        console.log(finaldata);
        finaldata.map((m)=>{
m.img
        })
        
    }demo()