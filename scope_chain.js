debugger;

function getCalculateAgeFn() {
  let currentYear = 2022;
  return function calculateAge(bornYear) {
    return `Your Age is ${currentYear - bornYear}`;
  };
}

const calculateAge = getCalculateAgeFn();

calculateAge(1997);
