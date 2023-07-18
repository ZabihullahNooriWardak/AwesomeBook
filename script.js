// Dom manipulation
import {containerForAllBooks,bookTextField,authorTextField,addButton,addNew,contact,list,containerAllbooks,inputForNewBook,contactContainer,allBooks} from './modules/dom.js';
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
const date = new Date();
dateElement.textContent = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;



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