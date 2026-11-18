// console.log(2 < 1);//false 
// console.log(1 < 2);//true
// console.log(2 != 1);
// console.log(2 == 1);

let x = 2;
x += 1;       // ✅ x is a variable, so it can store the result (x = x + 1)

const obj = { a: 2 };
obj.a += 1;   // ✅ obj.a is a property, so it can store the result

const arr = [2];
arr[0] += 1;  // ✅ arr[0] is an array element, so it can store the result

///2 += 1;//SyntaxError: Invalid left-hand side in assignment
// ❌ SyntaxError: 2 is just a value, so there is nowhere to store the
// result

// x += 1 means x = x + 1, so the result must be stored back on the left side.
// A variable or property can hold it, but the literal 2 is just a value,
// so JavaScript throws Invalid left-hand side in assignment.

console.log("2" > 1);//true
console.log("02" > 1);//true
//Whenever this kind of type conversion happens, the comparison can give surprising results. Always make sure both values have the same data type before comparing them. TypeScript doesn’t allow you to compare different data types the way JavaScript does.

console.log("10" < "9");//true
console.log("10" > "9");//false

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null == 0);//true
console.log(null <= 0);//true
console.log(null < 0);//false

console.log(null == null);
console.log(null == undefined);
//null is only loosely equal to undefined (and itself).

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined <= 0);

// ===

console.log("2" === 2);

//......