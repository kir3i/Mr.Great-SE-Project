"use strict"

export default class Basket {
    #_order_list = [];

    add_order(order) {
        this.#_order_list.push(order);
    }

    get order_list() {
        return this.#_order_list;
    }
}