// Day 16: Exercises

// Level 1
console.log(' - Level 1 - ')

// 1.-4.
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let skillsJSON = JSON.stringify(skills)

let age = 250; age = JSON.stringify(age)
let isMarried = true; isMarried = JSON.stringify(isMarried)

const student = {
	firstName:'Asabeneh',
	lastName:'Yetayehe',
	age:250,
	isMarried:true,
	skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
let studentJSON = JSON.stringify(student)


// Level 2
console.log(' - Level 2 - ')

let studentJSONshort = JSON.stringify(student, ['firstName', 'lastNAme', 'skills'])


// Level 3
console.log(' - Level 3 - ')

const txt = `{
	"Alex": {
		"email": "alex@alex.com",
		"skills": [
			"HTML",
			"CSS",
			"JavaScript"
		],
		"age": 20,
		"isLoggedIn": false,
		"points": 30
	},
	"Asab": {
		"email": "asab@asab.com",
		"skills": [
			"HTML",
			"CSS",
			"JavaScript",
			"Redux",
			"MongoDB",
			"Express",
			"React",
			"Node"
		],
		"age": 25,
		"isLoggedIn": false,
		"points": 50
	},
	"Brook": {
		"email": "daniel@daniel.com",
		"skills": [
			"HTML",
			"CSS",
			"JavaScript",
			"React",
			"Redux"
		],
		"age": 30,
		"isLoggedIn": true,
		"points": 50
	},
	"Daniel": {
		"email": "daniel@alex.com",
		"skills": [
			"HTML",
			"CSS",
			"JavaScript",
			"Python"
		],
		"age": 20,
		"isLoggedIn": false,
		"points": 40
	},
	"John": {
		"email": "john@john.com",
		"skills": [
			"HTML",
			"CSS",
			"JavaScript",
			"React",
			"Redux",
			"Node.js"
		],
		"age": 20,
		"isLoggedIn": true,
		"points": 50
	},
	"Thomas": {
		"email": "thomas@thomas.com",
		"skills": [
			"HTML",
			"CSS",
			"JavaScript",
			"React"
		],
		"age": 20,
		"isLoggedIn": false,
		"points": 40
	},
	"Paul": {
		"email": "paul@paul.com",
		"skills": [
			"HTML",
			"CSS",
			"JavaScript",
			"MongoDB",
			"Express",
			"React",
			"Node"
		],
		"age": 20,
		"isLoggedIn": false,
		"points": 40
	}
}
`

let txtParsed = JSON.parse(txt)

function getSkilled(obj) {
	let numskills = 0
	let currentmax = 0
	let skilleduser = ''

	for(const user of Object.keys(obj)) {
		numskills = obj[user]['skills'].length
		if (numskills > currentmax) {
			currentmax = numskills
			skilleduser = user
		}
	}
	return skilleduser
}

getSkilled(txtParsed)
