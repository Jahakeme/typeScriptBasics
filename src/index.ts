// A simple TypeScript program that prints a greeting message to the console.
const userName: string = "World";
console.log(`Hello, ${userName}!`);

// Simple type
let myName: string = "Jucal";
let yourAge: number = 20;
let isEmployed: boolean = true;

// Special type
// any type
let notSure: any = "I can be anything";
notSure = 42; // Now it's a number
notSure = true; // Now it's a boolean

// unknown type
let uncertain: unknown = "meh";
uncertain = 42; // Now it's a number

// never type
// You cannot assign a value to a variable of type 'never'.
let access: never;
// access = "This will cause an error"; // Uncommenting this line will cause a compilation error

// undefined & null type
let notDefined: undefined = undefined; // This variable can only be undefined
let nothing: null = null; // This variable can only be null

// Array
const cars:string[] = ["Bugatti", "Mercedes", "Toyota", "Honda" ]
const insects:Array<string> = ["ant", "housefly", "cockcroach"]

//Tuple
const amphibians:[string, string] = ["frog", "toad"]
const randomList:[number, string, boolean] = [2 ,"duel", true]

// Object
const Info1:{name:string, age:number, married:boolean} = {
    name: "Thor",
    age: 20,
    married: false
}

// Object with optional parameter
const Info2:{name:string, age?:number, married:boolean} = {
    name: "Loki",
    married: false
}

// Enum
// String Enum
enum Staff{
    PM = "Plant Manager",
    FM = "Factory Manager",
    HR = "Human Resources"
}

// logs "Factory Manager"
let factoryFiles:Staff = Staff.FM

// logs "Plant Manager"
let plantControl:Staff = Staff.PM

// Numeric Enum (Default)
enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

// logs 0
let today:Days = Days.Monday

// Numeric Enum (Initialized)
enum Months {
    January = 1,
    February,
    March,
}

// logs 3
let currentMonth:Months = Months.February

// Numeric Enums (Fully Initialized)
enum Colours {
    Red = 1,
    Green = 2,
    Blue = 4,
    Yellow = 8
}

// logs 4
let favouriteColour:Colours = Colours.Blue;

// Aliases
// Custom String
type Nutrients = string
const carbohydrates:Nutrients = "yam"

// Custom Array
type PhoneModel = string [] // Array<string> can be used alternatively
const Samsung:PhoneModel = ["A20", "S22", "A10", "S23"]

// Custom Object
type Ingredients = {
    name: string,
    price: number,
    inStock: boolean
}

const sugar:Ingredients = {
    name: "Sugar",
    price: 300,
    inStock: false
}

// Interface
interface IArtistes {
    name: string,
    genre: string,
    isAlive: boolean,
}

const MJ:IArtistes = {
    name: "Micheal Jackson",
    genre: "Pop",
    isAlive: false 
}

// Extending an interface
interface ImoreMJInfo extends IArtistes {
    popularity: string,
    rating: number,
}

const MJUpdated:ImoreMJInfo = {
    name: "Micheal Jackson",
    genre: "Pop",
    isAlive: false,
    popularity: "High",
    rating: 9.5
}

// Union
interface IStatusCode {
    code: "Success" |  404
}

// Using the created Union
const appResponse:IStatusCode = {
    code: 404
}

// Functions
// Passing type in a parameter
function greet (name: string) {
    return name
}

// Optional parameter
function greetWithAge(name: string, age?: number) {
    return name
}

// Default parameter
function greetWithDefaultAge(name: string, age: number = 18) {
    return `${name} is ${age} years old`
}

// Returning type in a function
function greetUser(): string {
    return "Hello, User!"
}

// No return value expected
function error(): void {
    console.error("An error occurred")
}

// Returning a promise in an async function
async function sentence(): Promise<string> {
    return "This is a promise"
}

async function anArray(): Promise<string[]> {
    return ["This", "is", "an", "array"]
}

async function aTuple(): Promise<[string, number]> {
    return ["This is a tuple", 1]
}

// Casting 
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length; // Using 'as' syntax
let anotherStrLength: number = (<string>someValue).length; // Using angle-bracket syntax