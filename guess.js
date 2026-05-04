
const target = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

while(true){

    const input = prompt("Guess a number between 1 and a 100:");
    const guess = Number(input);

    attempts++;

    if(Number.isNaN(guess) || guess < 1 || guess > 100){

        alert("Please enter a valid number between 1 and 100 ");

        continue;
    }

    if(guess === target){

        alert(`Correct! you guessed it in ${attempts} attempts.`);

        break;

    }else if(guess < target){

        alert("Too Low!, Try again");
    }else{

        alert("Too high!, try again");
    }
}




