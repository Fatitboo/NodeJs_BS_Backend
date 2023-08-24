const mongoose = require('mongoose');
const {  findBook, findBooks, updateBook, deleteBook, saveBook} = require('./bookDb.js');
const Book = require('../models/bookModel.js');
jest.mock('./bookDb')

describe("Test Book Suite", ()=>{
    test("As a user I want to save a book to DB", async ()=>{
        const newBook = new Book({
            _id: "64e712fcfe48b3e2527453ac",
            title: "Hanh phuc cua mot tang gia",
            author: "Phat Nguyen",
            ISBN: "10-23834-2394",
            numberOfPages: 200,
            price: 100000,
            yearPublished: "1945"
        })
        const savedBook = await saveBook(newBook);
        expect(savedBook._id).toEqual("64e712fcfe48b3e2527453ac");
        expect(savedBook.title).toEqual("Hanh phuc cua mot tang gia");
        expect(savedBook.author).toEqual("Phat Nguyen");
        expect(savedBook.ISBN).toEqual("10-23834-2394");
        expect(savedBook.numberOfPages).toEqual(200);
        expect(savedBook.price).toEqual(100000);
        expect(savedBook.yearPublished).toEqual("1945");
    });
    test("As a user I want to get all book", async ()=>{
        const books = await findBooks({_id: "64e712fcfe48b3e2527453ac"})
        expect(books[0]._id).toEqual("64e712fcfe48b3e2527453ac");
        expect(books[0].title).toEqual("Hanh phuc cua mot tang gia");
        expect(books[0].author).toEqual("Phat Nguyen");
        expect(books[0].ISBN).toEqual("10-23834-2394");
        expect(books[0].numberOfPages).toEqual(200);
        expect(books[0].price).toEqual(100000);
        expect(books[0].yearPublished).toEqual("1945");
    });
    test("As a user I want to get one book", async ()=>{
        const book = await findBook({_id: "64e712fcfe48b3e2527453ac"})
        expect(book._id).toEqual("64e712fcfe48b3e2527453ac");
        expect(book.title).toEqual("Hanh phuc cua mot tang gia");
        expect(book.author).toEqual("Phat Nguyen");
        expect(book.ISBN).toEqual("10-23834-2394");
        expect(book.numberOfPages).toEqual(200);
        expect(book.price).toEqual(100000);
        expect(book.yearPublished).toEqual("1945");
    });
    test("As a user I want to update a book", async ()=>{
        // {"acknowledged": true,
        // "modifiedCount": 1,
        // "upsertedId": null,
        // "upsertedCount": 0,
        // "matchedCount": 1}
        const result = await updateBook({_id: "64e712fcfe48b3e2527453ac"})
        expect(result.acknowledged).toEqual(true);
        expect(result.modifiedCount).toEqual(1);
        expect(result.upsertedId).toEqual(null);
        expect(result.upsertedCount).toEqual(0);
        expect(result.matchedCount).toEqual(1);

    });
    
    test("As a user I want to delete a book", async ()=>{

        const result = await deleteBook({_id: "64e712fcfe48b3e2527453ac"})
        expect(result.acknowledged).toEqual(true);
        expect(result.deletedCount).toEqual(1);

    });
})