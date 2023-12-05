'use strict';

const cart = {
  items: [],
  count: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  calculateItemPrice() {
    return this.items.reduce((total, item) =>
      total + item.price * item.quantity, 0);
  },

  increaseCount(number) {
    this.count += number;
  },

  add(name, price, quantity = 1) {
    this.items.push({name, price, quantity});
    this.increaseCount(quantity);
  },

  clear() {
    this.items = [];
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общая стоимость: ${this.totalPrice}`);
  },
};

cart.add('Товар 1', 100, 2);
cart.add('Товар 2', 200, 1);
cart.add('Товар 3', 150);

cart.print();
