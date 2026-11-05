let score = 33;

console.log(typeof score);//number
console.log(typeof(score));//number // this is method but both two is same no difference.
let scoreString = '33';
console.log(scoreString);//33
let valueInNumber = Number(scoreString)
console.log(valueInNumber);33
console.log(typeof(scoreString));//string
console.log(typeof(valueInNumber));//number
let numText = '33abc';
console.log(Number(numText));//NaN //not a number// it converts but it's value is NaN which u can never rely on.  


