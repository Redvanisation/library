let myLibrary = [];

function Book(name, author, pages, status) {

    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;

}
const btnNewBook = document.querySelector('#newbook');
const btn = document.querySelector('#add-book');
const div = document.querySelector('#books-div');
//const removeBook = document.querySelector('#remove-book');


btn.addEventListener('click', addBook);
btnNewBook.addEventListener('click', showNewBook);
//removeBook.addEventListener('click', removeBook);

function removeBook(book){
    console.log(book);
}

function showNewBook(){
    //document.querySelector('#book-form').visible = true;
} 

function render(arr, elem) {
    elem.innerHTML = '';
    arr.forEach(book => {
        elem.innerHTML += `<h3 class="title">Name: ${book.name}</h3> 
                            <h4 class="title">Author: ${book.author}</h4>
                            <h4 class="title">Pages: ${book.pages}</h4>
                            <h4 class="title">Status: ${book.status}</h4>
                            <button id="remove-book" onclick="removeBook(elem)">Remove</button>`;
    });
}

function removeBook(){
    console.log("remove");
}

function addBook() {
    const name = document.querySelector('#book-name').value;
    const author = document.querySelector('#book-author').value;
    const pages = document.querySelector('#book-pages').value;
    const status = document.querySelector('input[name="book-status"]:checked').value;

    if (!name && !author && !pages && !status) return alert("Please enter all book details");
    

    myLibrary.push( new Book(name, author, pages, status));
    console.log(myLibrary);
    console.log(render(myLibrary, div));
    console.log(status);
}