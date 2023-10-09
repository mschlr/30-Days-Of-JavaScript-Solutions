// Day 8: Exercises

// Level 1
console.log(' - Level 1 - ')

// 1.
const dog = {}

// 2.
console.log(dog)

// 3.
dog.name = 'Hachikō',
dog.legs = 4,
dog.color = 'white',
dog.age = 88,
dog.bark = () => { return `Woof woof` }


// 4.
console.log(`A ${dog.color} dog named ${dog.name} had ${dog.legs} legs \
and was ${dog.age} years old. His motto was: ${dog.bark()}`)

// 5.
dog.breed = 'Japanese Akitainu'
dog.getDogInfo = function() {
	console.log(this.name)
	console.log(this.breed)
	console.log(this.color)
}


// Level 2
console.log(' - Level 2 - ')

const users = {
	Alex: {
		email: 'alex@alex.com',
		skills: ['HTML', 'CSS', 'JavaScript'],
		age: 20,
		isLoggedIn: false,
		points: 30
	},
	Asab: {
		email: 'asab@asab.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
		age: 25,
		isLoggedIn: false,
		points: 50
	},
	Brook: {
		email: 'daniel@daniel.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
		age: 30,
		isLoggedIn: true,
		points: 50
	},
	Daniel: {
		email: 'daniel@alex.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
		age: 20,
		isLoggedIn: false,
		points: 40
	},
	John: {
		email: 'john@john.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
		age: 20,
		isLoggedIn: true,
		points: 50
	},
	Thomas: {
		email: 'thomas@thomas.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'React'],
		age: 20,
		isLoggedIn: false,
		points: 40
	},
	Paul: {
		email: 'paul@paul.com',
		skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
		age: 20,
		isLoggedIn: false,
		points: 40
	}
}

// 1.
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
getSkilled(users)

// 2.
function countOnline(obj) {
	let on_users = 0
	let high_users = 0

	for(const user of Object.keys(obj)) {
		if (obj[user]['isLoggedIn'] == true) { on_users++ }
		if (obj[user]['points'] >= 50 ) { high_users++ }
	}
	return (console.log(`Currently online: ${on_users},\n#Users with 50+ points: ${high_users}`))
}
countOnline(users)

// 3.
function findMernDevels(obj) {
	let mernDevels = []

	for(const user of Object.keys(obj)) {
		if (obj[user]['skills'].includes('MongoDB', 'Express', 'React', 'Node')) {
			mernDevels.push(user)
		}
	}
	return mernDevels
}

// 4.
users.Martin = {
	email: '123@business.com',
	skills: ['Read'],
	age: 5,
	isLoggedIn: true,
	points: 0
}

// 5.
Object.keys(users)

// 6.
Object.values(users)

// 7. Shortened countries
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
console.log(`Name: ${ch.name}\nCapital: ${ch.capital}\n\
Population: ${ch.population}\nLanguages: ${ch.languages}`)


// Level 3
console.log(' - Level 3 - ')

// 1.
const personAccount = {
	firstName: 'Leonhard',
	lastName: 'Euler',
	incomes: {
		Income1: 10,
		Income2: 20,
	},
	expenses: {
		Expense1: 20,
		Expense2: 5,
	},
	totalIncome() {
		return Object.values(this.incomes).reduce((a, b) => a + b, 0)
	},
	totalExpense() {
		return Object.values(this.expenses).reduce((a, b) => a + b, 0)
	},
	accountinfo() {
		return `Firstname: ${this.firstName}\n
				Last Name: ${this.lastName}\n
				`
	},
	addIncome: function(source, amount) {
		this.incomes[source] = amount
	},
	addExpense: function(source, amount) {
		this.expenses[source] = amount
	},
	accountBalance() {
		return console.log(`Balance: ${this.totalIncome() - this.totalExpense()}`)
	},
}

// Objects for Questions 2-4
const users2 = [
	{
		_id: 'ab12ex',
		username: 'Alex',
		email: 'alex@alex.com',
		password: '123123',
		createdAt:'08/01/2020 9:00 AM',
		isLoggedIn: false
	},
	{
		_id: 'fg12cy',
		username: 'Asab',
		email: 'asab@asab.com',
		password: '123456',
		createdAt:'08/01/2020 9:30 AM',
		isLoggedIn: true
	},
	{
		_id: 'zwf8md',
		username: 'Brook',
		email: 'brook@brook.com',
		password: '123111',
		createdAt:'08/01/2020 9:45 AM',
		isLoggedIn: true
	},
	{
		_id: 'eefamr',
		username: 'Martha',
		email: 'martha@martha.com',
		password: '123222',
		createdAt:'08/01/2020 9:50 AM',
		isLoggedIn: false
	},
	{
		_id: 'ghderc',
		username: 'Thomas',
		email: 'thomas@thomas.com',
		password: '123333',
		createdAt:'08/01/2020 10:00 AM',
		isLoggedIn: false
	}
]

const products = [
	{
		_id: 'eedfcf',
		name: 'mobile phone',
		description: 'Huawei Honor',
		price: 200,
		ratings: [
		{ userId: 'fg12cy', rate: 5 },
		{ userId: 'zwf8md', rate: 4.5 }
		],
		likes: []
	},
	{
		_id: 'aegfal',
		name: 'Laptop',
		description: 'MacPro: System Darwin',
		price: 2500,
		ratings: [],
		likes: ['fg12cy']
	},
	{
		_id: 'hedfcg',
		name: 'TV',
		description: 'Smart TV:Procaster',
		price: 400,
		ratings: [{ userId: 'fg12cy', rate: 5 }],
		likes: ['fg12cy']
	}
]

// 2a) Create a login function which adds signer to the table.
//     If user already exists, return statement that this user already exists.
//     Use CommonJS from "./helper.js" to facilitate...
const helper = require('./helper.js')

function signUp(newuser, email, password, db) {
	for(const entry of Object.keys(db)) {
		if (users2[entry]['username'] == newuser || users2[entry]['email'] == email) { return helper.alert() }
	}
	let newentry = {
		_id: helper.userIdGenerator(),
		username: newuser,
		email: email,
		password: password,
		createdAt: helper.showDateTime(),
		isLoggedIn: false
	}
	users2.push(newentry)
}
signUp('Elon', 'elon@tesla.com', 'PW123', users2)

// 2b) Trigger isLoggedIn for a user in the db when calling signIn
function signIn(id, pw, db) {
//	console.log(db[entry]['username'])
	for(const entry of Object.keys(db)) {
		if (db[entry]['username'] == id && db[entry]['password'] == pw) {
			console.log(`Sign-in succeeded. Welcome ${db[entry]['username']}!`)
			return db[entry]['isLoggedIn'] == true
		}
	}
	helper.alert('Logon failed.')
}
signIn('Elon', 'PW123', users2)
signIn('Martha', '123222', users2)

// 3.
function rateProduct(pID, uID, rating, db) {
	let newRating = {
		'userId': uID,
		'rate': rating,
	}
	db[pID].ratings.push(newRating)
}
rateProduct(0, '123456', 5, products)
console.log(products[0]['ratings'])

function averageRating(pID, db) {
	let sum = 0
	let length = 0
	for(let i = 0; i < db.length; i++) {
		if (db[i]._id == pID) {
			length = db[i].ratings.length
			for(let j = 0; j < length; j++) {
				sum += db[i].ratings[j].rate
			}
			return (console.log(`Average rating: ${sum / length}`))
		}
	}
}
averageRating('eedfcf', products)

// 4.
console.log(products[1].likes[0])
function likeProduct(pID, uID, db) {
	let length = 0

	for(let i = 0; i < db.length; i++) {

		if (db[i]._id == pID) {
			length = db[i].likes.length

			for(let j = 0; j < length; j++) {

				if(db[i].likes[j] == uID) {
					console.log('removed a like')
					delete db[i].likes[j]
					return
				} else {
					console.log('added a like')
					return
				}
			}
		}
	}
}
likeProduct('aegfal', 'fg12cy', products)
console.log(products[1].likes[0])
