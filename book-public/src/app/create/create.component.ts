import { Component, OnInit ,Input} from '@angular/core';
import {Book} from "../book";
import {BookDataService} from "../book-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[BookDataService]
})
export class CreateComponent implements OnInit {

  public newBook: { name: string; type: string; publisher: string; ISBN: string; author: string; year: string; description: string;img:string }= {
    name: '',
    type: '',
    publisher:'',
    ISBN:'',
    author:'',
    year: '',
    description: '',
    img:''
  };
  constructor(private bookDataService:BookDataService,
              private router: Router) { }

  ngOnInit() {
  }

  public createNewBook(newBook:Book):void{
    this.bookDataService.createBook(newBook);
    this.router.navigate(['']);
  }
}
