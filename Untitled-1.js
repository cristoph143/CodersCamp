const inputText = "mysite@g..com";
console.log(inputText);

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputText);
if (mailformat) {
    console.log("Valid email address!");
} else {
    console.log("You have entered an invalid email address!");
}

function Animal() {}
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() {}

// Only change code below this line

// Animal should not respond to the bark() method.
Dog.prototype = Object.create(Animal.prototype);
// Dog should inherit the eat() method from Animal.
Dog.prototype.eat = function() {
    console.log("crunch crunch");
    Animal.prototype.eat.call(this);
};

Dog.prototype.bark = function() { console.log("Woof!"); };
// The Dog prototype should have a bark() method.

// beagle should be an instanceof Animal.
var beagle = new Dog();
beagle.eat();
beagle.bark();

function Bird() {}

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function() { return "Alas, I am flyings!"; };

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
let glideMixin = function(obj) {
    obj.glide = function() {
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
    this.getWeight = function() {
        return weight;
    }
}
let birdie = new Birds();
console.log(birdie.getWeight());


(function() {
    console.log("A cozy nest is ready");
})();

let motionModule = (function() {
    return {
        glideMixin: function(obj) {
            obj.glide = function() {
                console.log("Gliding on the water");
            };
        },
        flyMixin: function(obj) {
            obj.fly = function() {
                console.log("Flying, wooosh!");
            };
        }
    }
})();
motionModule.flyMixin(bird)
bird.fly()

let funModule =
    (function() {
        return {
            isCuteMixin: function(obj) {
                obj.isCute = function() {
                    return true;
                };
            },
            singMixin: function(obj) {
                obj.sing = function() {
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
const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

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
function add(arr, bookName) {
    //copy the arr to newBookList
    const newBookList = [...arr];
    //add the bookName to the newBookList
    newBookList.push(bookName);
    //return the newBookList
    return newBookList;
}

// Change code below this line
function remove(arr, bookName) {
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

// The global variable
const watchList = [{
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

// Only change code below this line

const ratings1 = [];
for (let i = 0; i < watchList.length; i++) {
    ratings1.push({ title: watchList[i]["Title"], rating: watchList[i]["imdbRating"] });
}
const ratings = watchList.map(movie => {
    return { title: movie["Title"], rating: movie["imdbRating"] };
});

// Only change code above this line

console.log(JSON.stringify(ratings1));
console.log(JSON.stringify(ratings));
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }
    // Only change code above this line
    return newArray;
};

const new_s = s.myMap(function(item) {
    return item * 2;
});

// Only change code below this line

const filteredList = watchList
    .map(movie => {
        return {
            title: movie["Title"],
            rating: movie["imdbRating"]
        };
    })
    .filter(movie => {
        return parseFloat(movie.rating) >= 8.0;
    });

// Only change code above this line

console.log(filteredList);

// The global variable
const s1 = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
    // Only change code below this line
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArray.push(this[i]);
        }
    }
    // Only change code above this line
    return newArray;
};

const new_s1 = s.myFilter(function(item) {
    return item % 2 === 1;
});

function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    return anim.slice(beginSlice, endSlice);
    // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

function nonMutatingSplice(cities) {
    // Only change code below this line
    cities.splice(3);
    return cities.slice(0, 3);
    // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

function nonMutatingConcat(original, attach) {
    // Only change code below this line
    return original.concat(attach);
    // Only change code above this line
}

const firsts = [1, 2, 3];
const seconds = [4, 5];
nonMutatingConcat(firsts, seconds);

function nonMutatingPush(original, newItem) {
    // Only change code below this line
    return original.concat(newItem);
    // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);

function getRating(watchList) {
    // Only change code below this line
    let averageRating_reduce;

    averageRating_reduce = watchList.reduce(
        (data, {
            Director: director,
            imdbRating: rating
        }) => {
            if (director === 'Christopher Nolan') {
                data.count++;
                data.sum += Number(rating);
            }
            return data;
        }, { sum: 0, count: 0 }
    );
    const averageRating = averageRating_reduce.sum / averageRating_reduce.count;
    // Only change code above this line
    return averageRating;
}

console.log(getRating(watchList));

const squareList = arr => {
    // Only change code below this line
    return arr
        .filter(num =>
            num > 0 && num % parseInt(num) === 0)
        .map(num => num * num);
    return arr;
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

function reverseAlpha(arr) {
    return arr.sort(function(a, b) {
        return a === b ? 0 : a < b ? 1 : -1;
    });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);

function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    });
}

ascendingOrder([1, 5, 2, 3, 4]);

function alphabeticalOrder(arr) {
    // Only change code below this line
    return arr.sort();
    // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Only change code below this line
    return [...arr].sort((a, b) => a - b);
    // return arr.sort((a, b) => a - b);

    // Only change code above this line
}

nonMutatingSort(globalArray);
const str = "Hello World";
const bySpace = str.split(" ");

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);

function splitify(str) {
    // Only change code below this line

    return str.split(/\W/);
    // Only change code above this line
}

splitify("Hello World,I-am code");

function sentensify(str) {
    // Only change code below this line
    return str
        .split(/\W/)
        .filter(
            word =>
            word.length > 0
        ).join(" ");
    // Only change code above this line
}

sentensify("May-the-force-be-with-you");

function urlSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .join("-");
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
urlSlug(" Winter Is  Coming");

const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
    return currentValue < 10;
});

function checkPositive(arr) {
    // Only change code below this line

    return arr.every(function(currentValue) {
        return currentValue > 0;
    });
    // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);

const number = [10, 50, 8, 220, 110, 11];

number.some(function(currentValue) {
    return currentValue < 10;
});

function checkPositive(arr) {
    // Only change code below this line

    return arr.some(function(currentValue) {
        return currentValue > 0;
    });
    // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);

function unCurried(x, y) {
    return x + y;
}

function curried(x) {
    return function(y) {
        return x + y;
    }
}

const currieds = x => y => x + y;
curried(1)(2);
currieds(1)(2);

const adds = x => y => z => x + y + z;

console.log(adds(10)(20)(30));