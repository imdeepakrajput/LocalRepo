//  THIS IS HOW THE SCOPE WORKS : 

function one(){
    const userName = "deepak"

    function two(){
        const website = "youtube"
        // console.log(userName)
    }
    // console.log(website)

    two()
}

one()



if (true) {
    const userName = "deepak"
    if (userName === "deepak") {
        const website = " youtube"
        // console.log(userName + website)
    }
    // console.log(website)              // This will not execute because it is  out of the scope of local scope. 
}
// console.log(userName)                 // This will also not excute because it is also out of the scope local scope.



//  HOISTING : 

addOne(6)
function addOne(num){                     // We can access a it before the function declaration if we declare it like this.
    return num + 1
}



addTwo(7)
const addTwo = function(num1){            // We cannot access a function before initialiazation if we declare it like this.
    return num1 + 2
}
