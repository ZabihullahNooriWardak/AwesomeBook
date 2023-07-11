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
    const parentDiv = document.createElement('div');
    parentDiv.classList.add('parent-container');
    removeButton.classList.add('remove');
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
    parentDiv.appendChild(bookName);
    parentDiv.appendChild(bookAutor);
    parentDiv.appendChild(removeButton);
    const hr = document.createElement('hr');
    parentDiv.appendChild(hr);
    allBooks.appendChild(parentDiv);
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
  }
});

window.onload = () => {
  for (let i = 0; i < arrayOfAllbooks.length; i += 1) {
    const bookName = document.createElement('p');
    const bookAutor = document.createElement('p');
    const parentDiv = document.createElement('div');
    parentDiv.classList.add('parent-container');
    const removeButton = document.createElement('button');
    const removeButtonText = document.createTextNode('Remove');
    removeButton.classList.add('remove');
    const allBooks = document.querySelector('.allBooks');
    bookName.innerText = arrayOfAllbooks[i].bookName;
    bookAutor.innerText = arrayOfAllbooks[i].title;
    removeButton.appendChild(removeButtonText);
    parentDiv.appendChild(bookName);
    parentDiv.appendChild(bookAutor);
    parentDiv.appendChild(removeButton);
    const hr = document.createElement('hr');
    parentDiv.appendChild(hr);
    allBooks.appendChild(parentDiv);
  }
};


document.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove')) {
    // Handle the removal of the parent element
    const parentElement = event.target.closest('.parent-container');
    if (parentElement) {
      console.log(parentElement);
      parentElement.remove();
    }
  }
});

