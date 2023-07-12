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
    containerForSingleBook.innerHTML = `<p>${allBooks[i].bookName}</p> <br> <p>${allBooks[i].bookAuthor}</p><br><button class="remove">remove</button><br><hr>`;
    containerForAllBooks.appendChild(containerForSingleBook);
  }
}

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

// const allRemoveButtons = document.getElementsByClassName('remove');
// containerForAllBooks.addEventListener('click', (event) => {
//   if (event.target.classList.contains('remove')) {
//     for (let i = 0; i < allRemoveButtons.length; i += 1) {
//       allRemoveButtons[i].addEventListener('click', () => {
//         allBooks.splice(i, 1);
//         localStorage.setItem('allBooks', JSON.stringify(allBooks));
//         // eslint-disable-next-line no-restricted-globals
//         location.reload();
//       });
//     }
//   }
// });

// add button click  eventHandler
addButton.addEventListener('click', () => {
  if (bookTextField.value !== '' && authorTextField.value !== '') {
    add(bookTextField.value, authorTextField.value);
  }
});
