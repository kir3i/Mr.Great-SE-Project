"use strict"

export default class Order {
    #_menu;
    #_style;
    #_foods_to_remove;
    #_amount;
    #_additional_info;
    #_status;

    constructor(menu, style, foods_to_remove, amount, additional_info) {
        this.#_menu = menu;
        this.#_style = style;
        this.#_foods_to_remove = foods_to_remove;
        this.#_amount = amount;
        this.#_additional_info = additional_info;
        this.#_status = "WAITING";
    }

    get menu() {
        return this.#_menu;
    }

    get style() {
        return this.#_style;
    }

    get foods_to_remove() {
        return this.#_foods_to_remove;
    }

    get amount() {
        return this.#_amount;
    }

    get additional_info() {
        return this.#_additional_info;
    }

    set status(order_status) {
        this.#_status = order_status;
    }
}