let myLibrary = [];

const btn = document.querySelector('#add-book');
const div = document.querySelector('#books-div');

btn.addEventListener('click', addBook);

function render(arr, elem) {
    elem.innerHTML = '';
    arr.forEach(book => {
        elem.innerHTML += `<h3 class="title">${book}</h3>`;
    });
}

function addBook() {
    const book = document.querySelector('#book-input').value;

    if (!book) return  alert("Please enter a book title");
    
    myLibrary.push(book);
    console.log(myLibrary);
    console.log(render(myLibrary, div));
}