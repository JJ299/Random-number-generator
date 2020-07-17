
const numberone = prompt("Please enter your low number: ");
const numbertwo = prompt("Please enter your high number: ")
const convertone = +numberone;
const converttwo = +numbertwo; 

if (convertone && converttwo){
	const random = Math.floor(Math.random()*(converttwo - convertone + 1)) + convertone;
	const final = `<p> Your random number between ${convertone} and ${converttwo} is: ${random} </p>`;
	document.querySelector('main').innerHTML = final; 
} else {
	const final = `<p> You did not enter a number value. Please try again. </p>`;
	document.querySelector('main').innerHTML = final; 
}