import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostAddComponent } from './posts/post-add/post-add.component';
import { PostListComponent } from './posts/post-list/post-list.component';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'add', component: PostAddComponent },
  { path: 'edit/:postId', component: PostAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
