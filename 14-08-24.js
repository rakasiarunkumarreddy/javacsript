// TASK : 
// 1.Uppercase first letter

// - Input: "hello"
// - Output: "Hello"

// - Input: "world"
// - Output: "World"
// hint:charAt(), toUpperCase(), slice(), concat()


// let str="hello"
// let m=str.slice(1,5)
// console.log(m)
// let z=str.charAt(0).toUpperCase()
// console.log(z)
// let n=z.concat(m)
// console.log(n)


// 2.Remove vowels

// - Input: "hello"
// - Output: "hll"

// - Input: "world"
// - Output: "wrld"

// using replace().

// let str="hello"
// function remove(str){
//     let z=str.replace(/[aeiou]/g,"")
// console.log(z)
// }
// remove(str)
// remove("world")

//Global Flag g: The g flag is used to ensure that all occurrences of the vowels in the string are replaced, not just the first one.