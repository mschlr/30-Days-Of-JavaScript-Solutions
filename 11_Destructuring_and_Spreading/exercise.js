// Day 11: Exercises

// Level 1
console.log(' - Level 1 - ')

const constants = [2.7182818, 3.14159, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
	width: 20,
	height: 10,
	area: 200,
	perimeter: 60
}
const users = [
{
	name:'Brook',
	scores:75,
	skills:['HTML', 'CSS', 'JS'],
	age:16
},
{
	name:'Alex',
	scores:80,
	skills:['HTML', 'CSS', 'JS'],
	age:18
},
{
	name:'David',
	scores:75,
	skills:['HTML', 'CSS'],
	age:22
},
{
	name:'John',
	scores:85,
	skills:['HTML'],
	age:25
},
{
	name:'Sara',
	scores:95,
	skills:['HTM', 'CSS', 'JS'],
	age: 26
},
{
	name:'Martha',
	scores:80,
	skills:['HTM', 'CSS', 'JS'],
	age:18
},
{
	name:'Thomas',
	scores:90,
	skills:['HTM', 'CSS', 'JS'],
	age:20
}
]

// 1. Destructure constants
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

// 2. Destructure countries
let [fin, est, swe, den, nor] = countries

// 3. Destructuring rectangle object
let {width, height, area, perimeter: peri} = rectangle


// Level 2
console.log(' - Level 2 - ')

for(const {name, scores, skills, age} of users) {
	console.log(name, scores, skills, age)
}

for(const {name, skills} of users) {
	if (skills.length < 2) {
		console.log(name)
	}
}


// Level 3
console.log(' - Level 3 - ')

const countriesShortened = [
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
		languages: ['German', 'French', 'Italian', 'Romansh'],
		population: 9000000,
		currency: 'Swiss franc'
	},
]

// 1. Destructure countriesShortened object
for(const {name, capital, languages, population} of countriesShortened) {
	console.log(name, capital, languages, population)
}

// 2.
const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name, skills, [,, jsScore, reactScore]] = student
console.log(name, skills, jsScore, reactScore)

// 3.
const students = [
	['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
	['John', ['HTML', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(arr) {
	let newObj = []
	for(const [name, skills, scores] of arr) {
		newObj.push({name: name, skills: skills, scores:scores})
	}
	return newObj
}

// 4. One way to do it sequentially
let newStudent = convertArrayToObject([student]) // deep copy student array
delete newStudent[0].scores
newStudent[0].age = 25
newStudent[0].skills = {
	frontEnd: [
		{ skill: 'HTML', level: 10 },
		{ skill: 'CSS', level: 8 },
		{ skill: 'JS', level: 8 },
		{ skill: 'React', level: 9 }
	],
	backEnd: [
		{ skill: 'Node',level: 7 },
		{ skill: 'GraphQL', level: 8 },
	],
	dataBase:[
		{ skill: 'MongoDB', level: 7.5 },
	],
		dataScience:['Python', 'R', 'D3.js']
}
// copied student and made adjustments,
// further adjustmends by pushing entries in the nested arrays
newStudent[0].skills.frontEnd.push({skill: 'BootStrap', level: 8})
newStudent[0].skills.backEnd.push({skill: 'Express', level: 9})
newStudent[0].skills.dataBase.push({skill: 'SQL', level: 8})
newStudent[0].skills.dataScience.push('SQL')
