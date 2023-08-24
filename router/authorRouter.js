const express = require('express');
const { postAuthor, getAuthors, getAuthorById, patchAuthor, deleteAuthorById } = require('../services/authorServices');
const auth = require('../auth/authorization')
const router = express.Router();
router.post('/', [auth, postAuthor]);
router.get('/', [auth, getAuthors]);
router.get('/:id', [auth, getAuthorById]);
router.patch('/:id', [auth, patchAuthor]);
router.delete('/:id', [auth, deleteAuthorById]);

module.exports = router;