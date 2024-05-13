const myLibrary = [];

function Book(title,author,pages,rating,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.rating = rating;
    this.read = read;

    // this.info = function() {
    //     let returnInfo;
    //     if (read == false){
    //         returnInfo = title + " by " + author + ", " +
    //         pages + ", " + "not read yet";
    //     }
    //     else {
    //         returnInfo = title + " by " + author + ", " +
    //         pages + ", " + "read";
    //     }
    //     return(returnInfo);
    // };
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}



const libContainer = document.getElementById("libContainer");

function displayLibrary(libArray){
  
  libContainer.innerHTML="";

  libArray.forEach(function(book){
    const bookDiv=document.createElement("div");
    bookDiv.classList.add('book');

    const bookTitle=document.createElement("p");
    bookTitle.classList.add("bookTitle");
    bookTitle.textContent=book.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("bookAuthor");
    bookAuthor.textContent=`Author: ${book.author}`;

    const bookPages = document.createElement("p");
    bookPages.classList.add("bookPages");
    bookPages.textContent = `Number of Pages: ${book.pages}`;

    const bookRating = document.createElement("p");
    bookRating.classList.add("bookRating");
    bookRating.textContent = `Your Rating: ${book.rating}/5`;

    const bookRead = document.createElement("input");
    bookRead.classList.add("bookRead");
    bookRead.type = "checkbox";
    if(book.read == true) {
      bookRead.checked=true;
    }
    else {
      bookRead.checked = false;
    }
    let readLabel = document.createElement('label');
    readLabel.textContent ="Read?";
  
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(bookRating);
    bookDiv.appendChild(bookRead);
    bookDiv.appendChild(readLabel);

    libContainer.appendChild(bookDiv);
  });

}

const book1 = new Book("title1","author1",123,5,true);
const book2 = new Book("title2","author2",321,4,false);
const book3 = new Book("title3","author3",321,3,true);

// console.log(book1);
// console.log(book2);
// console.log(book2.title);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
console.log(myLibrary[0], myLibrary.length);

displayLibrary(myLibrary);

// addBookForm() {
// }