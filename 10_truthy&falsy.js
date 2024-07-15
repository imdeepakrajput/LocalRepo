// falsy values


// false, 0, -0, BigInt 0n, "", null, undefined, Nan


// Truthy values : 

// Rest are truthy values. 




// Nullish coelescing Operator ?? : null undefined

// const val1 = undefined ?? null;
// const val1 = null ?? undefined;
const val1 = 4 ?? 7;

console.log(val1);









let totalAmount = 0; 
            while (true) {




                totalAmount += amount;

                let orderAgain = readlineSync.question(`Would you like to order again (yes/no) : \n`)

                if (orderAgain.toLowerCase() === "no"){
                    break;
                }



                console.log(
                    `
                    You have to pay @${totalAmount}Rs. 
                    Thanks for coming - Come Again
                    `
                )