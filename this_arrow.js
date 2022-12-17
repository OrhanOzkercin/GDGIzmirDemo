debugger;

const me = {
  name: 'Orhan',
  callMyName: () =>  {
    console.log('My name is: ', this.name); // ?
  }
}

me.callMyName(); // ?



const dumbledore = {
  name: "Dumbledore",
  callMyName: function () {
    console.log("My name is: ", this.name); // ?

    const isMyNameDumbledore = function () {
      console.log("Is my name Dumbledore?", this.name === "Dumbledore"); // ?
    };
    isMyNameDumbledore();
  },
};

// dumbledore.callMyName(); // ?
