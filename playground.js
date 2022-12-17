let username = "Orhan";
let age = 25;
let isHuman = true;

let person = {
  username,
  age,
  isHuman,
};

console.log(person);

function savePersonInfo(person) {
  // Call some api to save user info
}

let myName = "Orhan";

function first() {
  let hi = "Hi";
  console.log(`${hi} ${myName}`);
}

function second() {
  let hey = "Hey";
  console.log(`${hey} ${myName}`);
}

function third() {
  let hello = "Hello";
  console.log(`${hello} ${myName}`);
}

first();
second();
third();

let myAge = 25;
let yourAge = myAge;
yourAge = 30;

let me = {
  name: "Orhan",
  age: 25,
};

let friend = me;
friend.age = 30;

const names = ["Orhan, Cerenay, Batu"];
const ages = [25, 26, 25];

names.forEach((name, i) => {
  console.log(`${name} is ${ages[i]} years old!`);
});
