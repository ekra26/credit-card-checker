// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

//New credit cards to check
const batch2 = [];

// functions:

//Check if credit card number is valid or not, return true for valid credit card
function validateCred(creditCardNumber) {
    let sumCreditNumber = 0;
    //loop through the numbers we don't need to modify
    for (let i = creditCardNumber.length -1; i >= 0 ; i -= 2) {
        sumCreditNumber += Number(creditCardNumber[i]);
    }
    //loop through the numbers we need to modify
    for (let i = creditCardNumber.length -2; i >= 0 ; i -= 2) {
        let doubleNumber = creditCardNumber[i]*2;
        let doubledNumberToAdd = doubleNumber > 9 ? doubleNumber - 9 : doubleNumber;
        sumCreditNumber += Number(doubledNumberToAdd);
    }
    //final validation for credit card number
    return sumCreditNumber % 10 === 0;
}

//find all invalid cards from one nested array, return a new array of invalid cards
function findInvalidCards(creditCardBatch) {
    return creditCardBatch.filter(cc => !validateCred(cc));
    
}

//Identify credit card company with invalid cards
function idInvalidCardCompanies(testBatch) {
    let invalidCreditCards = findInvalidCards(testBatch);
    let fistCreditCardNumberValue = new Set (invalidCreditCards.map(function(x) {
        return x[0];
    }))
    let invalidCreditCardCompanies = [];
    fistCreditCardNumberValue.forEach(numberValue => {
        switch (numberValue) {
            case 3:
                invalidCreditCardCompanies.push(' Amex');
                break;
            case 4:
                invalidCreditCardCompanies.push(' Visa');
                break;
            case 5:
                invalidCreditCardCompanies.push(' MasterCard');
                break;
            case 6:
                invalidCreditCardCompanies.push(' Discover');
                break;
            default:
                invalidCreditCardCompanies.push('Company not found');
        }
    })
    return console.log(`Credit card companies with invalid credit card numbers: ${invalidCreditCardCompanies}`)
};

//convert a string into an array of numbers
function convertStringtoArray(creditCardstring){
    let newCreditCardArray = creditCardstring.split("").map(x=>+x);
    batch2.push(newCreditCardArray);
    return newCreditCardArray
}


//TEST SECTION

//test for validating cards
console.log(validateCred(valid1)); //should print true
console.log(validateCred(invalid1)); //should print false

//test for creating array with invalid cards
const oneCreditCardValid = [invalid1,invalid2,invalid3,invalid4,invalid4,valid1] // has only one valid card
console.log(findInvalidCards(oneCreditCardValid)); //should log 5 invalid cards

//test for id invalid credit card companies
idInvalidCardCompanies(oneCreditCardValid); // should return Visa, MasterCard, Amex, Discover

//test for string conversion
console.log(validateCred(convertStringtoArray('4024007117529221'))); //should print true
console.log(batch2); // should print the new array

console.log(validateCred(convertStringtoArray('4024007117529229'))); // should print true and false
console.log(batch2); // should print the new array with 2 credit card numbers
console.log(findInvalidCards(batch2)); // should print one false credit card number