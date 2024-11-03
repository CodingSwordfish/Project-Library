let log = console.log;

const newBookButton = document.querySelector(".newBookButton");
const newBookForm = document.getElementById("new-book-form");
const submitButton = document.getElementById("form-submit-button");
let renderDivCont = document.querySelector(".renderdiv");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(e) {
  let titleInputVal = document.getElementById("title").value;
  let authorInputVal = document.getElementById("author").value;
  let pagesInputVal = document.getElementById("pages").value;
  let readCheckboxVal = document.getElementById("read").checked;

  let newBook = new Book(
    titleInputVal,
    authorInputVal,
    pagesInputVal,
    readCheckboxVal
  );
  myLibrary.push(newBook);
  render();
  console.log(myLibrary);
}

function render() {
  renderDivCont.innerHTML = ""; // Clear existing content

  for (let i = myLibrary.length - 1; i >= 0; i--) {
    let book = myLibrary[i];
    let renderCard = document.createElement("div");
    renderCard.classList.add("renderDiv");
  
    const button = `<button class="remButton" onclick="removeBook(${i})">Remove Book</button>`;
  
    renderCard.innerHTML = `
      <h2>Title: ${book.title}</h2>
      <h3>Author: ${book.author}</h3>
      <p class="bookPages">Total Pages: ${book.pages}</p>
      <p class="readOrNot">
   ${book.read ? `<span class="read">Status: Read</span>` : `<span class="not-read">Status: Not Read</span>`}
</p>
      ${button}
    `;

   
  
    renderDivCont.appendChild(renderCard);
  }
}



function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

newBookForm.classList.add("hidden");

newBookButton.addEventListener("click", (e) => {
  newBookForm.classList.toggle("hidden");
});

submitButton.addEventListener("click", (e) => {
  addBookToLibrary();
  e.preventDefault();
  newBookForm.classList.toggle("hidden");
});