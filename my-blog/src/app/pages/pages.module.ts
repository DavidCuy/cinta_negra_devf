import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { PostCreateComponent } from './posts/post-create.component';

@NgModule({
  declarations: [
    PagesComponent,
    PostsComponent,
    PostComponent,
    FormComponent,
    NavbarComponent,
    FooterComponent,
    PostCreateComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
