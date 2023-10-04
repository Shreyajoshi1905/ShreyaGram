import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/Models/BlogModel';
import { blogAddService } from 'src/app/Services/blogs.sevice';
import { UserAuthService } from 'src/app/Services/user-auth-service';

@Component({
  selector: 'app-show-all-blogs',
  templateUrl: './show-all-blogs.component.html',
  styleUrls: ['./show-all-blogs.component.css'],
})
export class ShowAllBlogsComponent implements OnInit {
  loggedInUserName!: string | null;
  responsedata!: any;
  allblogs!: Array<any>;

  constructor(
    private userauthservice: UserAuthService,
    private blogaddservice: blogAddService,
  ) {
    this.loggedInUserName = this.userauthservice.getLoggedInUserName();
  }

  ngOnInit(): void {
    this.blogaddservice.GetBlogs().subscribe((res) => {
      this.responsedata = res;
      this.allblogs = this.responsedata.data;
      console.log(this.allblogs);
    });
  }
}
