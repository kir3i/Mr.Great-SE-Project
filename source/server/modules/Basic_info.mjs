"use strict";

import Menu from './Menu.mjs';
const menu_path = './data/menu'
export default class Basic_info {
    static #_menu_list = [
        new Menu(
            'Vallentine_dinner', 
            `${menu_path}/Vallentine_dinner`,
            10000,
            { }
        ),
        new Menu(
            'French_dinner', 
            `${menu_path}/French_dinner`,
            20000,
            {
                'coffee': 4000,
                'wine': 8000,
                'salad': 5000,
                'beef': 15000
            }
        ),
        new Menu(
            'English_dinner', 
            `${menu_path}/English_dinner`,
            24000,
            {
                'egg': 3000,
                'bacon': 8000,
                'bread': 15000,
                'stake': 20000
            }
        ),
        new Menu(
            'Champagne_festival_dinner', 
            `${menu_path}/Champagne_festival_dinner`,
            62000,
            {
                'champagne': 25000,
                'bagguette': 15000,
                'coffee': 15000
            }
        )
    ];
    static #_order_options_list = {
        'Vallentine_dinner': ['접시', '냅킨'],
        'French_dinner': ['커피 한 잔', '와인 한 잔', '샐러드', '고기'],
        'English_dinner': ['에그 스크램블', '베이컨', '빵', '스테이크'],
        'Champagne_festival_dinner': ['샴페인 한 병', '바게트방 4개', '커피 한 포트']
    };

    static get menu_list() {
        return this.#_menu_list;
    }

    static get order_options_list() {
        return this.#_order_options_list;
    }
}

// testcode
// for (const x of Basic_info.order_options_list['French_dinner']) {
//     console.log(x);
// }