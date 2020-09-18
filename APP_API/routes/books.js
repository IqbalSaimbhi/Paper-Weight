var express = require('express');
var router = express.Router();

var ctrlBook = require('../controllers/book');

router.get('/books', ctrlBook.getbooks);
router.post('/books', ctrlBook.createbook);
router.get('/books/:bookid', ctrlBook.getSinglebook);
router.put('/books/:bookid', ctrlBook.updatebook);
router.delete('/books/:bookid', ctrlBook.deletebook);

module.exports = router;