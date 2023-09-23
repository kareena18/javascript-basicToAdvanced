//logical

//and or not

//and
let password = "qwerty@";
if (password.length > 10 && password.includes("@")) {
    console.log("password is strong");
}
else {
    console.log("change the password");
}

//or
let password1 = "qwerty@";
if (password1.length > 10 || password1.includes("@")) {
    console.log("password is strong");
}
else {
    console.log("change the password");
}

//not
let status = false;
if (!status) {
    console.log("your status is", status);
}

//priority
let result = true && true || false && !false;
console.log(result);