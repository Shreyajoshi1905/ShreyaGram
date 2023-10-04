import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../Models/BookModel';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  bookAdd(book: Book){
    this.http.post("http://localhost:5132/api/Books/addbook" , book)
    .subscribe(res=> console.log(res))
  }

  getAllBooks(){
    return  this.http.get("http://localhost:5132/api/Books/getallbooks")
  }
}
