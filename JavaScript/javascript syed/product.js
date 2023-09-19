let product=[
    {
        pname:"mobile",
        price:1234,
        color:"green"
    },
    {
        pname:"watch",
        price:2034,
        color:"red"
    },
    {
        pname:"tv",
        price:12000,
        color:"black"
    },
    {
        pname:"bag",
        price:7000,
        color:"yellow"
    },
    {
        pname:"tab",
        price:2000,
        color:"grey"
    },
    {
        pname:"laptop",
        price:5000,
        color:"white"
    },
    {
        pname:"shirt",
        price:700,
        color:"blue"
    },
    {
        pname:"book",
        price:150,
        color:"white"
    },
    {
        pname:"bottle",
        price:1000,
        color:"black"
    },
    {
        pname:"motor",
        price:2300,
        color:"black"
    }
]


let tbody=document.getElementById("product-list")
let productTotal=document.getElementById("productTotal")

let prices=product.map(({price})=>{
    return price
})

let totalPrices=prices.reduce((a,b)=>{
    return a+b
})

productTotal.innerText=totalPrices

product.map(({pname,price,color},index)=>{
    tbody.innerHTML +=`
    <tr>
    <td>${index+1}</td>
    <td>${pname}</td>
    <td>${color}</td>
    <td>${price}</td>
  </tr>
    `
})

function getProducts(){
    let tbody=document.getElementById("product-list")
let productTotal=document.getElementById("productTotal")
let searchValue=document.getElementById("search").value;
tbody.innerHTML=""
let filterProduct=product.filter(({pname,price,color})=>{
    return pname.toLowerCase().includes(searchValue) || price===parseInt(searchValue) || color.toLowerCase().includes(searchValue)
})
if(filterProduct.length===0){
    tbody.innerHTML=`<h1 style='color:red' >No Product found </h1>`;
    product.innerText=0
}
let filterProductPrice=filterProduct.map(({price})=>{
    return price
})
let totalFilteredPrice=filterProductPrice.reduce((a,b)=>{
    return a+b
})

productTotal.innerText=totalFilteredPrice;

filterProduct.map(({pname,price,color},index)=>{
    tbody.innerHTML +=`
    <tr>
    <td>${index+1}</td>
    <td>${pname}</td>
    <td>${color}</td>
    <td>${price}</td>
  </tr>
    `
})

}
