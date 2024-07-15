
const marvelHeroes = ["thor", "ironman", "spiderman"]
const dcHeroes = ["superman", "flash", "batman"]


// // PUSH METHOD
// marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes)


// CONCAT METHOD
const allHeroes = marvelHeroes.concat(dcHeroes)

// console.log(allHeroes)


// SPREAD METHOD
const newHeroes = [...marvelHeroes, ...dcHeroes]

// console.log(newHeroes)


// FLAT METHOD

const numArr = [1,2,3,[4,5,7],[2,5,[3,4,6]]] 

const flatArr = numArr.flat(Infinity)
// console.log(flatArr)


// // Array.isArray METHOD - This method tells that this is an array or not.

// console.log(Array.isArray("deepak"));


// // Array.from - This methods converts a string into an array : 

// console.log(Array.from("deepak"))


// Array.of - This make a set of array : 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));