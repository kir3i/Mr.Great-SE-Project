"use strict"

export default class Item {
    #_name;
    #_amount;

    get name() {
        return this.#_name;
    }

    get amount() {
        return this.#_amount;
    }

    set amount(amount) {
        this.#_amount = amount;
    }
}