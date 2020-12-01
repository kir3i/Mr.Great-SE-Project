function display_order_lists() {
    fetch('/orderlist', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    })
    .then(res => res.json())
    .then(ret => {
        waiting_order_list = ret.waiting_order_list;
        cooking_order_list = ret.cooking_order_list;
        delivering_order_list = ret.delivering_order_list;
        for (let order_id in waiting_order_list) {
            let order = waiting_order_list[order_id];
            let food_info = order.menu.name;
            if (food_info == "Vallentine_dinner") food_info = "발렌타인 디너(Valentine dinner)";
            if (food_info == "French_dinner") food_info = "프렌치 디너(French dinner)";
            if (food_info == "English_dinner") food_info = "잉글리시 디너(English dinner)";
            if (food_info == "Champagne_festival_dinner") food_info = "샴페인 축제 디너(Champagne Feast dinner)";
            food_info = food_info + "(" + order.style + ", " + order.amount + "개) / ";
            for (let k in order.food_amount_list) {
            food_info = food_info + k + "(" + order.food_amount_list[k] + ") ";
            }
            new_tr = document.createElement("tr");
            document.getElementById("waiting_order_list").appendChild(new_tr);
            // order_id td
            new_td = document.createElement("td");
            new_tr.appendChild(new_td);
            // checkbox input
            new_input = document.createElement("input");
            new_input.setAttribute("type", "checkbox");
            new_input.setAttribute("id", order_id);
            new_td.appendChild(new_input);
            new_label = document.createElement("div");
            new_label.innerHTML = order_id;
            new_td.appendChild(new_label);
            // additional_info.to
            new_td2 = document.createElement("td");
            new_td2.innerHTML = order.customer_id+"/"+order.additional_info.to;
            new_tr.appendChild(new_td2);
            // food_info
            new_td3 = document.createElement("td");
            new_td3.innerHTML = food_info;
            new_tr.appendChild(new_td3);
        }
        for (let order_id in cooking_order_list) {
            let order = cooking_order_list[order_id];
            let food_info = order.menu.name;
            if (food_info == "Vallentine_dinner") food_info = "발렌타인 디너(Valentine dinner)";
            if (food_info == "French_dinner") food_info = "프렌치 디너(French dinner)";
            if (food_info == "English_dinner") food_info = "잉글리시 디너(English dinner)";
            if (food_info == "Champagne_festival_dinner") food_info = "샴페인 축제 디너(Champagne Feast dinner)";
            food_info = food_info + "(" + order.style + ", " + order.amount + "개) / ";
            for (let k in order.food_amount_list) {
            food_info = food_info + k + "(" + order.food_amount_list[k] + ") ";
            }
            new_tr = document.createElement("tr");
            document.getElementById("cooking_order_list").appendChild(new_tr);
            // order_id td
            new_td = document.createElement("td");
            new_tr.appendChild(new_td);
            // checkbox input
            new_input = document.createElement("input");
            new_input.setAttribute("type", "checkbox");
            new_input.setAttribute("id", order_id);
            new_td.appendChild(new_input);
            new_label = document.createElement("div");
            new_label.innerHTML = order_id;
            new_td.appendChild(new_label);
            // additional_info.to
            new_td2 = document.createElement("td");
            new_td2.innerHTML = order.customer_id+"/"+order.additional_info.to;
            new_tr.appendChild(new_td2);
            // food_info
            new_td3 = document.createElement("td");
            new_td3.innerHTML = food_info;
            new_tr.appendChild(new_td3);
        }
        for (let order_id in delivering_order_list) {
            let order = delivering_order_list[order_id];
            let food_info = order.menu.name;
            if (food_info == "Vallentine_dinner") food_info = "발렌타인 디너(Valentine dinner)";
            if (food_info == "French_dinner") food_info = "프렌치 디너(French dinner)";
            if (food_info == "English_dinner") food_info = "잉글리시 디너(English dinner)";
            if (food_info == "Champagne_festival_dinner") food_info = "샴페인 축제 디너(Champagne Feast dinner)";
            food_info = food_info + "(" + order.style + ", " + order.amount + "개) / ";
            for (let k in order.food_amount_list) {
            food_info = food_info + k + "(" + order.food_amount_list[k] + ") ";
            }
            new_tr = document.createElement("tr");
            document.getElementById("delivering_order_list").appendChild(new_tr);
            // order_id td
            new_td = document.createElement("td");
            new_tr.appendChild(new_td);
            // checkbox input
            new_input = document.createElement("input");
            new_input.setAttribute("type", "checkbox");
            new_input.setAttribute("id", order_id);
            new_td.appendChild(new_input);
            new_label = document.createElement("div");
            new_label.innerHTML = order_id;
            new_td.appendChild(new_label);
            // additional_info.to
            new_td2 = document.createElement("td");
            new_td2.innerHTML = order.customer_id+"/"+order.additional_info.to;
            new_tr.appendChild(new_td2);
            // food_info
            new_td3 = document.createElement("td");
            new_td3.innerHTML = food_info;
            new_tr.appendChild(new_td3);
        }
      })
      .catch(error => {
        alert(error);
      })
}

function change_order_status(order_id, status) {
    if (status == "COOKING") {
        from = "WAITING";
        to = "COOKING";
    }
    else if (status == "DELIVERING") {
        from = "COOKING";
        to = "DELIVERING";
    }
    else if (status == "COMPLETED") {
        from = "DELIVERING";
        to = "COMPLETED";
    }
    fetch('/changeOrder', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          order_id : order_id,
          from : from,
          to : to
        })
    })
    .then(res => res.json())
    .then(ret => {
        location.reload();
    })
    .catch(e => {
        alert(e);
    })
}