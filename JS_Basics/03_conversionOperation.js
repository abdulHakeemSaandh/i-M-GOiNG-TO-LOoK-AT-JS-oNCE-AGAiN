let score = 33;

console.log(typeof score);//number
console.log(typeof(score));//number // this is method but both two is same no difference.
let scoreString = '33';
console.log(scoreString);//33
let valueInNumber = Number(scoreString)
console.log(valueInNumber);//33
console.log(typeof(scoreString));//string
console.log(typeof(valueInNumber));//number
let numText = '33abc';
let convertString = Number(numText)
console.log(typeof convertString);//type number but value is not a real number
console.log(convertString);//NaN //not a number// it converts but it's value is NaN which u can never rely on.
// Number('33abc') gives NaN, which is not a valid numeric value. In JavaScript, typeof NaN is "number", 
// so typeof alone cannot prove that a value is a valid number. Use Number.isFinite() or Number.isNaN() to check 
// properly. TypeScript helps with compile-time types, but it does not replace runtime validation.  

let typeNull = null;
console.log(typeNull);//null
console.log(typeof(typeNull));//object//null is object
console.log(Number(typeNull));//0

let typeUndefined = undefined;
console.log(typeUndefined);//undefined
console.log(typeof(typeUndefined));//undefined
console.log(Number(typeUndefined));//NaN

let boolean = true;
console.log(boolean);//true
console.log(typeof(boolean));//boolean
console.log(Number(boolean));//1

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);//true
let empty = ""
console.log(Boolean(empty));//false
let string = "Hakeem";
console.log(Boolean(string));//true

// 1 => true
// "" => false
// "non-empty" => true

let someNumber = 33;
let stringNumber = String(someNumber)
console.log(stringNumber);//33
console.log(typeof stringNumber);//string

