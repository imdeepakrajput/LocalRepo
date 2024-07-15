// SINGLETON
// Object.create

// OBJECT LITERALS 

const mySym = Symbol("key1")

const jsUser = {
    name : "deepak",
    age : 21,
    [mySym] : "myKey1",
    location : "Delhi",
    email : "deepak23@microsoft.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);

console.log(typeof (jsUser.age));   // This is how you can check the type of any key of object.

// jsUser["email"] = "deepak@google.com"     // This is how you can change the value of any key. 
// Object.freeze(jsUser)                     // This is how you can freeze any object. 
// jsUser.email = "deepak@gmail.com"

// console.log(jsUser)
// console.log(jsUser["email"]);


jsUser.greeting = function(){
    console.log("Hello JS user")
}

jsUser.greetingtwo = function(){
    console.log(`Hello JS user ${this.name}`)
}

// console.log(jsUser.greeting())
// console.log(jsUser.greetingtwo())


