function display_recent_menu(user_id) {
    fetch('/customer', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id : user_id})
    })
    .then(res => res.json())
    .then(ret => {
        let recent_ordered_menu = ret.recent_ordered_menu_list
        let N = 4;
        if (N > recent_ordered_menu.length) {
            N = recent_ordered_menu.length;
        }
        for (let i = 0; i < N; i++) {
            recent_menu = recent_ordered_menu[i].menu.name;
            new_col = document.createElement("div");
            new_col.setAttribute("class", "col-xl-3 col-md-6 mb-4");
            document.getElementById("recnet_menu").appendChild(new_col);

            new_card = document.createElement("div");
            new_card.setAttribute("class", "card border-left-secondary shadow h-100 py-2");
            new_col.appendChild(new_card);

            new_card_body = document.createElement("div");
            new_card_body.setAttribute("class", "card-body");
            new_card.appendChild(new_card_body);

            // item
            new_card_row = document.createElement("div");
            new_card_row.setAttribute("class", "row no-gutters align-items-center");
            new_card_body.appendChild(new_card_row);
            
            // name
            new_card_col = document.createElement("div");
            new_card_col.setAttribute("class", "col mr-2");
            new_card_row.appendChild(new_card_col);

            new_card_name = document.createElement("div");
            new_card_name.setAttribute("class", "h5 mb-0 font-weight-bold text-gray-800");
            if (recent_menu == "Vallentine_dinner") new_card_name.innerHTML = "발렌타인 디너(Valentine dinner)";
            if (recent_menu == "French_dinner") new_card_name.innerHTML = "프렌치 디너(French dinner)";
            if (recent_menu == "English_dinner") new_card_name.innerHTML = "잉글리시 디너(English dinner)";
            if (recent_menu == "Champagne_festival_dinner") new_card_name.innerHTML = "샴페인 축제 디너(Champagne Feast dinner)";
            new_card_col.appendChild(new_card_name);

            //button
            new_card_button = document.createElement("div");
            new_card_button.setAttribute("class", "row no-gutters align-items-center");
            new_card_body.appendChild(new_card_button);

            new_card_button_text = document.createElement("a");
            new_card_button_text.setAttribute("class", "btn btn-secondary");
            new_card_button_text.setAttribute("data-toggle", "modal");
            new_card_button_text.setAttribute("data-target", "#"+recent_menu+"_Modal");
            new_card_button_text.innerHTML = "주문하기";
            new_card_button.appendChild(new_card_button_text);
        }
    })
    .catch(error => {
        alert(error);
    })
}

function add_order(user_id, menu, style, food_amount_list, amount, to, until) {
    fetch('/menu', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id : user_id,
            menu : menu,
            style : style,
            food_amount_list : JSON.stringify(food_amount_list),
            amount : amount,
            additional_info : JSON.stringify({
                to: to,
                until: until
            })
        })
    })
    .then(res => res.json())
    .then(ret => {
        alert("장바구니에 담았습니다.");
    })
    .catch(error => {
        alert(error);
    })
}