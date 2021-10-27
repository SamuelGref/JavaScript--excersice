'use strict';

// Functions Accepting Callback Functions
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
  };

const upperFirstWord = (str) => {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
  };
  
  // Higher-order function
  const transformer = (str, fn) => {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
  
    console.log(`Transformed by: ${fn.name}`);
  };
  
  transformer('JavaScript is the best!', upperFirstWord);
  transformer('JavaScript is the best!', oneWord);


// Default Parameter 
const bookings = []

  const createBooking = function (flightNum,numPass = 1,price= 199) {
    const booking = {
      flightNum,
      numPass,
      price,
    }
    // console.log(booking)
    // bookings.push(booking)

  }

  createBooking("LH123",4)

const flight ="LH324"

const Samuel = {
  name: 'Samuel gref',
  passport: 121314
}

const chekIn = function (flightNum,passenger) {
  flightNum = "LH2324"
  passenger.name = 'Mr.' + passenger.name

  if (passenger.passport === 121314) {
    alert("checked in") 

  }else {
    alert ('passenger not found')
  } 
}


// chekIn(flight,Samuel)

// console.log(flight)
// console.log(Samuel)

