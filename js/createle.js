console.log('this is our java script ');
// this is the syntax to  create the element in our DOM by the javascript
let element = document.createElement('li');
// console.log(element);
let  p = element.ClassName = 'chilul';


element.id = 'created';
// // 
element.setAttribute('title' ,'mytitle');
// // element.innerText = 'hii i am in class';

element.innerHTML = 'hellow this is created by aman';
console.log( element);
let ul = document.querySelector('ul.list');
ul.appendChild(element);
console.log(ul);
console.log(element);
// // to add the extra text in the element
let text = document.createTextNode(' '+'i am amandeep');
element.appendChild(text);

let elm2 = document.createElement('h3');


elm2.id = 'amandeep';
elm2.className = 'elm12';
elm2.innerText = "hii this is new text";
let app = document.querySelector("div.container")
// let tnode = document.createTextNode('this is our new text ');
// elm2.appendChild(tnode);
app.appendChild(elm2);
console.log(elm2);
element.replaceWith(elm2);
console.log(element);

let myul = document.getElementById('sn');
myul.replaceChild(element ,document.getElementById('aman'));
myul.removeChild(document.getElementById('deep'));

// to get id or class of any tag
let pr = elm2.getAttribute('class');
console.log(pr);
// to know there has id or not
// let pr = elm2.hasAttribute('id');
// console.log(pr);

// to remove attribute
elm2.removeAttribute('id');
console.log(elm2 , pr);

// to add more attribute 
let pr3 = elm2.setAttribute('id','aman');
console.log(elm2 , pr3);

