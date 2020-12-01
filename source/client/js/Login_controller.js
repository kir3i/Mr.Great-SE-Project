function login(id, pw) {
    fetch('/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id, pw})
        })
        .then(res => res.json())
        .then(ret => {
            alert("성공적으로 로그인 되었습니다.");
            if (ret.id == "admin") {
                setCookie('user', ret.id);
                location = "/staff";
            } else {
                setCookie('user', ret.id);
                location = "/customer";
            }
        })
        .catch(error => {
            alert("아이디/비밀번호를 확인해주세요.");
        })
}