//Task 1: if/else chain drills

function gradeFor(score){

    if(score >= 90 &&  score <= 100){

        return  "A";
    }else if(score >= 80){
        return "B";
    }else if (score >= 70){

        return "C";
    }else if(score >= 60){
        return "D";
    }else {
        return "F";
    }
}

console.log(gradeFor(95));
console.log(gradeFor(82)); 
console.log(gradeFor(55)); 


//Task 1 seasonfor

function seasonFor(month){
    if(month >=3 && month <=5){
        return "Long rains";
    }else if(month >= 6 && month <= 9){
        return "cool dry";
    }else if(month >= 10 && month <= 12){

        return "short rains";
    }else if(month >= 1 && month <= 2){
        return "Hot dry"
    }else{
        return "invalid";
    }
}

console.log(seasonFor(5));
console.log(seasonFor(7));
console.log(seasonFor(0));

// task 1 canVote

function canVote(age,citizenship){

    if(age >= 18 && citizenship === "Kenyan"){

         return  true;


    }else{

    return  false;
}

}

console.log(canVote(18, "Kenyan"));
console.log(canVote(17, "Kenyan")); 
console.log(canVote(25, "Ugandan"));  


//Task 2: switch vs if

function dayOfWeek(num){
    if(num === 1){
        return "Monday";
    }else if(num === 2){
        return "Tuesday";
    }else if(num === 3){
        return "Wednesday";
    }else if(num === 4){
        return "Thursday";
    }else if(num === 5){
        return "Friday";
    }else if( num === 6){
        return "Saturday";
    }else if(num === 7){

        return "Sunday";
    }else{
        return "invalid day of the week";
    }
}


console.log(dayOfWeek(4));
console.log(dayOfWeek(7));
console.log(dayOfWeek(1));


//switch case

function dayOfWeek(num){

    switch(num){
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return "invalid day of the week";
    }
}

console.log(dayOfWeek(4));
console.log(dayOfWeek(5));
console.log(dayOfWeek(2));

//I prefer switch case because it looks simpler and less confusing

//Task 3: Task 3: Loop drills - Use a for loop to print numbers 1 to 20.

for (let num= 1;num <= 20; num++){

    console.log(`The numbers are: ${num}`);
}

//Use a while loop to count down from 10 to 1.

let count = 10;

while(count > 0){

    console.log(count);
    count --;
}

//Use a do...while loop that runs at least once even when its condition is false from the start.

let name = "Rasha";

do {
    console.log(`Hi! ${name}, Nice to meet you.`);
    name = "Rasha!"; // change value and it wll never stop
} while (name !== "Rasha!");

//4-Use a for loop with break that stops at the first multiple of 7 between 1 and 100.

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log(`The first multiple of 7 is: ${i}`);
        break;
    }
}

// 5-Use a for loop with continue that prints only odd numbers from 1 to 20.

for(j=1;j<=20; j++){

    if(j % 2 === 1){

        console.log(j);

        continue;
    }
}

// for (let j = 1; j <= 20; j++) {
//     if (j % 2 === 0) {
//         continue; // skip even numbers
//     }
//     console.log(j);
// }


//6-FizzBuzz for 1 to 30: print "Fizz" for multiples of 3, "Buzz" for multiples of 5, "FizzBuzz" for multiples of both, and the number otherwise.

for(let n=1;n <=30; n++){

    if(n % 3 && n % 5 === 0){

        console.log("fizzbuzz");

    }else if(n % 3 === 0){

        console.log("fizz");

    }else if(n % 5 === 0){

        console.log("Buzz");
    
    }else{
        console.log(n);
    }
}





// Task 4: Start the Number Guessing Game







