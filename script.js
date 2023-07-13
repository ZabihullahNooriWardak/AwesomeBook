// Dom manipulation
const containerForAllBooks = document.querySelector('.container');
const bookTextField = document.querySelector('.bookName');
const authorTextField = document.querySelector('.bookAuthor');
const addButton = document.querySelector('.add');

// list for all books
let allBooks = [];
const arrayFromLocalStorage = localStorage.getItem('allBooks');
if (arrayFromLocalStorage !== null) {
  const arrayOfAllbooksFromLocal = JSON.parse(arrayFromLocalStorage);
  allBooks = arrayOfAllbooksFromLocal;
  for (let i = 0; i < allBooks.length; i += 1) {
    const containerForSingleBook = document.createElement('div');
    containerForSingleBook.classList.add('containerBooks');
    containerForSingleBook.innerHTML = `<div class=bookDetails><p id='bookName'>${allBooks[i].bookName}</p> <p id='by'>by</p> <p id='bookAuthor'>${allBooks[i].bookAuthor}</p></div><button class="remove">remove</button>`;
    containerForAllBooks.appendChild(containerForSingleBook);
  }
}
// class for single book
class SingleBook {
  constructor(name, author) {
    this.bookName = name;
    this.bookAuthor = author;
  }

  add() {
    const containerForSingleBook = document.createElement('div');
    containerForSingleBook.classList.add('containerBooks');
    containerForSingleBook.innerHTML = `<div class=bookDetails><p id='bookName'>${this.bookName}</p> <p id='by'>by</p> <p id='bookAuthor'>${this.bookAuthor}</p></div><button class="remove">remove</button>`;
    containerForAllBooks.appendChild(containerForSingleBook);
    const singleBookObject = new SingleBook(this.bookName, this.bookAuthor);
    allBooks.push(singleBookObject);
    localStorage.setItem('allBooks', JSON.stringify(allBooks));
    bookTextField.value = '';
    authorTextField.value = '';
  }
}
// Function for adding new Book

// remove button function

function handleRemoveButtonClick(event) {
  if (event.target.classList.contains('remove')) {
    const removeButton = event.target;
    const bookContainer = removeButton.parentNode;
    const index = Array.from(containerForAllBooks.children).indexOf(bookContainer);
    if (index > -1) {
      allBooks.splice(index, 1);
      localStorage.setItem('allBooks', JSON.stringify(allBooks));
      containerForAllBooks.removeChild(bookContainer);
    }
  }
}

// Attach the remove button click event listener to the container
containerForAllBooks.addEventListener('click', handleRemoveButtonClick);

addButton.addEventListener('click', () => {
  if (bookTextField.value !== '' && authorTextField.value !== '') {
    const book = new SingleBook(bookTextField.value, authorTextField.value);
    book.add();
  }
});