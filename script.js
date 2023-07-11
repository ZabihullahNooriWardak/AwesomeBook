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
