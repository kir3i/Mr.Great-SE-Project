"use strict"

import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

/* modules start */
import Menu from "./modules/Menu.mjs";
import Basic_info from "./modules/Basic_info.mjs";
import Basket from "./modules/Basket.mjs";
import Member_management from "./modules/Member_management.mjs";
import Customer from "./modules/Customer.mjs";

import Order_list from "./modules/Order_list.mjs";
import Order from "./modules/Order.mjs";
import Order_history from "./modules/Order_history.mjs";
/* modules end */


const __dirname = path.resolve(path.dirname(''));

const app = express();
app.use(express.static(path.join(__dirname, 'source', 'client'), {index: false}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// 메인 페이지 GET
app.get('/', (req, res) => {
    console.log('GET /');
    res.sendFile(path.join(__dirname, 'source', 'client', 'index.html'));
});

// 로그인 로직 (POST)
// 수신: {id, pw}
// 반환: Customer 객체 or null
app.post('/', (req, res) => {
    const { id, pw } = req.body;
    console.log('POST /:', id, pw);

    // try login
    // 성공 시 Customer 객체 반환, 실패 시 null 반환
    const ret = Member_management.login(id, pw);
    res.send(ret);
});


/* 고객 제공 API */

// 회원가입 페이지 GET
app.get('/register', (req, res) => {
    console.log('GET /register');
    res.sendFile(path.join(__dirname, 'source', 'client', 'register.html'));
});

// 회원가입 로직 (POST)
// 수신: {id, pw, info}
// 반환: Customer 객체 or null
app.post('/register', (req, res) => {
    const { id, pw, info } = req.body;
    console.log('POST /register:', id, pw, info);
    
    //JSON parsing
    const infoJSON = JSON.parse(info);
    // try register
    // 성공 시 Customer 객체 반환, 실패 시 null 반환
    const ret = Member_management.signup(id, pw, infoJSON);
    res.send(ret);
});

// 고객 메인 페이지
app.get('/customer', (req, res) => {
    console.log('GET /customer');
    res.sendFile(path.join(__dirname, 'source', 'client', 'customer', 'customer.html'));
});

// 고객 - 메뉴 페이지
app.get('/menu', (req, res) => {
    console.log('GET /menu');
    res.sendFile(path.join(__dirname, 'source', 'client', 'customer', 'menu.html'));
});

// 고객 - 주문
// 수신: {menu, style, food_amount_list, amount, additional_info}
// 반환: 응답(성공 시 true, 실패 시 false)
app.post('/menu', (req, res) => {
    const { id, menu, style, food_amount_list, amount, additional_info } = req.body;
    console.log('POST /menu:', id, menu, style, food_amount_list, amount, additional_info);
    
    // JSON parsing
    const food_amount_list_JSON = JSON.parse(food_amount_list);
    const additional_info_JSON = JSON.parse(additional_info);
    // Customer 객체가 가진 Basket에 새로운 Order를 추가
    try {
        Member_management.activated_member_list[id].basket.add_order(
            id, menu, style, food_amount_list_JSON, amount, additional_info_JSON
        );
        
        // DEBUG START
        // const ret = Member_management.activated_member_list[id].basket.order_list['0']
        // console.log(ret.menu, ret.style, ret.food_amount_list, ret.amount, ret.additional_info);
        // console.log(ret.get_price())
        // DEBUG END
        res.send(true);
    } catch(e) {
        console.log(e);
        res.send(false);
    }
});

// 고객 - 장바구니 페이지
app.get('/basket', (req, res) => {
    console.log('GET /basket');
    res.sendFile(path.join(__dirname, 'source', 'client', 'customer', 'basket.html'));
});

// 고객 - 장바구니 확인
// 수신: {id}
// 반환: Basket 객체 (실패 시 null)
app.post('/basketList', (req, res) => {
    const { id } = req.body;
    console.log('POST /basketList:', id);

    // 장바구니 반환
    const ret = Member_management.activated_member_list[id].basket;
    // console.log(ret.order_list);
    res.send(ret);
});

// 고객 - 장바구니에서 특정 주문 제외
// 수신: {id, order_id}
// 반환: 응답(성공 시 true, 실패 시 false)
app.post('/basketRefresh', (req, res) => {
    const { id, order_id } = req.body;
    console.log('POST /basketRefresh:', id, order_id);

    // 삭제 수행
    const ret = Member_management.activated_member_list[id].basket.remove_order(order_id);
    res.send(ret);
});

// 고객 - 최종결제
// 수신: {id}
// 반환: 응답(성공 시 true, 실패 시 false)
app.post('/payment', (req, res) => {
    const { id, pay_info } = req.body;
    console.log('POST /payment:', id, pay_info);

    // 결제 수행
    const ret = Member_management.activated_member_list[id].pay(pay_info);
    res.send(ret);
});

// 고객 - Customer 객체 반환
// 수신: {id}
// 반환: Customer 객체 or null
app.post('/customer', (req, res) => {
    const { id } = req.body;
    console.log('POST /customer: ', id);

    // Customer 객체 반환
    const ret = Member_management.activated_member_list[id];
    res.send(ret);
});

/* 직원 제공 API */

// 직원 메인 페이지
app.get('/staff', (req, res) => {
    console.log('GET /staff');
    res.sendFile(path.join(__dirname, 'source', 'client', 'staff', 'staff.html'));
});

// 직원 - 현재 주문 페이지
app.get('/now_ordered', (req, res) => {
    console.log('GET /now_ordered');
    res.sendFile(path.join(__dirname, 'source', 'client', 'staff', 'now_ordered.html'));
});

// 직원 - 활성화된 주문 목록 조회
// 수신: 없음
// 반환: Order_list 객체
app.get('/orderlist', (req, res) => {
    console.log('GET /orderlist');
    
    // Order_list 객체 반환
    const ret = {
        waiting_order_list: Order_list.waiting_order_list,
        cooking_order_list: Order_list.cooking_order_list,
        delivering_order_list: Order_list.delivering_order_list
    };
    res.send(ret);
});

// 직원 - 주문 상태 변경
// 수신: { order_id, from, to }
// 반환: 응답(성공 시 true, 실패 시 false)
app.post('/changeOrder', (req, res) => {
    const { order_id, from, to } = req.body;
    console.log('POST /changeOrder: ', order_id, from, to);

    // 주문 상태 변경
    try {
        Order_list.change_order_status(order_id, from, to);
        res.send(true);
    } catch (e) {
        console.log(e);
        res.send(false);    // 옳지 않은 매개변수가 주어진 경우 false 반환
    }
});

// 직원 - 완료 주문 이력 페이지
app.get('/order_history', (req, res) => {
    console.log('GET /order_history');
    res.sendFile(path.join(__dirname, 'source', 'client', 'staff', 'order_history.html'));
});

// 직원 - 과거 주문 이력 조회
app.get('/history', (req, res) => {
    console.log('GET /history');
    
    // 과거 주문 이력 반환
    console.log(Order_history.order_history);
    res.send(Order_history.order_history);
});

// 고객, 직원 - 로그아웃
// 수신: id
// 반환: 응답(성공 시 true, 실패 시 false)
app.post('/logout', (req, res) => {
    const { id } = req.body;
    console.log('POST /logout:', id);
    
    // 로그아웃 처리
    try {
        Member_management.deactivate(id);
        res.send(true);
    } catch (e) {
        console.log(e);
        res.send(false);
    }
});


// 404 에러 처리
app.use((req, res, next) => {
    res.status(404).send('일치하는 주소가 없습니다!');
});


app.listen(8001, () => {
    console.log('Express App on port 8001');
});