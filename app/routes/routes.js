const express = require("express");
const router = express.Router();
const books = require("../controllers/book.controller.js");

// done: paost
router.post("/", books.create);

// done: get
router.get("/", books.findAll);

// Retrieve all published books
router.get("/published", books.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", books.findOne);

// Update a Tutorial with id
router.put("/:id", books.update);

// Delete a Tutorial with id
router.delete("/:id", books.delete);

// Delete all books
router.delete("/", books.deleteAll);

// app.use('/api/books', router);
module.exports = router;