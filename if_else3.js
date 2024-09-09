var password = "securepass";

if (password.length < 8) {
    console.log("The password is too short.");
} else {
    console.log(password);
}

var num = 15;

if (num % 3 === 0 || num % 5 === 0) {
    console.log("This number is divisible by 3 or 5");
} else {
    console.log("This number is not divisible by 3 or 5");
}