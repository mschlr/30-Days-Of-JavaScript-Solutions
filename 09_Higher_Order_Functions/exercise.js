// Day 9: Exercises

// Level 1
console.log(' - Level 1 - ')

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
	{ product: 'banana', price: 3 },
	{ product: 'mango', price: 6 },
	{ product: 'potato', price: ' ' },
	{ product: 'avocado', price: 8 },
	{ product: 'coffee', price: 10 },
	{ product: 'tea', price: '' },
]

// 1. forEach method that executes the provided function on each element /*
/*
      map method creates an array populated with the provided functions results

      filter creates a shallow copy with a portion of a given array that suffice
      the conditions provided by the function

      reduce returns passing value from all the elements etc.
*/

// 2.
const callback = (n) => { return n + 1 }
numbers.forEach((n, m) => console.log(`Number: ${callback(n)}\nIndex: ${m}`))
numbers.map(n => callback(n)) // new array with called upon function
numbers.filter(n => callback(n) > 3) // array elements need to be >3
numbers.reduce(n => callback(n)) // simply returns last element

// 3, 4, 5 forEach examples
countries.forEach(n => console.log(n))
names.forEach(n => console.log(n))
numbers.forEach(n => console.log(n))

// 6, 7, 8, 9, 10 map examples
const countriesCap = countries.map(n => n.toUpperCase())
const countriesLen = countries.map(n => n.length)
const numbersSquared = numbers.map(n => n * n)
const namesCap = names.map(n => n.toUpperCase())
const productsPrice = products.map(n => n.price)

// 11, 12, 13, 14, 15 filter examples
const countriesLand = countries.filter(n => n.toLowerCase().includes('land', 'Land'))
const countriesSix = countries.filter(n => n.length == 6)
const countriesSix2 = countries.filter(n => n.length >= 6)
const countriesStartF = countries.filter(n => n.startsWith('F'))
const productsLabelled = products.filter(n => typeof n.price == 'number' )

// 16.
function getStringLists(a) {
	return a.filter(n => typeof n == 'string')
}

// 17.
numbers.reduce((a, b) => a + b, 0)

// 18. Use reduce to concatenate all the countries and to produce this sentence:
// Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
countries.reduce(function(acc, name, index) {
	if (index == countries.length - 1) {
		return acc + 'and ' + name + ' are north European countries'
	} else {
		return acc + name + ', '
	}
}, 'Estonia, ')

// 19. some: Each element in the array is tested by the given function,
//           if the function returns true for any element, then true
//           will be returned, else false.
//    every: Same principle as `some`, but to return true, the function needs to
//           return true for all array elements.

// 20.
names.some(n => n.length > 7)

// 21.
countries.every(n => n.includes('land'))

// 22.   find: Returns the first element that suffices the function
//  findIndex: Retunrs the index of the first element that suffices the function

// 23.
countries.find(n => n.length == 6)

// 24.
countries.findIndex(n => n == 'Norway')

// 25.
countries.findIndex(n => n == 'Switzerland')


// Level 2
console.log(' - Level 2 - ')

// 1.
products.map(n => n.price).reduce((a, b) => Number(a) + Number(b), 0)

// 2.
products.reduce((a, b) => {
	return typeof b.price == 'number' ?	a += b.price : a
}, 0)

// 3. Just manually load an array from day 6 exercises
//    Generate Object: lands: ... islands: ... ia: ... etc.
function categorizeCountries(x) {
	lands = x.filter(n => n.toLowerCase().includes('land'))
	islands = x.filter(n => n.toLowerCase().includes('island'))
	stan = x.filter(n => n.endsWith('stan'))
	ia = x.filter(n => n.endsWith('ia'))

	return {ia, lands, stan, islands}
}
//categorizeCountries(countries2)

// 4. Use shortened countries list as before in day 8 exercises
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
	{name: 'A'},
	{name: 'a'},
	{name: 'z'},
	{name: 'z'},
	{name: 'Z'},
]

function countryStartingLetters(x) {
	var counter = {}
	x.map(n => n.name[0].toUpperCase()).sort().forEach((char) => {
			if (!counter.hasOwnProperty(char)) {
				counter[char] = 0
			}
			counter[char]++
		}
	)
	return counter
}
console.log(countryStartingLetters(countriesShortened))

// 5.
function getFirstTwoCountries(x) {
	return x.slice(0, 2) // get first two countries
}

// 6.
function getLastTwoCountries(x) {
	let len = x.length
	return x.slice(x - 3, x - 1) // get last two `countries`
}

// 7. Sort object by values
let topLetters = countryStartingLetters(countriesShortened)
console.log(Object.entries(topLetters).sort((a, b) => b[1] - a[1]))

// Level 3
console.log(' - Level 3 - ')

// 1. Load countries_data.js manually
/*
countries.sort((a,b) => a.name - b.name)
countries.sort((a, b) => a.capital - b.capital)
countries.sort((a, b) => a.population - b.population)
*/

// 2. Count number of countries that speak the same language
function mostSpokenLanguages(db, number) {
	let lan = {}
	Object.values(db).forEach(x => {
		for(let i = 0; i < x.languages.length; i++) {
			if(!lan.hasOwnProperty(x.languages[i])) {
				lan[x.languages[i]] = 0
			}
			lan[x.languages[i]]++
		}
	}
	)
	lan = Object.entries(lan).sort((a, b) => b[1] - a[1])
	return lan.slice(0, number)
}
//mostSpokenLanguages(countries, 3)
//mostSpokenLanguages(countries, 10)

// 3. Sort the countries db by population, return a slice of it
function mostPopulatedCountries(db, number) {
	let tmp = Object.values(db).sort((a,b) => b.population - a.population)
	let list = []
	for (let i = 0; i < number; i++) {
		list.push({country: tmp[i].name, population: tmp[i].population})
	}
	return list
}
//mostPopulatedCountries(countries,3)
//mostPopulatedCountries(countries,10)

// 4.
const ages = [
	31, 26, 34, 37, 27, 26, 32, 32, 26,
	27, 27, 24, 32, 33, 27, 25, 26, 38,
	37, 31, 34, 24, 33, 29, 26
]

statistics = {
	data: ages,
	count() {
		return this.data.length
	},
	sum() {
		return this.data.reduce((a,b) => a + b, 0)
	},
	min() {
		return Math.min(...this.data)
	},
	max() {
		return Math.max(...this.data)
	},
	range() {
		return this.max() - this.min()
	},
	mean() {
		return Math.round(this.sum() / this.count())
	},
	median() {
		let dat = this.data.sort()
		let len = this.count()

		if(len % 2) {
			return dat[Math.floor(len / 2)]
		} else {
			return (dat[len / 2 - 1] + dat[len / 2]) / 2
		}
	},
	mode() {
		let obj = this.data.reduce((u, v) => {
			u[v] = (u[v] || 0) + 1
			return u
		}, {})
		let tmp = Object.entries(obj).sort((a, b) => b[1] - a[1])[0]
		return {mode: +tmp[0], count: tmp[1]}
	},
	var() {
		let average = this.mean()
		let squareDiffs = this.data.map((value) => {
			let diff = value - average
			return diff * diff
		})
		return squareDiffs.reduce((a,b) => a + b, 0) / squareDiffs.length
	},
	std() {
		return Math.sqrt(this.var()).toFixed(2)
	},
	freqDist() {
		let obj = this.data.reduce((u, v) => {
			u[v] = (u[v] || 0) + 1
			return u
		}, {})
		return Object.entries(obj).sort((a, b) => b[1] - a[1])
		//return `asdf`
	},
	describe() { // Output of objects need to be fixed fre freqDist method
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
