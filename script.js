let allBooksArray = [];

const arr = localStorage.getItem('arrayBooks');
const arrayOfAllbooks = JSON.parse(arr);

// javascript for DOM manipulation
const addButton = document.querySelector('.addButton');
addButton.addEventListener('click', () => {
  if (document.querySelector('.title').value !== '' && document.querySelector('.author').value !== '') {
    const bookName = document.createElement('p');
    const bookAutor = document.createElement('p');
    const removeButton = document.createElement('button');
    const removeButtonText = document.createTextNode('Remove');
    const allBooks = document.querySelector('.allBooks');
    const title = document.querySelector('.title').value;
    const author = document.querySelector('.author').value;
    const singlebook = { bookName: 'noName', title: 'no title' };
    singlebook.bookName = title;
    singlebook.title = author;
    allBooksArray.push(singlebook);
    allBooksArray = arrayOfAllbooks.concat(allBooksArray);
    localStorage.setItem('arrayBooks', JSON.stringify(allBooksArray));
    bookName.innerText = title;
    bookAutor.innerText = author;
    removeButton.appendChild(removeButtonText);
    allBooks.appendChild(bookName);
    allBooks.appendChild(bookAutor);
    allBooks.appendChild(removeButton);
    const hr = document.createElement('hr');
    allBooks.appendChild(hr);
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
  }
});

window.onload = () => {
  for (let i = 0; i < arrayOfAllbooks.length; i += 1) {
    const bookName = document.createElement('p');
    const bookAutor = document.createElement('p');
    const removeButton = document.createElement('button');
    const removeButtonText = document.createTextNode('Remove');
    const allBooks = document.querySelector('.allBooks');
    bookName.innerText = arrayOfAllbooks[i].bookName;
    bookAutor.innerText = arrayOfAllbooks[i].title;
    removeButton.appendChild(removeButtonText);
    allBooks.appendChild(bookName);
    allBooks.appendChild(bookAutor);
    allBooks.appendChild(removeButton);
    const hr = document.createElement('hr');
    allBooks.appendChild(hr);
  }
};