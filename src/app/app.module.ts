import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { userLoginService } from './Services/UserLoginServices';
import { LoginComponent } from './Register/login/login.component';
import { RegisterComponent } from './Register/register/register.component';
import { BlogsComponent } from './Blog/blogs/blogs.component';
import { ShowAllBlogsComponent } from './Blog/show-all-blogs/show-all-blogs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { blogAddService } from './Services/blogs.sevice';
import { DatePipe } from '@angular/common';
import { MyblogsComponent } from './Blog/myblogs/myblogs.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { BooksCollectionComponent } from './Books/books-collection/books-collection.component';
import { AdminAddBookComponent } from './Books/admin-add-book/admin-add-book.component';
import { BooksCartComponent } from './Books/books-cart/books-cart.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { EditBlogComponent } from './Blog/edit-blog/edit-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BlogsComponent,
    ShowAllBlogsComponent,
    MyblogsComponent,
    ImageUploadComponent,
    BooksCollectionComponent,
    AdminAddBookComponent,
    BooksCartComponent,
    EditBlogComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [userLoginService, blogAddService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
