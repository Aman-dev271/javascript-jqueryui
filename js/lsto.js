console.log('amandeep');
// add value pair inside the local storage
localStorage.setItem('Name' , 'Amandeep');
localStorage.setItem('Name2' , 'Singh');
// to clear the local storage 
localStorage.clear()
let name = localStorage.getItem('Name2');
console.log(name)
// to remove perticular element from the local storage
// localStorage.removeItem('Name');
// console.log(name)
let arr = [ 'jas' , 'nidhi' , 'gur' , 'niveesh'];
localStorage.setItem('class' ,JSON.stringify(arr));
// localStorage.setItem('class' ,arr);
let n  = JSON.parse(localStorage.getItem('class'));
console.log(n);

// the session storage is for only a session for a timeperiod 
// when we delete it from the prog that will clear from the storage 
// sessionStorage.setItem('Name' , 'Amandeep');
// sessionStorage.setItem('Name2' , 'Singh');
// // to clear the local storage 
// // localStorage.clear()
// // let niveesh = sessionStorage.getItem('Name2');
// // console.log(niveesh)
// // to remove perticular element from the local storage
// sessionStorage.removeItem('Name')


// let arr = [ 'jas' , 'nidhi' , 'gur' , 'niveesh','ria'];
// sessionStorage.setItem('class' ,JSON.stringify(arr));
// // sessionStorage.setItem('class' ,arr);
// // let n  = sessionStorage.getItem('class');
// let n  = JSON.parse(sessionStorage.getItem('class'));
// console.log(n);
let aman =  ['amandeep' , 'singh' , 'katnori']
let ab =localStorage.setItem('job' , JSON.stringify(aman))

let a = JSON.parse(localStorage.getItem('job'))
console.log(a);