// Dom manipulation
import {containerForAllBooks, bookTextField, authorTextField, addButton} from './modules/dom.js';

// Date
const dateElement = document.querySelector('.date');
const date = new Date();
dateElement.textContent = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

// list for all books
let allBooks = [];

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
    const ab = JSON.stringify(allBooks);
    localStorage.setItem('allBooks', ab);
    bookTextField.value = '';
    authorTextField.value = '';
  }

  // eslint-disable-next-line class-methods-use-this
  display() {
    const arrayFromLocalStorage = localStorage.getItem('allBooks');
    if (arrayFromLocalStorage !== null) {
      allBooks = JSON.parse(arrayFromLocalStorage);

      for (let i = 0; i < allBooks.length; i += 1) {
        const containerForSingleBook = document.createElement('div');
        containerForSingleBook.classList.add('containerBooks');
        containerForSingleBook.innerHTML = `<div class=bookDetails><p id='bookName'>${allBooks[i].bookName}</p> <p id='by'>by</p> <p id='bookAuthor'>${allBooks[i].bookAuthor}</p></div><button class="remove">remove</button>`;
        containerForAllBooks.appendChild(containerForSingleBook);
      }
    }
  }

  static handleRemoveButtonClick() {
    const removeButtons = document.getElementsByClassName('remove');
    for (let i = 0; i < removeButtons.length; i += 1) {
      // eslint-disable-next-line no-loop-func
      removeButtons[i].addEventListener('click', () => {
        allBooks.splice(i, 1);
        localStorage.setItem('allBooks', JSON.stringify(allBooks));

        // eslint-disable-next-line no-restricted-globals
        location.reload();
      });
    }
  }

  // eslint-disable-next-line class-methods-use-this
}

window.onload = () => {
  if (JSON.parse(localStorage.getItem('allBooks')) !== 0) {
    SingleBook.handleRemoveButtonClick();
  }
};

new SingleBook().display();
addButton.addEventListener('click', () => {
  if (bookTextField.value !== '' && authorTextField.value !== '') {
    const book = new SingleBook(bookTextField.value, authorTextField.value);
    book.add();
    SingleBook.handleRemoveButtonClick();
  }
});