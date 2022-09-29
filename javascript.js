// Save books to library 
let bookGrid = document.getElementById('bookGrid')
let myLibrary = [];

function book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function  addBookToLibrary(){
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').checked
    
    const newBook = new book(title, author, pages, read)

    myLibrary.push(newBook)
}

// Modal to Add Books
const addBookButton = document.getElementById('addBookButton');
const bookModal = document.getElementById('modal');

addBookButton.addEventListener('click', function(){
    bookModal.style.display = 'flex';
})
window.onclick = function(event){
    if (event.target == modal){
        closeModal()
    }
}

document.onkeydown = function(e) {
    if (e.key == 'Escape'){
        closeModal()
    }
}

function closeModal(){
    bookModal.style.display = 'none'  
    document.querySelector('form').reset()
}

const submitButton = document.getElementById('bookSubmit')
submitButton.addEventListener('click', function(e){
    if(title.value === '' || author.value === '' || pages.value === ''){
        
    }else{
    e.preventDefault()
    addBookToLibrary()
    updateGrid()
    closeModal()}
})

function updateGrid(){
    bookGrid.textContent=''
    for(let book of myLibrary){
        createCell(book)
    }
}

const createCell= (book) => {
    const bookCell = document.createElement('div')
    const title= document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const read = document.createElement('button')
    const removeBook = document.createElement('button')

    bookCell.classList.add('bookCell')
    read.classList.add('readToggle')
    removeBook.classList.add('removeBook')

    if(book.read === true){
       read.textContent = "Read"
    } else {
        read.textContent = "Not Read"
    }

    title.textContent = book.title
    author.textContent = book.author
    pages.textContent = book.pages
    removeBook.textContent = 'Remove Book'
    
    bookCell.appendChild(title)
    bookCell.appendChild(author)
    bookCell.appendChild(pages)
    bookCell.appendChild(read)
    bookCell.appendChild(removeBook)
    bookGrid.appendChild(bookCell)    
}

// Delete Book
const bookCellDelete = document.addEventListener('click', (e) => {
    const currentTarget = (e.target.parentNode.childNodes[0].innerHTML)
    if (e.target.innerHTML == 'Remove Book'){
        for (let i = 0; i < myLibrary.length; i++){
            if(currentTarget === myLibrary[i].title){
               myLibrary.splice(i, 1)
            }
            updateGrid()
        }
    }
})

// Changes read status on book
// Targets title of book on given card, then finds match in myLibrary
const readStatus = document.addEventListener('click', (e) => {
    const currentTarget = (e.target.parentNode.childNodes[0].innerHTML)
    if (e.target.innerHTML == 'Read'){
        for (let i = 0; i < myLibrary.length; i++){
            if(currentTarget === myLibrary[i].title){
                myLibrary[i].read = false
            }
            updateGrid()
        }
    } else if (e.target.innerHTML == 'Not Read') {
        for (let i = 0; i < myLibrary.length; i++){
            if(currentTarget === myLibrary[i].title){
                myLibrary[i].read = true
            }
            updateGrid()
        }
    } else{}
})