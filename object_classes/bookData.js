class Book {
    constructor(title, author,publisher,year,genre) {
        this.title = title,
        this.author = author,
        this.year = year,
        this.publisher = publisher,
        this.genre = genre

    }
    describe () {
        console.log(`"${this.title}-${this.author} (${this.year})"`)
    }
    displayGenre () {
        console.log(`Genre: ${this.genre}, Publisher: ${this.publisher}`);
    }
}

const classicBook = new Book("Pride and Prejudice", "Jane Austen", "T. Egerton", 1813, "Classic");
const sciFiBook = new Book("Dune", "Frank Herbert", "Chilton Books", 1965, "Science Fiction");
console.log(classicBook)
console.log(sciFiBook)
classicBook.describe()
classicBook.displayGenre()
sciFiBook.describe()
sciFiBook.displayGenre()