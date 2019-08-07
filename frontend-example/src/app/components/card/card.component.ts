import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {

  bags = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.bags = this.userService.getBags();
  }

  addBag() {
    this.bags = this.userService.pushBolsa({
      price: 1234,
      name: 'Pushed Bag',
      descripcion: 'This is a new Pushed bag'
    });
  }

  deleteBag() {
    this.bags = this.userService.deleteBolsa();
  }

}
