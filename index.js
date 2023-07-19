/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import { DateTime } from '../node_modules/luxon/src/luxon.js';
import {
  bookTextField, authorTextField, addButton, addNew, contact, list, containerAllbooks, inputForNewBook, contactContainer,
} from './modules/dom.js';
import BookList from './modules/classes.js';

list.addEventListener('click', () => {
  inputForNewBook.style.display = 'none';
  contactContainer.style.display = 'none';
  containerAllbooks.style.display = 'block';
  list.style.backgroundColor = 'black';
  contact.style.backgroundColor = 'grey';
  addNew.style.backgroundColor = 'grey';
  // eslint-disable-next-line no-restricted-globals
  location.reload();
});
addNew.addEventListener('click', () => {
  containerAllbooks.style.display = 'none';
  inputForNewBook.style.display = 'block';
  contactContainer.style.display = 'none';
  addNew.style.backgroundColor = 'black';
  contact.style.backgroundColor = 'grey';
  list.style.backgroundColor = 'grey';
});
contact.addEventListener('click', () => {
  containerAllbooks.style.display = 'none';
  inputForNewBook.style.display = 'none';
  contactContainer.style.display = 'block';
  addNew.style.backgroundColor = 'grey';
  contact.style.backgroundColor = 'black';
  list.style.backgroundColor = 'grey';
});

// Date
const dateElement = document.querySelector('.date');
const date = DateTime.now().toFormat('yyyy-MM-dd HH:mm:ss');
dateElement.textContent = date;

// class for single book

window.onload = () => {
  if (JSON.parse(localStorage.getItem('allBooks')) !== 0) {
    BookList.handleRemoveButtonClick();
  }
};

new BookList().display();
addButton.addEventListener('click', () => {
  if (bookTextField.value !== '' && authorTextField.value !== '') {
    const book = new BookList(bookTextField.value, authorTextField.value);
    book.add();
    BookList.handleRemoveButtonClick();
  }
});