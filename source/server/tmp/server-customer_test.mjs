"use strict"

import Menu from "./modules/Menu.mjs";
import Basic_info from "./modules/Basic_info.mjs";
import Basket from "./modules/Basket.mjs";
import Member_management from "./modules/Member_management.mjs";
import Customer from "./modules/Customer.mjs";

import Inventory from "./modules/Inventory.mjs";
import Item from "./modules/Item.mjs";
import Order_list from "./modules/Order_list.mjs";
import Order from "./modules/Order.mjs";
import Order_history from "./modules/Order_history.mjs";





/* testcode */
/*
// Menu test
let m = new Menu('1', '2', '3');
console.log(m);
console.log(m.name);
console.log(m.photo);
console.log(m.description);


// Basic_info test
for (let x of Basic_info.menu_list)
    console.log(x.name, x.photo, x.description);
console.log();

for (let x in Basic_info.order_options_list)
    console.log(x, Basic_info.order_options_list[x]);
console.log();

console.log(Basic_info.pay_option_list);
console.log();


// Basket test
let b = new Basket();
console.log(b.order_list);
b.add_order({
    menu : '샐러드', 
    style : '스타일1', 
    foods_to_remove : '토마토', 
    amount : '많이', 
    additional_info : '없음'
});
for (let x of b.order_list)
    console.log(x.order_id, x.menu, x.style, x.foods_to_remove, x.amount, x.additional_info);
console.log();


// Customer test
let c = new Customer('wak', true, ['최근 주문1', '최근 주문2', '최근 주문3']);
console.log(c.id);
console.log(c.recent_ordered_menu_list);
console.log(c.basket);
c.pay();
console.log();


// Member_management test
console.log(Member_management.activated_member_list);
Member_management.signup('wak', '0724', 'none');
console.log(Member_management.activated_member_list);
Member_management.deactivate('wak');
console.log(Member_management.activated_member_list);

// Item, Inventory test
let item1 = new Item('와인', 0);
console.log(item1.name);
console.log(item1.amount);
for (let x of Inventory.item_list){
    console.log(x.name, x.amount);
}

// Order_list test
Order_list.add_order(new Order(
    '샐러드', 
    '스타일1', 
    '토마토', 
    '많이', 
    '없음'
));
Order_list.add_order(new Order(
    '에그 스크램블', 
    '스타일2', 
    '후추', 
    '조금', 
    '없음'
));

Order_list.change_order_status(2, "WAITING", "COOKING");
console.log("==wating list")
for (let x in Order_list.waiting_order_list) {
    console.log(x, Order_list.waiting_order_list[x].menu);
}
console.log("==cooking list")
for (let x in Order_list.cooking_order_list) {
    console.log(x, Order_list.cooking_order_list[x].menu);
}

// Order_history test
Order_list.change_order_status(2, "COOKING", "COMPLETED");
Order_list.change_order_status(1, "WAITING", "COMPLETED");
console.log("==hisotry")
for (let x of Order_history.order_history) {
    console.log(x.order_id, x.menu);
}

*/