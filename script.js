let myLibrary = [];
let form = document.getElementById("form");
let books = document.getElementById("books");

function Book(title, author, pages, read) {
  // The Constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
Book.prototype.displayBook = function () {
  let card = document.createElement("div");
  card.classList.add("card");
  books.appendChild(card);

  let titleP = document.createElement("p");
  titleP.textContent = `Title: ${this.title}`;
  card.appendChild(titleP);

  let authorP = document.createElement("p");
  authorP.textContent = `Author: ${this.author}`;
  card.appendChild(authorP);

  let pagesP = document.createElement("p");
  pagesP.textContent = `Pages: ${this.pages}`;
  card.appendChild(pagesP);

  let readP = document.createElement("p");
  readP.textContent = `Read: ${this.read}`;
  card.appendChild(readP);
};

function addBookToLibrary() {
  let submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", () => {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    myLibrary.push(new Book(title, author, pages, read));
    console.table(myLibrary);
    form.style.cssText = "display: none";
    //REMOVE INNERHTML
    books.innerHTML = "";
    displayAllBooks();
  });
}
function showWindow() {
  let addBookButton = document.getElementById("addBook");
  addBookButton.addEventListener("click", () => {
    form.style.cssText = "display: block";
  });
}

function displayAllBooks() {
  myLibrary.forEach((book) => {
    book.displayBook();
  });
}

addBookToLibrary();
showWindow();
