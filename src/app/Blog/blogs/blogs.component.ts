import { Component, OnInit } from '@angular/core';
import { Blog } from '../../Models/BlogModel';
import { blogAddService } from '../../Services/blogs.sevice';
import { DatePipe } from '@angular/common';
import { UserAuthService } from 'src/app/Services/user-auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  blog!: Blog
  username!: string | null;
  constructor(
    private blogaddservice: blogAddService,
    private datepipe: DatePipe,
    private userauthservice: UserAuthService,
    private router: Router,
  ) {
    this.blog = new Blog();
    this.blog.dateOf = this.datepipe.transform(new Date(), 'yyyy-MM-dd') ;
    this.blog.userAuthor = this.userauthservice.getLoggedInUserName();
  }
  logout() {
    this.userauthservice.logout();
    this.router.navigate(['/login']);
  }
  createBlog() {
    this.blogaddservice.PostBlogs(this.blog);
    this.router.navigate(['/myblogs']);
  }
  ngOnInit(): void {}
}
