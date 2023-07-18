// Dom manipulation

export {
  // eslint-disable-next-line max-len, no-use-before-define
  removeButtons, containerForSingleBook, containerForAllBooks, bookTextField, authorTextField, addButton, addNew, contact, list, containerAllbooks, inputForNewBook, contactContainer,
};
const containerForAllBooks = document.querySelector('.container');
const bookTextField = document.querySelector('.bookName');
const authorTextField = document.querySelector('.bookAuthor');
const addButton = document.querySelector('.add');
// Dom manipulation for the header Menu items
const addNew = document.getElementById('addNew');
const contact = document.getElementById('contact');
const list = document.getElementById('list');
const containerAllbooks = document.querySelector('div.container');
const inputForNewBook = document.querySelector('div.inputs');
const contactContainer = document.querySelector('div.contact');
const containerForSingleBook = document.createElement('div');
containerForSingleBook.classList.add('containerBooks');
const removeButtons = document.getElementsByClassName('remove');
