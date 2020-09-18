import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookDataService} from "../book-service.service";
import 'rxjs';
import {Headers} from "@angular/http";
@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers:[BookDataService]
})
export class HomeListComponent implements OnInit {
books:Book[]

  constructor(private bookService:BookDataService) { }
  public deleteBook(bookid):void{
    this.bookService.deleteBook(bookid);
  }
    ngOnInit() {
  this.bookService
    .getBooks()
    .then((books:Book[])=>{
      this.books=books.map(book=>{
        return book;
      });
    });


    }


}
