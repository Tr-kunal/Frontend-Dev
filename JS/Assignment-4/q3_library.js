<<<<<<< HEAD
class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }
    issueBook() { this.isIssued = true; }
    returnBook() { this.isIssued = false; }
}

const books = [
    new Book("Book A", "Author 1", "111"),
    new Book("Book B", "Author 2", "222"),
    new Book("Book C", "Author 3", "333", true)
];

function showAvailable() {
    const available = books.filter(b => !b.isIssued);
    output.textContent = JSON.stringify(available, null, 2);
}

function issue() {
    const isbn = searchIsbn.value;
    const book = books.find(b => b.isbn === isbn);
    if (!book) return alert("Book not found");
    book.issueBook();
    alert("Book issued!");
}
=======
class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }
    issueBook() { this.isIssued = true; }
    returnBook() { this.isIssued = false; }
}

const books = [
    new Book("Book A", "Author 1", "111"),
    new Book("Book B", "Author 2", "222"),
    new Book("Book C", "Author 3", "333", true)
];

function showAvailable() {
    const available = books.filter(b => !b.isIssued);
    output.textContent = JSON.stringify(available, null, 2);
}

function issue() {
    const isbn = searchIsbn.value;
    const book = books.find(b => b.isbn === isbn);
    if (!book) return alert("Book not found");
    book.issueBook();
    alert("Book issued!");
}
>>>>>>> c2b317ebf8ef8febcb1e0c33420d57a9509ce0da
