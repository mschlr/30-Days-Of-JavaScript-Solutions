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
const chars_l = characters.length
function userIdGenerator() {
	let result = ''
	for(let i = 0; i < 7; i++) {
		result += characters.charAt(Math.floor(Math.random() * chars_l))
	}
	return result
}


// Level 3
console.log(' - Level 3 - ')

// 1. userIdGenerator with user prompt
function userIdGeneratorPrompt() {
	let id_len = prompt("Define length of the random alphanumeric user ID:", 7)
	let id_num = prompt("How many random alphanumeric user ID's are needed?:", 3)
	const id_array = Array(Number(id_num)).fill('')

	for(let i = 0; i < id_num; i++) {
		for(let j = 0; j < id_len; j++) {
			id_array[i] += characters.charAt(Math.floor(Math.random() * chars_l))
		}
	}
	return id_array
}

// 2. rgbColorGenerator to output the following with random values:
//    rgb(125,244,255)
function rgbColorGenerator() {
	let r = Math.floor(Math.random() * 255) + 1
	let g = Math.floor(Math.random() * 255) + 1
	let b = Math.floor(Math.random() * 255) + 1

	return (`rgb(${r},${g},${b})`)
}

// 3. Output of an array of `HexaColors`
function arrayOfHexaColors(int) {
	a = new Array(int).fill()
	return a.map(() => randomHexaNumberGenerator())
}

// 4. Output of an array of `RGB-Colors`
function arrayOfRgbColors(int) {
	a = new Array(int).fill()
	return a.map(() => rgbColorGenerator())
}

// 5. Conversion of HEX into RGB
//    input: `#FFFFFF`, output: `16777215`
function convertHexaToRgb(hex) {
	s1 = parseInt(hex.slice(1,3), 16)
	s2 = parseInt(hex.slice(3,5), 16)
	s3 = parseInt(hex.slice(5,7), 16)
	return console.log(`rgb(${s1},${s2},${s2})`)
}

// 6. Conversion of RGB into HEX, reverse task 5
function convertRgbToHexa(rgb) {
	a = rgb.match(/\d+/g)
	r = Number(a[0]).toString(16)
	g = Number(a[1]).toString(16)
	b = Number(a[2]).toString(16)
	return console.log(`#${r}${g}${b}`)
}

// 7. Take arg1 'hexa' or 'rgb' and arg2 as int
function generateColors(code, int) {
	if (code == 'hexa') {
		if (int == 1) { return randomHexaNumberGenerator() }
		console.log(arrayOfHexaColors(int))
	} else if (code == 'rgb') {
		if (int == 1) { return rgbColorGenerator() }
		console.log(arrayOfRgbColors(int))
	} else { console.log('Incorrect arguments.')}
}

// 8. Shuffle an input array using the Fisher-Yates shuffle algorithm
function shuffleArray(array) {
	var i = array.length, j, temp
	while(--i > 0) {
		j = Math.floor(Math.random() * (i + 1))
		temp = array[j]
		array[j] = array[i]
		array[i] = temp
	}
	return array
}

// 9. Calculate factorial from an integer
function factorial(int) {
	if (int == 0) { return 1 }
	if (int < 0) { return undefined }

	let i = int
	while (i > 2) {
		--i
		int *= i
	}
	return int
}

// 10. Check if parameter is `empty`
//     https://stackoverflow.com/a/53751866
function isEmpty(value) {
	return (
		(value == null) ||
		(value.hasOwnProperty('length') && value.length === 0) ||
		(value.constructor === Object && Object.keys(value).length === 0)
	)
}

// 11. call sumUp()
sumUp(1,2,3,4,5,6,7,8,9,10)

// 12. sum up all items in an array with type check
function sumOfArrayItems(array) {
	let sum = 0
	for(let i = 0; i < array.length; i++) {
		if (typeof array[i] !== 'number') { return alert() }
		sum += array[i]
	}
	return sum
}

// 13. average of parameters in an array
function average(array) {
	let sum = 0
	for(let i = 0; i < array.length; i++) {
		if (typeof array[i] !== 'number') { return alert() }
		sum += array[i]
	}
	return sum / array.length
}

// 14. modify fifth string-element of the array to uppercase
function modifyArray(array) {
	if (array.length < 5 || typeof array[4] !== 'string') { return alert() }
	array[4] = array[4].toUpperCase()
	return array
}

// 15.
function isPrime(num) {
	var sqrtnum=Math.floor(Math.sqrt(num));
	var prime = num != 1;
	for(var i=2; i < sqrtnum+1; i++) {
		if(num % i == 0) {
			prime = false
			break
		}
	}
	return prime
}

// 16.
function isUnique(array) {
	return (array.length == new Set(array).size)
}

// 17.
function uniqueType(array) {
	return (new Set(array.map(x => typeof x)).size < 2)
}

// 18. Check if input is an allowed variable
function isValidVariable(arg) {
	let pattern = /^([A-Za-z_$]+[A-Za-z_$\d]+)/
	return (pattern.test(arg))
}

// 19. Return Array of length 7 with random numbers from 0-9
function sevenRandomNumbers(){
	const array = Array(7)
	.fill()
	.map(() => Math.floor(Math.random() * 10))

	return array
}

// 20.
countries = ['Switzerland', 'Sweden']
reverseArray(countries)

// Local helper function
function alert() {
	throw new Error('Task failed succesfully.');
}
