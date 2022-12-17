debugger;

// 'This' can change during run time
// 'This' is not static
// Arrow functions do not have their own 'this'
// 'This' is determined by the function that calls it

// console.log(this); // Global this

const arrThis = () => {
  "use strict";
  console.log(this); // ?
};

arrThis();

function callThis() {
  "use strict";
  console.log(this); // ?
}

callThis();

const me = {
  surname: "Orhan",
  callMySurname: function () {
    "use strict";
    console.log(this);
    console.log("My name is: ", this.surname); // ?
  },
};

// me.callMySurname(); // ?

const harry = {
  surname: "Harry",
};

harry.callMySurname = me.callMySurname; // Method borrowing

// harry.callMySurname(); // ?

const myFunc = me.callMySurname;

myFunc.call(me); // ?

const dumbledore = {
  surname: "Dumbledore",
  callMySurname: function () {
    console.log("My name is: ", this.surname); // ?

    const isMySurnameDumbledore = () => {
      console.log("Is my name Dumbledore?", this.surname === "Dumbledore"); // ?
    };
    isMySurnameDumbledore();
  },
};

// dumbledore.callMySurname(); // ?
