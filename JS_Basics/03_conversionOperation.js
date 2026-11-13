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

//**************************** Operations *************************************
let value = 3;
let negValue = -value;
console.log(negValue);//-3

console.log(2+2);//4
console.log(2-2);//0
console.log(2*2);//4
console.log(2**5);//2*2=4*2=8*2=16*2=32
//32
console.log(2/2);//1
console.log(2%2);//0
//string jodna: in english?
let str1 = 'hello';
let str2 = ' Hacki'
let str3 = str1 + str2;
console.log(str3);//hello Hacki

console.log('1' + 2);//12
console.log(1 + '2');//12
console.log("1" + 2 + 2);//122 //2+2=4 but yahan sab kuch string ban gaya: in english?
console.log(1 + 2 + "2");//32// before string hota hai calculate
console.log((3 + 4) * 4 % 3);//use this approach //use bracket if u want to calc any value first 

console.log(+true);//1//but not prefered to use
//console.log(true+);//SyntaxError: Unexpected token ')'

console.log(+"");//0

//console.log(true+);//SyntaxError: Unexpected token ')'//in coding
//readability is soo much important

let num1, num2, num3
num1 = num2 = num3 = 2 + 2
//Only num1 is declared here. num2 and num3 are assigned without a declaration, so in sloppy 
//mode they become accidental global variables, and in strict mode you get a ReferenceError.


//inc/dec//prefix/postfix concept 
let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// More about js study from this web
// https://tc39.es/ecma262/#sec-intro








