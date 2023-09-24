// Day 7: Exercises

// Level 1
console.log(' - Level 1 - ')

// 1.
const Name = () => {
	console.log('Wilhelm Tell')
}
// 2.
const fullName = (first = 'Roger', last = 'Federer') => {
	console.log(`${first} ${last}`)
}
// 3.
const addNumbers = (a, b) => {
	if ((isNaN(Number(a))) || (isNaN(Number(b)))) {
		alert()
	}
	return a+b
}
// 4.
const areaOfRectangle = (a, b) => {
	return a * b
}
// 5.
const perimeterOfRectangle = (a, b) => {
	return 2 * ( a + b )
}
// 6.
const volumeOfRectPrism = (a, b, c) => {
	return a * b * c
}
// 7.
const areaOfCircle = (r) => {
	return Math.PI * r * r
}
// 8.
const circumOfCircle = (r) => {
	return 2 * Math.PI * r
}
// 9.
const density = (mass, volume) => {
	return mass / volume
}
// 10.
const speed = (distance, time) => {
	return distance / time
}
// 11.
const weight = (mass) => {
	return mass * 9.81 // g = 9.81
}
// 12.
const convertCelsiusToFahrenheit = (C) => {
	return (C * 9/5) + 32
}
// 13.
const bmi = (weight, height) => {
	let bmi = weight / (height * height)
	let wclass

	switch(true) {
		case bmi < 18.5: wclass = 'underweight'; break;
		case bmi < 24.9: wclass = 'normal'; break;
		case bmi < 30: wclass = 'overweight'; break;
		case bmi >= 30: wclass = 'obese'; break;
		default: alert();
	}

	console.log(`A person weighting ${weight} kg with a height of ${height} m has a BMI of ${bmi} and therefore is classified ${wclass}.`)
}

// 14. checkSeason just checks which season we are in now
//     compare exercise Day 4, Level 2-2
const checkSeason = () => {
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
	console.log(`The current season is ${season}.`)
}

// 15.
function findMax(a, b, c) {
	return [a, b, c].sort((a, b) => b-a)[0]
}


// Level 2
console.log(' - Level 2 - ')

// 1. Calculate value of `two` linear equations as in Linear Algebra
//    using formulas etc.
//    Example: a1*x + b1*y = k1
//             a2*x + b2*y = k2
function solveTwoLinEqs(a1, b1, k1, a2, b2, k2) {
	// Calculate Determinants
	let D = (a1*b2) - (a2*b1)
	let D1 = (k1*b2) - (k2*b1)
	let D2 = (a1*k2) - (a2*k1)
	if (!(D == 0)) { return console.log([D1/D, D2/D]) }
	else if (D1 == 0 && D2 == 0) { return console.log([Inf, Inf]) }
	else {return console.log('No solutions found.')}
}

// 2. Solve quadratic equation in the form of a*x^2 + b*x + c = 0
function solveQuadEquation(a, b, c) {
	let D = Math.pow(b, 2) - (4*a*c)
	console.log(`D=${D}`)
	if (D > 0) {
		x1 = (-b + Math.sqrt(D)) / (2*a)
		x2 = (-b - Math.sqrt(D)) / (2*a)
		return console.log([x1, x2])
	} else if (D == 0) { return console.log(x=-b/(2*a)) }
	else { return console.log('No real solution.')}
}

// 3.
function printArray(a) {
	for (const x of a) {
		console.log(x);
	}
 }

 // 4. Show current Date+Time in the following format: 08/01/2020 04:08
function showDateTime() {
	let date = new Date()
	d = date.toLocaleDateString().padStart(10, '0')
	h = date.getHours().toString().padStart(2, '0')
	m = date.getMinutes().toString().padStart(2, '0')
	return console.log(`${d} ${h}:${m}`)
}

// 5.
function swapValues(x, y) {
	return console.log(y, x)
}

// 6.
function reverseArray(x) {
	rev = []
	for (let i = x.length - 1; i >= 0; i--) {
		rev.push(x[i])
	}
	return rev
}
console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArray(['A', 'B', 'C']))

// 7.
function capitalizeArray(x) {
	cap = []
	for (const i of x) {
		cap.push(i.toUpperCase())
	}
	return cap
}

// 8.
function addItem(item, basket) {
	return basket.push(item)
}

// 9.
function removeItem(i, basket) {
	return basket.splice(i, 1)
}

// 10. sumOfNumbers or 1st order arithmetic sequence with d = 1
function sumOfNumbers(a_1, a_n) {
	return (s = a_n * (a_1 + a_n) / 2)
}

// 11. sum up all uneven, I am overcomplicating things now. Zzz
function sumOfOdds(u, v) {
	if (u % 2 == 1) { u++ }
	if (v % 2 == 1) { v-- }
	i = u / 2
	j = v / 2
	n = j - i + 1
	return (s = u*n + n*(n-1))
}

// 12. We could do as before in task 11, but here a different approach
function sumOfEven(u, v) {
	let s = 0
	for (let i = u; i <= v; i++) {
		if (i % 2 == 0) { s += i }
	}
	return s
}

// 13.
function evensAndOdds(x) {
	if (x == 1) {return console.log(`The number of odds is 1\nThe number of evens is 1`)}
	if (x % 2 == 1) {
		evens = odds = Math.ceil(x / 2)
	} else {
		odds = x / 2
		evens = odds + 1
	}
	return console.log(`The number of odds are ${odds}\nThe number of evens are ${evens}`)
}

// 14.
function sumUp(...args) {
	let sum = 0
	args.map(x => sum += x)
	return sum
}

// 15. IP Address Range 0.0.0.0 - 255.255.255.255
function randomUserIp() {
	return (
		(Math.floor(Math.random() * 255) + 1)+'.'+
		(Math.floor(Math.random() * 255) + 1)+'.'+
		(Math.floor(Math.random() * 255) + 1)+'.'+
		(Math.floor(Math.random() * 255) + 1)
	)
}

// 16.
function randomMacAddress() {
	return(
		(Math.floor(Math.random() * 255) + 1).toString(16).padStart(2, '0')+':'+
		(Math.floor(Math.random() * 255) + 1).toString(16).padStart(2, '0')+':'+
		(Math.floor(Math.random() * 255) + 1).toString(16).padStart(2, '0')+':'+
		(Math.floor(Math.random() * 255) + 1).toString(16).padStart(2, '0')+':'+
		(Math.floor(Math.random() * 255) + 1).toString(16).padStart(2, '0')+':'+
		(Math.floor(Math.random() * 255) + 1).toString(16).padStart(2, '0')
	)
}
// 17.
function randomHexaNumberGenerator() {
	hex = Math.floor(Math.random()*16777216).toString(16).padStart(6, '0')
	return(`#${hex}`)
}
// 18. Generate 7 alphanumeric characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
function userIdGenerator() {
	let result = ''
	const l = characters.length
	for(let i = 0; i < 7; i++) {
		result += characters.charAt(Math.floor(Math.random() * l))
	}
	return result
}


// Level 3
console.log(' - Level 3 - ')


// Local helper function
function alert() {
	throw new Error('Task failed succesfully.');
}
