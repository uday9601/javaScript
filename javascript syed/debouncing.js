let count=1;
 function getproducts()
 {
    console.log("counter",count++)
 }

 function dbouncefunction(cb,delay)
 {    

    let stopTimeout
    return function()
    {
        clearTimeout(stoptimeout)
        stoptimeout=setTimeout(cb,delay)
    }
 }

 let debounceproducts=dbouncefunction(getproducts,1000)