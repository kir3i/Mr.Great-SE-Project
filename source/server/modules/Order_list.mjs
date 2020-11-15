"use strict"

import Order from './Order.mjs';

export default class Order_list {
    #_waiting_order_list = [];
    #_cooking_order_list = [];
    #_delivering_order_list = [];

    get waiting_order_list() {
        return this.#_waiting_order_list;
    }

    get cooking_order_list() {
        return this.#_cooking_order_list;
    }

    get delivering_order_list() {
        return this.#_delivering_order_list;
    }

    change_order_status(order, order_status) {
        // TO DO : order 찾아서 구현
    }
}