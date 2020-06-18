
console.log('hellow world');
let a = "aman";
console.log(a[3]);
// number functons
// parsInt , parseFloat 
// let c1 = parseInt(23.67);
// let c1 = parseFloat(23.30); 
// console.log(c1.toFixed(5) , (typeof c1));
// console.log(c1);

// string properties 
// string concatinations 
// let name = "deep";
// console.log(a + ' '+ name);
// let vill;
// vill = "amandeep  is an student "+
// "he isfrom himachal pardesh this "+
// "i am new in the jalandhar";
// str = vill.concat(" "+'this ' , 'is');
// console.log(vill);
// console.log(str);
let aman = "she is a student ";
nidhi = aman.concat(" " +'she is sooooo sweet ');
console.log(nidhi);
// console.log(nidhi.toUpperCase());
// console.log(nidhi.toLowerCase());

// console.log(nidhi[3]);
// console.log(nidhi.indexOf('is'));
// // if we want to know the last element in the string
console.log(nidhi.lastIndexOf('i'));
console.log(nidhi.charAt(4));
// // if we want to enshure our string ends with that world or not 
// console.log(str.endsWith('this'));
// // //  include function is used o know the element is include in the string or not 
// console.log(str.includes('this'));
// // // we want the strinf indexig value from 4 to 20
// console.log(str.substring(4 ,));
// // // slice functions is used to get the elements from the ends 

// console.log(str.slice(-4));
// // // if we want to make array from the string then let see 
// let b = str;

// console.log(b.split(' '));

// console.log((typeof b));
// // // replace function is used to replace the element let see
// console.log(str.replace('this' , 'that'));
// // // these all properties make a copy not change original one 
// // template literals 
let name1 = "Amandeep";
let fr2 = "orange";
let fr3 = "Apple34";
let myfn = `hello${name1}
<h2>this is our html</h2>
<p>you like ${fr2} or ${fr3}
</p>`;
document.body.innerHTML = myfn;
