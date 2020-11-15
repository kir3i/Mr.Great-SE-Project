"use strict";

import Basket from './Basket.mjs';
import Order_list from './Order_list.mjs';

export default class Customer {
    #_id;
    #_recent_ordered_menu_list;
    #_is_regular;
    #_basket;

    constructor(id, is_regular, recent_ordered_menu_list) {
        this.#_id = id;
        this.#_basket = new Basket();
        this.#_is_regular = is_regular;
        this.#_recent_ordered_menu_list = recent_ordered_menu_list;
    }

    get id() {
        return this.#_id;
    }

    get recent_ordered_menu_list() {
        if (this.#_is_regular)
            return this.#_recent_ordered_menu_list;
        else
            return null;
    }

    get basket() {
        return this.#_basket;
    }

    pay(pay_info) {
        // TODO: 최근 주문 내역에 현재 주문 리스트 추가 (DB)
        console.log('paying...');
        
        // 결제가 완료되었을 시 Order_list로 넘김
        for (o of this.#_basket.order_list) {
            // Order_list.add_order(o);
            console.log(x);
        }
    }

}