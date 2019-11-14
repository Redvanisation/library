let myLibrary = [];

function Book(name, author, pages, status) {

    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;

}
const btnNewBook = document.querySelector('#newbook');
const btn = document.querySelector('#add-book');
const booksDiv = document.querySelector('#books-div');


btn.addEventListener('click', addBook);
btnNewBook.addEventListener('click', showNewBook);

function showNewBook(){
    //document.querySelector('#book-form').visible = true;
} 

function render(arr, elem) {
    elem.innerHTML = '';
    // console.log(arr);
    
    arr.forEach(book => {
        elem.innerHTML += `<h3 class="title">Name: ${book.name}</h3> 
                            <h4 class="title">Author: ${book.author}</h4>
                            <h4 class="title">Pages: ${book.pages}</h4>
                            <h4 class="title">Status: ${book.status}</h4>
                            <button id="change-status" onclick="changeStatus(${arr.indexOf(book)}, myLibrary)">Change status</button>
                            <button id="remove-book" onclick="removeBook(${arr.indexOf(book)}, myLibrary)">Remove</button>`;
                            console.log(arr.length);
    });
}

function changeStatus(index, arr) { 
    arr[index].status === 'Read' ? arr[index].status = 'Not Read' : arr[index].status = 'Read';
    render(myLibrary, booksDiv);
}

function removeBook(index, arr){
    arr.splice(index, 1);
    render(myLibrary, booksDiv);
    console.log(arr.length);
}

function addBook() {
    const name = document.querySelector('#book-name').value;
    const author = document.querySelector('#book-author').value;
    const pages = document.querySelector('#book-pages').value;
    const status = document.querySelector('input[name="book-status"]:checked').value;

    if (!name && !author && !pages && !status) return alert("Please enter all book details");
    

    myLibrary.push( new Book(name, author, pages, status));
    render(myLibrary, booksDiv);
}