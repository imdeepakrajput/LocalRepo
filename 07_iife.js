//  Immediately Invoked Function Expressions :  (IIFE)


(function chai(){                       // This is a named IIFE  (A function)
    console.log(`DB CONNECTED`);      
})();


( () => {                                 // This is a simple IIFE  (An arrow function)
    console.log(`DB CONNECTED TWO`);
})();


( (name) => {                                  // This is how you can pass the parameter in the IIFE.
    console.log(`DB CONNECTED TWO ${name}`);
})("deepak")