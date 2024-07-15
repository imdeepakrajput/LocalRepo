const user = {
    userName : "deepak",
    price : 432,

    welcomeMessage : function() {
        console.log(`${this.userName}, "Welcome to website"`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.userName = "rajput"
// user.welcomeMessage()

// console.log(this)



// You cannot use "this" in the function as you use it in objects : 
function chai(){
    const userName = "deepak"
    console.log(this.userName)
}

// chai()


const chai1 = () => {
    let userName = "deepak"
    console.log(this)
}

// chai1()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// This is called Implicit return : In this we don't need two write return and we can also remove curly braces.
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)    // You can also put it in the parantheses : 

const addTwo = (user) => ({userName : "deepak"})   // This is how you can return a object in implicit return. 
console.log(addTwo())

