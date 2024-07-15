const myObject = {
    js : 'Javascript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift by Apple'
}

for (const key in myObject){
    // console.log(`${key} is the shortcut key of ${myObject[key]}`)
}


const programming = ["js", "c++", "c", "html", "css", "py"];

for (const key in programming){
    // console.log(key);
}


const map = new Map();

map.set('In, "India')
map.set('USA', "United States of America")
map.set('Fr', "France")


for (const key in map) {
    console.log(key);
}