"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// A simple TypeScript program that prints a greeting message to the console.
const userName = "World";
console.log(`Hello, ${userName}!`);
// Simple type
let myName = "Jucal";
let yourAge = 20;
let isEmployed = true;
// Special type
// any type
let notSure = "I can be anything";
notSure = 42; // Now it's a number
notSure = true; // Now it's a boolean
// unknown type
let uncertain = "meh";
uncertain = 42; // Now it's a number
// never type
// You cannot assign a value to a variable of type 'never'.
let access;
// access = "This will cause an error"; // Uncommenting this line will cause a compilation error
// undefined & null type
let notDefined = undefined; // This variable can only be undefined
let nothing = null; // This variable can only be null
// Array
const cars = ["Bugatti", "Mercedes", "Toyota", "Honda"];
const insects = ["ant", "housefly", "cockcroach"];
//Tuple
const amphibians = ["frog", "toad"];
const randomList = [2, "duel", true];
// Object
const Info1 = {
    name: "Thor",
    age: 20,
    married: false
};
// Object with optional parameter
const Info2 = {
    name: "Loki",
    married: false
};
// Enum
// String Enum
var Staff;
(function (Staff) {
    Staff["PM"] = "Plant Manager";
    Staff["FM"] = "Factory Manager";
    Staff["HR"] = "Human Resources";
})(Staff || (Staff = {}));
// logs "Factory Manager"
let factoryFiles = Staff.FM;
// logs "Plant Manager"
let plantControl = Staff.PM;
// Numeric Enum (Default)
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Saturday"] = 5] = "Saturday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days || (Days = {}));
// logs 0
let today = Days.Monday;
// Numeric Enum (Initialized)
var Months;
(function (Months) {
    Months[Months["January"] = 1] = "January";
    Months[Months["February"] = 2] = "February";
    Months[Months["March"] = 3] = "March";
})(Months || (Months = {}));
// logs 3
let currentMonth = Months.February;
// Numeric Enums (Fully Initialized)
var Colours;
(function (Colours) {
    Colours[Colours["Red"] = 1] = "Red";
    Colours[Colours["Green"] = 2] = "Green";
    Colours[Colours["Blue"] = 4] = "Blue";
    Colours[Colours["Yellow"] = 8] = "Yellow";
})(Colours || (Colours = {}));
// logs 4
let favouriteColour = Colours.Blue;
const carbohydrates = "yam";
const Samsung = ["A20", "S22", "A10", "S23"];
const sugar = {
    name: "Sugar",
    price: 300,
    inStock: false
};
const MJ = {
    name: "Micheal Jackson",
    genre: "Pop",
    isAlive: false
};
const MJUpdated = {
    name: "Micheal Jackson",
    genre: "Pop",
    isAlive: false,
    popularity: "High",
    rating: 9.5
};
// Using the created Union
const appResponse = {
    code: 404
};
// Functions
// Passing type in a parameter
function greet(name) {
    return name;
}
// Optional parameter
function greetWithAge(name, age) {
    return name;
}
// Default parameter
function greetWithDefaultAge(name, age = 18) {
    return `${name} is ${age} years old`;
}
// Returning type in a function
function greetUser() {
    return "Hello, User!";
}
// No return value expected
function error() {
    console.error("An error occurred");
}
// Returning a promise in an async function
function sentence() {
    return __awaiter(this, void 0, void 0, function* () {
        return "This is a promise";
    });
}
function anArray() {
    return __awaiter(this, void 0, void 0, function* () {
        return ["This", "is", "an", "array"];
    });
}
function aTuple() {
    return __awaiter(this, void 0, void 0, function* () {
        return ["This is a tuple", 1];
    });
}
// Casting 
let someValue = "This is a string";
let strLength = someValue.length; // Using 'as' syntax
let anotherStrLength = someValue.length; // Using angle-bracket syntax
