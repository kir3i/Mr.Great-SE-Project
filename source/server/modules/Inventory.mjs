"use strict"

import Item from './Item.mjs';

export default class Inventory {
    // TODO : DB에서 load하도록 수정
    static #_item_list = [
        new Item('달걀', 0),
        new Item('고기', 0),
        new Item('빵', 0)
    ];

    static get item_list() {
        return this.#_item_list;
    }

    static set item_list(item_list) {
        this.#_item_list = item_list;
    }
}