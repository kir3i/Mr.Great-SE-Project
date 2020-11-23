"use strict"

import Basic_info from './Basic_info.mjs';
import Order_status from './Order_status.mjs';
import Order_list from './Order_list.mjs';

const price_of_style = {
    'simple': 0,
    'grand': 3000,
    'deluxe': 10000
};

export default class Order {
    static #_order_count = 0;
    #_menu; // Menu 객체
    #_style;
    #_food_amount_list; // {'name': amount(int)}
    #_amount;
    #_additional_info;
    #_status;
    #_order_id;

    constructor(menu, style, food_amount_list, amount, additional_info) {
        this.#_menu = Basic_info.menu_list[menu];
        this.#_style = style;   // string
        this.#_food_amount_list = food_amount_list; // {food(string): amount(int)}
        this.#_amount = amount;
        this.#_additional_info = additional_info;
        this.#_status = Order_status.WAITING;
        this.#_order_id = Order.order_count;
        Order.inc_count();
        Order_list.add_order(this);
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

    get food_amount_list() {
        return this.#_food_amount_list;
    }

    get amount() {
        return this.#_amount;
    }

    get additional_info() {
        return this.#_additional_info;
    }

    get_price() {
        let price = this.menu.price + price_of_style[this.style];
        for (const food in this.food_amount_list) {
            if (this.food_amount_list[food] > 1) {
                price += (this.menu.food_list[food])*(this.food_amount_list[food] - 1);
                // console.log(this.menu.food_list[food], this.food_amount_list[food] - 1);
            }
        }
        price *= this.amount;
        return price;
    }

    set status(order_status) {
        this.#_status = order_status;
    }
    
}