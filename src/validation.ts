// Global Variables

const uglyPhoneNumbers = ["98-333-111", "12--323-566", "123-34-221", "99-948-321", "-12-123-346",
                            "894-58438-543", "85-234-222",
                            "12-333-444-", "99-888--433", "15-465-876", "98-555-22", "-3-355-333", "3--344-53", "--2--45---",
                            "11-111-222", "12#22$34$222", "98 223 555"];

const correctPhoneNumbers : string[] = [];
const wrongPhoneNumbers : string[] = [];

// App

validatePhoneNumbers(uglyPhoneNumbers);

console.log(correctPhoneNumbers);
console.log(wrongPhoneNumbers);

// Functions

function validatePhoneNumbers(phoneNumbers : string[]) : void {
    for (let phoneNumber of phoneNumbers) {
        const isLengthValid : boolean = checkLength(phoneNumber);
        const areHypensValid : boolean = countHyphens(phoneNumber);
        const areHypenPositionsValid : boolean = checkPositionOfHypens(phoneNumber);
        const isEveryCharacterValid : boolean = checkNotANumberCharacters(phoneNumber);

        if (isLengthValid && areHypensValid && areHypenPositionsValid && isEveryCharacterValid) {
            validPhoneNumbers.push(phoneNumber);
        } else {
            wrongPhoneNumbers.push(phoneNumber);
        }
    }
}

function checkLength(phoneNumber : string) : boolean {
    return phoneNumber.length === 10;
}

function countHyphens(phoneNumber : string) : boolean {
    let hypenCounter : number = 0;

    for (let character of phoneNumber) {
        if (character === "-") {
            hypenCounter++;
        }
    }

    return hypenCounter === 2;
}

function checkPositionOfHypens(phoneNumber : string) : boolean {
    return phoneNumber[2] === "-" && phoneNumber[6] === "-";
}

function checkNotANumberCharacters(phoneNumber : string) : boolean {    
    for (let character of phoneNumber) {
        if (character !== "-") {
            const parsedCharacter : number = parseInt(character);

            if (isNaN(parsedCharacter)) {
                return false;
            }
        }
    }

    return true;
}