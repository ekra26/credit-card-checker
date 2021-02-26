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
    const creditCardLengthEven = creditCardNumber.length % 2 === 0;
    let doubledCreditNumber = [];
    for (let i = creditCardNumber.length - 1; i >= 0; i--) {
           if (creditCardLengthEven) {
               if (i % 2 == 0) {
                let doubledSingleNumber = creditCardNumber[i]*2;
                let doubledSingleNumberToAdd = doubledSingleNumber > 9 ? doubledSingleNumber - 9 : doubledSingleNumber;
                doubledCreditNumber.unshift(doubledSingleNumberToAdd);
               } else {
               doubledCreditNumber.unshift(creditCardNumber[i]);
            }
        } else if (i % 2 !== 0) {
               let doubledSingleNumber = creditCardNumber[i]*2;
               let doubledSingleNumberToAdd = doubledSingleNumber > 9 ? doubledSingleNumber - 9 : doubledSingleNumber;
               doubledCreditNumber.unshift(doubledSingleNumberToAdd);
           } else {
            doubledCreditNumber.unshift(creditCardNumber[i]);
        }
    }     
    let sumCreditNumber = doubledCreditNumber.reduce((acc, val) => acc + val, 0);
    let validCreditCard = sumCreditNumber % 10 === 0;
    return validCreditCard;
}


//find all invalid cards from one nested array, return a new array of invalid cards
function findInvalidCards(creditCardBatch) {
    const invalidCreditCardBatch = [];
    creditCardBatch.forEach(creditCardNumber => {
        if (!validateCred(creditCardNumber)) {
            invalidCreditCardBatch.push(creditCardNumber);
        }
    })
   return invalidCreditCardBatch;
}

//Identify credit card company with invalid cards
function idInvalidCardCompanies() {
    let invalidCreditCards = findInvalidCards(batch);
    console.log(invalidCreditCards);
    let numberOfInvalidCreditCards = invalidCreditCards.length;
    let fistCreditCardNumberValue = [];
    for (let i = numberOfInvalidCreditCards -1; i >= 0; i--) {
        fistCreditCardNumberValue.push(invalidCreditCards[i][0]); 
    }
    let uniquitefirstCreditCardNumberValue = new Set (fistCreditCardNumberValue);
    let creditCardCompanieswithInvalidCards = [];
    uniquitefirstCreditCardNumberValue.forEach(numberValue => {
        switch (true) {
            case numberValue === 3:
                creditCardCompanieswithInvalidCards.push(' Amex');
                break;
            case numberValue === 4:
                creditCardCompanieswithInvalidCards.push(' Visa');
                break;
            case numberValue === 5:
                creditCardCompanieswithInvalidCards.push(' MasterCard');
                break;
            case numberValue === 6:
                creditCardCompanieswithInvalidCards.push(' Discover');
                break;
            default:
                creditCardCompanieswithInvalidCards.push('Company not found');
        }
    })
    return console.log(`Credit card companies with invalid credit card numbers: ${creditCardCompanieswithInvalidCards}`)
};

//function accept string and convert to array
function convertStringtoArray(creditCardstring){
    let newCreditCardInput = creditCardstring;
    let newCreditCardArray = newCreditCardInput.split("").map((newCreditCardInput)=>{
        return Number(newCreditCardInput)});
    return batch2.push(newCreditCardArray);
}
