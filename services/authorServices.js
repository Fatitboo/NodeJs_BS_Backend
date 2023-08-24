const errorTemplate = require('../templates/errorTemplate')
const messages = require('../messages/messages')
const successTemplate = require('../templates/succesTemplate')
const mongoose = require('mongoose')
const Author = require('../models/authorModel')
const {findAuthorByBookId, findAuthors, updateAuthor,deleteAuthor, saveAuthor} = require('../db/authorDb')

exports.postAuthor = async (req, res )=>{
    try {
        // find author by name 
        const author = await findAuthorByBookId({name: req.body.name, book:req.body.book});
        if(author){
            throw new Error(messages.author_exist)
        }
        else{
            const newAuthor = new Author({...req.body, _id:new mongoose.Types.ObjectId()});
            const savedAuthor = await saveAuthor(newAuthor);
            successTemplate(res, savedAuthor, messages.author_saved, 201)
        }
    } catch (error) {
        errorTemplate(res, error , error.message, 500)
    }
}

exports.getAuthors =async (req, res)=>{
    try {
        const authors = await findAuthors({});
        if(authors.length>0){
            successTemplate(res, authors, messages.authors_found, 200)
        }
        else{
            throw new Error(messages.authors_not_found)
        }
    } catch (error) {
        errorTemplate(res, error, error.message, 500)
    }
}
exports.getAuthorById = async (req, res)=>{
    try {
        const author = await findAuthorByBookId({_id: req?.params?.id})
        if(author){
            successTemplate(res, author, messages.author_found, 200)
        }
        else{
            throw new Error(messages.author_not_found)
        }
    } catch (error) {
        errorTemplate(res, error, error.message, 500)
    }
}
exports.patchAuthor =async (req, res)=>{
    try {
        const author  = await findAuthorByBookId({_id:req.params.id})
        if(author){
            const author =  new Author({...req.body})
            const uptAuthor = await updateAuthor({_id:req.params.id}, author)
            successTemplate(res, uptAuthor, messages.author_updated, 200)

        } else{
            throw new Error(messages.author_not_found)
        }
    } catch (error) {
        errorTemplate(res, error,messages.author_not_updated, 500) 
    }
}
exports.deleteAuthorById = async (req, res)=>{
    try {
        const author  = await findAuthorByBookId({_id:req.params.id})
        if(author){
            const dltAuthor = await deleteAuthor({_id:req.params.id})
            successTemplate(res, dltAuthor, messages.author_deleted, 200)

        } else{
            throw new Error(messages.author_not_found)
        }
    } catch (error) {
        errorTemplate(res, error,messages.author_not_deleted, 500) 
        
    }
} 