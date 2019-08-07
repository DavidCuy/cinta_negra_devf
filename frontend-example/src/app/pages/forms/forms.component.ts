import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor() {
    console.log('Constructor');
   }

  ngOnInit() {
    console.log('OnInit');
  }

  public submit(form) {
    console.log({
      email: this.email,
      pass: this.password,
      form: form
    });
  }

}
