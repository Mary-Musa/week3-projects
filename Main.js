
//week3-day3-assignments

//Task 1

//Arithmetic calculator---write a small "receipt calculator" using arithmetic operators

const price = 10000; //price per item
const quantity = 3;
const taxRate = 0.16;

const subtotal = price * quantity;
const tax = taxRate * subtotal;

const total= subtotal + tax;

console.log(`subtotal: Ksh ${subtotal}`);
console.log(`Tax: Kshs${tax}`);
console.log(`Total: KSh ${total.toFixed(2)}`);



//Task two


const values = [0, 1, "", "hello", null, undefined, NaN, [], {}, false, true];

values.forEach((v) => {

  console.log(`${JSON.stringify(v)} is ${Boolean(v) ? "truthy" : "falsy"}`);

});

// [] and {} suprised me because they are empty

//Task 3 : == vs === drills

// 
const num1 = 5;
const num2 = "5";

if(num1 === "5"){
    console.log("same");
}else{

    console.log("Diffeent");
}


console.log(0 == false); // true because it coerses
console.log(0 === false);// false (strict)
console.log("" == 0);//true because it converts empty strings to zero.
console.log("" === 0); //false 
console.log(null == undefined);// true
console.log(null === undefined);// false because it checks both value and type


//Task 4: Short-circuit defaults

const username = "";  // empty string
const displayName = username || "Julia";
console.log(`Hello, ${displayName}`);

const isLoggedIn = true;
isLoggedIn && console.log("Welcome back!");


//Task 5: Fix three broken expressions

// BROKEN 1: This should compute 25% of 200 but it does not
const discount = 200 * 0.25;

console.log(discount);

// BROKEN 2: This should print "You are an adult" for age 18
const age = 18;

if (age >= 18) //equal sign was missing
    
    console.log("You are an adult");



// BROKEN 3: This should concatenate but it adds as numbers

const a = "5";//converted string to number first before adding
const b = 3;
console.log( Number (a) + b);







