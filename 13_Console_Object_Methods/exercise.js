// Day 13: Exercises

// Level 1
console.log(' - Level 1 - ')

// 1.
const countries = [
	{
		name: 'Sweden',
		capital: 'Stockholm',
		languages: ['Swedish'],
		population: 9894888,
		currency: 'Swedish krona'
	},
	{
		name: 'Switzerland',
		capital: 'Bern',
		languages: ['German', 'French', 'Italian'],
		population: 8341600,
		currency: 'Swiss franc'
	}
]

let ch = Object.values(countries).find(u => u.name == 'Switzerland')
ch.languages.push('Romansh')
ch.population = 9000000

console.table(countries)

// 2.
console.table(ch)

// 3.
console.group('Group 1')
console.log('Element 1 of Group 1')
console.log('Element 2 of Group 1')
console.groupEnd()
console.group('Group 2')
console.log('Element 1 of Group 2')
console.log('Element 2 of Group 2')
console.groupEnd()


// Level 2
console.log(' - Level 2 - ')

console.assert(10 > 2*10)
console.warn('This is a warning.')
console.error('This is an alert!')


// Level 3
console.log(' - Level 3 - ')


function mySlowFunction(baseNumber) {
	// while
	console.time('while-loop timing')
	var bigint = Math.pow(baseNumber, 7)
	var result = 0
	var i = bigint
	while (i >= 0) {
		result += Math.atan(i) * Math.tan(i)
		i--
	}
	console.timeEnd('while-loop timing')

	// for
	console.time('for-loop timing')
	var bigint = Math.pow(baseNumber, 7)
	var result = 0
	for (var i = bigint; i >= 0; i--) {
		result += Math.atan(i) * Math.tan(i)
	}
	console.timeEnd('for-loop timing')

	// for of
	console.time('for-of-loop timing')
	var bigint = Math.pow(baseNumber, 7)
	var array = Array.from(Array(bigint).keys())
	var result = 0
	for (const i of array) {
		result += Math.atan(i) * Math.tan(i)
	}
	console.timeEnd('for-of-loop timing')

	// forEach
	console.time('forEach-loop timing')
	var bigint = Math.pow(baseNumber, 7)
	var array = Array.from(Array(bigint).keys())
	var result = 0
	array.forEach(i => { result += Math.atan(i) * Math.tan(i)} )
	console.timeEnd('forEach-loop timing')
}

mySlowFunction(9)
