import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styles: []
})
export class DataFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('email@example.com', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      sex: new FormControl('', [
        Validators.required
      ]),
      desc: new FormControl(0)
    });
   }

  ngOnInit() {
  }

  public sendForm() {
    console.log(this.loginForm.value);
  }

}
