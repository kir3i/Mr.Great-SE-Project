function add_new_member(id, pw, info) {
    fetch('/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id, pw, info})
        })
        .then(res => res.json())
        .then(ret => {
            alert("성공적으로 회원가입 되었습니다.");
            location = "/";
        })
        .catch(error => {
            alert("이미 있는 아이디입니다.");
        })
}