const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");
const container = document.getElementById("list-container");
const list_content = document.getElementById("list-content");
const itm = document.getElementById("itm")
const form = document.getElementById("list-form");
const element = document.getElementById('element');
//FOR EDIT
let editElement;
let editFlag = false;
let editID ="";
//ALL EVENT
form.addEventListener("submit" , addItem);
resetBtn.addEventListener("click", clearItm);
//charge itm 
window.addEventListener("DOMContentLoaded",setupItm);
//function
function addItem(e){
    //prevent null input injection 
    e.preventDefault();
    const value = element.value;
    const id = new Date().getTime().toString();
    if (value !== "" && !editFlag){
        createListITM(id,value);
        container.classList.add("show-container");
        addToLocaleStorage(id,value)
    }
}
