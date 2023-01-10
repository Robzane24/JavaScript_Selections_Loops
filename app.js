console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 0; i < 100; i++){
    if(i % 2 == 0){
        continue;
    }else{
        console.log(i);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 1; i < 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz");
    } else if(i % 3 == 0) {
    console.log("Fizz");
    } else if(i % 5 == 0){
    console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
// While loop for exercise 1
let number = 1;
while(number <= 100){
    if (number % 2 != 0){
        console.log(number);
    }
    number++;
}

// Do While loop for exercise 1
let num = 1;
do {
    if (number % 2 != 0){
        console.log(number);
    }
    num++;
}   while(num <= 100)


// While loop for exercise 2
let i = 1;

while(i < 100){
    if (i % 3 == 0){
        console.log("Fizz");
    }

    if(i % 5 == 0){
            console.log("Buzz");
        }

        if( i % 3 == 0 && i % 5 == 0){
                console.log("FizzBuzz");
        }
        i++;
}

let x = 1;

// Do While loop for exercise 2
do {
    if (x % 3 == 0){
        console.log("Fizz");
    }

    if(x % 5 == 0){
            console.log("Buzz");
        }

        if( x % 3 == 0 && i % 5 == 0){
                console.log("FizzBuzz");
        }
        x++;
}       while(x < 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

let isFound = false;

for(let i = 1; i <= n; i++){
    if( i == value){
        console.log("Found Value!");
        isFound = true;
        break;
    }
    else{
        isFound = false;
    }
}
if(isFound == false){
    console.log("Did not find the value")
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 1) + 1); // creates a random number between 1 and 1000
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 1000

for(let i = start; i <= end; i++){
    if(i % fizzDivisor == 0){
        console.log("Fizz");
    }

    if(i % buzzDivisor == 0){
        console.log("Buzz");
    }
    
}
    



