.console.log('amandeep');
//showNotes()
// user add the note in the localsctorage 
let addBtn = document.getElementById('addBtn');
// in thiswe select the dom element which has id addBtn

addBtn.addEventListener('click' , function(){
  // now we addEventListener on that element which has id addbtn
let addTxt = document.getElementById('addTxt');
// now we select the element which has id addTxt 
let addTitle = document.getElementById('addTitle');

let notes1 =  localStorage.getItem("notes");
// it fatch the items that are stored in the locl storage 
// console.log(notes)
if (notes1 == null) {
// in this we check if in the notes textarea dont has anything the create a blank object 
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes1.toLocaleLowerCase());
// if any thing exixt in the notes then it change to json object 

  }
  let mynotextobj={
    title:addTitle.value.toLocaleLowerCase(),
    text :addTxt.value.toLocaleLowerCase()

  }
notesObj.push(mynotextobj);
//in that add the value of that Text that are adding by the user input textarea  
// console.log(notesObj)

localStorage.setItem("notes" , JSON.stringify(notesObj));
// to take the simple input as string and covert it into the json string
addTxt.value = '';
addTitle.value = '';
// after click the addntes button it blanks the text area
console.log(notesObj);

//showNotes()
})

// to show the local storage element in our dom

function showNotes(){
  // here we make a function to show the notes that user want to add into the notes in the dom
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
        // notesObj = notes;
      }
      let html ="";
      notesObj.forEach(function(element , index){
        // in this we itreate the array elements that maked in local storage
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                <h4 class = "card-title">Note ${index+1}</h4>
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text"> ${element.text}</p>
                    <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>`;
            // that is out simple html that add into the notes id
          
      });
    let notesElm = document.getElementById('notes');
if (notes !=0){
    notesElm.innerHTML = html;
}
else{
    notesElm.innerHTML = `nothing to show 
    "add a note"section above option`
}}

// // to delete the notes by clicking delete note button
 function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}
// // to make search functionality
let search = document.getElementById('textinput');
search.addEventListener("input", function(){
    let inputVal = search.value.toLocaleLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("h5")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})
