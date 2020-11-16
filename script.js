let myLibrary = [];
let form = document.getElementById("form");

function Book(title, author, pages, read) {
  // The Constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", () => {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    console.log(213);
    myLibrary.push(new Book(title, author, pages, read));

    console.table(myLibrary);
    form.style.cssText = "display: none";
  });
}

const bookTest1 = new Book("Test", "Tester", 111, true);
const bookTest2 = new Book("Test2", "Tester2", 222, false);
myLibrary.push(bookTest1);
myLibrary.push(bookTest2);

function showWindow() {
  let addBookButton = document.getElementById("addBook");
  addBookButton.addEventListener("click", () => {
    form.style.cssText = "display: block";
    addBookToLibrary();
  });
}

showWindow();
console.table(myLibrary);
