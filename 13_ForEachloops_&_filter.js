const coding = ["js", "ruby", "c++", "c", "python", "java", "html", "css"];


// by normal function declaration 
coding.forEach(function (val) {       //  we use callback function for this foreach loops a,d we don't take the name in the function
    // console.log(val);
})


// by Arrow function declaration 
coding.forEach( (val) => {           // This is using an Arrow function 
    // console.log(val); 
} )


// This function can also print the values of this coding array : 
// function printMe(val) {
//     console.log(val);
// }
// coding.forEach(printMe);    // Here you just have to give the reference of the function you don't have to execute it like this ( printMe() )



// An arrow function has the other acceses also like items, index values, and it also gives the array. 


coding.forEach( (val, index, array) => {
    // console.log(val, index, array);
} )



const myCoding = [
    {
        langaugeName : "Javascript",
        langaugeFileName : "Js"
    },
    {
        langaugeName : "Java",
        langaugeFileName : "Java"
    },
    {
        langaugeName : "Python",
        langaugeFileName : "Py"
    },
    {
        langaugeName : "C",
        langaugeFileName : "C"
    }
]

myCoding.forEach( (item) => {
    // console.log(item.langaugeName)
} )



// ForEach loop doesn't returns the values  :  You can see the below example :  It return undefined, it means it doesn't returns the values. 

const language = ["JS", "JAVA", "PYTHON", "C"]

const value = language.forEach ( (item) => {
    // console.log(item);
    return item
} )

// console.log(value);



// If we want values in return or we want to return the values conditionally :  This is how you can do it :
const arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = arrNums.filter( (nums) => {
    return nums > 4} )                         // Note : If you don't use curly braces in callback function( In Arrow function) so you don't need to write return keyword in the curly braces but if you use curly braces then you'll have to write return in curly braces.
// console.log(newNums);



// We can also do it with ForEach loops : 
const myNums = []

arrNums.forEach( (nums) => {
    if (nums > 4){
        myNums.push(nums)
    }
} )
// console.log(myNums);




// Here is a example for uses of "filter" :


const books = [
    {title : "book1", genre : "Fiction", publish : 1981, edition : 2004},
    {title : "book2", genre : "Non-Fiction", publish : 1992, edition : 2008},
    {title : "book3", genre : "History", publish : 1999, edition : 2007},
    {title : "book4", genre : "Non-Fiction", publish : 1989, edition : 2010},
    {title : "book5", genre : "Science", publish : 2009, edition : 2014},
    {title : "book6", genre : "Fiction", publish : 1987, edition : 2010},
    {title : "book6", genre : "History", publish : 1986, edition : 1996},
    {title : "book7", genre : "Science", publish : 1981, edition : 1986}
];

let userBooks = books.filter( (bk) => bk.genre === "History" )
// console.log(userBooks);

userBooks = books.filter( (bk) => {
    return bk.publish > 1990 && bk.edition > 2000
} )
console.log(userBooks);