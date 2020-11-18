"use strict";

export default class Menu {
    #_name;
    #_photo;
    #_description;
    #_price;
    #_food_list;

    constructor(name, photo, description, price, food_list) {
        this.#_name = name;
        this.#_photo = photo;
        this.#_description = description;
        this.#_price = price;
        this.#_food_list = food_list;
    }

    get name() {
        return this.#_name;
    }

    get photo() {
        return this.#_photo;
    }
    
    get description() {
        return this.#_description;
    }

    get price() {
        return this.#_price;
    }

    get food_list() {
        return this.#_food_list;
    }
}