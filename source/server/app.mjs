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
    res.sendFile(path.join(__dirname, 'source', 'client', 'index.html'));
});

// 로그인 로직 (POST)
// 수신: {id, pw}
// 반환: Customer 객체 or null
app.post('/', (req, res) => {
    const { id, pw } = req.body;
    console.log(id, pw);

    // try login
    // 성공 시 Customer 객체 반환, 실패 시 null 반환
    const ret = Member_management.login(id, pw);
    res.send(ret);
});

// 회원가입 페이지 GET
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'source', 'client', 'register.html'));
});

// 회원가입 로직 (POST)
// 수신: {id, pw, info}
// 반환: Customer 객체 or null
app.post('/register', (req, res) => {
    const { id, pw, info } = req.body;
    console.log(id, pw, info);

    // try register
    // 성공 시 Customer 객체 반환, 실패 시 null 반환
    const ret = Member_management.signup(id, pw, info);
    res.send(ret);
});

// 고객 메인 페이지
app.get('/customer', (req, res) => {
    res.sendFile(path.join(__dirname, 'source', 'client', 'customer.html'));
});

// 고객 - 메뉴 페이지
app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, 'source', 'client', 'menu.html'));
});

app.post('/menu', (req, res) => {
    const { style, info } = req.body;
    console.log(style, info);
});

// 고객 - 장바구니 페이지
app.get('/basket', (req, res) => {
   res.sendFile(path.join(__dirname, 'source', 'client', 'basket.html'));
});

// 고객 - 장바구니 목록 리턴
app.get('/basketList', (req, res) => {
    const { id } = req.body;
    // id에 해당하는 장바구니 리턴
    const ret = undefined;
    res.send(ret);
});

// 직원 메인 페이지
app.get('/staff', (req, res) => {
  res.sendFile(path.join(__dirname, 'source', 'client', 'staff.html'));
});

// 직원 - 현재 주문 페이지
app.get('/now_ordered', (req, res) => {
  res.sendFile(path.join(__dirname, 'source', 'client', 'now_ordered.html'));
});

// 직원 - 완료 주문 이력 페이지
app.get('/order_history', (req, res) => {
  res.sendFile(path.join(__dirname, 'source', 'client', 'order_history.html'));
});



// 404 에러 처리
app.use((req, res, next) => {
    res.status(404).send('일치하는 주소가 없습니다!');
});


app.listen(8001, () => {
    console.log('Express App on port 8001');
});