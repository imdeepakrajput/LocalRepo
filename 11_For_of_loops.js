

const greetings = "Hello World"

for (const greet of greetings) {
    // console.log(greet);
}


const myArray = ["deepak", "sandeep", "ravi", "shikhar", "hululu"];

for (const arr of myArray){
    // console.log(arr);
}


const map = new Map()

map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR', "FRANCE")
map.set('P', "PARIS")
map.set('IN', "INDIA")         // It doesn't prints repeated values.

// console.log(map)

for (const [key, value] of map){
    // console.log(key, ':-', value);
}

