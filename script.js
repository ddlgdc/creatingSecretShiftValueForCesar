// step 1:
let randomDecimal = Math.random();

// step 2:
let range = 33 - 3 + 1;

// Question 1:
// to include both end ranges 

// step 3:
let inRange = randomDecimal * range;

// Question 2:
// the random decimal is between 0 and 1 so it scales the decimal number to 
// fall within 0 and 33 

// Step 4:
let randomInteger = Math.floor(inRange);

// Question 3:
// Math.floor rounds down to the nearest whole number 

// Step 5:
let shiftValue = randomInteger + 3;

// Question 4:
// inRange is between 0 and range -1, adding 3 shifts upwards is the desired outcome 