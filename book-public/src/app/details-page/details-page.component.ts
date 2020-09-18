

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params} from "@angular/router";
import {BookDataService} from "../book-service.service";
import {Book} from "../book";
import {switchMap} from "rxjs/operators";
import {Router} from "@angular/router";
import {Http} from "@angular/http";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers: [BookDataService]
})





export class DetailsPageComponent implements OnInit {

  constructor(
    private BookDataService: BookDataService,
    private route: ActivatedRoute,
    private router: Router

  ) { }




  @Input()
  newBook: Book;

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.BookDataService.getSingleBook(params['bookid'],)
      }))

      .subscribe((newBook:Book) => {
        this.newBook = newBook;
        this.pageContent.header.id = newBook._id;
        this.pageContent.header.title = newBook.name;
        this.pageContent.header.type = newBook.type;
        this.pageContent.header.publisher = newBook.publisher;
        this.pageContent.header.year = newBook.year;
        this.pageContent.header.author = newBook.author;
        this.pageContent.header.ISBN = newBook.ISBN;
        this.pageContent.header.description = newBook.description;
        this.pageContent.header.img = newBook.img;
        // console.log(Book);
        //return(newBook);

      });
  }
  public updatebook(newBook): void {
    //newBook._id=this.pageContent.header.id;
    newBook.name=this.pageContent.header.title;
    newBook.type=this.pageContent.header.type;
    newBook.publisher=this.pageContent.header.publisher;
    newBook.author=this.pageContent.header.author;
    newBook.ISBN=this.pageContent.header.ISBN;
    newBook.description=this.pageContent.header.description;
    newBook.year=this.pageContent.header.year;
    newBook.img=this.pageContent.header.img;
    console.log(newBook._id);
    this.BookDataService.updatebook(newBook);

    this.router.navigate(['']);


  }
  deletebook(bookid: String): void {
    this.BookDataService.deleteBook(bookid);
    this.router.navigate(['']);

  }
  pageContent = {
    header : {
      id:'',
      title:'',
      body:'',
      type:'',
      publisher:'',
      year:'',
      author:'',
      ISBN:'',
      description: '',
      img:''
    }
  };



}

