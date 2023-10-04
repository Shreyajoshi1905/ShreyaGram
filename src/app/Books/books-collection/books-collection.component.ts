import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/BookModel';
import { BooksService } from 'src/app/Services/books.service';
import { UserAuthService } from 'src/app/Services/user-auth-service';

@Component({
  selector: 'app-books-collection',
  templateUrl: './books-collection.component.html',
  styleUrls: ['./books-collection.component.css']
})
export class BooksCollectionComponent implements OnInit {
  imgurl!: any
  allbooks!: Array<Book>
  res!: any
  loggedInUserName!: string|null

  constructor(private authservice: UserAuthService , private bookservice: BooksService) { }

  ngOnInit(): void {
    this.loggedInUserName = this.authservice.getLoggedInUserName();
    this.bookservice.getAllBooks()
    .subscribe(res =>{
      this.res = res
      console.log(this.res.data)
      this.allbooks = this.res.data;
      console.log(this.allbooks)
    })
  }

  addToCart(){
    
  }

}
