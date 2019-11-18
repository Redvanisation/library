/* eslint no-undef: "error" */
/* eslint-env browser */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "changeStatus||removeBook" }] */
/* eslint no-alert: "error" */
const myLibrary = [];

function Book(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

const btnNewBook = document.querySelector('#newbook');
const btn = document.querySelector('#add-book');
const cancel = document.querySelector('#cancel-book');
const booksDiv = document.querySelector('#books-div');
const bookForm = document.querySelector('#book-form');
const background = document.querySelector('.form-background');

function customAlert(msg) {
  return window.alert(msg); // eslint-disable-line no-alert
}

function showNewBook() {
  bookForm.classList.remove('hidden');
  bookForm.classList.add('show');

  background.classList.remove('hiddenbg');
  background.classList.add('showbg');
}

function hideNewBook() {
  bookForm.classList.remove('show');
  bookForm.classList.add('hidden');

  background.classList.remove('showbg');
  background.classList.add('hiddenbg');
}

function render(arr, elem) {
  const element = elem;
  element.innerHTML = '';

  arr.forEach((book) => {
    element.innerHTML += ` <tr> 
                          <td> 
                              <p class=" form-content">${book.name}</p>  
                          </td>
                          <td> 
                              <p class="form-content">${book.author}</p> 
                          </td>
                          <td> 
                              <p class="form-content">${book.pages}</p>  
                          </td>
                          <td>                   
                              <button class="form-content ui button" id="change-status" onclick="changeStatus(${arr.indexOf(book)}, myLibrary)">${book.status}</button> 
                          </td>
                          <td>
                              <button class="form-content ui button" id="remove-book" onclick="removeBook(${arr.indexOf(book)}, myLibrary)">X</button>
                          </td>
                        </tr>`;
  });
}

function changeStatus(index, arr) {
  const ind = arr[index];

  if (ind.status === 'Read') {
    ind.status = 'Not Read';
  } else {
    ind.status = 'Read';
  }
  render(myLibrary, booksDiv);
}

function removeBook(index, arr) {
  arr.splice(index, 1);
  render(myLibrary, booksDiv);
}

function addBook() {
  const name = document.querySelector('#book-name');
  const author = document.querySelector('#book-author');
  const pages = document.querySelector('#book-pages');
  const status = document.querySelector('input[name="book-status"]');

  if (status.checked) {
    status.value = 'Read';
  } else {
    status.value = 'Not Read';
  }

  if (!name.value || !author.value || !pages.value) {
    return customAlert('Please enter all book details');
  }

  myLibrary.push(new Book(name.value, author.value, pages.value, status.value));

  name.value = '';
  author.value = '';
  pages.value = '';

  render(myLibrary, booksDiv);

  return hideNewBook();
}

btn.addEventListener('click', addBook);
cancel.addEventListener('click', hideNewBook);

btnNewBook.addEventListener('click', showNewBook);
background.addEventListener('click', hideNewBook);
