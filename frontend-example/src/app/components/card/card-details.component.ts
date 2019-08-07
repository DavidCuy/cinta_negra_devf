import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styles: []
})
export class CardDetailsComponent implements OnInit {

  bag: any = {
    id: 0,
    price: 0,
    name: 'Bye',
    descripcion: 'NO'
  };

  constructor(private _actRoute: ActivatedRoute,
              private _userService: UserService) {
    this._actRoute.params.subscribe(params => {
      const id = parseInt(params.id, 10);
      this.bag = this._userService.getBag(id);
    });
  }

  ngOnInit() {
  }

}
