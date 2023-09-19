//OOPS

class user{
    constructor(firstname,lastname,age,salary,role,){
        this.firstname=firstname
        this.lastname=lastname
        this.age=age
        this.salary=salary
        this.role=role
        
    }
    fullname=()=>`the full name of user is ${this.firstname}${this.lastname}`
    year=()=>`the birth of user is ${new Date().getFullYear()-this.age}`
    annualsalary=()=>{
        if(this.salary*12/1000000){
            return `the annual salary of user is ${this.salary*12/100000} LPA`
        }
        else{
            return `the annual salary of user is ${this.salary*12/10000000}`
        }
    }
}
let user1=new user("tony","stark",30,50000,'developer')
let user2=new user('uday','ch',20,30000,'developer')
console.table(user1);
console.log(user1.fullname());
console.log(user1.year());
console.log(user2.annualsalary());