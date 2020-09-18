const mongoose = require('mongoose');
const Book = mongoose.model('book');

const getbooks =function (req,res) {


    Book.find().exec(function (err,bookdata) {
        if(err){
            res
                .status(404)
                .json(err);
            return;
        }
        res
            .status(200)
            .json(bookdata)

    });

};

const createbook =function (req,res) {
    Book.create({
        name: req.body.name,
        type: req.body.type,
        publisher: req.body.publisher,
        ISBN: req.body.ISBN,
        author: req.body.author,
        year: req.body.year,
        description: req.body.description,
        img: req.body.img

    }, (err,bookdata) => {
        if(err){
            res
                .status(400)
                .json(err);
        }
        else{
            res
                .status(201)
                .json(bookdata);
        }
    });


};

const getSinglebook =function (req,res) {
    Book
        .findById(req.params.bookid)
        .exec((err, Book) => {
            if (!Book) {
                return res
                    .status(404)
                    .json({
                        "message": "Book not found"
                    });
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            res
                .status(200)
                .json(Book);
        });

};

const updatebook =function (req,res) {
    if(!req.params.bookid){
        res
            .status(404)
            .json({
                "message": "Not Found, bookid is required"
            });
        return;
    }

    Book.findById(req.params.bookid)
        .exec((err, bookdata) => {
            if(!bookdata){
                res
                    .json(404)
                    .status({
                        "message": "bookid not found"
                    });
                return;
            }
            else if(err){
                res
                    .status(404)
                    .json(err);
                return;
            }
            bookdata.name = req.body.name;
            bookdata.type = req.body.type;
            bookdata.publisher = req.body.publisher;
            bookdata.ISBN = req.body.ISBN;
            bookdata.author = req.body.author;
            bookdata.year = req.body.year;
            bookdata.description = req.body.description;
            bookdata.img = req.body.img;

            bookdata.save((err, bookdata) => {

                if(err){
                    res
                        .status(404)
                        .json(err);
                }
                else{
                    res
                        .status(200)
                        .json(bookdata);
                }
            });
        });

};


const deletebook = function (req,res) {
    const bookid = req.params.bookid;

    if(bookid){
        Book
            .findByIdAndRemove(bookid)
            .exec((err,bookdata) => {
                if(err){
                    res
                        .status(404)
                        .json(err);
                }

                res
                    .status(204)
                    .json(null);
            });
    }

    else
    {
        res
            .status(404)
            .json({"message" : "No bookid"});
    }

};



module.exports={
    getbooks,
    createbook,
    getSinglebook,
    updatebook,
    deletebook
}