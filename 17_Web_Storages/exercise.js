// Day 17: Exercises

// Level 1
console.log(' - Level 1 - ')

const info = {
	myName: 'Isaac',
	myLastName: 'Newton',
	myAge: 23,
	country: 'England',
	city: 'Woolsthorpe'
}

for (const [key, value] of Object.entries(info)) {
	localStorage.setItem(key, value)
}


// Level 2
console.log(' - Level 2 - ')

const student = {
	firstName: 'Euclid',
	lastName: 'of Alexandria',
	age: 20,
	skills: ['Mathematics', 'Geometry'],
	country: 'Greece',
	enrolled: ['Sports', 'History', 'Philosophy']
}
let studentJSON = JSON.stringify(student)
localStorage.setItem('student', studentJSON)

// Level 3
console.log(' - Level 3 - ')

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
let account = JSON.stringify(personAccount)
localStorage.setItem('account', account)
localStorage.clear()
