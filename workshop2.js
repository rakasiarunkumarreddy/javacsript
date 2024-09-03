// 1. Uppercase
//     - Question: Write a function that takes an array of strings as input and returns a new array with all strings converted to uppercase.
//     - Hints: Use the toUpperCase() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abc", "def"]
//     - Output Test Cases: ["HELLO", "WORLD", "ABC"], ["XYZ", "ABC", "DEF"]

// function upperCase(arr){
//     let z=arr.map((x)=> x.toUpperCase())
//     console.log(z)
// }
// let arr1=["hello", "world", "abc"]
// let arr2=["xyz", "abc", "def"]
// upperCase(arr1)
// upperCase(arr2)


// 2. Substring
//     - Question: Write a function that takes an array of strings as input and returns a new array with the first 3 characters of each string.
//     - Hints: Use the substring() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abcdef"]
//     - Output Test Cases: ["hel", "wor", "abc"], ["xyz", "abc"]

// function sub(arr){
//     z=arr.map((x)=>x.substring(0,3))
//     console.log(z)
// }
// let arr1=["hello", "world", "abc"]
// let arr2= ["xyz", "abcdef"]
// sub(arr1)
// sub(arr2)

// 3. Replace
//     - Question: Write a function that takes an array of strings as input and returns a new array with all occurrences of "o" replaced with "0".
//     - Hints: Use the replace() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "foo", "bar"]
//     - Output Test Cases: ["hell0", "w0rld", "abc"], ["xyz", "f00", "bar"]

// function replace(arr){
// z=arr.map((x)=>x.replace("o",0))
// console.log(z)
// }
// let arr1=["hello", "world", "abc"]
// let arr2=["xyz", "foo", "bar"]
// replace(arr1)
// replace(arr2)

// 4. Split
//     - Question: Write a function that takes an array of strings as input and returns a new array with each string split into words.
//     - Hints: Use the split() method.
//     - Input Test Cases: ["hello-world", "abc-def"], ["xyz-abc-def"]
//     - Output Test Cases: ["hello", "world", "abc", "def"], ["xyz", "abc", "def"]

// function splt(arr){
// z=arr.flatMap((x)=>x.split("-"))
// console.log(z)
// }
// let arr1=["hello-world", "abc-def"]
// splt(arr1)



// 5. Filter
//     - Question: Write a function that takes an array of strings as input and returns a new array with only the strings longer than 5 characters.
//     - Hints: Use the filter() method.
//     - Input Test Cases: ["hello", "world", "abc", "defghi"], ["xyz", "abcdef"]
//     - Output Test Cases: ["defghi"], ["abcdef"]

// let filter=(arr)=>{
//     z=arr.filter((x)=>x.length>5)
// console.log(z)
// }
// let arr1=["hello", "world", "abc", "defghi"]
// filter(arr1)
// filter(["xyz", "abcdef"])

// 6.Map
//     - Question: Write a function that takes an array of strings as input and returns a new array with all strings converted to uppercase and "!" appended.
//     - Hints: Use the map() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abc"]
//     - Output Test Cases: ["HELLO!", "WORLD!", "ABC!"], ["XYZ!", "ABC!"]

// let filter=(arr)=>{
//     z=arr.map((x)=>x.toUpperCase()+"!")
// console.log(z)
// }
// let arr1=["hello", "world", "abc"]
// filter(arr1)
// filter(["xyz", "abcdef"])

// 7.Find
//     - Question: Write a function that takes an array of strings as input and returns the first string containing "o".
//     - Hints: Use the find() method.
//     - Input Test Cases: ["hello", "world", "abc", "defghi"], ["xyz", "foo", "bar"]
//     - Output Test Cases: "world", "foo"

// let filter=(arr)=>{
//     z=arr.find((x)=>x.includes("o"))
// console.log(z)
// }
// let arr1=["hello", "world", "abc"]
// filter(arr1)
// filter(["xyz", "foo", "bar"])

// 8.Join
//     - Question: Write a function that takes an array of strings as input and returns a new string with all strings joined by commas.
//     - Hints: Use the join() method.
//     - Input Test Cases: ["hello", "world", "abc"], ["xyz", "abc"]
//     - Output Test Cases: "hello,world,abc", "xyz,abc"


let filter=(arr)=>{
let z=arr.join(",")
    console.log(z)
}
let arr1=["hello", "world", "abc"]
filter(arr1)
filter(["xyz", "foo", "bar"])
