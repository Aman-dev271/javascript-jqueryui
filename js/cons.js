console.log('this is constructors')
// object literals 
// let car ={
//     name: 'farari',
//     run: function run (){
//         console.log('car is runing')
//     }

// }
// console.log(car)
// car.run()
// make the objects by the constructors 
function General(Name , Class){
    this.name =  Name;
    this.Class = Class;
    this.study = function study(){
        console.log(`${this.name} is now studied`)
    }

}
aman = new General('Amandeep' , 12 );
console.log(aman)
aman2 = new General('Jaspreet' , 12)
console.log(aman2)

// console.log(aman.name);
// console.log(aman.study())
let a  = [1,2,3,4];
localStorage.setItem('class' , a)
