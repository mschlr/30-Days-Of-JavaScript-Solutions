// Day 3: Exercises

// Level 1 - is it boring yet?

const bernoulli = {
	firstName: 'Daniel',
	lastName: 'Bernoulli',
	country: 'Switzerland',
	age: 66,
	isMarried: true,
}
logType(bernoulli) // 1.

console.log("Is '10' == 10?", '10' == 10) // 2.
console.log("Is parseInt('9.8') == 10", parseInt('9.8') == 10) // 3.

// 4.i.) Three truthy values in JS
const truthly = {
	positive_int: 5,
	negative_int: -5,
	string: 'A random string...',
	true: true,
}
logType(truthly)

// 4.ii.) Three falsy values in JS
const falsy = {
	zero: 0,
	zerom: -0,
	zerop: +0,
	zeron: 0n, // BigInt
	null: null,
	undefined: undefined,
	NaN: NaN,
	false: false,
	empty_string: '',
}
logType(falsy)

// 5.
const trueOrFalse = {
	1: 4 > 3, // that's true!
	2: 4 >= 3, // ...
	3: 4 < 3,
	4: 4 <= 3,
	5: 4 == 4,
	6: 4 === 4,
	7: 4 != 4,
	8: 4 !== 4,
	9: 4 != '4',
	10: 4 == '4',
	11: 4 === '4',
	12: 'python'.length + 'jargon'.length > 12,
}
logType(trueOrFalse) // print the results

// 6.
const expressions = {
	a: 4 > 3 && 10 < 12, // that's true!
	b: 4 > 3 && 10 > 12, // that's false!
	c: 4 > 3 || 10 < 12, // zzz...
	d: 4 > 3 || 10 > 12,
	e: !(4 > 3),
	f: !(false),
	g: !(4 > 3 && 10 < 12),
	h: !(4 > 3 && 10 > 12),
	i: !(4 === '4'),
	// Both dragon and python include 'on'
	j: 'dragon'.includes('on') && 'python'.includes('on')
}
logType(expressions)

// 7. Date Object
// Set environmental variable to specify the timezone
process.env.TZ = "Europe/Zurich"
const now = new Date()

console.log('i. It is the year', now.getFullYear())
console.log('ii. Number of month in the current year', now.getMonth() + 1)
console.log('iii. Date:', now.toLocaleDateString())
console.log('iv. Day of the month in the current year', now.getDay())
console.log('v. Current hour of the day:', now.getHours())
console.log('vi. Current minute of the hour', now.getMinutes())
console.log('vii. Since 01.01.1970 this many seconds have passed:', now.getTime())
console.log('XX. Current Date:', now.toDateString()) // extra


// Level 2

// Question 1-14 skipped
// Question 15 cont.
let mm = now.getMinutes().toString().padStart(2, '0')
let HH = now.getHours().toString().padStart(2, '0')
let YYYY = now.getFullYear().toString()
let MM = (now.getMonth() + 1).toString().padStart(2, '0')
let DD = now.getDate().toString().padStart(2, '0')

// 15.i.) YYYY-MM-DD HH:mm
console.log(`${YYYY}-${MM}-${DD} ${HH}:${mm}`)
// 15.ii.) DD-MM-YYYY HH:mm
console.log(`${DD}-${MM}-${YYYY} ${HH}:${mm}`)
// 15.iii.) DD/MM/YYYY HH:mm
console.log(`${DD}/${MM}/${YYYY} ${HH}:${mm}`)


// Level 3

// Try an arbitrary unconventional date format as following:
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05
let YYY = (now.getYear() - 100).toString().padStart(3, '0')
console.log(`${YYY}-${MM}-${DD} ${HH}:${mm}`)


// Local helper function
function logType(object) {
	if (!(typeof object == 'object')) { console.log("Not an object."); return }

	for (const [key, value] of Object.entries(object)) {
		if (typeof value == 'boolean') console.log(`${key} is found to be boolean and is: ${value}`)
		else console.log(`${key} as in "${value}" is a type of`, typeof value);
	}
}
