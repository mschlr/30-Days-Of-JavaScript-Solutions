// Create datatypes.js file and use the JavaScript typeof operator to check
// different data types. Check the data type of each variable

let a = "This is a string.";
let b = true // 'boolean'
let c = undefined // 'undefined'
let d = null // null aka 'object'; typeof d

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))

// Declare four variables without assigning values
let e, f, g, h;
console.log(e, f, g, h)

// Declare four variables with assigned values
let i = j = k = l = "Test";
console.log(i, j, k, l)

// Declare variables to store your first name, last name, marital status,
// country and age in multiple lines
{
	let firstname = 'Einstein'
	let martialstatus = 'married'
	let age = 26
	let country = 'Germany'
	console.log(firstname, martialstatus, age, country)
}

// Declare variables to store your first name, last name, marital status,
// country and age in a single line
let firstname = 'Einstein'; let martialstatus = 'married'; let age = 26; let country = 'Germany'
console.log(firstname, martialstatus, age, country)


// Declare two variables myAge and yourAge and assign them initial values
// and log to the browser console.
let myAge = 1;
let yourAge = 2;

console.log(`I am ${myAge} years old.`)
console.log(`You are ${yourAge} years old.`)
