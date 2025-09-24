import readlineSync from "readline-sync";

console.log("greeting.js");

const userName : string = getNameInputFromUser("Enter your name: ");
const userAge : number = getAgeInputFromUser("Enter your age: ");

console.log(`Hello ${userName}, I am your phone book!`);
console.log(`Your age is: ${userAge}!`);
displayMessageDependsOnAge(userAge);

// Functions

function getNameInputFromUser(message : string) : string {
    return readlineSync.question(message);
}

function getAgeInputFromUser(message : string) : number {
    let ageInput : string = readlineSync.question(message);
    let isInputNumber : boolean = validateAgeInput(ageInput);

    while(!isInputNumber) {
        ageInput = readlineSync.question("Invalid input! Try again!\n");
        isInputNumber = validateAgeInput(ageInput);
    }

    return parseInt(ageInput);
}

function validateAgeInput(ageInput : string) : boolean {
    return !isNaN(parseInt(ageInput)) && !(parseInt(ageInput) < 0);
}

function displayMessageDependsOnAge(age : number) : void {
    if (age <= 18) {
        console.log("You are so young! Life is ahead of you!");
    } else if (age > 18 && age < 40) {
        console.log("That's a nice age!")
    } else {
        console.log("You must be very wise!");
    }
}