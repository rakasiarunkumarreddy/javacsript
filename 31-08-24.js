// Task 1: Reverse a String ?
//           const inputString = "hello world";
//             Output: "dlrowolleh"

// const inputString = "hello world";
// let reverse=""
// for(i=inputString.length-1;i>=0;i--){
//   reverse+=inputString[i]
// }
// console.log(reverse)


// Task 2: Find the Longest Word in a Sentence ?

// const inputSentence = "This is a sentence with words of varying lengths"; 
// Output: "varying"

// const inputSentence = "This is a sentence with words of varying lengths";
// word=inputSentence.split(" ")
// console.log(word)
// longest=""
// for(i=0;i<word.length;i++){
//   if(word[i].length>longest.length){
//     longest=word[i]
//   }
// }
// console.log(longest)

// Task 3: Count the Occurrences of a Word in a Sentence ?

// const inputSentence = "This sentence repeats the word 'this' twice"; 
// Output: 2

// function countWordOccurrences(sentence, word) {
//   const lowerCaseSentence = sentence.toLowerCase();   
//   const lowerCaseWord = word.toLowerCase();
//   const wordsArray = lowerCaseSentence.split(" ");
//   let count = 0;
//   for (let i = 0; i < wordsArray.length; i++) {
//       if (wordsArray[i] === lowerCaseWord) {
//           count++;
//       }
//   }
//   return count;  
// }
// const inputSentence = "This sentence repeats the word 'this' twice";
// const wordToCount = "this";
// const result = countWordOccurrences(inputSentence, wordToCount);
// console.log(result);  



// Task 4: Capitalize the First Letter of Each Word  ?

// const inputSentence = "this is a sentence with words to capitalize"; 
//  Output: "This Is A Sentence With Words To Capitalize"

// const str="this is a sentence with words to capitalize"
// let arr=str.split(" ")
// let z=arr.map(a=>a.charAt(0).toUpperCase()+a.slice(1))
// console.log(z.join(" "))

// Task 5: Remove Duplicate Elements from an Array ?

// const inputArray = [1, 2, 3, 2, 4, 1];
//  Output: [1, 2, 3, 4]

// const inputArray = [1, 2, 3, 2, 4, 1];
// let emp=[],dup=""
// for(i of inputArray){
//   if(!emp.includes(i)){
//     emp.push(i)
//   }
// }
// console.log(emp)


// Task 6: Check if a String is a Palindrome ?

// const inputString = "racecar"; 
//  Output: true

// const inputString = "racecar";
// reverse=""
// for(i=inputString.length-1;i>=0;i--){
//   reverse+=inputString[i]
// }
// if(inputString==reverse)
//   console.log("palindrome")
// else
// console.log("not plaindrome")

// Task 7: Find the Most Frequent Element in an Array ?

// const inputArray = [1, 2, 3, 2, 2, 4];
//  Output: 2

// const inputArray = [1, 2, 3, 2, 2, 4];
// emp=[],dup=""
// for(i=0;i<inputArray.length;i++){
//   if(!emp.includes(i)){
//     emp.push(inputArray[i])
//   }
// }
// console.log(emp)
// for(i of emp){
//   c=0
//   for(j of inputArray){
//     if(i==j){
//       c++
//     }
//   }
//   if(c>1){
//     dup+=i
//   }
// }
// console.log(dup)

