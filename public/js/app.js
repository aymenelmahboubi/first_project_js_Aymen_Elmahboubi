

function validname(name) {
    if (name.length < 5) {
        console.log("name is too short, you need 5 charachters");
        return false;
    }
    if (/\d/.test(name)) {
        console.log("remove numbers from name");
        return false;
    }
    if (/[@#\-+*/]/.test(name)) {
        console.log("remove special characters");
        return false;
    }
    return true;
}
function validage(age) {
    if (!/^\d+$/.test(age)) return false;
    if (age < 18 || age >= 100) return false;
    return true;
}

function validemail(email) {
    if (email.length < 10) {
        console.log("email is too short, you need 10 charachters");
        return false
    }
    if (email.includes(" ")) {
        console.log("remove spaces");
        return false
    }
    if (email.split("@").length !== 2) return false;

    
    let emailexist = data_user.find(user => user.email === email);
    if (emailexist) return false;

    return true;
}

function validpassword(password) {
    if (password.includes(" ")) return false;
    if (password.length < 7) return false;
    if (!/[@#\-+*/]/.test(password)) return false;
    return true
}


let data_user = [];

class User {
    constructor(name, email, age, password) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
        this.moneybalance = 1000;
        this.history = [];
    }
}

function sign_up() {
    let name = prompt("enter your Name").toLocaleLowerCase().trim();
    if (!validname(name)) {
        alert("invalid name, the name should > 5 character & no number and no symbol");
        return
    }
let email = prompt("enter valid Email").trim().toLocaleLowerCase()
    if (!validemail(email)) {
        alert("invalid email. Make sure it's correct and not already used.");
        return
    }
    let age = parseInt(prompt("how old are you?").trim());
    if (!validage(age)) {
        alert("invalid age. Must be a number with less than 3 digits and more then 18");
        return
    
    }

     let password = prompt("Enter Password").trim()
    if (!validpassword(password)) {
        alert("Invalid password. Must be 7+ characters with one special symbol (@, #, -, +, *, /)")
        return;
    }
    let confirm_password = prompt("Confirm your Password").trim();
    if (password !== confirm_password) {
        alert("password incorrect, try again")
        sign_up();
        return;
    }
    let newuser = new User(name, email, age, password);
    data_user.push(newuser);
    alert("welcome to bank 0dh");

}

function login() {
    let email = prompt("enter your email").toLowerCase().trim()
    let password = prompt("enter your password").trim()
    let user = data_user.find(user => user.email === email);

    if (user && user.password === password) {
        alert("login success welcome to bank 0dh");
        menu(user);
    } else {
        alert("login failed try again");
    }
}





let user_function = ""
while (user_function !== "4") {
    user_function = prompt("mar7ba biike systéme ga3ma tay7e   \n 1 - sign up \n 2 - login \n 3 - change password \n 4 - exit");
    if (user_function === null) {
        
    }

    if (user_function === "1") {
        sign_up();
    } else if (user_function === "2") {
        login();
    } else if (user_function === "3") {
        change_password();
    } else if (user_function === "4") {
        alert("Goodbye!");
    } else {
        alert("enter the information");
    }

    console.log(data_user);
}


function change_password() {
    let email = prompt("enter your email")
    let user = data_user.find(user => user.email === email)
    if (!user) {
        alert("email not exist, you need to register")
        return
    }
    let newpassword = prompt("enter the new password")
    let newconfirmpassword = prompt("confirm the new password")

    while (newpassword.replace(/\s+/g, '').length !== newpassword.length || newpassword.length < 7 || !/[#@\-+*/]/.test(newpassword) || /\s/.test(newpassword) || newpassword !== newconfirmpassword) {
        if (newpassword !== newconfirmpassword) {
            alert("the password do not match")
        } else {
            alert("invalid password must contain at least 7 characters")
        }
        newpassword = prompt("enter  the new password")
        newconfirmpassword = prompt("confirm the new password")
    }

    user.password = newpassword
    alert("password succcessfully changed")
    console.table(data_user)
}


