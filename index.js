// let log = console.log;

// const newBookButton = document.querySelector(".newBookButton");
// const newBookForm = document.getElementById("new-book-form");
// const submitButton = document.getElementById("form-submit-button");
// let renderDivCont = document.querySelector(".renderdiv");
// let bookTitle = document.querySelector(".titleBook");
// const myLibrary = [];

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

// function addBookToLibrary(e) {
//   let titleInputVal = document.getElementById("title").value;
//   let authorInputVal = document.getElementById("author").value;
//   let pagesInputVal = document.getElementById("pages").value;
//   let readCheckboxVal = document.getElementById("read").checked;

//   let newBook = new Book(
//     titleInputVal,
//     authorInputVal,
//     pagesInputVal,
//     readCheckboxVal
//   );
//   myLibrary.push(newBook);
//   render();
//   console.log(myLibrary);
// }

// function render() {
//   renderDivCont.innerHTML = ""; // Clear existing content

//   for (let i = myLibrary.length - 1; i >= 0; i--) {
//     let book = myLibrary[i];
//     let renderCard = document.createElement("div");
//     renderCard.classList.add("renderDiv");
  
//     const button = `<button class="remButton" onclick="removeBook(${i})">Remove Book</button>`;
  
//     renderCard.innerHTML = `
//       <h2>Title: ${book.title}</h2>
//       <h3>Author: ${book.author}</h3>
//       <p class="bookPages">Total Pages: ${book.pages}</p>
//       <p class="readOrNot">
//    ${book.read ? `<span class="read">Status: Read</span>` : `<span class="not-read">Status: Not Read</span>`}
// </p>
//       ${button}
//     `;

   
  
//     renderDivCont.appendChild(renderCard);
//   }
// }



// function removeBook(index) {
//   myLibrary.splice(index, 1);
//   render();
// }

// newBookForm.classList.add("hidden");

// newBookButton.addEventListener("click", (e) => {
//   newBookForm.classList.toggle("hidden");

//   const titleInput = document.getElementById('title');
//   const authorInput = document.getElementById('author');
//   const 
//  pagesInput = document.getElementById('pages');
//   const readCheckbox = document.getElementById('read'); 


//   titleInput.value = '';
//   authorInput.value = '';
//   pagesInput.value = '';
//   readCheckbox.checked = false;

// });

// submitButton.addEventListener("click", (e) => {
//   addBookToLibrary();
//   e.preventDefault();

//   newBookForm.classList.toggle("hidden");
// });

const newBookButton = document.querySelector(".newBookButton");
const newBookForm = document.getElementById("new-book-form");
const submitButton = document.getElementById("form-submit-button");
let renderDivCont = document.querySelector(".renderdiv");
let bookTitle = document.querySelector(".titleBook");
const myLibrary = [];

function Book(title, author, pages, read) {
 this.title = title;
 this.author = author;
 this.pages = pages;
 this.read = read;
}

Book.prototype.readToggler = function () {
 this.read = !this.read;
};

function togglerButt(index) {
 myLibrary[index].readToggler();
render();
}

function addBookToLibrary(e) {
 let titleInputVal = document.getElementById("title").value;
 let authorInputVal = document.getElementById("author").value;
 let pagesInputVal = document.getElementById("pages").value;
 let readCheckboxVal = document.getElementById("read").checked;

if (!titleInputVal || !authorInputVal || !pagesInputVal) {
  alert("Please fill out all fields before adding a book.");
  e.preventDefault(); // Prevent form submission
  return; // Exit the function early
}

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
  let book = myLibrary[i]
   let renderCard = document.createElement("div")
    renderCard.classList.add("renderDiv");

 const button = `<button class="remButton" onclick="removeBook(${i})">Remove Book</button>`;
 const readButton = `<button class="readtogglebutton" onclick="togglerButt(${i})"> ${
 book.read
 ? `<span class="yesRead"> Not Read</span>`
: `<span class="yesRead">  Read</span>`
 }</button>`;
 renderCard.innerHTML = `
 <h2>Title: ${book.title}</h2>
 <h3>Author: ${book.author}</h3>
 <p class="bookPages">Total Pages: ${book.pages}</p>
 <p class="readOrNot">
${
 book.read
 ? `<span class="yesRead">Status: Read</span>`
 : `<span class="not-read">Status: Not Read</span>`
}
</p>
  ${button}
  ${readButton}
 `;

 renderDivCont.appendChild(renderCard);
 }
}

function removeBook(index) { myLibrary.splice(index, 1); render();
}

newBookForm.classList.add("hidden");

newBookButton.addEventListener("click", (e) => { newBookForm.classList.toggle("hidden");
 const titleInput = document.getElementById("title"); const authorInput = document.getElementById("author"); const pagesInput = document.getElementById("pages"); const readCheckbox = document.getElementById("read");
 titleInput.value = ""; authorInput.value = ""; pagesInput.value = ""; readCheckbox.checked = false;
});

submitButton.addEventListener("click", (e) => {
addBookToLibrary(); e.preventDefault();
 newBookForm.classList.toggle("hidden");
});