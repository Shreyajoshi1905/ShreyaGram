import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/Models/BlogModel';
import { blogAddService } from 'src/app/Services/blogs.sevice';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  response!: any
  blogdata!: Blog
  editresponse: any
  constructor(private activeRoute: ActivatedRoute , private blogservice: blogAddService , private router: Router) { }

  ngOnInit(): void {
    var id = this.activeRoute.snapshot.params['id']
    this.blogservice.GetBlogById(id)
    .subscribe(res =>{
        this.response= res
        this.blogdata = this.response.data
        console.log(this.blogdata)
    })
  }

  editBlog(){
    this.blogservice.EditBlogById(this.blogdata.blogId ,this.blogdata)
    .subscribe(res=> {
    this.editresponse = res
    if(this.editresponse.success == true){
        this.router.navigate(['myblogs'])
    }

    });

  }
}
