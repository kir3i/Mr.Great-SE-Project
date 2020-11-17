"use strict";

export default class Menu {
    #_name;
    #_photo;
    #_description;
    #_price;

    constructor(name, photo, description) {
        this.#_name = name;
        this.#_photo = photo;
        this.#_description = description;
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
}