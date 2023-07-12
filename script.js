// list for all books
const allBooks = [];
const arrayFromLocalStorage = localStorage.getItem('allBooks');
const arrayOfAllbooksFromLocal = JSON.parse(arrayFromLocalStorage);
// Dom manipulation
const containerForAllBooks = document.querySelector('.container');
const bookTextField = document.querySelector('.bookName');
const authorTextField = document.querySelector('.bookAuthor');
const addButton = document.querySelector('.add');

// Function for adding new Book
function add(name, author) {
  const containerForSingleBook = document.createElement('div');
  containerForSingleBook.innerHTML = `<p>${name}</p> <br> <p>${author}</p><br><button class="remove">remove</button><br><hr>`;
  containerForAllBooks.appendChild(containerForSingleBook);
  const singleBookObject = { bookName: name, bookAuthor: author };
  allBooks.push(singleBookObject);
  localStorage.setItem('allBooks', JSON.stringify(allBooks));
  
  bookTextField.value = '';
  authorTextField.value = '';
}
// remove button function

const allRemoveButtons = document.getElementsByClassName('remove');
containerForAllBooks.addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('remove')) {
    for (let i = 0; i < allRemoveButtons.length; i += 1) {
      allRemoveButtons[i].addEventListener('click', () => {
        allBooks.splice(i, 1);
      });
    }
  }
});


// add button click  eventHandler
addButton.addEventListener('click', () => {
  if (bookTextField.value !== '' && authorTextField.value !== '') {
    add(bookTextField.value, authorTextField.value);
  }
});
