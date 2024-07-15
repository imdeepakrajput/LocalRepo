
// SINGLETON OBJECT

const tinderUser = new Object()
// const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "deepak"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


// NESTING 


const regularUser = {
    email : "deepak@microsoft.com",
    fullname : {
        userFullName : {
            firstName : "deepakrajput",
            lastName : "Rajput"
        }

    }
}

// console.log(regularUser.fullname.userFullName.lastName)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1,obj2}                     // This is not the right way to add two objects in a variable

const obj3 = Object.assign({}, obj1, obj2)

// console.log(obj3)



const user = [
    {
        id : 1,
        email : "deepakrajput@gmail.com"
    },
    {
        id : 123,
        email : "deepak@microsoft.com",
        userName : "deepak"
    },
    {
        id : 432,
        email : "rajput@google.com",
        userName : "rajput18"
    }
]


user[1].email                                 // This is how you can access the keys of value.
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));          // This is how you can access the keys of any object.
// console.log(Object.values(tinderUser));        // This is how you can access the values of any object. 
// console.log(Object.entries(user))              // This is how you will get the key and value in an array format. 
// console.log(user.hasOwnProperty(1))            // Determines whether an object has a property with the specified name.



const course = {
    courseName : "JS in Hindi",
    price : "234",
    courseInstructor : "deepakrajput"
}

course.courseInstructor

const {courseInstructor : instructor} = course      // With this method you can give another name to key of the object and then you can access with that name.
const {price : p} = course

console.log(instructor);
console.log(p);