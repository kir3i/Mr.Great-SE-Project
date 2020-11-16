"use strict"

import Order from './Order.mjs';

export default class Order_history {
    static #_order_history = [];

    static get order_history() {
        return this.#_order_history;
    }

    static add_order(order) {
        this.#_order_history.push(order);
    }
}