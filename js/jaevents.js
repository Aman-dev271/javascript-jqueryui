 console.log('heelo i am in 5-3-2020')
//  document.getElementById('heading').addEventListener('click' , function(e){
    //  let variable ;
    //  console.log('you have click the heading');
    //  variable = e.target;
    //  variable = e.target.className;
    //  console.log(variable)
    //  variable =  Array.from(e.target.classList);
    //  console.log(variable)
    //  variable =  e.target.id;
    //  console.log( "id is ",variable)
    //  variable = e.offsetX;
     
    //  variable = e.offsetY;
    
    //  variable = e.clientX;
    
    //  variable = e.clientY;
    //  console.log(variable)
    //  if we want to redirect our console 
    // location = href ='//facebook.com';
    //  console.log(variable);
//  });
//  let btn = document.getElementById('btn');
//  btn.addEventListener('click' , func1);
//  function func1(ama){
//      console.log('thanks'  ,ama);
//      e.preventDefault()
     
//  }
//  btn.addEventListener('dblclick' , func2);
//      function func2(e){
//          console.log('thanks for dblclick ' , e)
//      }
// let a  =  document.getElementById('child2')
//      a.addEventListener('dblclick' , func3);
//      function func3(e){
//          console.log('thatnks for dblclick' , e);
//          e.preventDefault();
//      }
let cont  =  document.getElementById("cont");
cont.addEventListener('mousemove',function(e){
    console.log(e.offsetx,e.offsetY);
    document.body.style.backgroundColor =`rgb(${e.offsetX} ${e.offsetY} ${e.offsetY})`
})