function display_order_history() {
    fetch('/history', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(ret => {
        order_history = ret;
        for (let order of order_history) {
            order_id = order.order_id;
            menu_name = order.menu.name;
            if (menu_name == "Vallentine_dinner") menu_name = "발렌타인 디너(Valentine dinner)";
            if (menu_name == "French_dinner") menu_name = "프렌치 디너(French dinner)";
            if (menu_name == "English_dinner") menu_name = "잉글리시 디너(English dinner)";
            if (menu_name == "Champagne_festival_dinner") menu_name = "샴페인 축제 디너(Champagne Feast dinner)";
            price = order.price;
            //tr
            new_tr = document.createElement("tr");
            document.getElementById("history_table").appendChild(new_tr);
            // order_id
            new_th = document.createElement("th");
            new_th.innerHTML = order_id
            new_tr.appendChild(new_th);
            // customer_id
            new_td = document.createElement("td");
            new_td.innerHTML = order.customer_id;
            new_tr.appendChild(new_td);
            // menu_name
            new_td = document.createElement("td");
            new_td.innerHTML = menu_name
            new_tr.appendChild(new_td);
            // price
            new_td = document.createElement("td");
            new_td.innerHTML = price;
            new_tr.appendChild(new_td);
        }
    })
}