class instagramuser{
    constructor(username,followers,following,posts,location,relationshipstatus){
        this.username=username
        this.followers=followers
        this.following=following
        this.posts=posts
        this.location=location
        this.relationshipstatus=relationshipstatus
    }
    fulldetails=()=>`the user name is ${this.username} who has ${this.followers} and ${this.following} following who curently lives in ${this.location}`
    useractivity=()=>{
        if(this.posts<100){
        return `user is inactive`
    }else if(this.posts>500){
        return `user is addicted`
    }
    else{
        return `user is addicted`
    } 
}

}
let user1=new instagramuser('uday',300,200,10,'bnglr','single')
console.log(user1.fulldetails())
console.log(user1.useractivity());