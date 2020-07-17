// Collect input from a user
const number = prompt("Please enter a number: ");

// Convert the input to a number
const convert = +number;

// Use Math.random() and the user's number to generate a random number
const random = Math.floor(Math.random()*convert + 1);

// Create a message displaying the random number


const final = `<p> Your random number is ${random} </p>`;

document.querySelector('main').innerHTML = final; 

if (convert){
	const final = `<p> Your random number is ${random} </p>`;
	document.querySelector('main').innerHTML = final; 
} else {
	const final = `<p> You did not enter a number value. Please try again. </p>`;
	document.querySelector('main').innerHTML = final; 
}