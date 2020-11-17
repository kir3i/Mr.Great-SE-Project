"use strict";

import fs from 'fs'
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
        // 결제 시스템에게 요청
        // const ok = pay(pay_info);

        // 결제가 완료되었을 시 Order_list로 넘김
        //if(ok) {}
            for (const o of this.#_basket.order_list) {
                Order_list.add_order(o);
            }

            // DB에 입력
            const user_str = fs.readFileSync(`./data/users/${this.#_id}.json`, 'utf8');
            const user = JSON.parse(user_str);
            user.info.call_cnt += 1;
            user.info.recent_ordered_menu.push(...this.#_basket.order_list);

            //console.log(user);

            const userJson = JSON.stringify(user);
            fs.writeFileSync(`./data/users/${this.#_id}.json`, userJson, 'utf8');
            
            return true;
        // 결제가 실패하면
        // else{ return false; }   //에러 리턴
    }

}