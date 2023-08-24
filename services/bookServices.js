const errorTemplate = require('../templates/errorTemplate')
const { findBooks, findBook, saveBook,updateBook , deleteBook} = require('../db/bookDb')
const messages = require('../messages/messages')
const successTemplate = require('../templates/succesTemplate')
const mongoose = require('mongoose')
const bookModel = require('../models/bookModel')
exports.getAllBooks = async (req, res) => {
    try {
        const books = await findBooks({}, '-__v');
        return successTemplate(res, books, messages.book_found, 200, true)

    } catch (err) {
        return errorTemplate(res, err, messages.book_not_found, 500);
    }
}

exports.getAllBooksId = async (req, res) => {
    try {
        const books = await findBooks({}, '_id, title');
        return successTemplate(res, books, messages.book_found, 200, true)

    } catch (err) {
        return errorTemplate(res, err, messages.book_not_found, 500);
    }
}

exports.getBookById = async (req, res) => {
    try {
        const book = await findBook({ _id: req?.params?.id }, '-__v');
        if (!book) {
            throw new Error(messages.book_not_found)
        } else {
            return successTemplate(res, book, messages.book_found, 200, true)
        }
    } catch (err) {
        return errorTemplate(res, err, err.message, 500);
    }
}
exports.postBook = async (req, res) => {
    try {
        const book = await findBook(req.body)
        if (book) {
            throw new Error(messages.book_categoried)
        } else {
            const newBook = new bookModel({
                _id: new mongoose.Types.ObjectId(),
                ...req.body
            });
            const savedBook = await saveBook(newBook)
            return successTemplate(res, savedBook, messages.book_saved, 201, true)
        }

    } catch (err) {
        return errorTemplate(res, err, err.message, 500);
    }
}
exports.updateBookById = async (req, res) => {
    try {
        const id = req?.params?.id
        const updtBook = new bookModel({
            ...req.body
        })
        const updatedBook = await updateBook({_id:id}, updtBook)
        return successTemplate(res, updatedBook, messages.book_updated, 200,true)
    } catch (err) {
        return errorTemplate(res, err, messages.book_not_updated, 500);
    }
}
exports.deleteBookById = async (req, res) => {
    try {
        const id = req?.params?.id
        const result = await deleteBook({_id:id});
        return successTemplate(res, result, messages.book_deleted, 200,true)
    } catch (err) {
        return errorTemplate(res, err, messages.book_not_deleted, 500);
    }
}