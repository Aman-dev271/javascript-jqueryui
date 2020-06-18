console.log('hii')
// string properties
// string concatinations
let name = "amandeep";
let lastname = "deep";
console.log(name +' ' +lastname);
let st;
st = "amandeep is a Students that know everything about the js "+
"he is belongs to hp";
console.log(st);
st =  st.concat(' this  ' + 'that');
console.log(st);
console.log(st.toLowerCase());
console.log(st.toUpperCase());
console.log(st.length);
console.log(st);
// indexing
console.log(st[10]);
console.log(st.indexOf('Students'));
console.log(st.lastIndexOf('h'));
console.log(st.charAt(3));
console.log(st.includes('amandeep'));
console.log(st.endsWith('t'));
// if we want 1 to 3 indexing value latters
console.log(st.substring(3,10));
// index slicing
console.log(st.slice(-8));
//  to make array with the string
console.log(st.split(' '));
// for replacing any element from the string 
console.log(st.replace('amandeep' , 'ani'));
console.log(st);
