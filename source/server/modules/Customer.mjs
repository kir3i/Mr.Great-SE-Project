"use strict";

import fs from 'fs'
import Basket from './Basket.mjs';
import Order_list from './Order_list.mjs';

const data_path = './source/server/modules/data/';
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
        for (const oi in this.basket.order_list) {
            Order_list.add_order(this.basket.order_list[oi]);
        }

        // DB에 입력
        const user_str = fs.readFileSync(`${data_path}/users/${this.id}.json`, 'utf8');
        const user = JSON.parse(user_str);
        user.info.call_cnt += 1;
        // 단골 손님 등록
        if (user.info.call_cnt > 3) {
            user.info.is_regular = true;
            this.is_regular = true;
        }
        
        // 주문 내역에 추가
        // console.log(this.recent_ordered_menu_list);
        console.log(this.basket.order_list);
        let new_history = [];
        for (const o in this.basket.order_list) {
            new_history.push(this.basket.order_list[o]);
            if (new_history.length > 9)
                break;
        }
        for (let i=0; i<this.recent_ordered_menu_list.length && (new_history.length < 9); i++)
            new_history.push(this.recent_ordered_menu_list[i]);

        
        user.info.recent_ordered_menu = new_history;
        this.recent_ordered_menu_list = new_history;
        // console.log(user.info.recent_ordered_menu);
        // console.log(user);

        const userJson = JSON.stringify(user);
        fs.writeFileSync(`${data_path}/users/${this.id}.json`, userJson, 'utf8');
        
        // 결제가 성공하면 장바구니의 모든 주문 삭제
        delete this.basket;
        this.basket = new Basket();

        return true;
        // 결제가 실패하면
        // else{ return false; }   //에러 리턴
    }

}