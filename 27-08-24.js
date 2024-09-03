// task:
// -----
// 1:
// Use Object.keys() and Object.values() to create a new object with only the keys and values that meet a certain condition.
// Example:
// const obj = { a: 1, b: 2, c: 3, d: 4 };
// Create a new object with only the keys and values where the value is greater than 2
// Output: { c: 3, d: 4 }

// const obj = { a: 1, b: 2, c: 3, d: 4 };
// const filteredObj = Object.fromEntries(
//   Object.entries(obj).filter(([key, value]) => value > 2)
// );
// console.log(filteredObj);

// entries convert a key and value into array   {a:1}=>[a,1]
// fromEntries converts array into objects     [a,1]=>{a:1}



// 2:
// Use Object.assign() to merge two objects and create a new object with the combined properties.
// Example:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// Create a new object with the combined properties of obj1 and obj2
// Output: { a: 1, b: 2, c: 3, d: 4 }

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// let z=Object.assign(obj1,obj2)
// console.log(z)


// 3:
// Use Array.reduce() to sum up the values of an object's properties.
// Example:
// const obj = { a: 1, b: 2, c: 3, d: 4 };
// Sum up the values of obj's properties using reduce();
// Output: 10

// const obj = { a: 1, b: 2, c: 3, d: 4 };
// let z=Object.values(obj).reduce((acc,sum)=>acc+sum)
// console.log(z)





// 4. scenario explained for array of objects using hasownproperty.

// hasOwnProperty(prop)
// Prop:The String name or Symbol of the property to test.
// Returns true if the object has the specified property as own property; false otherwise.

const object1 = {};
object1.property1 = 42;

// console.log(object1.hasOwnProperty('property1'));
// Expected output: true

// console.log(object1.hasOwnProperty('toString'));
// Expected output: false

// console.log(object1.hasOwnProperty('hasOwnProperty'));
// Expected output: false


// The hasOwnProperty() method returns true if the specified property is a direct property of the object — even if the value is null or undefined. The method returns false if the property is inherited, or has not been declared at all. Unlike the in operator, this method does not check for the specified property in the object's prototype chain.

// Array is an Object, so you can use hasOwnProperty() method to check whether an index exists:

const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
fruits.hasOwnProperty(3); // true ('Orange')
fruits.hasOwnProperty(4); // false - not defined































// The Object.fromEntries() method in JavaScript is used to transform a list of key-value pairs into an object. This method is particularly useful when you have data in the form of an array of arrays (each containing two elements: a key and a value) and you want to convert it into an object.

// How Object.fromEntries() Works
// Input: An iterable, such as an array of arrays, where each inner array contains exactly two elements: the first element is the key, and the second element is the value.
// Output: An object composed of the key-value pairs.
// Syntax
// javascript
// Copy code
// Object.fromEntries(iterable);
// Example 1: Converting an Array of Arrays to an Object
// javascript
// Copy code
// const entries = [
//   ['name', 'Arun'],
//   ['age', 22],
//   ['location', 'Chakalpalle']
// ];

// const obj = Object.fromEntries(entries);

// console.log(obj);
// Output:

// javascript
// Copy code
// {
//   name: 'Arun',
//   age: 22,
//   location: 'Chakalpalle'
// }
// Example 2: Converting a Map to an Object
// Object.fromEntries() can also be used to convert a Map into an object, since Map entries are also key-value pairs.

// javascript
// Copy code
// const map = new Map([
//   ['id', 1],
//   ['title', 'Frontend Developer'],
//   ['isActive', true]
// ]);

// const obj = Object.fromEntries(map);

// console.log(obj);
// Output:

// javascript
// Copy code
// {
//   id: 1,
//   title: 'Frontend Developer',
//   isActive: true
// }
// Example 3: Filtering an Object's Entries
// Sometimes, you might need to filter an object's entries and then convert them back to an object. You can use Object.entries() to get the entries, filter them, and then use Object.fromEntries() to convert them back.

// javascript
// Copy code
// const originalObj = {
//   apple: 5,
//   banana: 0,
//   cherry: 10
// };

// const filteredEntries = Object.entries(originalObj).filter(([key, value]) => value > 0);

// const filteredObj = Object.fromEntries(filteredEntries);

// console.log(filteredObj);
// Output:

// javascript
// Copy code
// {
//   apple: 5,
//   cherry: 10
// }