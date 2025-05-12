

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

function sign_up() {
    let name = prompt("Enter your Name").toLocaleLowerCase().trim();
    if (!validname(name)) {
        alert("invalid name, the name should > 5 character & no number and no symbol");
        return;
    }

}

