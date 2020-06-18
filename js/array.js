console.log('hello i am  in array');
// how to create array 
const mark = ['amandeep','deeep',2,3,4,5];
const fruits = ['apple', 'orange' , 'pineapple'];
const mixed = ['str', 23 , [2,3,4]];
// we can creaete the array also in that type 
const arr= new Array(23,24,222,'aman');
// console.log(arr);
// // if we want to print our marks marks id = 23 24 22 aman
// console.log("marks is=" ,mark);
// console.log(fruits);
// console.log(mixed);
// //  to get the element from the array 
// console.log(fruits[2]);
//if we want  to get the element of array inside an array 
// console.log(mixed[2][1]);
// // arrray property to know the length of the array
// console.log(arr.length);
// // to check the array is array or not 
// let b = "amandeep";
// console.log(Array.isArray(b));
// // change the values of an array  not change the copy but it chanage the original value of an array 
// arr[0] = 'amandeep1';
// console.log(arr);
// // we can use the array to make the new value and assign the vale to that value from the array 
// let arrelement  = arr[0];
// console.log(arrelement);
// //indexing or an array  to know where the value s store 
// console.log(mark.indexOf('amandeep'));
// // muting the array or modify the array it change the original value change in the original value of the array 
// // add the  value  at the end
// mark.push(333);
// console.log(mark);
// //  add the value to the starting 
// mark.unshift(3445);
// console.log(mark);
// //to delete the element at the ends 
// mark.pop();
// console.log(mark);
// // to delet the elements to the starting 
// mark.shift();
// console.log(mark);
// // to delete the multiple elements from the array 
// mark.splice(0,2);
// console.log(mark);
// // to reverse our array 
// mark.reverse()
// console.log(mark);
// // to concate the two array 
// marks= mark.concat(fruits);
// console.log(marks);