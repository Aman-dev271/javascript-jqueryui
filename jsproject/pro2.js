let myobj = {
    name : "amandeep",
    age :"13",
    last: "deep",
    height:"145cm"
}
console.log(myobj.height);
// makes an objects by the constructors
function Person(fname , age ,last , height){
    this.firstName = fname;
    this.Lname = last;
    this.perAge = age;
    this.Pheight = height;
    this.NAME=function fullname(){
        return this.firstName+ " "+ this.Lname
    }
    // to add some new property we have to add in the constructor function
    this.class = '6th';
}

// in that type we can not add property to an constructor function
// Person.class = '6th';
var Amandeep = new Person('amandeep' , 23 , 'singh' , '156cm')
// we can add method to an object 
Amandeep.bio= function(){
    return this.firstName +" "+this.perAge + " "+this.Pheight
}
console.log(Amandeep.NAME());
console.log(Amandeep.bio());
console.log(Amandeep.class)

function Employee(firstName,lastName)  
{  
  this.firstName=firstName;  
  this.lastName=lastName;  
}  
  
Employee.prototype.company="Javatpoint"  
Employee.prototype.FullName = function FullName(){
    return this.firstName +" "+this.lastName
}
  
var employee1=new Employee("Martin","Roy");  
var employee2=new Employee("Duke", "William");  
document.writeln(employee1.firstName+" "+employee1.lastName+" "+employee1.company+"<br>");  
document.writeln(employee2.firstName+" "+employee2.lastName+" "+employee2.company +"<br>");  
document.writeln(employee1.FullName());




// javascript prototype 
// it is an template to make any object 
let myobj1 = {
    name:'amandeep',
    last :'deep singh'
}
console.log(myobj1);