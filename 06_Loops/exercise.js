// Day 6: Exercises

const countries = [
	'Albania',
	'Bolivia',
	'Canada',
	'Denmark',
	'Ethiopia',
	'Finland',
	'Germany',
	'Hungary',
	'Ireland',
	'Japan',
	'Kenya'
]

const webTechs = [
	'HTML',
	'CSS',
	'JavaScript',
	'React',
	'Redux',
	'Node',
	'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// Level 1
console.log(' - Level 1 - ')

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
	console.log(i)
}
i = 0
while (i <= 10) {
	console.log(i)
	i++
}
i = 0
do {
	console.log(i)
	i++
} while (i <= 10)

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
	console.log(i)
}
i = 10
while (i >= 0) {
	console.log(i)
	i--
}
i = 10
do {
	console.log(i)
	i--
} while (i >= 0)

// 3. Iterate 0 to n using for loop
n = 1
for (let i = 0; i <= n; i++) {
	console.log(i)
}

// 4. Increment string size with character '#'
string = ''
for (let i = 0; i < 7; i++) {
	console.log(string += '#')
}
delete string

// 5. Loop to print out equations
for (let i = 0; i <= 10; i++) {
	console.log(`${i} x ${i} = ${i * i}`)
}

// 6. Another pattern
console.log('i\ti^2\ti^3')
for (let i = 0; i <= 10; i++) {
	console.log(`${i}\t${i*i}\t${i*i*i}`)
}

// 7. Print only even numbers from 0 to 100
for (let i = 2; i <= 100; i += 2) {
	console.log(i)
}

// 8. Print only odd numbers from 0 to 100
for (let i = 1; i <= 99; i += 2) {
	console.log(i)
}

// 9. Print all prime numbers from 0 to 100, brute force solving
for (i = 2; i <= 97; i++) {
	for (j = 2; j <= 97; j++) {
		if(i % j == 0) break;
	}
	if (i == j) console.log(i);
}
delete i; delete j

// 10. Calculate the sum from 0 to 100 and print it.
//     Just calculating the sum of a series of integers
function int_sum(a, b) {
	if (a - b <= 0) n = b - a + 1
	else if (b < a) n = a - b + 1
	else n = b - 1
	return console.log(`The sum of all numbers from ${a} to ${b} is ${n*(a+b)/2}.`)
}
int_sum(0, 100) // ok..
int_sum(1, 1000) // yes..
int_sum(-3, 4) // not sure..
int_sum(4, -3) // ..yet
int_sum(-0, 0) // so far okay idk, lel.

// 11.
u = 0; v = 0
for (let i = 2; i <= 100; i += 2) {
	u += i
}
for (let i = 1; i <= 99; i += 2) {
	v += i
}
console.log(`The sum of all evens from 0 to 100 is ${u}. And the sum of all odds from 0 to 100 is ${v}.`); delete u; delete v

// 12. Print the result from before just in an array?
//     Funny. Anyway. Let's try again.
u = 0; v = 0
for (let i = 0; i <= 100; i++) {
	if (i % 2 == 0) u += i
	else v += i
}
console.log([u, v]); delete u; delete v

// 13. Random number generator for an array.
//     Didn't we do that already on Day 5?
const array1 = Array(5)
	.fill()
	.map(() => Math.floor(Math.random() * 10 + 1))
console.log(array1)

// Alternatively:
const array2 = Array(5)
for (let i = 0; i < 5; i++) {
	array2[i] = Math.floor(Math.random() * 10 + 1)
}
console.log(array2)

// 14. Certainly... how about this:
const array3 = Array(5)
for (let i = 0; i < 5; i++) {
	do {
		unique_random = Math.floor(Math.random() * 10 + 1)
	} while (array3.includes(unique_random))
	array3[i] = unique_random
}
console.log(array3)

// 15. 6-char random string from selection of chars
const chars = '▓░'
const charsLength = chars.length
string = ''
for (let i = 0; i < 5; i++) {
	string += chars.charAt(Math.floor(Math.random() * charsLength))
}
console.log(string); delete string


// Level 2
console.log(' - Level 2 - ')

// 1. Another random string generator varying in length
string = ''
const rng = Math.floor(Math.random() * 2049)
for (let i = 0; i < rng; i++) {
	string += chars.charAt(Math.floor(Math.random() * charsLength))
}
console.log(string); delete string
console.log('Does it look random?')

// 2. Generate random hex color codes
console.log('Let\'s generate some randonm hex color codes...')
do {
	hex = Math.floor(Math.random()*5+16777211).toString(16)
	console.log(`#${hex}`)
} while (!(hex == 'ffffff'))
console.log(`#${hex}`)

// 3. Generate random rgb color codes
let rgb = []
do {
	rgb.push(Math.floor(Math.random()*256))
} while (rgb[2] == undefined)
console.log(`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`)

// 4. All elements in array to uppercase
console.log(countries.map(x => x.toUpperCase()))

// 5. Get length of each array element
console.log(countries.map(x => x.length))

// 6.
console.log(countries.map(x => [ x, x.slice(0, 3).toUpperCase(), x.length]))

// 7. Loop through array to check if element includes 'land'
const lands = countries.filter(x => { if (x.includes('land')) return x })
console.log(lands)

// 8. Print elements ending with 'ia' and 'ai' in seperate arrays, if latter
//    elements are not found, log 'These countries have no "ia" ending'.
const iacountries = new Array()
const aicountries = new Array()
for (const x of countries) {
	if (x.endsWith('ia')) iacountries.push(x)
	if (x.endsWith('ai')) aicountries.push(x)
}
console.log(iacountries)
if (aicountries.length == 0) console.log('These countries have no "ia" ending')

// 9.
console.log(countries.reduce((u, v) => {return u.length > v.length ? u : v }))

// 10.
console.log(countries.filter(u => { return u.length == 5 }))

// 11.
console.log(webTechs.reduce((u, v) => {return u.length > v.length ? u : v }))

// 12.
console.log(webTechs.map(x => [ x, x.length]))

// 13.
let mernArray = ['MongoDB', 'Express', 'React', 'Node']
let mern = ''
for (const x of mernArray) {
	mern += x.slice(0, 1)
}
console.log(mern)

// 14.
for (const x of webTechs) {
	console.log(x)
}

// 15.
let fruits = ['banana', 'orange', 'mango', 'lemon']
let revFruits = [];

for (let i = fruits.length - 1; i >= 0; i--) {
	revFruits.push(fruits[i])
}
console.log(revFruits)

// 16. Iterate through a nested array
const fullStack = [
	['HTML', 'CSS', 'JS', 'React'],
	['Node', 'Express', 'MongoDB']
]

for (let i = 0; i < fullStack.length; i++) {
	for (let j = 0; j < fullStack[i].length; j++) {
		console.log(fullStack[i][j])
	}
}


// Level 3
console.log(' - Level 3 - ')

// 1. Structured Clone to copy the countries array
// 2. + sort the clonedCountries array into sortedCountries array
const clonedCountries = structuredClone(countries)
const sortedCountries = clonedCountries.sort()
console.log(sortedCountries)
// 3. sort webTechs and mernStack
webTechs.sort(); console.log(webTechs)
mernStack.sort(); console.log(mernStack)


const countries2 = [
	'Afghanistan',
	'Albania',
	'Algeria',
	'Andorra',
	'Angola',
	'Antigua and Barbuda',
	'Argentina',
	'Armenia',
	'Australia',
	'Austria',
	'Azerbaijan',
	'Bahamas',
	'Bahrain',
	'Bangladesh',
	'Barbados',
	'Belarus',
	'Belgium',
	'Belize',
	'Benin',
	'Bhutan',
	'Bolivia',
	'Bosnia and Herzegovina',
	'Botswana',
	'Brazil',
	'Brunei',
	'Bulgaria',
	'Burkina Faso',
	'Burundi',
	'Cambodia',
	'Cameroon',
	'Canada',
	'Cape Verde',
	'Central African Republic',
	'Chad',
	'Chile',
	'China',
	'Colombi',
	'Comoros',
	'Congo (Brazzaville)',
	'Congo',
	'Costa Rica',
	"Cote d'Ivoire",
	'Croatia',
	'Cuba',
	'Cyprus',
	'Czech Republic',
	'Denmark',
	'Djibouti',
	'Dominica',
	'Dominican Republic',
	'East Timor (Timor Timur)',
	'Ecuador',
	'Egypt',
	'El Salvador',
	'Equatorial Guinea',
	'Eritrea',
	'Estonia',
	'Ethiopia',
	'Fiji',
	'Finland',
	'France',
	'Gabon',
	'Gambia, The',
	'Georgia',
	'Germany',
	'Ghana',
	'Greece',
	'Grenada',
	'Guatemala',
	'Guinea',
	'Guinea-Bissau',
	'Guyana',
	'Haiti',
	'Honduras',
	'Hungary',
	'Iceland',
	'India',
	'Indonesia',
	'Iran',
	'Iraq',
	'Ireland',
	'Israel',
	'Italy',
	'Jamaica',
	'Japan',
	'Jordan',
	'Kazakhstan',
	'Kenya',
	'Kiribati',
	'Korea, North',
	'Korea, South',
	'Kuwait',
	'Kyrgyzstan',
	'Laos',
	'Latvia',
	'Lebanon',
	'Lesotho',
	'Liberia',
	'Libya',
	'Liechtenstein',
	'Lithuania',
	'Luxembourg',
	'Macedonia',
	'Madagascar',
	'Malawi',
	'Malaysia',
	'Maldives',
	'Mali',
	'Malta',
	'Marshall Islands',
	'Mauritania',
	'Mauritius',
	'Mexico',
	'Micronesia',
	'Moldova',
	'Monaco',
	'Mongolia',
	'Morocco',
	'Mozambique',
	'Myanmar',
	'Namibia',
	'Nauru',
	'Nepal',
	'Netherlands',
	'New Zealand',
	'Nicaragua',
	'Niger',
	'Nigeria',
	'Norway',
	'Oman',
	'Pakistan',
	'Palau',
	'Panama',
	'Papua New Guinea',
	'Paraguay',
	'Peru',
	'Philippines',
	'Poland',
	'Portugal',
	'Qatar',
	'Romania',
	'Russia',
	'Rwanda',
	'Saint Kitts and Nevis',
	'Saint Lucia',
	'Saint Vincent',
	'Samoa',
	'San Marino',
	'Sao Tome and Principe',
	'Saudi Arabia',
	'Senegal',
	'Serbia and Montenegro',
	'Seychelles',
	'Sierra Leone',
	'Singapore',
	'Slovakia',
	'Slovenia',
	'Solomon Islands',
	'Somalia',
	'South Africa',
	'Spain',
	'Sri Lanka',
	'Sudan',
	'Suriname',
	'Swaziland',
	'Sweden',
	'Switzerland',
	'Syria',
	'Taiwan',
	'Tajikistan',
	'Tanzania',
	'Thailand',
	'Togo',
	'Tonga',
	'Trinidad and Tobago',
	'Tunisia',
	'Turkey',
	'Turkmenistan',
	'Tuvalu',
	'Uganda',
	'Ukraine',
	'United Arab Emirates',
	'United Kingdom',
	'United States',
	'Uruguay',
	'Uzbekistan',
	'Vanuatu',
	'Vatican City',
	'Venezuela',
	'Vietnam',
	'Yemen',
	'Zambia',
	'Zimbabwe'
]
// 4. filter for 'land' in elements of countries2 array, compare l.209
const lands2 = countries2.filter(x => { if (x.includes('land')) return x })
console.log(lands2)

// 5. already done l.224
console.log(countries2.reduce((u, v) => {return u.length > v.length ? u : v }))

// 6. same as above in exercise 4?

// 7. compare l.227
console.log(countries2.filter(u => { return u.length == 4 }))
// 8.
console.log(countries2.filter(u => { return u.length > 1 }))
// 9.
console.log(countries.map(x => x.toUpperCase()).reverse())

/* Note: Functions were intentionally used,
although they have not yet been introduced */