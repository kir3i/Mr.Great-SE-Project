"use strict"

import Order from "./Order.mjs";

export default class Basket {
    order_list = {};

    add_order(menu, style, food_amount_list, amount, additional_info) {
        let new_order = new Order(
            menu, 
            style, 
            food_amount_list, 
            amount, 
            additional_info
        );
        this.order_list[new_order.order_id] = new_order;
    }
}