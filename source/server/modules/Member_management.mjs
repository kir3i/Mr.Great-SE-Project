"use strict"

import Customer from "./Customer.mjs";

export default class Member_management {
    static #_activated_member_list = {};

    static signup(id, pw, info) {
        // TODO: DB에 추가 로직
        this.#_activated_member_list[id] = new Customer(id, false, null);
    }

    static login(id, pw) {
        // TODO: 타당성 검사 로직
        if(true) { // 고객이면
            this.#_activated_member_list[id] = new Customer(id, false, []);
            // 단골고객 여부, 최근 주문 내역 fetch 해와서 넘겨줌
        }
        
        return id;  // 직원이면 따로 객체 생성 없이 return
    }

    static deactivate(id) {
        delete this.#_activated_member_list[id];
    }

    static get activated_member_list() {
        return this.#_activated_member_list;
    }
}