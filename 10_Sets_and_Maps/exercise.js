// Day 10: Exercises

// Level 1
console.log(' - Level 1 - ')

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// 1-4.
c = new Set()

for (let i = 0; i <= 10; i++) {
	c.add(i)
}

c.delete(0)
c.clear()


// 5.
let array = ['TSLA', 'NVDA', 'AAPL', 'AMZN', 'META', 'MSFT']
array.forEach(element => c.add(element))

// 6.
let mapOfCountries = new Map()
countries.forEach(element => mapOfCountries.set(element, element.length))


// Level 2
console.log(' - Level 2 - ')

// 1. D = A ∪ B
let d = [...a, ...b]
let D = new Set(d)

// 2. E = A ∩ B
let A = new Set(a)
let B = new Set(b)
let E = new Set([...A].filter(x => B.has(x)))

// 3. F = A \ B, G = B \ A
let F = new Set(a.filter((num) => !B.has(num)))
let G = new Set(b.filter((num) => !A.has(num)))


// Level 3
console.log(' - Level 3 - ')


// 1. Load countries object for getting all unique languages
/* let H = new Set()
countries.forEach(element => element.languages.forEach(x => H.add(x)))
console.log(`There are ${H.size} languages in the countries object.`)
--> There are 112 languages in the countries object.
*/
// 2. See Day 9 Exercises