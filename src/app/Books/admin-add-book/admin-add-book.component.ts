import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/BookModel';
import { BooksService } from 'src/app/Services/books.service';
import {getDownloadURL, ref , uploadBytes} from 'firebase/storage';
import {storage} from '../../../environments/environment';
import {v4} from "uuid";
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-add-book',
  templateUrl: './admin-add-book.component.html',
  styleUrls: ['./admin-add-book.component.css']
})
export class AdminAddBookComponent implements OnInit {
  book: Book =new Book();
  imageUrl!: string


  constructor(private bookservice: BooksService , private router: Router) { }

  ngOnInit(): void {
  }
  saveNewBook(){
    if(this.imageUrl){
    this.book.imageUrl = this.imageUrl
    }
    this.bookservice.bookAdd(this.book)
    this.router.navigate(['allbooks'])

  }
  async onImageSelect(event: any){
    const file  = event.target.files[0]
    if(file){
      try{
      const imageref = ref(storage , `/images/${file.name + v4()}`);
      await uploadBytes(imageref, file);
      this.imageUrl = await getDownloadURL(imageref);
      const reader = new FileReader()
      reader.onload = (e) =>{
        this.imageUrl = e.target?.result as Array<any> | Buffer | any
      }
      reader.readAsDataURL(file);
      }
      catch(Exception){
        console.log(Exception)
      }
    }
  }

}
