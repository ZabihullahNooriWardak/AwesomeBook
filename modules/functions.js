/* eslint-disable import/no-unresolved */
// Dom manipulation
import {
  addNew, contact, list, containerAllbooks, inputForNewBook, contactContainer,
} from './modules/dom.js';

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
