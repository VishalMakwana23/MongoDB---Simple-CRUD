require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");

const booksModel = require("./models/books");

mongoose
  .connect(process.env.MONGOURL)
  .then(() => console.log("mongo db connected"));

app.get("/", (req, res) => res.send("Welcome to Books management App "));

app.get("/list", async (req, res) => {
    const booksList = await booksModel.find({});

    if(booksList.length == 0){
        return res.json({ data: "No Books found"});
    }

    return res.json({ data: booksList });
});

// adding Books
app.post("/addBook", (req, res) => {
    const { newBook } = req.body;
    booksModel.create(newBook);
    return res.json({ data: "New Book added successfully"});
})

// update Book
app.put("/updateBook/:id", async (req, res) => {
    const id = req.params.id
    const title = req.body.title;
    const auth = req.body.auther;
    const pub = req.body.publisher;
    const price = req.body.price;
    const updatedBook = await booksModel.findOneAndUpdate(
        { id: id },
        { title: title,
         auther: auth,
         publisher: pub,
         price: price},
        {new:true}
    );

    return res.json({ data: "Books detail updated successfully" });
});

// delete Book
app.delete("/deleteBook/:title", async (req, res) => {
    const title = req.params.title;
    const deletedBook = await booksModel.findOneAndDelete({ title: title });
    return res.json({ data: "Book deleted successfully" });
});

app.listen(port, () => console.log(`server running on port ${port}`));