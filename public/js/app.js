

function validname(name) {
    if (name.length < 5) {
        console.log("name is too short, you need at least 5 charachters");
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
        return;
    }
let email = prompt("enter valid Email").trim().toLocaleLowerCase()
    if (!isValidEmail(email)) {
        alert("invalid email. Make sure it's correct and not already used.");
        return;
    }



}
  



