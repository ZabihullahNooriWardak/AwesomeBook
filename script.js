const allBooksArray = [];

const arr = localStorage.getItem('arrayBooks');
const arrayOfAllbooks = JSON.parse(arr);

const addButton = document.querySelector('.addButton');
const allBooksContainer = document.querySelector('.allBooks');

// Function to create a book element
function createBookElement(bookName, author) {
  const parentDiv = document.createElement('div');
  parentDiv.classList.add('parent-container');

  const bookTitle = document.createElement('p');
  bookTitle.classList.add('book-title');
  bookTitle.innerText = bookName;

  const bookAuthor = document.createElement('p');
  bookAuthor.classList.add('book-author');
  bookAuthor.innerText = author;

  const removeButton = document.createElement('button');
  removeButton.classList.add('remove');
  removeButton.innerText = 'Remove';

  parentDiv.appendChild(bookTitle);
  parentDiv.appendChild(bookAuthor);
  parentDiv.appendChild(removeButton);

  return parentDiv;
}

// Function to add a book
function addBook() {
  const titleInput = document.querySelector('.title');
  const authorInput = document.querySelector('.author');

  const title = titleInput.value;
  const author = authorInput.value;

  if (title !== '' && author !== '') {
    const bookElement = createBookElement(title, author);
    allBooksContainer.appendChild(bookElement);

    const singleBook = {
      bookName: title,
      title: author,
    };
    allBooksArray.push(singleBook);
    localStorage.setItem('arrayBooks', JSON.stringify(allBooksArray));

    titleInput.value = '';
    authorInput.value = '';
  }
}

// Event listener for Add button
addButton.addEventListener('click', addBook);

// Function to handle book removal
function handleRemove(event) {
  const removeButton = event.target;
  if (removeButton.classList.contains('remove')) {
    const parentElement = removeButton.closest('.parent-container');
    if (parentElement) {
      parentElement.remove();

      const titleElement = parentElement.querySelector('.book-title');
      const authorElement = parentElement.querySelector('.book-author');
      const title = titleElement.innerText;
      const author = authorElement.innerText;
      const index = arrayOfAllbooks.findIndex(
        (book) => book.bookName === title && book.title === author,
      );
      if (index !== -1) {
        arrayOfAllbooks.splice(index, 1);
        localStorage.setItem('arrayBooks', JSON.stringify(arrayOfAllbooks));
      }
    }
  }
}

// Event delegation for Remove button
document.addEventListener('click', handleRemove);

// Function to initialize the books from localStorage
function initializeBooks() {
  arrayOfAllbooks.forEach((book) => {
    const bookElement = createBookElement(book.bookName, book.title);
    allBooksContainer.appendChild(bookElement);
  });
}

// Load event listener
window.addEventListener('load', initializeBooks);
