import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../postservice';
@Component({
  selector: 'app-post',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post implements OnInit {
  post:any
  loading=false
  constructor(private postService:PostService){}
  ngOnInit(): void {
    this.loading=true;
    this.postService.getPost().subscribe((data:any) => {
      this.post=data;
      this.loading=false;
    })
  }

}


