"use strict"

import fs from 'fs';
import Customer from "./Customer.mjs";

export default class Member_management {
    static #_activated_member_list = {};

    static signup(id, pw, info) {
        const user = {
            'id': id,
            'pw': pw,
            'info': info
        };
        
        const userJson = JSON.stringify(user);

        try {
            fs.writeFileSync(`./data/users/${id}.json`, userJson, 'utf8');
        } catch(e) {
            console.log(e);
        }

        this.#_activated_member_list[id] = new Customer(id, false, null);
    }

    static login(id, pw) {
        //console.log(`file load from ./data/users/${id}.json`);
        
        try {
            const user_str = fs.readFileSync(`./data/users/${id}.json`, 'utf8');
            const user = JSON.parse(user_str);
            
            if(user['pw'] !== pw) {
                //로그인 실패
                console.log('Login Failed:: Wrong PW');
                return null;
            }
            else if(user.info.is_customer) {
                // Customer 객체 생성
                this.#_activated_member_list[id] = new Customer(
                    id, user.info.is_regular, user.info.recent_ordered_menu);
            }
        } catch(e) {
            // 로그인 실패
            console.log(e);
            return null;
        }

        return id;
    }

    static deactivate(id) {
        delete this.#_activated_member_list[id];
    }

    static get activated_member_list() {
        return this.#_activated_member_list;
    }
}

/*
Member_management.signup(
        'wak',
        '0724', 
        {
            'is_customer': true, 
            'recent_ordered_menu': ['메뉴1', '메뉴2'], 
            'is_regular': false,
            'call_cnt': 0
        });
console.log(Member_management.activated_member_list);
Member_management.deactivate('wak');
console.log(Member_management.activated_member_list);

// Member_management.login('waka', '0724');
// console.log(Member_management.activated_member_list);
Member_management.login('wak', '0724');
console.log(Member_management.activated_member_list);

Member_management.activated_member_list['wak'].basket.add_order({
    'menu': '주문3',
    'style': 'Dulexe', 
    'foods_to_remove': [], 
    'amount': 1, 
    'additional_info': []
})
// pay test
Member_management.activated_member_list['wak'].pay();
*/