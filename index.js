// Define the fetchBooks function
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json()) 
    .then((data) => renderBooks(data)); 
}

function renderBooks(books) {
  const bookList = document.getElementById("book-list");

  if (!bookList) {
    console.error('Element with id "book-list" not found.');
    return;
  }

  bookList.innerHTML = "";

  books.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = book.name;
    bookList.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", fetchBooks);
