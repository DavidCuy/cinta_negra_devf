import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './form/form.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { PagesComponent } from './pages.component';

const PAGES_ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'posts', component: PostsComponent, data: { title: 'HOME-EXAMPLE' } },
      { path: 'post/:id', component: PostComponent, data: { title: 'CARD-EXAMPLE' } },
      { path: 'forms', component: FormComponent, data: { title: 'Forms-EXAMPLE' } },
      { path: '', pathMatch: 'full', redirectTo: '/posts' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(PAGES_ROUTES, { useHash: true })],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
