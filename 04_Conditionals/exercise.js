// Day 4: Exercises

// Level 1
console.log(' - Level 1 - ')

// 1. Age-check using a user prompt (Web-browser)
let myAge = prompt('Enter your age:')
console.assert(!(isNaN(Number(myAge))), 'You need to enter a number.')
if ((isNaN(Number(myAge))) || myAge == '' || myAge <= 0) {
	alert()
}

let diff = 18 - myAge

if(myAge > 18) {
	console.log('You are old enough to drive.')
} else if ( myAge > 0) {
	console.log(`You need to wait ${diff} years to drive.`)
} else {
	console.log('Try entering a valid age. Until next time...')
}

// 2. Determine who is older by entering age.
let yourAge = Math.floor(Math.random() * 101)
let delta = myAge - yourAge
if (myAge > yourAge) {
	console.log(`I am ${delta} years older than you.`)
} else if (myAge == yourAge) {
	console.log('We have the same age.')
} else {
	console.log(`You are ${Math.abs(delta)} years older than me.`)
}

// 3. Example of a ternary operator
let a = 4;
let b = 3;
(a > b)
	? console.log(`${a} is greater than ${b}`)
	: console.log(`${a} is less/equal to ${b}`);

// 4. Check for even number
(myAge % 2 == 0)
	? console.log(`${myAge} is an even number`)
	: console.log(`${myAge} is an uneven number`);


// Level 2
console.log(' - Level 2 - ')

// 1. Scoring classes
let score = prompt('Enter a Score from 1-100')
let grade
switch(true) {
	case score > 100: alert();
	case score > 79: grade = "A"; break;
	case score > 69: grade = "B"; break;
	case score > 59: grade = "C"; break;
	case score > 49: grade = "D"; break;
	case score >= 0: grade = "F"; break;
	default: alert();
}
console.log(`Your grade is ${grade}.`)

// 2. Check season, avoid user input and just get the current month
let date = new Date()
let month = date.getMonth() + 1
let season
switch (month) {
	case 1: case 2: case 12: {season = 'Winter'}; break;
	case 3: case 4: case 5: {season = 'Spring'}; break;
	case 6: case 7: case 8: {season = 'Summer'}; break;
	case 9: case 10: case 11: {season = 'Autumn'}; break;
	default: alert();
}
console.log(`The current season is ${season}`)


// 3. Is it a weekday or weekend today? Avoid input and just get the current day
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
			'Thursday', 'Friday', 'Saturday']
let day = date.getDay()

if (day == 0 || day == 6) {
	console.log(`What is the day today? ${days[day]}\n${days[day]} is a weekdend.`)
} else {
	console.log(`What is the day today? ${days[day]}\n${days[day]} is a weekday.`)
}


// Level 3
console.log(' - Level 3 - ')

// 1. Again, to avoid user input we just return current months days.
YYYY = date.getFullYear()
totaldays = new Date(YYYY, date.getDate(), 0).getDate()
console.log(`The current month has a total of ${totaldays} days.`)

// 2. Is the current year a leap year?
feb_days = new Date(YYYY, 2, 0).getDate() // leap year = Feb 29
if (feb_days > 28) console.log(`${YYYY} is a leap year`)
else console.log(`${YYYY} is not a leap year`)


// Local helper function
function alert() {
	throw new Error('Task failed succesfully.');
}
