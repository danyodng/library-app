const myLibrary = [];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        let returnInfo;
        if (read == false){
            returnInfo = title + " by " + author + ", " +
            pages + ", " + "not read yet";
        }
        else {
            returnInfo = title + " by " + author + ", " +
            pages + ", " + "read";
        }
        return(returnInfo);
    };
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}