const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
    id: String,
    title: String,
    auther: String,
    publisher: String,
    price: String
});

const booksModel = mongoose.model("books", recipeSchema, "books");

module.exports = booksModel;
