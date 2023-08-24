const express = require('express');
const router = express.Router();
const { getAllBooks, getBookById, postBook, updateBookById, deleteBookById, getAllBooksId } = require('../services/bookServices.js')
const auth = require('../auth/authorization')

router.get('/', [auth, getAllBooks]);

router.get('/books', [auth, getAllBooksId])

router.get('/:id', [auth, getBookById])


router.post('/', [auth, postBook]);

router.put('/:id', [auth, updateBookById]);

router.delete('/:id', [auth, deleteBookById]);

module.exports = router