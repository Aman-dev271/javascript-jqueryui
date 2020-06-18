console.log('hello this is array');
let arr = [1,2,3,4,5,6,7,8];
for(let i = 0; i<arr.length; i++){
if (i == 3){
    // i++;
    continue;
}
    const aman = arr[i];
    console.log(aman)
}
arr.forEach (function(aman){
    console.log(aman);
})
let arr = [2,3,4,5];
arr.forEach(function(aman , index){
    console.log(aman , index);
})