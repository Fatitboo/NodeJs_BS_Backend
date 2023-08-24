const mongoose = require('mongoose');
const Author = require('../models/authorModel')
const {findAuthorByBookId, findAuthors, updateAuthor, deleteAuthor, saveAuthor}=require('../db/authorDb')
jest.mock('./authorDb')

describe("Test Author Suite", ()=>{
    test("As a user I want to save a author to DB", async ()=>{
        const newAuthor = new Author({
            _id:"64e72dd100a09b25657ec15c",
            name: "Phat Nguyen",
            book: "64e712fcfe48b3e2527453ac",
            publisher: "CTTNHH1MT",
            website: "http:phatdeptraipro",
            twitter: "@PhatNguyen",
            about: "I'm a handsome author"
        })
        const savedAuthor = await saveAuthor(newAuthor);
        expect(savedAuthor._id).toEqual("64e72dd100a09b25657ec15c");
        expect(savedAuthor.name).toEqual("Phat Nguyen");
        expect(savedAuthor.book).toEqual("64e712fcfe48b3e2527453ac");
        expect(savedAuthor.publisher).toEqual("CTTNHH1MT");
        expect(savedAuthor.website).toEqual("http:phatdeptraipro");
        expect(savedAuthor.twitter).toEqual("@PhatNguyen");
        expect(savedAuthor.about).toEqual("I'm a handsome author");
    });
    test("As a user I want to get all authors", async ()=>{
        const authors = await findAuthors({})
        expect(authors[0]._id).toEqual("64e72dd100a09b25657ec15c");
        expect(authors[0].name).toEqual("Phat Nguyen");
        expect(authors[0].book).toEqual("64e712fcfe48b3e2527453ac");
        expect(authors[0].publisher).toEqual("CTTNHH1MT");
        expect(authors[0].website).toEqual("http:phatdeptraipro");
        expect(authors[0].twitter).toEqual("@PhatNguyen");
        expect(authors[0].about).toEqual("I'm a handsome author");
    });
    test("As a user I want to get one author", async ()=>{
        const savedAuthor = await findAuthorByBookId({_id: "64e712fcfe48b3e2527453ac"})
        expect(savedAuthor._id).toEqual("64e72dd100a09b25657ec15c");
        expect(savedAuthor.name).toEqual("Phat Nguyen");
        expect(savedAuthor.book).toEqual("64e712fcfe48b3e2527453ac");
        expect(savedAuthor.publisher).toEqual("CTTNHH1MT");
        expect(savedAuthor.website).toEqual("http:phatdeptraipro");
        expect(savedAuthor.twitter).toEqual("@PhatNguyen");
        expect(savedAuthor.about).toEqual("I'm a handsome author");
    });
    test("As a user I want to update a author", async ()=>{
        // {"acknowledged": true,
        // "modifiedCount": 1,
        // "upsertedId": null,
        // "upsertedCount": 0,
        // "matchedCount": 1}
        const result = await updateAuthor({_id: "64e712fcfe48b3e2527453ac"})
        expect(result.acknowledged).toEqual(true);
        expect(result.modifiedCount).toEqual(1);
        expect(result.upsertedId).toEqual(null);
        expect(result.upsertedCount).toEqual(0);
        expect(result.matchedCount).toEqual(1);

    });
    
    test("As a user I want to delete a book", async ()=>{

        const result = await deleteAuthor({_id: "64e712fcfe48b3e2527453ac"})
        expect(result.acknowledged).toEqual(true);
        expect(result.deletedCount).toEqual(1);

    });
})