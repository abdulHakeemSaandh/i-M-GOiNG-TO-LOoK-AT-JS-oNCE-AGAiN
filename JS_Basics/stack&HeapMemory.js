// Stack (Primitive), Heap (Non-Primitive)
let institution = "University";
let anotherInstitution = institution;
console.log(anotherInstitution);
anotherInstitution = "college";

console.log(institution);
console.log(anotherInstitution);



function change(n) {
  n = 100;   // only local stack copy changes
}
let num = 5;
change(num);
console.log(num); // 5

//n is a new stack copy, so the original num stays unchanged.

