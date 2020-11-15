"use strict"

import Order from './Order.mjs';

export default class Order_history {
    #_order_history = [];

    get order_history() {
        return this.#_order_history;
    }

    add_order(order) {
        this.#_order_history.push(order);
    }
}