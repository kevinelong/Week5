//TWO STATEMENTS ASSIGNING VALUES TO VARIABLES

//create a variable with the identifier x,
// and assigning it the integer/number value 100
let x = 100; // <-- = ASSIGNMENT OPERATOR, NUMBER
let firstName = "Erick"; // SAME BUT WITH A STRING (series of characters/letters)
let d = new Date("12/12/2023"); // a new object of DATATYPE DATE
let f = (one, two)=>{return one * two }; // A Function as a value data

console.log(x, firstName, d) //DUMP THE CONTENT OUT ONTO THE CONSOLE
console.log(f(12, 10))
console.log(f(13, 100))
console.log(f(119, 1000))


let hours = 12 - 5; // ASSIGN MATH EXPRESSION RESULT TO A NEW VARIABLE
console.log(hours);

//NO FUNCTION
let start = 5;
let stop = 11;
console.log(stop - start);

//DEFINE NAMED REUSABLE FUNCTION
function getHoursWorked(start, stop){ //variables in a function definition are called PARAMETERS
    return stop - start; //SEND RESULTS BACK
}

console.log(getHoursWorked(9, 12)) //VALUES PASSED TO A FUNCTION ARE CALLED ARGUMENTS
console.log(getHoursWorked(13, 20)) //VALUES PASSED TO A FUNCTION ARE CALLED ARGUMENTS

function multiply(a, b){ //requires only two parameters
    console.log(a * b)
}
multiply(12, 10, 999) //third argument is ignored
