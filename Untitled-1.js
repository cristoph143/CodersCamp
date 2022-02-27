const inputText = "mysite@g..com";
console.log(inputText);

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputText);
if (mailformat) {
    console.log("Valid email address!");
} else {
    console.log("You have entered an invalid email address!");
}

function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line

// Animal should not respond to the bark() method.
Dog.prototype = Object.create(Animal.prototype);
// Dog should inherit the eat() method from Animal.
Dog.prototype.eat = function () {
    console.log("crunch crunch");
    Animal.prototype.eat.call(this);
};

Dog.prototype.bark = function () { console.log("Woof!"); };
// The Dog prototype should have a bark() method.

// beagle should be an instanceof Animal.
var beagle = new Dog();
beagle.eat();
beagle.bark();

function Bird() { }

Bird.prototype.fly = function () { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function () { return "Alas, I am flyings!"; };

let penguin = new Penguin();
console.log(penguin.fly());

let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};
//use mixin named glideMixin
let glideMixin = function (obj) {
    obj.glide = function () {
        console.log("I'm using glide")
    }
}
glideMixin(bird);
glideMixin(boat);
boat.glide()
bird.glide()

function Birds() {
    //create a private variable weight and assign it to 15
    let weight = 15;
    // Your code should create a method in Bird called getWeight that returns the value of the private variable weight.
    this.getWeight = function () {
        return weight;
    }
}
let birdie = new Birds();
console.log(birdie.getWeight());


(function () {
    console.log("A cozy nest is ready");
})();

let motionModule = (function () {
    return {
        glideMixin: function (obj) {
            obj.glide = function () {
                console.log("Gliding on the water");
            };
        },
        flyMixin: function (obj) {
            obj.fly = function () {
                console.log("Flying, wooosh!");
            };
        }
    }
})();
motionModule.flyMixin(bird)
bird.fly()

let funModule =
    (function () {
        return {
            isCuteMixin: function (obj) {
                obj.isCute = function () {
                    return true;
                };
            },
            singMixin: function (obj) {
                obj.sing = function () {
                    console.log("Singing to an awesome tune");
                };
            }
        }
    })();

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

// The tea4TeamFCC variable should hold 40 cups of tea for the team.
const tea4TeamFCC = getTea(40);

// Function that returns a string representing a cup of green tea
const prepareGreenTeas = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTeas = (prepareTea, numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTeas(prepareGreenTeas, 40);
const tea4BlackTeamFCC = getTeas(prepareBlackTea, 40);
// Only change code above this line

console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
);
// tabs is an array of titles of each site open within the window
const Window = function (tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {

    // Only change code below this line

    const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

    return this;
};

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

// The global variable
let fixedValue = 4;

function incrementer() {
    return fixedValue + 1;
}
console.log(incrementer());
console.log(fixedValue)

// Write the incrementer function so it takes an argument, and then returns a result after increasing the value by one.
function incrementer(num) {
    return num + 1;
}
console.log(incrementer(fixedValue));

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr,bookName) {
    //copy the arr to newBookList
    const newBookList = [...arr];
    //add the bookName to the newBookList
    newBookList.push(bookName);
    //return the newBookList
    return newBookList;
}

// Change code below this line
function remove(arr,bookName) {
    const newBookList = [...arr];
    const book_index = newBookList.indexOf(bookName);
    if (book_index >= 0) {
        newBookList.splice(book_index, 1);
        return newBookList;
    }
}
add(bookList, "A Brief History of Time")
remove(bookList, "On The Electrodynamics of Moving Bodies")
remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies");
console.log(bookList);