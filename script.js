
const addBookBtn = document.getElementById("addBookBtn");
const popup = document.getElementById("content");
let titleInput = document.querySelector("#title");
let authorInput = document.querySelector("#author");
let pagesInput = document.querySelector("#pages");
let haveReadInput = document.querySelector("#haveRead");
let bookshelf = document.querySelector("#bookshelf");
const cancelBtn = document.getElementById("cancelBookBtn");
const confirmBtn = document.getElementById("confirmBookBtn");
let form = document.querySelector("formContainer");


function Book(title,author,pages,read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
let myLibrary = [];

function addBookToLibrary(){  
    title = titleInput.value;
    author = authorInput.value;
    pages = pagesInput.value;
    if(haveReadInput.checked){
         read = "Have Read";
    }else{
        read = "Have Not Read";
    }

    let newBook = new Book(title, author, pages,read);
    myLibrary.push(newBook);
    closeForm();
    createContent();
    
}
function openForm(){
    popup.style.display = "block";
}
function closeForm(){
    popup.style.display = 'none';
    titleInput.value= "";
    authorInput.value="";
    pagesInput.value="";
    haveReadInput.checked = false;
}
function createContent(){
    let card = document.createElement('div');
    card.className = "card";
    let titleSpan = document.createElement('div');
    titleSpan.innerHTML = title.bold();
    titleSpan.className = "cardInfo";
    card.append(titleSpan);
    let authorSpan = document.createElement('div');
    authorSpan.innerHTML = `By: ${author}`;
    authorSpan.className = "cardInfo";
    card.append(authorSpan);
    let pageSpan = document.createElement('div');
    pageSpan.innerHTML = `${pages} pages`;
    pageSpan.className = "cardInfo";
    card.append(pageSpan);
    let readDiv = document.createElement('div');
    readDiv.innerHTML= read;
    if(readDiv.innerHTML == "Have Read"){
        readDiv.className = "readDiv";
    }else{
        readDiv.className = "notReadDiv";
    }
    card.append(readDiv);
    let removeButton = document.createElement('button');
    removeButton.type = "button";
    removeButton.className = "removeButton";
    removeButton.innerHTML = "Remove"
    removeButton.onclick = function(event){
        card.remove();
    }
    card.append(removeButton);
    bookshelf.append(card);
    readDiv.addEventListener('click', function(event){
        if(readDiv.className == "readDiv"){
            readDiv.className = "notReadDiv";
            readDiv.innerHTML = "Have Not Read";
        }else if(readDiv.className == "notReadDiv"){
            readDiv.className = "readDiv";
            readDiv.innerHTML = "Have Read";
        }
    });

}
