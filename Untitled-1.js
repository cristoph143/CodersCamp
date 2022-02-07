const inputText = "mysite@g..com";
console.log(inputText);

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputText);
if (mailformat) {
    console.log("Valid email address!");
} else {
    console.log("You have entered an invalid email address!");
}


