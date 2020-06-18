console.log('do loop');
let a  = 110;
// do{
    
//     if(a == 112){
//         // break;
//         a++;
//         continue;
//     }
//     console.log(a +1);
//     a++;
   
// }while(a<200);
do{
    console.log(a+1);
    if (a == 112){
        break;
    }
    a++;
}while(a<200);