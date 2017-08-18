// class Greeter is created
class Greeter
{
    message:string
    //constructor is created for the class Greeter
    constructor(m:string)
    {
        this.message=m
    }
    //one method is created for the class Greeter
    greet():any
    {
         return this.message
    }
}
//one instense object created for the Greeter class
let Greeter1=new Greeter("Welcome")
console.log(Greeter1.greet())
