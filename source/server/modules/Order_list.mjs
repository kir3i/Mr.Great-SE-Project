"use strict"

import Order from './Order.mjs';
import Order_status from './Order_status.mjs';
import Order_history from './Order_history.mjs';

export default class Order_list {
    static #_waiting_order_list = {};   // {order_id: Order 객체}
    static #_cooking_order_list = {};
    static #_delivering_order_list = {};

    static get waiting_order_list() {
        return this.#_waiting_order_list;
    }

    static get cooking_order_list() {
        return this.#_cooking_order_list;
    }

    static get delivering_order_list() {
        return this.#_delivering_order_list;
    }

    static add_order(order) {
        this.#_waiting_order_list[order.order_id] = order;
    }

    static change_order_status(order_id, from, to) {
        let cur_order;
        if (from == "WAITING") {
            cur_order = this.#_waiting_order_list[order_id];
            delete this.#_waiting_order_list[order_id];
        } else if (from == "COOKING") {
            cur_order = this.#_cooking_order_list[order_id];
            delete this.#_cooking_order_list[order_id];
        } else if (from == "DELIVERING") {
            cur_order = this.#_delivering_order_list[order_id];
            delete this.#_delivering_order_list[order_id];
        }

        if (to == "WAITING") {
            cur_order.status = Order_status.WAITING;
            this.#_waiting_order_list[order_id] = cur_order;
        } else if (to == "COOKING") {
            cur_order.status = Order_status.COOKING;
            this.#_cooking_order_list[order_id] = cur_order;
        } else if (to == "DELIVERING") {
            cur_order.status = Order_status.DELIVERING;
            this.#_delivering_order_list[order_id] = cur_order;
        } else if (to == "COMPLETED"){
            cur_order.status = Order_status.COMPLETED;
            Order_history.add_order(cur_order);
        }
    }
}