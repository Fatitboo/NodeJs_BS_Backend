const mongoose = require('mongoose');
const Books = require('../models/bookModel.js')

const findBooks = async (obj, selectedValues) =>{
    return await Books.find(obj).select(selectedValues).exec();
}
const findBook = async (obj, selectedValues) =>{
    return await Books.findOne(obj).select(selectedValues).exec();
}
const saveBook = async (newBook) =>{
    return await newBook.save();
}
const updateBook = async (filter, update)=>{
    return await Books.updateOne(filter, update, {new:true}).exec();
}

const deleteBook = async (obj)=>{
    return Books.deleteOne(obj).exec();
}
module.exports = {findBooks, findBook, saveBook, updateBook,deleteBook}