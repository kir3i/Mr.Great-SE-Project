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

    // 주문 삭제
    // 성공 시 true, 실패 시 false를 반환
    remove_order(order_id) {
        if (order_id in this.order_list) {
            delete this.order_list[order_id];
            return true;
        }
        return false;
    }
}