const db = require("../models");
const Book = db.books;
const Op = db.Sequelize.Op;

// Create and Save a new Book
exports.create = (req, res) => {
// Validate request
console.log('create---', req.body)
if (!req.body.title) {
  res.status(400).send({
    message: "Content can not be empty!"
  });
  return;
}

// Create a Book
const book = {
  title: req.body.title,
  author: req.body.author,
  release_date: req.body.release_date, 
  subject: req.body.subject,
};

// Save Book in the database
Book.create(book)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Book."
    });
  });
};

// Retrieve all Books from the database.
exports.findAll = (req, res) => {
  console.log('cha')
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Book.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Books."
      });
    });
};

// Find a single Book with an id
exports.findOne = (req, res) => {
  console.log('hit', rq.params)
  const id = req.params.id;

  Book.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Book with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Book with id=" + id
      });
    });
};

// Update a Book by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Book with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Books from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Books
exports.findAllPublished = (req, res) => {
  
};