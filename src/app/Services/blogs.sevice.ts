import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Blog } from "../Models/BlogModel";

@Injectable()
export class blogAddService{
  constructor(private http: HttpClient){}
  token = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}` // Add the token to the Authorization header
    })
  };
  PostBlogs(data: Blog){
    this.http.post("http://localhost:5132/api/AllBlogs/postblogs", data )
    .subscribe();
  }

  GetBlogs(){
    return this.http.get("http://localhost:5132/api/AllBlogs/getallblogs")
  }

  GetBlogByUserName(UserAuthor: string|null){
     return this.http.get(`http://localhost:5132/api/AllBlogs/getblogbyusername?UserAuthor=${UserAuthor}`)
  }

  DeleteBlogById(BlogId: number){
      return this.http.delete(`http://localhost:5132/api/AllBlogs/deleteblogbyid?BlogId=${BlogId}`)
  }

  GetBlogById(BlogId: number){
      return this.http.get(`http://localhost:5132/api/AllBlogs/getblogbyid?BlogId=${BlogId}`)
  }

  EditBlogById(BlogId: number |undefined, updatedData: Blog){
      return this.http.put(`http://localhost:5132/api/AllBlogs/editblogbyid?BlogId=${BlogId}` , updatedData)
  }
}


