
//1)print even numbers from 10 to 40 using named functions,arrow function and variable function

//named function

// function even(x,y){
//     for(i=x;i<=y;i++){
//         if(i%2==0){
//             console.log(i)
//         }
//     }
// }
// even(10,40)

// anonymus function

// let even=function(x,y){
//     for(i=x;i<=y;i++){
//         if(i%2==0){
//             console.log(i)
//         }
//     }
// }
// even(10,40)

// arrow functions

// let even=(x,y)=>{
//     for(i=x;i<=y;i++){
//         if(i%2==0){
//             console.log(i)
//         }
//     }
// }
// even(10,40)



//2)check whether input is odd or not using named functions,arrow function and variable function

// function odd(x){
//     if(x%2==1){
//         console.log(`${x} is an odd number`)
//     }
//     else{
//         console.log("even")
//     }
// }
// odd(3)


// let odd=function(x){
//     if(x%2==1){
//         console.log(`${x} is an odd number`)
//     }
//     else{
//         console.log("even")
//     }
// }
// odd(5)


// let odd=(x)=>{
//     if(x%2==1){
//         console.log(`${x} is an odd number`)
//     }
//     else{
//         console.log("even")
//     }
// }
// odd(7)


//3)check input string is palindrome or not using named functions,arrow function and variable function.

//named function

// function reverse(str1){
//     let str2="";
//     for(i=str1.length-1;i>=0;i--){
//         str2+=str1[i]; 
//     }
// if(str1==str2){
//     console.log(str1,"palindriome")
// }else{
//     console.log(str1,"not a palindrome")
// }  
// }
// reverse("hello")
// reverse("something")


//anonymus function

// let reverse=function(str1){
//     let str2="";
//     for(i=str1.length-1;i>=0;i--){
//         str2+=str1[i]; 
//     }
// if(str1==str2){
//     console.log(str1,"palindriome")
// }else{
//     console.log(str1,"not a palindrome")
// }  
// }
// reverse("helo")
// reverse("moom")


//arrow function

// let reverse=(str1)=>{
//     let str2="";
//     for(i=str1.length-1;i>=0;i--){
//         str2+=str1[i]; 
//     }  
//         if(str1==str2){
//             console.log(str1,"palindriome")
//         }else{
//             console.log(str1,"not a palindrome")
//         }
    
// }
// reverse("good")
// reverse(123321)
// 

// reverse a string using functions

function reverseString(str1){
    let str2="";
    for(i=str1.length-1;i<=0;i--){
        str2+=str1[i];
        console.log(str2)
    }
}
reverseString(12)