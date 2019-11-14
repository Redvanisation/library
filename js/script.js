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
const bookForm = document.querySelector('#book-form');



btn.addEventListener('click', addBook);
btnNewBook.addEventListener('click', showNewBook);

function showNewBook(){
    bookForm.classList.remove('hidden');
} 

function render(arr, elem) {
    elem.innerHTML = '';
    // console.log(arr);
    elem.classList.add('row');
    arr.forEach(book => {
        elem.innerHTML += `     <p class="form-content">${book.name}</p>
                                <p class="form-content">${book.author}</p>
                                <p class="form-content">${book.pages}</p>
                                

                                <button class="ui button" id="change-status" onclick="changeStatus(${arr.indexOf(book)}, myLibrary)">${book.status}</button>

                                <button class="ui button" id="remove-book" onclick="removeBook(${arr.indexOf(book)}, myLibrary)">X</button>
                        `;
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
    const status = document.querySelector('input[name="book-status"]');
    
    status.checked ? status.value = "Read" : status.value = "Not Read";
  
    if (!name && !author && !pages) return alert("Please enter all book details");
    

    myLibrary.push( new Book(name, author, pages, status.value));
    render(myLibrary, booksDiv);
    bookForm.classList.add('hidden');

}