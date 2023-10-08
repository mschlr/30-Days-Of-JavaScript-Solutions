// Day 15: Exercises

// Level 1+2
console.log(' - Level 1+2 - ')

// 1. Animal Class
class Animal {
	constructor(name, age, color, legs) {
		this.name = name
		this.age = age
		this.color = color
		this.legs = legs
	}
	intro() {
		console.log(`${this.name} is an animal and ${this.age} years old. It is ${this.color} and has ${this.legs} legs.`)
	}
	noise() {
		console.log(`${this.name} is doing some animal noises.`)
	}

}

// 2. Dog and Cat Child Classes
class Dog extends Animal {
	constructor(name, age, color, legs) {
		super(name, age, color, legs)
	}
	intro() {
		console.log(`${this.name} is a dog and ${this.age} years old. It is ${this.color} and has ${this.legs} legs.`)
	}
	noise() {
		console.log(`${this.name} is barking`)
	}
}

class Cat extends Animal {
	constructor(name, age, color, legs, gender) {
		super(name, age, color, legs)
		this.gender = gender
	}
	intro() {
		let pronoun = this.gender == 'male' ? 'He' : 'She'
		console.log(`${this.name} is a cat and ${pronoun.toLocaleLowerCase()} is ${this.age} years old. ${pronoun} is ${this.color} and has ${this.legs} legs.`)

	}
	noise() {
		console.log(`${this.name} is meowing`)
	}
}

let animal1 = new Animal('Fish', 3, 'grey', 0)
let animal2 = new Dog('Hachikō', 5, 'white', 4)
let animal3 = new Cat('Whine', 12, 'grey', 4, 'female')


// Level 3
console.log(' - Level 3 - ')

// 1. Statistics Class
const ages = [
	31, 26, 34, 37, 27, 26, 32, 32, 26,
	27, 27, 24, 32, 33, 27, 25, 26, 38,
	37, 31, 34, 24, 33, 29, 26
]

class Statistics {
	constructor(data) {
		this.data = data
	}
	count() {
		return this.data.length
	}
	sum() {
		return this.data.reduce((a,b) => a + b, 0)
	}
	min() {
		return Math.min(...this.data)
	}
	max() {
		return Math.max(...this.data)
	}
	range() {
		return this.max() - this.min()
	}
	mean() {
		return Math.round(this.sum() / this.count())
	}
	median() {
		let dat = this.data.sort()
		let len = this.count()

		if(len % 2) {
			return dat[Math.floor(len / 2)]
		} else {
			return (dat[len / 2 - 1] + dat[len / 2]) / 2
		}
	}
	mode() {
		let obj = this.data.reduce((u, v) => {
			u[v] = (u[v] || 0) + 1
			return u
		}, {})
		let tmp = Object.entries(obj).sort((a, b) => b[1] - a[1])[0]
		return {mode: +tmp[0], count: tmp[1]}
	}
	var() {
		let average = this.mean()
		let squareDiffs = this.data.map((value) => {
			let diff = value - average
			return diff * diff
		})
		return squareDiffs.reduce((a,b) => a + b, 0) / squareDiffs.length
	}
	std() {
		return Math.sqrt(this.var()).toFixed(2)
	}
	freqDist() {
		// Output solution using stringify, better string format for output is preferred
		let obj = this.data.reduce((u, v) => {
			u[v] = (u[v] || 0) + 1
			return u
		}, {})
		return JSON.stringify(Object.entries(obj).sort((a, b) => b[1] - a[1]))
	}
	describe() {
		return console.log(
		`
		Count: ${this.count()}
		Sum: ${this.sum()}
		Min: ${this.min()}
		Max: ${this.max()}
		Range: ${this.range()}
		Mean: ${this.mean()}
		Median: ${this.median()}
		Mode: (${this.mode().mode}, ${this.mode().count})
		Variance: ${this.var()}
		Stnadard Deviation: ${this.std()}
		Frequency Distribution: ${this.freqDist()}
		`)
	}
}

let statistics = new Statistics(ages)
statistics.describe()

// 2. PersonAccount Class
class PersonAccount {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
		this.incomes = {}
		this.expenses = {}
	}
	addIncome(source, amount) {
		if (this.incomes[source] == undefined) {
			this.incomes[source] = amount
			return `${source} with ${amount} added`
		} else {
			this.incomes[source] = amount
			return `${source} with ${amount} updated`
		}
	}
	addExpense(source, amount) {
		if (this.expenses[source] == undefined) {
			this.expenses[source] = amount
			return `${source} with ${amount} added`
		} else {
			this.expenses[source] = amount
			return `${source} with ${amount} updated`
		}
	}
	get totalIncome() {
		return Object.values(this.incomes).reduce((a, b) => a + b, 0)
	}
	get totalExpense() {
		return Object.values(this.expenses).reduce((a, b) => a + b, 0)
	}
	get balance() {
		return this.totalIncome - this.totalExpense
	}
	get info() {
		return console.log(`Firstname: ${this.firstName}\nLastname: ${this.lastName}\nBalance: ${this.balance}`)
	}
}

let PersonA = new PersonAccount('Leonhard', 'Euler')
PersonA.addIncome('Income1', 900)
PersonA.addIncome('Income2', 700)
PersonA.addIncome('Income1', 950)
PersonA.addExpense('Expense1', 300)
PersonA.addExpense('Expense1', 150)
PersonA.addExpense('Expense2', 1300)
PersonA.info
