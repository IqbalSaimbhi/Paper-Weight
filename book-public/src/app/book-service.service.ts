import { Injectable } from '@angular/core';
import {Book} from './book';
import {Http,Response} from '@angular/http';
import {parseHttpResponse} from "selenium-webdriver/http";

@Injectable()

export class BookDataService {
  private booksUrl='http://localhost:3000/api/books';


  constructor(private http:Http) { }

  getBooks():Promise<void | Book[]>{
    return this.http.get(this.booksUrl)
      .toPromise()
      .then(response=>response.json() as Book[])
      .catch(this.handleError);
  }
  getSingleBook(bookId:String):Promise<void|Book>{
    return this.http.get(this.booksUrl+'/'+bookId)
      .toPromise()
      .then(response=>response.json()as Book)
      .catch(this.handleError);
  }
  createBook(newBook:Book):Promise<void|Book>{

    return this.http.post(this.booksUrl,newBook)
      .toPromise()
      .then(response=>response.json() as Book)
      .catch(this.handleError)
      ;
  }
  updatebook(newBook):Promise<void|Book>{
    console.log("in update function return::::0"+newBook._id);
    var putURL = this.booksUrl + '/' + newBook._id;
    return this.http.put(putURL, newBook
    )
      .toPromise()
      .then(response=>response.json()as Book)
      .catch(this.handleError);
  }
  deleteBook(bookId:String):Promise<void| String> {
    if (confirm("Are you sure?")) {
      return this.http.delete(this.booksUrl + '/' + bookId)
        .toPromise()
        .then(response => response.json() as String)
        .catch(this.handleError);
    }
  }


  private handleError(error:any){
    console.log("error");
  }
}
