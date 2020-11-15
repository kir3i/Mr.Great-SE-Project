"use strict"

import Item from './Item.mjs';

export default class Inventory {
    #_item_list = [];

    get item_list() {
        return this.#_item_list;
    }

    set item_list(item_list) {
        this.#_item_list = item_list;
    }
}