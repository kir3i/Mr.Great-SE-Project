"use strict"

export default class Item {
    #_name;
    #_amount;

    constructor(name, amount) {
        this.#_name = name;
        this.#_amount = amount;
    }

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