import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];

  private postsSubscription: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.postsService.uploadPosts();
    this.postsSubscription = this.postsService
      .getEditedPosts()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  deletePost(postId: string) {
    this.postsService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
