"use strict"

import fs from 'fs';
import Item from './Item.mjs';
/*
export default class Inventory {
    // TODO : DB에서 load하도록 수정
    static #_item_list = [
        // new Item('달걀', 0),
        // new Item('고기', 0),
        // new Item('빵', 0)
    ];

    static constructor() {
        const inv_str = fs.readFileSync(`./data/inventory.json`, 'utf8');
        const inv = JSON.parse(inv_str);
        inv
        const invJson = JSON.stringify(inv);
        fs.writeFileSync(`./data/inventory.json`, invJson, 'utf8');
    }

    static get item_list() {
        return this.#_item_list;
    }

    static set item_list(item_list) {
        this.#_item_list = item_list;
    }
}
*/