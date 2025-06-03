# TypeScript Basics Explained

## Overview

This document contains a summary of the basics of TypeScript with examples and simple layman explanations for easy understanding. I created this as a part of my learning journey and hopefully, it helps another beautiful soul out there who — like me — is lazy and hates complicated explanations about anything 😉. Kindly refer to the index.ts file for further implementations of the examples.😊

## Contents

[How to Set up a TypeScript project in Node and Manually Transpile to JavaScript](#how-to-set-up-a-typescript-project-in-node-and-manually-transpile-to-javascript)

[Simple Type](#simple-type)

[Special Type](#special-type)

[Array](#array)

[Tuple](#tuple)

[Object](#object)

[Enum](#enum)

[Aliases](#aliases)

[Interface](#interface)

[Union](#union)

[Function](#function)

• [Passing type in a parameter](#passing-type-in-a-parameter)

• [Returning type in a function](#returning-type-in-a-function)

• [Returning a promise in an asynchronous function](#returning-a-promise-in-an-asynchronous-function)

[Casting](#casting)

### How to Set up a TypeScript project in Node and Manually Transpile to JavaScript

Step 1: Initialize a Node.js Project

    mkdir myTSproject
    cd myTSproject
    npm init -y

Step 2: Install TypeScript as a Dev Dependency

    npm install typescript --save-dev

Step 3: Create a tsconfig.json file

Run:

    npx tsc --init

then update the config as needed:

    // Modules
    "rootDir": "./src",

    /* Emit */
    "outDir": "./dist",

Step 4: Create Your Project Structure

    mkdir src
    mkdir dist

Inside the **src** folder, create a TypeScript file, e.g., index.ts with the following simple code:

    const userName: string = "World";
    console.log(`Hello, ${userName}!`);

Step 5: Manually Trasnpile to JavaScript

    npx tsc

This will generate .js files inside the **dist** folder.

### Simple Type

There are three main primitives in TypeScript.

1. boolean: true or false values
2. number: whole numbers and floating point values
3. string: text values

        let aNumber:number = 1;
        let options:boolean = false;
        let myName:string = "Jucal"

The above are explicitly typed (type is stated). They can also be implicitly typed like normal JavaScript (type not stated), and TypeScript will infer (guess) the type of value given.  

### Special Type

The following special types exist in TypeScript:

1. **any**: This is a type that disables type checking and effectively allows all types to be used.

        let aVariable:any = true
        aVariable = 2 // no error as aVariable can be "any" type
        aVariable = "blue" // no error as aVariable can be "any" type

2. **unknown**: Similar to any, but a safer alternative. unknown is best used when we don't know the type of data being typed. To add a type later, you'll need to cast it. TypeScript prevents **unknown** types form being used.

        let confused:unknown = 2;
        let confused = "string"; // no error

3. **never**: This throws an error whenever it is defined.

        let access:never = "I shouldn't be defined"; 

4. **undefined** & **null**: These refer to the JavaScript primitives **undefined** and **null** respectively. They don't have much use unless strictNullChecks is enabled in the tsconfig.json file.

        let company:undefined = undefined;
        let anArray:null = null;

### Array

An array can be represented in two ways:

1. ```variableName:type [ ]```
2. ```variableName:Array<type>```

Examples:

    swords:string[] = ["double-edged", "jagged edges"]

    factorials:Array<number> = [2!, 3!, 4!]

### Tuple

A tuple is an array with a pre-defined length and types for each index (item in the array). The length of the array is equal to the number of types given to the assigned variable. It is represented in the following way:

    const variableName:[type, type] = [item1, item2]

> ⚠️: Items must be placed in the exact order of the type assigned to avoid an
> error. Here's an example:
>
> ```const randomList:[number, string, boolean] = ["duel", false, 2]``` ❌
>
> ```const randomList:[number, string, boolean] = [2, "duel", false]``` ✅

### Object

An object is represented in the following way:

    const myObject:{key1:type, key2:type, key3:type} = {
        key1: value1,
        key2: value2,
        key3: value3
    } 

As you already guessed, TypeScript will throw an error if all keys are not provided with corresponding values matching the type assigned. So, what to do if you want to avoid providing a particular key(s) in an object? That can be easily done by adding a ? after the name of the respective key(s) as shown below:

    const myObject:{key1:type, key2?:type, key3:type} = {
        key1: value1,
        key3: value3
    }

Now, TypeScript will throw no error when *key2* is not added in **myObject**.

### Enum

An enum is used for representing a group of constants. It is implemented in the following way:

    enum enumVariableName{
        enum1 = "enum1",
        enum2 = "enum2"
    }

The created enum can then be used this way:

    let newVariableName:enumVariableName = enumVariableName.enum1

Example:

    enum Roles{
        Admin = "Admin",
        Basic = "Basic"
    }

    // logs "Basic"
    let registered:Roles = Roles.Basic

### Aliases

What if you want to create a type with a custom name? That's basically what an alias is. It is implemented by using the **type** keyword:

    type VariableName = type

Examples:

    // Custom String
    type Nutrients = string 
    const proteins:Nutrients = "beans"

    // Custom Array
    type planets = Array<string> // string [] can be used alternatively
    const closestToSun:planets = ["Mercury", "Venus", "Earth"] 

    // Custom Object
    type Microsoft = {
        name: string,
        age: number,
        onVacation: boolean
    }

    const ManagingDirector:Microsoft = {
        name: "John",
        age: 40,
        onVacation: true
    }

### Interface

An interface is similar to an alias, but only used for objects. It uses the keyword **interface**:

    interface objectName {
        key1: type,
        key2: type
    }

    const variableName:objectName = {
        // value must correspond with type given
        key1: value1 
        key2: value2
    }

Example:

    interface ITeacher {
        assignedCourse: string,
        isAvailable: boolean,
        timesAbsent: number
    }

    const David:ITeacher {
        assignedCourse: NextJS,
        isAvailable: true,
        timesAbsent: 0
    }

The interface feature, however, has a functionality that makes it superior to using a normal alias. What could that possibly be?  It is the ability to automatically have access to properties from an existing interface plus some new properties via another interface. This is known as *extending an interface*. It is achieved by using the **extends** keyword:

        // An interface
        interface IVariable1 {
            key1: type,
            key2: type
        }

        /* Creating a new interface that has automatic
           access to the existing interface's properties
           while having its own properties
        */
        interface IVariable2 extends IVariable1 {
            key3: type,
            key4: type
        }

        // Using the newly created interface
        const variableName:IVariable2 = {
            key1: value1,
            key2: value2,
            key3: value3,
            key4: value4
        }

    Example:

        interface IAnimalInfo {
            name: string,
            extinct: boolean
        }
        
        interface ImoreAnimalInfo extends IAnimalInfo {
            breed: string,
            isWild: boolean,
            kills: number
        }

        const Bears:ImoreAnimalInfo = {
            name: "Polar bear",
            extinct: false,
            breed: "unknown",
            isWild: true,
            kills: 50
        }

### Union

A union type is used when a value can be more than a single type.

    interface interfaceName {
        key: string | number
    }

Example:

    interface ICrypto {
        marketStatus: "BULLISH" | 1
    }

> ⚠️
>
> While technically possible to use a union type for a value that always has the same type, it is redundant and bad practice. Stick to declaring the single, actual type for clarity and conciseness.  

### Function

TypeScript has a specific syntax for writing a function. Each section is self-explanatory with the given examples.

#### Passing type in a Parameter

    function variableName (parameter1: type, parameter2: type) {
        return parameter1 + parameter2
    }

Example:

    function add (a:number, b:number) {
        return a + b
    }

> If no parameter type is defined, TypeScript will default to using **any**.

We could also have **optional** parameters for a function.

    function variableName (parameter1?:type, parameter2:type) {
        return parameter2
    }

For parameters with **default values**, the default value comes after the type defintion.

    function variableName (parameter1:number, parameter2:number=5) {
        return paramter1 * parameter2
    }

#### Returning type in a Function

The return type can be explicitly defined. This is done by adding the type after the parentheses, housing the parameters (if any). If the thing returned is not of the return type stateed, an error occurs.

    function variableName(parameter1):type {
        return parameter1
    }

For a function meant to return no value, the type **void** can be used.

    function variableName():void {
        console.log(1)
    }

#### Returning a Promise in an Asynchronous Function

    async function functionName(): Promise<string> {
        return "myName"
    }

    async function functionName(): Promise<[number, boolean]> {
        return [2, false]
    }

### Casting

Casting is the process of overriding a type. This can be done by using either the **as** keyword or angle brackets, <>.

    let x:unknown = "plum";
    console.log((x as string).length);

    let x:unknown = "date";
    let upperCaseX = (<string>x).toUpperCase();
