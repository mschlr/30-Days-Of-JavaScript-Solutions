function showDateTime() {
	let date = new Date()
	d = date.toLocaleDateString().padStart(10, '0')
	h = date.getHours().toString().padStart(2, '0')
	m = date.getMinutes().toString().padStart(2, '0')

	return `${d} ${h}:${m}`
}

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const chars_l = characters.length
function userIdGenerator() {
	let result = ''
	for(let i = 0; i < 6; i++) {
		result += characters.charAt(Math.floor(Math.random() * chars_l))
	}
	return result
}

function alert(text) {
	throw new Error(text);
}

module.exports = { showDateTime, userIdGenerator, alert }
