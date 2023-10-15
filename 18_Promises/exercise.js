// Day 18: Exercises


const countriesAPI = 'https://restcountries.com/v3.1/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'


// Level 1

async function fetchCountries(api) {
	try {
		const response = await fetch(api)
		if (!response.ok) {
			throw new Error('Network okay?')
		}
		const countries = await response.json()
		countries.forEach((element, id) => {
			let capital = ''
			if (element.capital) { // Object.keys(element.capital).length == 1
				if (element.capital.length = 1) {
					capital = element.capital
					capital = ' with the capital named ' + capital
				}
			} else if (element.capital == undefined) {
				capital = ''
			} else {
				capital = ' has multiple capitals.'
			}
			console.log(`${id}: ${element.name.common}${capital} has a population of ${element.population} and an area of ${element.area} square kilometers.`)
		});
	} catch (error) {
		console.error('Error:', error)
		throw error
	}
}
fetchCountries(countriesAPI)


// Level 2

async function fetchCats(api) {
	try {
		const response = await fetch(api)
		if (!response.ok) {
			throw new Error('Network okay?')
		}
		const cats = await response.json()
		catNames = []
		cats.forEach(element => catNames.push(element.name))
		return catNames
	} catch (error) {
		console.error('Error:', error)
		throw error
	}
}

async function printCats() {
	await fetchCats(catsAPI)
	console.log(catNames)
}

printCats()


// Level 3

// 1. get average cats weight
// 2. get 10 largest countries
// 3. count total number of languages used as officials