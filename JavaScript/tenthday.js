//both let and const are block scope 
//var is function scope

// for (let i=0;i<5;i++){
//     const x=10
//     console.log(x);
// }
// console.log(x);

// let x=10
// function scope(){
//     var x=100
//     console.log(x);
// }
// scope()

let a=[1,2,3]
let b=[3,2,1]
let count=0;
let k=false;
if(a.length==b.length){
    for(i=0;i<a.length;i++){
        for(j=0;j<a.length;j++){
            if(i==j){
                if(a[i]==b[j]){
                    count++;
                }
            }
    }
    
}

}
if(count==a.length){
    k= true;
}
console.log(k);

