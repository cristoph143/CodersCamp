// import prompt from 'prompt';
//remove all falsy values from the array
function removeFalsy(array) {
    return array.filter(Boolean);
}
removeFalsy([7, "ate", "", false, 9]);

function isAnagram(wrd1, wrd2) {
    //convert both words to lowercase
    let lowerWrd1 = wrd1.toLowerCase();
    let lowerWrd2 = wrd2.toLowerCase();
    //call isSorted() for both words
    let sortedWrd1 = isSorted(lowerWrd1);
    let sortedWrd2 = isSorted(lowerWrd2);
    return sortedWrd1 === sortedWrd2;
}

function isSorted(wrd1) {
    //sort the words
    let sortedWrd1 = wrd1.split('').sort().join('');
    return sortedWrd1;
}
isAnagram('listen', 'silent');
isAnagram('nameless', 'salesmen')

//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
//The returned value should be a number.
function getIndexToIns(arr, num) {
    //sort the array
    arr.sort(function (a, b) {
        return a - b;
    });
    //loop through the array
    for (let i = 0; i < arr.length; i++) {
        //if the current number is less than the number we are searching for, return the index
        if (num <= arr[i]) {
            return i;
        }
    }
    //if the number is greater than all numbers in the array, return the length of the array
    return arr.length;
}
getIndexToIns([], 1)
getIndexToIns([2, 20, 10], 19)
getIndexToIns([], 1)
getIndexToIns([3, 10, 5], 3)

//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
    //convert both strings to lowercase
    let lowerWrd1 = arr[0].toLowerCase();
    let lowerWrd2 = arr[1].toLowerCase();
    //loop through the second word
    for (let i = 0; i < lowerWrd2.length; i++) {
        //if the current character is not in the first word, return false
        if (lowerWrd1.indexOf(lowerWrd2[i]) < 0) {
            return false;
        }
    }
    return true;
}
mutation(['hello', 'hey'])
mutation(['helloy', 'hey'])

//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
    //create an empty array
    let newArr = [];
    //loop through the array
    for (let i = 0; i < arr.length; i += size) {
        //push the current chunk to the new array
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () {
        return "This dog has " + this.numLegs + " legs.";
    }
};
dog.sayLegs();

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add the own properties of canary to the array ownProps.
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}
function Dog(name) {
    this.name = name;
}

// Add a numLegs property to the prototype of Dog
Dog.prototype.numLegs = 4;
// Only change code above this line
let beagle = new Dog("Snoopy");



let prototypeProps = [];
/*
You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.
*/
function Birds(name) {
    this.name = name;  //own property
}

Birds.prototype.numLegs = 2; // prototype property

let duck = new Birds("Donald");
//Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps:

let ownProps1 = [];
let prototypeProps1 = [];

for (let property in duck) {
    if (duck.hasOwnProperty(property)) {
        ownProps1.push(property);
    } else {
        prototypeProps1.push(property);
    }
}

console.log(ownProps1);
console.log(prototypeProps1);
//console.log(ownProps) would display ["name"] in the console, and console.log(prototypeProps) would display ["numLegs"].

console.log(duck.constructor === Bird);
console.log(beagle.constructor === Dog);
joinBirdFraternity(duck);
function joinBirdFraternity(candidate) {
    if (candidate.constructor === Bird) {
        return true;
    } else {
        return false;
    }
}

// Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
}
joinDogFraternity(beagle)
joinDogFraternity(duck)

Bird.prototype.eat = function () {
    console.log("nom nom nom");
}


Bird.prototype.describe = function () {
    console.log("My name is " + this.name);
}

Dog.prototype = {
    constructor: Dog,
    // Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};
Dog.prototype.isPrototypeOf(beagle)
Bird.prototype.isPrototypeOf(duck)
let ty = typeof Dog.prototype;
//Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype:
Object.prototype.isPrototypeOf(Bird.prototype);
// let duck = new Bird("Donald");
duck.hasOwnProperty("name");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below using prototype chain so that it evaluates to true 
Object.prototype.isPrototypeOf(Dog.prototype);
//Prototype chain
//The prototype chain is a list of objects from the current object up to the Object prototype.
//The Object prototype is the ultimate ancestor of all objects in JavaScript.
//The Object prototype has no properties of its own, but it does have a property constructor, which is a reference to the function that created the object.
//The constructor property is a reference to the function that created the object.
//The constructor property is not enumerable, so it is not included in the for-in loop.
//The constructor property is not included in the for-in loop.


//---------------------------------------------------------------------------------------------------------------------
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};
let ducks = Object.create(Animal.prototype); // Change this line
let beagles = Object.create(Animal.prototype); // Change this line
let animal = new Animal()
animal.eat();
ducks.eat();
ducks instanceof Animal
ducks.eat
function Cat(name) {
    this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);
let dogs = new Dog();
dogs.eat;
Bird.prototype = Object.create(Animal.prototype);
let birds = new Dog();
birds.eat;
Dog.prototype.fly = function () {
    console.log("I am flying!");
};
birds.fly();
//When an object inherits its prototype from another object, it also inherits the supertype's constructor property.
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
Cat.prototype = {
    constructor: Cat
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear
};

//create a function that solves depth first search
function depthFirstSearch(graph, start) {
    let visited = [];
    let stack = [start];
    while (stack.length) {
        let node = stack.shift();
        if (!visited.includes(node)) {
            visited.push(node);
            stack.push(...graph[node]);
        }
    }
    return visited;
}
//sample depthFirstSearch
let graph = {
    'you': ['alice', 'bob', 'claire'],
    'bob': ['anuj', 'peggy'],
    'alice': ['peggy'],
    'claire': ['thom', 'jonny'],
};
// depthFirstSearch(graph, 'you');

class Graph {
    constructor() {
        this.vertices = [];
        this.adjacent = {};
        this.edges = 0;
    }
    addVertex(v) {
        this.vertices.push(v);
        this.adjacent[v] = [];
    }

    addEdge(v, w) {
        this.adjacent[v].push(w);
        this.adjacent[w].push(v);
        this.edges++;
    }
}
//function that dynamically creates a calculator
function CreateCalculator() {
    let calculator = {
        display: 0,
        memory: 0,
        add: function (x) {
            this.display += x;
            return this.display;
        },
        subtract: function (x) {
            this.display -= x;
            return this.display;
        },
        multiply: function (x) {
            this.display *= x;
            return this.display;
        },
        divide: function (x) {
            this.display /= x;
            return this.display;
        }
    };
    return calculator;
}
let calc = CreateCalculator();
//get input from the user of num1 and num2 with operator and call CreateCalculator function
// let num1 = parseInt(prompt("Enter first number"));
// let num2 = parseInt(prompt("Enter second number"));
// let operator = prompt("Enter operator");
let num1 = 2;
let num2 = 0;
let operator = '*';
switch (operator) {
    case "+":
        calc.add(num1);
        calc.add(num2);
        break;
    case "-":
        calc.subtract(num1);
        calc.subtract(num2);
        break;
    case "*":
        calc.multiply(num1);
        calc.multiply(num2);
        break;
    case "/":
        calc.divide(num1);
        calc.divide(num2);
        break;
    default:
        break;
}
console.log(calc.display);


