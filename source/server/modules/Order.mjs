"use strict"

import Order_status from './Order_status.mjs';

static const price_of_style = {
    'simple': 0,
    'grand': 3000,
    'deluxe': 10000
};

export default class Order {
    static #_order_count = 0;
    #_menu;
    #_style;
    #_food_amount_list; // {'name': amount(int)}
    #_amount;
    #_additional_info;
    #_status;
    #_order_id;

    constructor(menu, style, food_amount_list, amount, additional_info) {
        this.#_menu = menu; // Menu객체
        this.#_style = style;   // string
        this.#_food_amount_list = food_amount_list; // {food(string): amount(int)}
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

    get foods_amount_list() {
        return this.#_foods_amount_list;
    }

    get amount() {
        return this.#_amount;
    }

    get additional_info() {
        return this.#_additional_info;
    }

    get_price() {
        let price = ( (menu.price) + price_of_style(this.#_style) );
        for (const food in this.#_food_amount_list) {
            if (this.#_food_amount_list[food] > 1)
                price += (menu.food_list[food])*(this.#_food_amount_list[food] - 1);
        }
        price *= this.#_amount;
    }

    set status(order_status) {
        this.#_status = order_status;
    }
    
}