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

    constructor(menu, style, food_amount_list, amount, additional_info) {
        this.menu = Basic_info.menu_list[menu];
        this.style = style;   // string
        this.food_amount_list = food_amount_list; // {food(string): amount(int)}
        this.amount = amount;
        this.additional_info = additional_info;
        this.status = Order_status.WAITING;
        this.order_id = Order.#_order_count;
        Order.inc_count();
        
        // 가격 계산
        this.price = this.get_price();
    }

    static inc_count() {
        this.#_order_count += 1;
    }

    get_price() {
        console.log(this.menu);
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
}