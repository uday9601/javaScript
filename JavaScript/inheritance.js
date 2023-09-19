//inheritance

class organisation{
    constructor(ename,empid,skills){
        this.ename=ename
        this.empid=empid
        this.skills=skills
    }
}
class faculty extends organisation{
    constructor(ename,empid,age,skills,classes){
        super(ename,empid,skills)
        this.classes=classes
        this.age=age
    }
}

class hr extends organisation{

}

class hr extends faculty{

}