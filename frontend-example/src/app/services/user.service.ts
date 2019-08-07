import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  bags = [
    {
      id: 1,
      price: 2000,
      name: 'Hi',
      descripcion: 'This is a bag'
    },
    {
      id: 2,
      price: 2000,
      name: 'Hi',
      descripcion: 'This is a bag'
    },
    {
      id: 3,
      price: 2000,
      name: 'Hi',
      descripcion: 'This is a bag'
    },
    {
      id: 4,
      price: 2000,
      name: 'Hi',
      descripcion: 'This is a bag'
    },
    {
      id: 5,
      price: 2000,
      name: 'Hi',
      descripcion: 'This is a bag'
    },
    {
      id: 6,
      price: 2000,
      name: 'Hi',
      descripcion: 'This is a bag'
    },
    {
      id: 7,
      price: 2000,
      name: 'Hi',
      descripcion: 'This is a bag'
    },
    {
      price: 2000,
      name: 'Hi',
      descripcion: 'This is a bag'
    },
    {
      id: 8,
      price: 2000,
      name: 'Hi',
      descripcion: 'This is a bag'
    }
  ];

  constructor() { }

  getBags() {
    return this.bags;
  }

  pushBolsa(newBag: any) {
    newBag.id = newBag.length + 1;
    this.bags.push(newBag);
    return this.bags;
  }

  deleteBolsa() {
    this.bags.pop();
    return this.bags;
  }

  getBag(id) {
    return this.bags.find((b) => b.id === id);
  }
}
