"use strict";

import fs from 'fs'
import Basket from './Basket.mjs';
import Order_list from './Order_list.mjs';

export default class Customer {
    constructor(id, is_regular, recent_ordered_menu_list) {
        this.id = id;
        this.basket = new Basket();
        this.is_regular = is_regular;
        this.recent_ordered_menu_list = recent_ordered_menu_list;
    }

    pay(pay_info) {
        console.log('paying...');
        // 결제 시스템에게 요청
        // const ok = pay(pay_info);

        // 결제가 완료되었을 시 Order_list로 넘김
        //if(ok) {}
        for (const o of this.basket.order_list) {
            Order_list.add_order(o);
        }

        // DB에 입력
        const user_str = fs.readFileSync(`./data/users/${this.id}.json`, 'utf8');
        const user = JSON.parse(user_str);
        user.info.call_cnt += 1;
        // 단골 손님 등록
        if (user.info.call_cnt > 3)
            user.info.is_regular = true;
        user.info.recent_ordered_menu.push(...this.basket.order_list);

        //console.log(user);

        const userJson = JSON.stringify(user);
        fs.writeFileSync(`./data/users/${this.id}.json`, userJson, 'utf8');
        
        return true;
        // 결제가 실패하면
        // else{ return false; }   //에러 리턴
    }

}