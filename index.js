let log = console.log;

const newBookButton = document.querySelector('.newBookButton');
const newBookForm = document.getElementById('new-book-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readCheckbox = document.getElementById('read');

newBookButton.addEventListener('click', (e) => {
 
  newBookForm.classList.toggle('hidden');
  
});

// Initially hide the form
newBookForm.classList.add('hidden');




const myLibrary = [];


function Book (title,author,pages,read){
this.title = title;
this.author = author;
this.pages = pages;
this.read = read;
this.info = function(){
    return `The ${this.title} by ${this.author},${this.pages} pages, ${this.read}`
}
}



function addBookToLibrary() {
  // do stuff here
}
