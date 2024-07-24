//! Building Book API Project using Express JS

//* We required Express package
const express = require("express");

//* Creating an instance of express
const app = express();

//* Creating a PORT
const PORT = 8082;

//* Receiving data from the client configuration
app.use(express.json());

//* Creating a Books data
const books = [
  { id: 1, title: "The great Gatsby", author: "F.scott" },
  { id: 2, title: "The Moby Dic", author: "Herman" },
  { id: 3, title: "The Mern Stack", author: "Abhishek B" },
];

//* Defining Home Route handler
app.get("/", (req, res) => {
  res.json({
    status: "Success",
    message: "Welcome to my book api using express",
    Author:"Abhishek B"
  });
});

//* Fetching all books
app.get("/books", (req, res) => {
  res.json({
    status: "Success",
    message: "Books fetched Successfully",
    data: books,
  });
});

//* Find a book
app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const bookFound = books.find((book) => book.id === parseInt(id));
  console.log(bookFound);
  if (!bookFound) {
    return res.json({
      status: "Failed",
      message: `Book with id ${id} not found.`,
    });
  }
  res.json({
    status: "Success",
    message: "Book is fetched Successfully",
    data: bookFound,
  });
});

//* Create a Book
app.post("/books", (req, res) => {
  const newPost = req.body;
  books.push(newPost);
  res.json({
    status: "Success",
    message: "Book is Created Successfully",
    data:books,
  });
});

//* Start our Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
