$(document).ready(function() {
    $('.signup').click(function() {
        $('.signup-form-wrap').css("display", "block");
    })

    $('.close').click(function() {
        $('.signup-form-wrap').css("display", "none");
        $('.login-form-wrap').css("display", "none");
    })
    
    $('.search-history__item-link').click(function() {
        $('.search-box__input').focus();
        $('.search-box__input').css("width", "300px");
        $('.search-box__input').css("padding", "0 15px 0 12px;");
    })
})

function checkUser() {
    var userInput = document.getElementById('user-input').value;
    var userError = document.getElementById('user-error');
    if (userInput.trim() == "") {
        userError.innerHTML = "*Tên tài khoản không được để trống";
        return false;
    }
    if (!userInput.trim().match(/^[a-zA-z0-9]{3,}$/)) {
        userError.innerHTML = "*Tên tài khoản chứa ít nhất 3 ký tự, gồm chữ hoa, chữ thường và số";
        return false;
    }
    userError.innerHTML = "";
    return true;
}

function checkPwd() {
    var pwdInput = document.getElementById('pwd-input').value;
    var pwdError = document.getElementById('pwd-error');
    if (pwdInput.trim() == "") {
        pwdError.innerHTML = "*Mật khẩu không được để trống";
        return false;
    }
    if (!pwdInput.trim().match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z@#\$\/\+\=\(\)\<\>\?-_%\^&\*\.]{6,}$/)) {
        pwdError.innerHTML = "*Mật khẩu chứa ít nhất 6 ký tự, ít nhất 1 chữ hoa, 1 chữ thường, 1 chữ số";
        return false;
    }
    pwdError.innerHTML = "";
    return true;
}

function checkRepwd() {
    var pwdInput = document.getElementById('pwd-input').value;
    var repwdInput = document.getElementById('repwd-input').value;
    var repwdError = document.getElementById('repwd-error');
    if (repwdInput.trim() != pwdInput.trim()) {
        repwdError.innerHTML = "*Mật khẩu không khớp";
        return false;
    }
    repwdError.innerHTML = "";
    return true;
}

function validInfo() {
    if (checkUser() && checkPwd() && checkRepwd()) {
        return true;
    }
    return false;
}