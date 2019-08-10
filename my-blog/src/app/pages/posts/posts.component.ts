import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private _postsService: PostsService) { }

  ngOnInit() {
    this._postsService.getAllPosts().subscribe((resp) => {
      this.posts = resp;
    });
  }

  getRandomPhoto() {
    return `https://picsum.photos/id/${Math.floor((Math.random() * 100) + 1)}/400/300`;
  }

}
