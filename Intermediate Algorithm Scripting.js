// Sum All Numbers in a Range
function sumAll(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

sumAll([1, 4]);

// Intermediate Algorithm Scripting: Diff Two Arrays
function diffArray(arr1, arr2) {
    const newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            newArr.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            newArr.push(arr2[i]);
        }
    }
    return newArr;
}

// Intermediate Algorithm Scripting: Arguments Optional

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);

function destroyer(arr) {
    const args = Array.from(arguments);
    args.shift();
    return arr.filter(val => !args.includes(val));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer(["tree", "hamburger", 53], "tree", 53);
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");

// Intermediate Algorithm Scripting: Wherefore art thou
function whatIsInAName(collection, source) {
    const srcKeys = Object.keys(source);
    return collection.filter(
        obj => {
            return srcKeys
                .every(
                    key =>
                    obj.hasOwnProperty(key) &&
                    obj[key] === source[key]
                );
        }
    );
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2, "cookie": 2 });
whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 })

// Intermediate Algorithm Scripting: Spinal Tap Case
function spinalCase(str) {
    return str.replace(
        /([a-z])([A-Z])/g, '$1 $2'
    ).replace(
        /\s+|_+/g, '-'
    ).toLowerCase();
}
spinalCase('This Is Spinal Tap');
spinalCase('thisIsSpinalTap');
spinalCase('The_Andy_Griffith_Show');
spinalCase('Teletubbies say Eh-oh');
spinalCase('AllThe-small Things');

// Intermediate Algorithm Scripting: Pig Latin
function translatePigLatin(str) {
    return str
        .replace(/^[aeiou]\w*/, "$&way")
        .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}
translatePigLatin("california");
translatePigLatin("paragraphs");
translatePigLatin("consonant");
translatePigLatin("glove");
translatePigLatin("eight");
translatePigLatin("algorithm");
translatePigLatin("eighteen");
translatePigLatin("rythm");
translatePigLatin("schwartz");

// Intermediate Algorithm Scripting: Search and Replace

function myReplace(str, before, after) {
    const firstLetter = before[0];
    if (firstLetter === firstLetter.toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    if (firstLetter === firstLetter.toLowerCase()) {
        after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    return str.replace(before, after);
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("This has a spellngi error", "spellngi", "spelling");
myReplace("His name is Tom", "Tom", "john");
myReplace("Let us get back to more Coding", "Coding", "algorithms");
myReplace("I think we should look up there", "up", "Down");

// Intermediate Algorithm Scripting: DNA Pairing
function pairElement(str) {
    const pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    return str.split("").map(el => [el, pairs[el]]);
}
pairElement("GCG");
pairElement("ATCGA");
pairElement("TTGAG");
pairElement("CTCTA");

// Intermediate Algorithm Scripting: Missing letters
function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) !== str.charCodeAt(0) + i) {
            return String.fromCharCode(str.charCodeAt(0) + i);
        }
    }
}
fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
fearNotLetter("bcd");
fearNotLetter("yz");

// Intermediate Algorithm Scripting: Sorted Union
function uniteUnique(arr) {
    // Create an array to store the unique values
    const unique = [];
    // Loop through each array in the argument
    for (let i = 0; i < arguments.length; i++) {
        // Loop through each value in the array
        for (let j = 0; j < arguments[i].length; j++) {
            // If the value is not already in the unique array, add it
            if (unique.indexOf(arguments[i][j]) === -1) {
                unique.push(arguments[i][j]);
            }
        }
    }
    // Return the unique array
    return unique;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
uniteUnique([1, 2, 3], [5, 2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);

// Intermediate Algorithm Scripting: Convert HTML Entities
function convertHTML(str) {
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    return str.split("").map(el => htmlEntities[el] || el).join("");
}
convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Sixty > twelve");
convertHTML('Stuff in "quotation marks"');
convertHTML("Schindler's List");
convertHTML("<>");
convertHTML("abc");

// Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
function sumFibs(num) {
    let prev = 0;
    let curr = 1;
    let result = 0;
    while (curr <= num) {
        if (curr % 2 !== 0) {
            result += curr;
        }
        [prev, curr] = [curr, curr + prev];
    }
    return result;
}
sumFibs(4);
sumFibs(1000);
sumFibs(4000000);
sumFibs(4);
sumFibs(75024);

// Intermediate Algorithm Scripting: Sum All Primes
function sumPrimes(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
sumPrimes(10);
sumPrimes(977);
sumPrimes(10);
sumPrimes(15);

// Intermediate Algorithm Scripting: Smallest Common Multiple
function smallestCommons(arr) {
    //check the common lowest common multiples between the arr
    //store the range of numbers in an array
    const range = [];
    //loop through the array and push the numbers into the range array
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        range.push(i);
    }
    const gcd = (a, b) => !b ? a : gcd(b, a % b);
    const lcm = (a, b) => (a * b) / gcd(a, b);
    //loop through the range array and find the lcm
    let lcmResult;
    for (let i = 0; i < range.length; i++) {
        if (i === 0) {
            lcmResult = range[i];
        } else {
            lcmResult = lcm(lcmResult, range[i]);
        }
    }
    return lcmResult;
}

smallestCommons([1, 5]);
smallestCommons([5, 1]);
smallestCommons([1, 13]);
smallestCommons([23, 18, 13, 6]);
smallestCommons([1, 2, 3, 4, 5, 6]);
smallestCommons([20, 19, 18, 17, 16, 15]);
smallestCommons([2, 10]);
smallestCommons([23, 18]);
smallestCommons([23, 18, 60]);

// Intermediate Algorithm Scripting: Drop it
function dropElements(arr, func) {
    // Drop them elements.
    while (arr.length > 0 && !func(arr[0])) {
        arr.shift();
    }
    return arr;
}
dropElements([1, 2, 3, 4], function(n) { return n >= 3; });
dropElements([0, 1, 0, 1], function(n) { return n === 1; });
dropElements([1, 2, 3], function(n) { return n > 0; });
dropElements([1, 2, 3, 4], function(n) { return n > 5; });

// Intermediate Algorithm Scripting: Steamroller
function steamrollArray(arr) {
    // I'm a steamroller, baby
    return arr.reduce(
        (a, b) => a
        .concat(Array.isArray(b) ?
            steamrollArray(b) : b), []);
}
steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]);
steamrollArray([1, [],
    [3, [
        [4]
    ]]
]);
steamrollArray([1, {},
    [3, [
        [4]
    ]]
]);
steamrollArray([1, {},
    [3, [
        [4]
    ]]
]);
steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]);
// Intermediate Algorithm Scripting: Binary Agents
function binaryAgent(str) {
    return str
        .split(" ")
        .map(
            el => String
            .fromCharCode(
                parseInt(
                    el, 2
                )
            )
        )
        .join("");
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// Intermediate Algorithm Scripting: Everything Be True
function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(
        el => el[pre]
    );
}
truthCheck(
    [{
            "user": "Tinky-Winky",
            "sex": "male"
        },
        {
            "user": "Dipsy",
            "sex": "male"
        },
        {
            "user": "Laa-Laa",
            "sex": "female"
        },
        {
            "user": "Po",
            "sex": "female"
        }
    ], "sex");
truthCheck(
    [{
            "user": "Tinky-Winky",
            "sex": "male"
        },
        {
            "user": "Dipsy"
        },
        {
            "user": "Laa-Laa",
            "sex": "female"
        },
        {
            "user": "Po",
            "sex": "female"
        }
    ], "sex")
truthCheck([{
            "user": "Tinky-Winky",
            "sex": "male",
            "age": 0
        },
        {
            "user": "Dipsy",
            "sex": "male",
            "age": 3
        },
        {
            "user": "Laa-Laa",
            "sex": "female",
            "age": 5
        },
        {
            "user": "Po",
            "sex": "female",
            "age": 4
        }
    ],
    "age")
truthCheck([{
            "name": "Pete",
            "onBoat": true
        },
        {
            "name": "Repeat",
            "onBoat": true
        },
        {
            "name": "FastForward",
            "onBoat": null
        }
    ],
    "onBoat")
truthCheck([{
            "name": "Pete",
            "onBoat": true
        },
        {
            "name": "Repeat",
            "onBoat": true,
            "alias": "Repete"
        },
        {
            "name": "FastForward",
            "onBoat": true
        }
    ],
    "onBoat")
truthCheck([{
        "single": "yes"
    }],
    "single")
truthCheck([{
            "single": ""
        },
        {
            "single": "double"
        }
    ],
    "single")
truthCheck([{
            "single": "double"
        },
        {
            "single": undefined
        }
    ],
    "single")
truthCheck([{
            "single": "double"
        },
        {
            "single": NaN
        }
    ],
    "single")
truthCheck([{
            "single": "double"
        },
        {
            "single": "double"
        }
    ],
    "single")
truthCheck([{
            "single": "double"
        },
        {
            "single": "NaN"
        }
    ],
    "single")

// Intermediate Algorithm Scripting: Arguments Optional
function addTogether() {
    //use closure to store arguments
    let args = arguments;
    //check if all arguments are numbers
    if (args.length === 1 && typeof args[0] === "number") {
        return function(arg) {
            if (typeof arg === "number") {
                return args[0] + arg;
            } else {
                return undefined;
            }
        }
    }
    //check if all arguments are numbers
    if (args.length === 2 && typeof args[0] === "number" && typeof args[1] === "number") {
        return args[0] + args[1];
    }
    return undefined;
}
addTogether(2, 3);
addTogether(2)(3);
addTogether(5)(7);
addTogether("http://bit.ly/IqT6zt");
addTogether(2, "3");
addTogether(2)([3]);
addTogether(2)([3]);
addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")

// Intermediate Algorithm Scripting: Make a Person
function Person(firstAndLast) {
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast.split(" ");
    this.getFullName = function() {
        return fullName.join(" ");
    }
    this.getFirstName = function() {
        return fullName[0];
    }
    this.getLastName = function() {
        return fullName[1];
    }
    this.setFirstName = function(first) {
        fullName[0] = first;
    }
    this.setLastName = function(last) {
        fullName[1] = last;
    }
    this.setFullName = function(firstAndLast) {
        fullName = firstAndLast.split(" ");
    }
}
var bob = new Person('Bob Ross');
bob.getFullName();
Object.keys(bob).length;
bob instanceof Person;
bob.getFirstName();
bob.getLastName();
bob.setFirstName('Haskell');
bob.getFullName();
bob.setLastName('Curry');
bob.getFullName();
bob.setFullName('Haskell Curry');
bob.getFirstName();
bob.getLastName();

// Intermediate Algorithm Scripting: Map the Debris
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return arr.map(function(obj) {
        var a = Math.pow(earthRadius + obj.avgAlt, 3);
        var b = 2 * Math.PI * Math.sqrt(a / GM);
        obj.orbitalPeriod = Math.round(b);
        delete obj.avgAlt;
        return obj;
    });
}
orbitalPeriod([{
    name: "sputnik",
    avgAlt: 35873.5553
}]);
orbitalPeriod([{
    name: "iss",
    avgAlt: 413.6
}, {
    name: "hubble",
    avgAlt: 556.7
}, {
    name: "moon",
    avgAlt: 378632.553
}])