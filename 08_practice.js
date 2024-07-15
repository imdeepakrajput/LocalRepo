const newSym = Symbol("key1")

const user = {
    name : "deepak",
    age : 22,
    email : "deepak@gmail.com",
    isLoggedIn : true,
    location : "Delhi",
    lastLoginDays : "Monday, Saturday"
}

console.log(user.email);
console.log(typeof (user.isLoggedIn));
user.email = "rajput@google.com"
console.log(user.email)

console.log((user.name).concat(user.email))
