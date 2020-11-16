"use strict"

import Order_status from './Order_status.mjs';

export default class Order {
    static #_order_count = 0;
    #_menu;
    #_style;
    #_foods_to_remove;
    #_amount;
    #_additional_info;
    #_status;
    #_order_id;

    constructor(menu, style, foods_to_remove, amount, additional_info) {
        this.#_menu = menu;
        this.#_style = style;
        this.#_foods_to_remove = foods_to_remove;
        this.#_amount = amount;
        this.#_additional_info = additional_info;
        this.#_status = Order_status.WAITING;
        this.#_order_id = Order.order_count;
        Order.inc_count();
    }

    static get order_count() {
        return this.#_order_count;
    }

    static inc_count() {
        this.#_order_count += 1;
    }
    
    get order_id() {
        return this.#_order_id;
    }

    get menu() {
        return this.#_menu;
    }

    get style() {
        return this.#_style;
    }

    get foods_to_remove() {
        return this.#_foods_to_remove;
    }

    get amount() {
        return this.#_amount;
    }

    get additional_info() {
        return this.#_additional_info;
    }

    set status(order_status) {
        this.#_status = order_status;
    }
}