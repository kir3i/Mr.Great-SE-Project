"use strict"

export default class Order_status {
    WAITING = Symbol("waiting");
    COOKING = Symbol("cooking");
    DELIVERING = Symbol("delivering");
    COMPLETED = Symbol("completed");
};