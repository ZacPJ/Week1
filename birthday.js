let birthday = new Date(2022, 10, 2)
let today = new Date()
diffTime = birthday-today
diffDays = diffTime / (1000 * 3600 * 24)
console.log(`There are ${Math.round(diffDays)} days until my birthday`)