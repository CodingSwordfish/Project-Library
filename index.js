let log = console.log;

const newBookButton = document.querySelector(".newBookButton");
const newBookForm = document.getElementById("new-book-form");
const submitButton = document.getElementById("form-submit-button");
const renderDiv = document.querySelector('.render-div');



const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(e) {
  const titleInput = document.getElementById("title").value;
  const authorInput = document.getElementById("author").value;
  const pagesInput = document.getElementById("pages").value;
  const readCheckbox = document.getElementById("read").checked;

  let newBook = new Book(titleInput, authorInput, pagesInput, readCheckbox);
  myLibrary.push(newBook)
  render();
  log(myLibrary);
}


newBookForm.classList.add("hidden");

newBookButton.addEventListener("click", (e) => {
  newBookForm.classList.toggle("hidden");
});

submitButton.addEventListener("click", (e)=>{
  addBookToLibrary()
  e.preventDefault();
  newBookForm.classList.toggle("hidden");
});


