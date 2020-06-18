console.log('this is our javasript page in that we discuss how to make a html page by the use of query selectors ');
// select the element whitch class is container
let cont =  document.querySelector('.container')
// it gives all the childes that are preset in the container
// if we use to get the chids by the childNodes funtion that count new line as charactor and  comment also 
// console.log(cont.childNodes);
// if we dont want to get comments and new line then we have another function
// it gives only the tags element 
// console.log(cont.children);
// for getting the nodeName 
// it gives the name that node which are present at the positon zero
// let nodeName = cont.childNodes[4].nodeName;
// console.log(nodeName);
// let a  = cont.children[1].nodeName;
// console.log(a);
// to know the node type 
// the node type we have 6 types 
// 1.Element
// 2. Attribute
// 3. TextNode
// 8.comment
// 9.document 
// 10.DocType
let nodeType = cont.childNodes[2].nodeType;
console.log(nodeType);

