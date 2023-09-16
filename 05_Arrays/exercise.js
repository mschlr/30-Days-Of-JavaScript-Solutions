// Day 5: Exercises

const countries = [
	'Albania',
	'Bolivia',
	'Canada',
	'Denmark',
	'Ethiopia',
	'Finland',
	'Germany',
	'Hungary',
	'Ireland',
	'Japan',
	'Kenya'
  ]

  const webTechs = [
	'HTML',
	'CSS',
	'JavaScript',
	'React',
	'Redux',
	'Node',
	'MongoDB'
  ]

// Level 1

// 1.-3. Create a defined array with random numbers
console.log(' - Level 1 - ')
const array = Array(10)
  .fill()
  .map(() => Math.floor(Math.random() * 10 + 1))
console.log(array)

// 4. Get the first item, the middle item and the last item of the array
infoArray(array)

// 5. mixedDataTypes is an array with some different data types
const mixedDataTypes = [
	true,
	'random string',
	55,
	1.2,
	null,
	'',
	NaN,
]
infoArray(mixedDataTypes)

// 6. itCompanies
const itCompanies = [
	'Facebook',
	'Google',
	'Microsoft',
	'Apple',
	'IBM',
	'Oracle',
	'Amazon',
]
infoArray(itCompanies)
itCompanies.map((name) => console.log(name)) // 10.
itCompanies.map((name) => console.log(name.toUpperCase())) // 11.
console.log(itCompanies.join(', ')) // 12.

// 13. Check if an element is found in the array and return its value,
//     else return 'not found'
//     @search: element of interest
//     @array: provide an array
function findElement (search, array) {
	if (array.includes(search)) console.log(search)
	else console.log('not found')
}
findElement('Amazon', itCompanies)
findElement('McDonalds', itCompanies)


// 14. Filter Companies in the array that have more than one 'o' without using
//     the filter method.
for (var i=itCompanies.length - 1; i >= 0; i--) {
	if(!(itCompanies[i].match(/o{2,}|o.+o/g) == null)) {
		itCompanies.splice(i, 1)
	}
}
infoArray(itCompanies)

itCompanies.sort().reverse() // 15. + 16.
console.log(itCompanies)

// 17. + 18. Slice the first and last 3
let slice1 = itCompanies.slice(3,)
let slice2 = itCompanies.slice(-itCompanies.length,-3)
console.log(slice1)
console.log(slice2)

// 19. Slice out the middle element in itCompanies. If there is more than 1
//     element, slice out two, assuming uniqueness of all the elements.
var l = Math.floor(itCompanies.length / 2)
if (itCompanies.length % 2 == 0) {
	var slice3 = itCompanies.slice(l - 1, l + 1)
} else {
	var slice3 = itCompanies.slice(l - 1, l)
}
console.log(slice3)

itCompanies.shift() // 20. Remove the first Element
console.log(itCompanies)

// 21. Splice out the middle element in itCompanies. If there is more than 1
//     element, slice out two, similar to the slicing earlier.
var l = Math.floor(itCompanies.length / 2)
if (itCompanies.length % 2 == 0) {
	itCompanies.splice(l - 1, 2)
} else {
	itCompanies.splice(l, 1)
}
console.log(itCompanies)

itCompanies.pop() // 22. Remove the last element
console.log(itCompanies)

itCompanies.length = 0 // 23. Empty the array
console.log('Empty array:', itCompanies)


// Level 2
console.log(' - Level 2 - ')

// 1. constant arrays countries and webTechs are defined at the start
// 2. Clean up text string into array of words
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.match(/\w+/g)
console.log(words)
console.log(words.length)

// 3. Modify shoppingCart accordingly ...
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (!shoppingCart.includes('Meat')) shoppingCart.unshift('Meat')
if (!shoppingCart.includes('Sugar')) shoppingCart.push('Sugar')
const honey_allergy = false // true
if (honey_allergy) {
	shoppingCart.splice(shoppingCart.lastIndexOf('Honey'),1)
}
shoppingCart[shoppingCart.lastIndexOf('Tea')] = 'Green Tea'
console.log(shoppingCart)

// 4. Find 'Ethiopia' in Array
if (countries.lastIndexOf('Ethiopia') > -1) console.log('ETHIOPIA')
else countries.push('Ethiopia')
console.log(countries)

// 5. Check for 'Sass' in array
if (webTechs.lastIndexOf('Sass') > -1) console.log('Sass is a CSS preprocess')
else webTechs.push('Sass')
console.log(webTechs)

// 6. Concatenate two arrays
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)


// Level 3
console.log(' - Level 3 - ')

// 1.
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
let min = Math.min(...ages)
let max = Math.max(...ages)
let average = ages.reduce((a, b) => a + b, 0) / ages.length
let range1 = Math.abs(min - average)
let range2 = Math.abs(max - average)

slicedCountries = countries.slice(0, 10) // 2?
console.log(slicedCountries)

// 3. Splice the middle of slicedCountries
var l = Math.floor(slicedCountries.length / 2)
console.log(l)
if (slicedCountries.length % 2 == 0) {
	slicedCountries.splice(l - 1, 2)
} else {
	slicedCountries.splice(l, 1)
}
console.log(slicedCountries)

// 4.
var l = slicedCountries.length
if (l % 2 == 0) {
	var half = slicedCountries.splice(0, l / 2)
} else {
	var half = slicedCountries.splice(0, Math.ceil(l / 2))
}
console.log(half, slicedCountries)


// Local helper functions
// TODO: slicing middle items function, clean up code,..

function infoArray (array) {
	// print array
	console.log(array)

	// some other array stuff
	let l = array.length
	console.log('Array length is:', l)
	console.log('First element:', array[0])
	console.log('Middle element:', array[Math.floor(l/2 - 1)])
	console.log('Last element:', array[l - 1 ])
}
