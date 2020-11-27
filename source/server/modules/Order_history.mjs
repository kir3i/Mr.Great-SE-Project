"use strict"

import Order_status from './Order_status.mjs';

export default class Order_history {
    static #_order_history = [];

    static get order_history() {
        return this.#_order_history;
    }

    static add_order(order) {
        this.#_order_history.push(order);
        if(this.#_order_history.length > 10) {
            this.#_order_history.shift();
        }
    }
}