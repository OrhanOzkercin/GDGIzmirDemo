// Creating Phase & Hoisting
// TDZ - Temporal Dead Zone

debugger;

// HOISTING

// TDZ - Temporal Dead Zone

logMyName();
console.log("Name: ", myName);
console.log("Surname: ", mySurname);

let myName = "Orhan";
let mySurname = "Özkerçin";

function logMyName() {
  console.log("Name: ", myName);
}

const logMySurname = function () {
  console.log("Surname: Özkerçin");
};
logMySurname();

logMyName();
console.log("Name: ", myName);
console.log("Surname: ", mySurname);

function logWhatParamsAre() {
  // console.log("param1: ", param1);
  // console.log("param2: ", param2);
  console.log("arguments: ", arguments);
}

logWhatParamsAre("Orhan", "Özkerçin");
