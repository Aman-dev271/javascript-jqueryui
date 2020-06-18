console.log('hello ');
// data types in javascript 
// in java script we have two types of two types 
// 1st in primitive data type 
// number , boolean ,  undefined , null , string 
// 2nd in refrence data type 
//  functions , array , date ,object literls
// prrmitives data type 
let marks = 23;
console.log(marks ,(typeof marks));
 

// string 
let name = 'amandeep';
console.log(name , "data type of the name is = " +(typeof name));


//  undefinde data type
let name2 = undefined;
console.log(name2, (typeof name2));

// null data type
let name3 = null;
console.log(name3 + (typeof name3));

// boolean data type 
let isDriver = true;
console.log(isDriver )


// refrence data types 
let arr = [1,2,3,4,5,6,7,];
arr.push("45");
console.log(arr  ,
    (typeof arr));

// function 
function fname(){
// prompt('hello');
}
console.log(fname());


// date 
let today = new Date();
console.log(today);

// object literals 

let stmarks = {
    eng : 45, 
    math : 100,
    hindi : 30
}
console.log(stmarks);

// refrence 
let ar = [1,2,3,4,5,6,7,];
let b = ar;
ar  =[6.7,7,8,9];
console.log(ar);
console.log(b);

//primitive data type 
// let num = 45;
// c  =num;
// num = 

// console.log(num)
// console.log(c)