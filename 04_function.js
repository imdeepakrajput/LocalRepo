
//    DO NOT FORGET TO READ THE COMMENTS : 



function sayMyName(){
    console.log("d")
    console.log("e")
    console.log("e")
    console.log("p")
    console.log("a")
    console.log("k")
}

// sayMyName()


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result 
    return number1 + number2                           // You can also do it like this. 
}

const result = addTwoNumbers(2, 3)

// console.log("result :", result);


function loginUserMsg(userName){
    if (userName === undefined){
        console.log("Please enter a Username")
        return 
    }
    return `${userName} just logged in`
}

// console.log(loginUserMsg("deepakrajput"));

// console.log(loginUserMsg())                        //  If you will not pass any argument then this will give you undefined. 



   /* 
   This function will execute "rajput" if you don't give any argument to function.
   It will never return undefined. 
   */

function loginUserMsg1(userName1 = "rajput"){
    if (userName1 === undefined){
        console.log("Please enter a Username")
        return 
    }
    return `${userName1} just logged in`
}

// console.log(loginUserMsg1("deepak"))



// Parameter case - 1 

function calculateCartPrice(...num1){            // Here we are using spread operator (...)
    return num1
}

// console.log(calculateCartPrice(200, 100, 300))



// Parameter case - 2

function calculateCartPrice1(val1, val2, ...num1){            // Here we are using spread operator (...)
    return num1
}

// console.log(calculateCartPrice1(200, 100, 300, 500))           // This will give you the ouput in the form of array except the val1 and val2 



//  This is how you will use object in the function : 


const user = {
    userName : "deepak",
    price : 543
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({                       //  You can also create a object or pass a object like this in the console to get the output : 
    userName : "rajput",
    price : 542
})




// This is how you can use an array in the function : 


const myNewArray = [100, 299, 388, 488]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100, 2000, 399, 499]));      // This is how you can create an array in the console to get the output.