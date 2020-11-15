"use strict"

import Menu from "./modules/Menu.mjs";
import Basic_info from "./modules/Basic_info.mjs";
import Basket from "./modules/Basket.mjs";
import Member_management from "./modules/Member_management.mjs";
import Customer from "./modules/Customer.mjs";


/* testcode */

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
b.add_order('주문1');
b.add_order('주문2');
console.log(b.order_list);
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
