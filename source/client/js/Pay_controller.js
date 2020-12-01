function display_basket(user) {
    let total_price = 0;
    fetch('/basketList', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id : user_id})
    })
    .then(res => res.json())
    .then(ret => {
        basket = ret;
        order_list = basket.order_list;
        for (let i in order_list) {
            order = order_list[i];
            order_id = order.order_id;
            if (order.menu.name == "Vallentine_dinner") menu_name = "발렌타인 디너(Valentine dinner)";
            if (order.menu.name == "French_dinner") menu_name = "프렌치 디너(French dinner)";
            if (order.menu.name == "English_dinner") menu_name = "잉글리시 디너(English dinner)";
            if (order.menu.name == "Champagne_festival_dinner") menu_name = "샴페인 축제 디너(Champagne Feast dinner)";
            style = order.style;
            price = order.price;
            food_amount_list = order.food_amount_list;
            amount = order.amount;
            additional_info = order.additional_info;

            total_price += price;

            new_row = document.createElement("div");
            new_row.setAttribute("class", "row m-2");
            document.getElementById("content_basket").appendChild(new_row);

            new_col = document.createElement("div");
            new_col.setAttribute("class", "col");
            new_row.appendChild(new_col);

            new_card = document.createElement("div");
            new_card.setAttribute("class", "card");
            new_col.appendChild(new_card);

            // card-header : menu_name
            new_menu_name = document.createElement("h5");
            new_menu_name.setAttribute("class", "card-header");
            new_menu_name.innerHTML = menu_name;
            new_card.appendChild(new_menu_name);

            // card-body
            new_card_body = document.createElement("div");
            new_card_body.setAttribute("class", "card-body");
            new_card.appendChild(new_card_body);

            // card-title : amount
            new_card_title = document.createElement("h5");
            new_card_title.setAttribute("class", "card-title");
            let tmp = price + "원 / (" + style + ", " + amount + "개) ";
            for (let k in food_amount_list) {
                tmp = tmp + k + "(" + food_amount_list[k] + ") ";
            }
            new_card_title.innerHTML = tmp;
            new_card_body.appendChild(new_card_title);

            new_card_text = document.createElement("p");
            new_card_text.setAttribute("class", "card-text");
            new_card_text.innerHTML = additional_info.to + ", " + additional_info.until;
            new_card_body.appendChild(new_card_text);
            
            new_button = document.createElement("a");
            new_button.setAttribute("class", "btn btn-info");
            new_button.setAttribute("id", order_id);
            new_button.setAttribute("onclick", "remove_btn_event_listener(this.id)");
            new_button.innerHTML = "제외하기"
            new_card_body.appendChild(new_button);
        }
        new_row2 = document.createElement("div");
        new_row2.setAttribute("class", "row m-2");
        document.getElementById("content_basket").appendChild(new_row2);

        new_col2 = document.createElement("div");
        new_col2.setAttribute("class", "col");
        new_row2.appendChild(new_col2);
        if (total_price > 0){
            new_button = document.createElement("a");
            new_button.setAttribute("class", "btn btn-primary");
            new_button.setAttribute("data-toggle", "modal");
            new_button.setAttribute("data-target", "#payModal");
            new_button.innerHTML = "결제 수단 선택"
            new_col2.appendChild(new_button);
            if (user.is_regular) {
                document.getElementById("total_price").innerHTML = "<del>" + total_price + "원</del>" + "→<span id=\"total_price_value\">" + (0.9 * total_price) + "</span>원입니다.<br>(단골 할인!!!!!!!!!)";
            }
            else {
                document.getElementById("total_price").innerHTML = "<span id=\"total_price_value\">" + total_price+"</span>원입니다.";
            }
        }
    })
    .catch(error => {
        alert(error);
    })
}

function remove_order(user_id, order_id) {
    fetch('/basketRefresh', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id : user_id,
            order_id : order_id
        })
    })
    .then(res => res.json())
    .then(ret => {
        alert("제외되었습니다.");
        location.reload();
    })
}

function pay(user_id, pay_info, total_price) {
    fetch('/payment', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id : user_id,
            pay_info : {
                payment: pay_info,
                price: total_price
            }
        })
    })
    .then(res => res.json())
    .then(ret => {
        alert("주문되었습니다.");
        location.reload();
    })
}