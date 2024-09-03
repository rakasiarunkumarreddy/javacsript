// 1)Write a Program to print the square of each number from 1 to 10
//     -test case:Input:1-10 ,Output:


// for(i=1;i<=10;i++){
//   square=i**2
//   console.log(square)
// }


// let sum=0;
// for(i=1;i<=20;i++){
//     if(i%3==0){
//         sum+=i
//         console.log(sum)  
//     }  
// }


// for(i=1;i<=15;i++){
//    cube=i**2*i 
//   console.log(cube)
// }

// let i=10
// while(i<=10&&i>=1){
//     console.log(i);
//     i--;
// }


// let i=1;
// mul=1
// while(i<=12){
//     console.log(mul);
//     i++;
//     mul*=i
// }

// let i=20;
// while(i<=20&&i>=1){
//     if(i%2==0){
//         console.log(i)
//     }
//     i--;
// }


// let i=1;
// do{
//     console.log(i);
//     i++;
// }while( i<=20)



// let i = 1;
// do {
//     if (i % 5 !== 0) {
//         console.log(i);
//     }
//     i++;
// } while (i <= 20);




// let i=1
// sum=0;
// do{
//    if(i%4===0){
//     sum+=i
//     console.log(sum)
//    }
//    i++
// }while(i<=30)


// let i=50;
// do{
//     if(i%3==0){
//         console.log(i)
//     }
//     i--
// }while(i<=50 && i>=1)

// let i=10
// do{
//     console.log(i);
//     i--;
// }while(i<=10 && i>=1)

// let i=1;
// mul=1
// do{
//  mul*=i;
//  console.log(mul);
//  i++;
// }while(i<=12)


// let i=20;
// do{
//     if(i%2==0){
//         console.log(i)
//     }
//     i--;
// }while(i<=20 && i>=1)

// let i=1;
// while(i<=20){
//     if(i%5!==0){
//         console.log(i)
//     }
//     i++;
// }

// let i=1;
// sum=0
// while(i<=30){
//     if(i%4==0){
//         sum+=i
//         console.log(sum)
//     }
//     i++

// }

// let i=50;
// while(i<=50 && i>=1){
//     if(i%3==0){
//         console.log(i)
//     }
//     i--
// }



// let word=123;
// let reverseString = word.split("").reverse().join("");
// console.log(reverseString)
let originalString = 121;
let string=originalString.toString();
let reversedString = string.split('').reverse().join('');

// console.log(reversedString);  // Output: "olleH"

if(originalString == reversedString){
console.log("palindrome")
}
else{
    console.log("not a palindrome")
}


