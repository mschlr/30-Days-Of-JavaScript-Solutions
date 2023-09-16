// Day 2: Exercises

// Level 1

// 1. Declare a variable named challenge and assign it to
//    an initial value '30 Days Of JavaScript'.
let challenge = '30 Days of JavaScript'
console.log(challenge) // 2. Print the string on the browser console using console.log()
console.log(challenge.length) // 3. String length method
console.log(challenge.toUpperCase()) // ...
console.log(challenge.toLowerCase())
console.log(challenge.substring(0,2))
console.log(challenge.substring(3))
console.log(challenge.includes("Script"))
console.log(challenge.split())
console.log(challenge.split(' ')) // 10.

let tech = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(tech.split(', ')) // 11.

console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a')) // 16.

let because = 'You cannot end a sentence with because because because is a conjunction'
console.log(because.indexOf('because'))
console.log(because.lastIndexOf('because'))
console.log(because.search('because')) // 19.

let trim = ' 30 Days Of JavaScript '
console.log(trim)
console.log(trim.trim()) // 20.

console.log(challenge.startsWith(30))
console.log(challenge.endsWith('JavaScript'))

console.log(challenge.match(/a/g))

let si = challenge.indexOf('Java')
let s1 = challenge.slice(0, si)
let s2 = challenge.slice(si)
console.log(s1.concat(s2)) // 24.
console.log(challenge.repeat(2)) // 25.


// Level 2
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."')

let ten = '10'
console.log(ten === 10)
console.log(+ten === 10)

let float = '9.8'
console.log(float === 10)
console.log(Math.ceil(float) === 10)

// 5. Check if 'on' is found in both python and jargon
let j = 'jargon'
let p = 'python'
console.log(j.includes('on') && p.includes('on'))

// 6. Check if jargon is in the sentence.
let jsent = 'I hope this course is not full of jargon.'
console.log(`Is jargon found in '${jsent}'?`, jsent.includes(j))

// 7. Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 101))
// 8. Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * 51) + 50)
// 9. Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 256))

let jav = 'Javascript'
console.log(jav[Math.floor(Math.random() * (jav.length + 1))]) // 10.

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125\n')

let subs = 'You cannot end a sentence with because because because is a conjunction'
console.log(subs.substring(subs.indexOf('because'), subs.lastIndexOf('because') + 7)) // 12.


// Level 3
let lovestring = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(lovestring.match(/love/gi).length)

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
res = sentence.match(/[^%$&;#@]+/g).join("")

const income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
console.log(income.match(/\d+/g).map(Number).reduce((a, n) => a + n, 0))
