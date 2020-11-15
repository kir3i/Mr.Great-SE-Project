"use strict";

import Menu from './Menu.mjs';

export default class Basic_info {
    static #_menu_list = [
        new Menu('Vallentine_dinner', './menu/img/Vallentine_dinner', './menu/Vallentine_dinner'),
        new Menu('French_dinner', './menu/img/French_dinner', './menu/French_dinner'),
        new Menu('English_dinner', './menu/img/English_dinner', './menu/English_dinner'),
        new Menu('Champagne_festival_dinner', './menu/img/Champagne_festival_dinner', './menu/Champagne_festival_dinner')
    ];
    static #_order_options_list = {
        'Vallentine_dinner': ['접시', '냅킨'],
        'French_dinner': ['커피 한 잔', '와인 한 잔', '샐러드', '고기'],
        'English_dinner': ['에그 스크램블', '베이컨', '빵', '스테이크'],
        'Champagne_festival_dinner': ['샴페인 한 병', '바게트방 4개', '커피 한 포트']
    };
    static #_pay_option_list = [
        '현금',
        '카드'
    ];

    static get menu_list() {
        return this.#_menu_list;
    }

    static get order_options_list() {
        return this.#_order_options_list;
    }

    static get pay_option_list() {
        return this.#_pay_option_list;
    }
}

// testcode
// for (const x of Basic_info.order_options_list['French_dinner']) {
//     console.log(x);
// }