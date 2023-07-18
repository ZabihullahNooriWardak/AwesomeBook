
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
