"use strict"

import Order from "./Order.mjs";

export default class Basket {
    #_order_list = [];

    add_order(order_info) {
        let new_order = new Order(
            order_info[menu], 
            order_info[style], 
            order_info[foods_to_remove], 
            order_info[amount], 
            order_info[additional_info]
        );
        this.#_order_list.push(new_order);
    }

    get order_list() {
        return this.#_order_list;
    }
}