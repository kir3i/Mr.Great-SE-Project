"use strict"

import Order_status from './Order_status.mjs';
import Order_history from './Order_history.mjs';

export default class Order_list {
    static waiting_order_list = {};   // {order_id: Order 객체}
    static cooking_order_list = {};
    static delivering_order_list = {};

    static add_order(order) {
        this.waiting_order_list[order.order_id] = order;
    }

    static change_order_status(order_id, from, to) {
        let cur_order;
        if (from == "WAITING") {
            cur_order = this.waiting_order_list[order_id];
            delete this.waiting_order_list[order_id];
        } else if (from == "COOKING") {
            cur_order = this.cooking_order_list[order_id];
            delete this.cooking_order_list[order_id];
        } else if (from == "DELIVERING") {
            cur_order = this.delivering_order_list[order_id];
            delete this.delivering_order_list[order_id];
        }

        if (to == "WAITING") {
            cur_order.status = Order_status.WAITING;
            this.waiting_order_list[order_id] = cur_order;
        } else if (to == "COOKING") {
            cur_order.status = Order_status.COOKING;
            this.cooking_order_list[order_id] = cur_order;
        } else if (to == "DELIVERING") {
            cur_order.status = Order_status.DELIVERING;
            this.delivering_order_list[order_id] = cur_order;
        } else if (to == "COMPLETED"){
            cur_order.status = Order_status.COMPLETED;
            Order_history.add_order(cur_order);
        }
    }
}