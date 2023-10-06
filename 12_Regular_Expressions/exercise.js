// Day 12: Exercises

// Level 1
console.log(' - Level 1 - ')

// 1.
const income = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
console.log('Total incomes:', income.match(/\d+/g).map(Number).reduce((a, b) => a + b, 0))

// 2.
const particles = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.'
const xCoords = particles.match(/.\b\d+\b/g).map(Number)
console.log('Maximum Partical Distance is:', Math.max(...xCoords) - Math.min(...xCoords))

// 3. Check if certain string is a valid JavaScript variable
function is_valid_variable(arg) {
	let pattern = /^([A-Za-z_$][A-Za-z_$\d]+)$/
	return (pattern.test(arg))
}


// Level 2
console.log(' - Level 2 - ')

// 1. Function to retrieve ten most frequent words
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

function mostFrequentWords(arr, num) {
	let obj = new Map()
	let words = arr
		.match(/\w+/g)
		.map(x => x.toLowerCase())

	// count word frequency and update map key,value pairs
	for (const x of words) {
		if (obj.has(x)) {
			obj.set(x, obj.get(x)+1)
		 } else {
			obj.set(x, 1)
		 }
	}

	// sort map
	let sortedObj = new Map([...obj.entries()].sort((a,b) => b[1] - a[1]))

	return Array.from(sortedObj).slice(0, num)
}

console.log(mostFrequentWords(paragraph, 3))


// Level 3
console.log(' - Level 3 - ')

sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
res = sentence.match(/[^%$&;#@]+/g).join("")
console.log(mostFrequentWords(res, 1))
