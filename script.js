let myLibrary = [];
let form = document.getElementById("form")

function Book(title, author, pages, read) {
  // The Constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.displayBook = function () {
  let books = document.getElementById("books");
  let card = document.createElement("div");
  card.classList.add("card");
  books.appendChild(card);
  let description = document.createElement("p")
  description.textContent = `${this.title} written by ${this.author}, has ${this.pages} pages.`
  card.appendChild(description)
  let readP = document.createElement("button");
  readP.classList.add("status")
  if (this.read) {
    readP.textContent = "Read";
    readP.style.backgroundColor = "#52b788"
  }else{
    readP.textContent = "Not Read";
    readP.style.backgroundColor = "red"
  }
  card.appendChild(readP);
  deleteCard(card,this)
  changeStatus(readP)
}

function changeStatus(status) {
  status.addEventListener("click", ()=>{
    console.log(status)
    if (status.textContent === "Read") {
      status.textContent = "Not Read";
      status.style.backgroundColor = "red"
    }else{
      status.textContent = "Read";
      status.style.backgroundColor = "#52b788"
    }
  })
}

function showWindow() {
  let addBookButton = document.getElementById("addBook");
  addBookButton.addEventListener("click", () => {
    form.style.cssText = "display: block";

    closeBtn = document.getElementById("close")
    closeBtn.addEventListener("click", ()=> {form.style.cssText = "display: none"})
  });
}

function addBookToLibrary() {
  let submitButton = document.getElementById("popUp");
  submitButton.addEventListener("submit", (e) => {
    e.preventDefault()
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let read = document.getElementById("read");

    myLibrary.push(new Book(title.value, author.value, pages.value, read.checked));
    console.table(myLibrary);
    form.style.cssText = "display: none";
    books.innerHTML = "";
    displayAllBooks();
    document.getElementById("popUp").reset()
  });
}

function displayAllBooks() {
  myLibrary.forEach((book) => {
    book.displayBook();
  });
}

function deleteCard(card,book) {
  let deleteBtn = document.createElement("button")
  deleteBtn.textContent = "Remove"
  deleteBtn.classList.add("deleteBtn")
  card.appendChild(deleteBtn);
  deleteBtn.addEventListener("click",() => {
    let num = myLibrary.indexOf(book)
    console.log(num)
    myLibrary.splice(num,1)
    console.log(myLibrary)
    books.innerHTML = ""
    displayAllBooks()
  })
}
addBookToLibrary();
showWindow();


