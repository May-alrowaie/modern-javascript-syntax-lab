const array1 = ["vanilla", "chocolate", "strawberry"]

const array2 = array1.map((currentElement) => {
  return currentElement + " ice cream"
})

console.log(array2) // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']

//////////////////////////////////////////////////////////////////////////////////////////////
//Exercise 1: Applying Array.prototype.map()

// Use `.map()` to iterate over the following array:

const nums1 = [13, 87, 2, 89, 12, 4, 90, 63]

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const nums2 = nums1.map((currentElement) => {
  return currentElement * 2
})

console.log(nums2)

//////////////////////////////////////////////////////////////////////////////////////////////
const petsArray = ["Rover", "Snuffles", "Toto", "Spot"]

const [firstPet, secondPet] = petsArray

console.log(firstPet) // 'Rover'
console.log(secondPet) // 'Snuffles'

// Equivalent in traditional bracket notation:
console.log(petsArray[0]) // 'Rover'
console.log(petsArray[1]) // 'Snuffles'
///////////////////////////////////////////////////////////////////////////////////////////////
//Exercise 2: Array destructuring

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"]

// Your code here
const [firstPizzaToping, secondPizzaToping] = pizzaArray

console.log(firstPizzaToping) // Pineapple
console.log(secondPizzaToping) // Olives

// Equivalent in traditional bracket notation:
console.log(pizzaArray[0]) // Pineapple
console.log(pizzaArray[1]) // Olives
///////////////////////////////////////////////////////////////////////////////////////////////

const person = {
  name: "Alex",
  role: "Software Engineer",
}

// Object destructuring:
const { name, role } = person

console.log(name) // 'Alex'
console.log(role) // 'Software Engineer'

// Equivalent in traditional dot notation:
console.log(person.name) // 'Alex'
console.log(person.role) // 'Software Engineer'
///////////////////////////////////////////////////////////////////////////////////////////////

//Exercise 3: Destructuring objects
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: "Audi",
  model: "q5",
}

// Your code here
console.log(make) // 'Audi'
console.log(model) // 'q5'

console.log(car.make) // 'Audi'
console.log(car.model) // 'q5'
///////////////////////////////////////////////////////////////////////////////////////////////

const originalArray = [1, 2, 3]
const duplicateArray = [...originalArray]

console.log(duplicateArray) // [1, 2, 3]
///////////////////////////////////////////////
const originalArray = [1, 2, 3]
const referenceArray = originalArray // referenceArray is now a reference to originalArray

referenceArray.push(4) // Modifying referenceArray also modifies originalArray
console.log(originalArray) // [1, 2, 3, 4]
//////////////////////////////////////////////////////////
const fruits = ["apple", "orange", "banana"]
const vegetables = ["broccoli", "carrot", "spinach"]

const fruitsAndVegetables = [...fruits, ...vegetables]

console.log(fruitsAndVegetables) // ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']
//////////////////////////////////////////////////////////
///Exercise 4: Applying the spread operator on arrays

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"]

// Your code here
const controversialPizzaToppings = [...pizzaToppings]

console.log(controversialPizzaToppings)
///////////////////////////////////////////////////////////////////////////////
const originalObject = {
  foo: "Hello",
  bar: 100,
}

const clonedObject = { ...originalObject }
console.log("Clone: ", clonedObject) // { foo: 'Hello', bar: 100 }
////////////////////
const originalObject = {
  foo: "Hello",
  bar: 100,
}

const clonedObject = originalObject
clonedObject.foo = "Goodbye"

console.log(originalObject) // { foo: 'Goodbye', bar: 100 }
//////////////////////////////////////////////////////
const originalObject = {
  foo: "Hello",
  bar: 100,
}

// Copy the properties of originalObject:
const clonedObject = { ...originalObject }

// Update the properties of clonedObject:
clonedObject.foo = "Goodbye"
clonedObject.bar = 0

console.log("Original: ", originalObject) // { foo: 'Hello', bar: 100 }
console.log("Clone: ", clonedObject) // { foo: 'Goodbye', bar: 0 }
////////////////////////////////////////////////////////////

// Duplicate the following object and spread its values into a new variable `myCar`.

const car = {
  make: "Audi",
  model: "q5",
}

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here

const myCar = { ...car }

myCar.model = "q7"

console.log("Original ", car) // { make: 'Audi',  model: 'q5' }
console.log("Clone:", myCar) //  { make: 'Audi',  model: 'q7' }
////////////////////////////////////////////////////////////
const fruitInventory = {
  apples: 2,
  oranges: 4,
}

const selectedFruit = "apples" // Variable as a dynamic key
const selectedFruitCount = fruitInventory[selectedFruit]

console.log(selectedFruitCount) // 2
///////////////////////////////
const fruitType = "bananas" // Variable as a dynamic key

const fruitInventory = {
  [fruitType]: 5,
}

console.log(fruitInventory) // { bananas: 5 }
///////////////////////////////////////////

///Exercise 6: Dynamic keys in objects

// Create an object named userProfile.
// Define a variable named propertyName and assign a string to it (like a username, age, or email).
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const userProfile = {
  propertyName: "username",
}

const selectedUserProfile = "propertyName" // Variable as a dynamic key
const selectedUserProfileType = userProfile[selectedUserProfile]
console.log(selectedUserProfileType) // username
