import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Register/login/login.component';
import { RegisterComponent } from './Register/register/register.component';
import { ShowAllBlogsComponent } from './Blog/show-all-blogs/show-all-blogs.component';
import { BlogsComponent } from './Blog/blogs/blogs.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { MyblogsComponent } from './Blog/myblogs/myblogs.component';
import { AdminAddBookComponent } from './Books/admin-add-book/admin-add-book.component';
import { BooksCollectionComponent } from './Books/books-collection/books-collection.component';
import { BooksCartComponent } from './Books/books-cart/books-cart.component';
import { EditBlogComponent } from './Blog/edit-blog/edit-blog.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [AuthGuardService] },
  {path: '', component: RegisterComponent },
  {path: "login",component: LoginComponent},
  {path: 'addblogs' , component: BlogsComponent},
  {path: 'showblogs' , component: ShowAllBlogsComponent},
  {path: 'myblogs' , component: MyblogsComponent},
  {path:"adminaddbook"  ,component: AdminAddBookComponent},
  {path: "allbooks" , component: BooksCollectionComponent},
  {path: "bookscart" , component: BooksCartComponent},
  {path: "editblog/:id" , component: EditBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
