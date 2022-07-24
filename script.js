let myLibrary = [];

function Book(title,author,pages,read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info =function(){
    return `${title} by ${author}, ${pages} pages, ${read}`
  }
}
function addBookToLibrary(){
  
}
const meditations = new Book("Meditations", "Marcus Aurelius",187,"Read")
console.log(meditations.info());