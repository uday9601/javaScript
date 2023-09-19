


 async function fetching(){
    let search=document.getElementById("search").value;
    let div=document.getElementById("nw")
    let count=document.getElementById("count")
    let data=await fetch(`https://newsapi.org/v2/everything?q=${search}&from=2023-08-09&sortBy=publishedAt&apiKey=96f10ebe7d4e4aa9ac73fca38ffba66f`);
    let fetchedata=await data.json();
    // let news=fetchedata.articles;
    let news=fetchedata.articles
    count.textContent=news.length
    div.innerHTML=""
    news.map((m)=>{
        div.innerHTML +=`<div class="main">
        <div class="newsDiv">
                <div><b>${m.source.name}</b></div>
                <div>author: <span>${m.author}</span></div>
                <div>publishedAt: <span>${m.publishedAt}</span></div>
                <p>title:${m.title}</p>
            </div>
        <div class="content">
            <div>description:${m.description}</div>
            <div>content:${m.content}</div>
        </div>
    </div> <br> `
    })

    
   
    
    // h1.textContent=fetchedata[0].author
}
