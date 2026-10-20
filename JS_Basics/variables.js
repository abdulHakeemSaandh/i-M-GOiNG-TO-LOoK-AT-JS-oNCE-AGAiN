var accountEmail = 'meNotU@gmail.com';
let accountPass = 311442;
const accId = 530;
accountNumber = 38;//avoid
// accId = 9// not allowed
accountEmail = 'habibi@gmail.com'//allowed
accountPass = "3u88"//allowed
let classFellow;
console.log(accountEmail);//habibi@gmail.com 
console.log(accountPass);//3u88  
console.table([accountEmail, accountPass, accId, accountNumber, classFellow])
// ┌─────────┬────────────────────┐
// │ (index) │       Values       │
// ├─────────┼────────────────────┤
// │    0    │ 'habibi@gmail.com' │
// │    1    │       '3u88'       │
// │    2    │        530         │
// │    3    │         38         │
// │    4    │     undefined      │
// └─────────┴────────────────────┘
/*
prefer not to use var
because of issue in block scope and functional scope
*/