// Global Variables

const phoneNumbers: string[] = ["98-777-653", "98-742-644", "34-855-326", "34-25-629", "34-489-115", "72-999-563", "9-321-459",
    "72-654-121", "72-4-694", "72-255-313", "98-111-323", "98-433-14", "34-577-342", "98-323-000",
    "98-202-666", "34-5435-454", "34-515-633"];

const validPhoneNumbers: string[] = [];
const inValidPhoneNumbers: string[] = [];
const areaCodes: string[] = [];
const rawPhoneNumbers: string[] = [];
const uniqueAreaCodes: string[] = [];

// App

runPhoneNumberValidator();

// Functions

function runPhoneNumberValidator(): void {
    separateValidAndWrongPhoneNumbers(phoneNumbers);
    separateAreaCodesAndRawPhoneNumbers(validPhoneNumbers);
    collectUniqueAreaCodes(validPhoneNumbers);
    const numberOfPhoneNumbersBySpecificAreaCode: number = countPhoneNumbersByAreaCode(validPhoneNumbers, 98);

    console.log(validPhoneNumbers);
    console.log(inValidPhoneNumbers);
    console.log(areaCodes);
    console.log(rawPhoneNumbers);
    console.log(uniqueAreaCodes);
    console.log(numberOfPhoneNumbersBySpecificAreaCode);
}

function separateValidAndWrongPhoneNumbers(phoneNumbers: string[]): void {
    for (let phoneNumber of phoneNumbers) {
        if (phoneNumber.length === 10) {
            validPhoneNumbers.push(phoneNumber);
        } else {
            wrongPhoneNumbers.push(phoneNumber);
        }
    }
}

function separateAreaCodesAndRawPhoneNumbers(phoneNumbers: string[]): void {
    for (let phoneNumber of phoneNumbers) {
        const separatedPhoneNumber: string[] = phoneNumber.split("-");
        areaCodes.push(separatedPhoneNumber[0]);
        rawPhoneNumbers.push(separatedPhoneNumber[1] + "-" + separatedPhoneNumber[2]);
    }
}

function collectUniqueAreaCodes(phoneNumbers: string[]): void {
    for (let phoneNumber of phoneNumbers) {
        const currentAreaCode: string = phoneNumber.substring(0, 2);

        if (!uniqueAreaCodes.includes(currentAreaCode)) {
            uniqueAreaCodes.push(currentAreaCode);
        }
    }
}

function countPhoneNumbersByAreaCode(phoneNumbers: string[], specificAreaCode: number): number {
    let counter: number = 0;

    for (let phoneNumber of phoneNumbers) {
        const currentAreaCode: string = phoneNumber.substring(0, 2);
        const parsedCurrentAreaCode: number = parseInt(currentAreaCode);

        if (parsedCurrentAreaCode === specificAreaCode) {
            counter++;
        }
    }

    return counter;
}