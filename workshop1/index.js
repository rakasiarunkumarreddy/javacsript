// let a=+prompt("Enter number one");
// let b=+prompt("enter number two");
 
// ans=prompt("enter a string")

// let opt=0

// switch(ans){
//     case "+":opt=a+b;
//     console.log(opt)
//     break;
//     case "-":opt=a-b;
//     console.log(opt)
//     break;
//     case "*":opt=a*b;
//     console.log(opt)
//     break;
//     case "/":opt=a/b;
//     console.log(opt)
//     break;
//     case "%":opt=a%b;
//     console.log(opt)
//     break;
//     default:console.log(error)
// }

// let word1=121;
// let wordString=word1.toString();
// console.log(wordString);
// let reverse=wordString.split("").reverse().join("");
// console.log(reverse);
// if(wordString==reverse){
//     console.log("palindrome")
// }
// else{
//     console.log("not a palindrome")
// }


// let text=123;
// let isPalindrome=true
// for(let i=0;i<text.length/2;i++){
//     if(text[i]!==text[text.length-1-i]){
//         isPalindrome=false;
//         break;
//     }
// }
// if(isPalindrome){
// console.log("palindrome")
// }else{
//     console.log("not a palindrome")
// }

// let originalString = "121";
// let reversedString = "";

// for (let i = originalString.length - 1; i >= 0; i--) {
//     reversedString += originalString[i];
// }

// if(originalString==reversedString){
//     console.log("palindrome")
// }else{
//     console.log("not a plaindrome")
// }


// let length=1;
// let width=2;
// perimeter=2*(length + width)
// console.log(perimeter)


// let a=12;
// let b=23;
// c=a;
// a=b;
// b=c;
// console.log(b)
// console.log(a)

// let z=10;
// z*=3;
// console.log(z)


// let num=-2
// if(num>=0){
//     console.log("positive")
// } else {
//     console.log("negative")
// }

// let age=12;
// if(age<=18){
//     console.log("eligible")
// }else{
//     console.log("not eligble")
// }

// let marks=96;
// if(marks>=90&&marks<=100){
//     console.log("A")
// }
// else if(marks>=80&&marks<=89){
//     console.log("B")
// }
// else if(marks>=70&&marks<=79){
// console.log("C")
// }else{
//     console.log("Fail")
// }


// let day=2;
// if(day==1){
//     console.log("Monday")
// }
// else if(day==2){
// console.log("tuesday")
// }else if(day==3){
//     console.log("wednesday")
// }else{
//     console.log("none")
// }


// let day=6;
// switch(day){
//     case 1:console.log("Monday")
//     break;
//     case 2:console.log("tuessays")
//     break;
//     case 3:console.log("wednesday")
//     break;
//     default:console.log("md")
// }

// let vowel="a"

// switch(vowel){
//     case "a":console.log("vowel")
//     break;
//     case "e":console.log("vowel")
//     break;
//     default:console.log("not a vowel")
// }

// let num=5;
// let res=(num%2==0)?"even":"odd"
// console.log(res)

// let score=66;
// let res=score>50?"pass":"fail"
// console.log(res)


// for(i=0;i<=100;i++){
//     console.log(i)
// }

// let num=5;
// let fact=1;
// for(i=1;i<=num;i++){
//     fact*=i;
// }
// console.log(fact)


// for(num=1;num<=10;num++){
//     console.log(`${2}*${num}=${num*2}`)
// }



// let number = 0; // Initialize the variable to a value less than 10

// // Loop until the user enters a number greater than 10
// while (number <= 12) {
//     // Prompt the user to enter a number
//     number = parseInt(prompt("Enter a number greater than 10:"));
// }

// // Print "Done" once the condition is met
// console.log("Done");


// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=10)

// let pass="qddd";
// x=prompt("enter password")
// do{
    
//     console.log(x)
// }while(pass=x)


// let year=+prompt("Enter a year");
// if(year%4==0||year%400==0){
//     console.log("leap year")
// }
// else{
//     console.log("not a leap year")
// }


//palindrome
//for numbers

// let n=121;
// let ns=n.toString()
// let rn=ns.split(",").reverse().join(",")
// if(n==rn){
//     console.log("palindrome")
// }
// else{
//     console.log("not a palindrome")
// }



//for strings

// let n="moom";
// let rn=n.split(",").reverse().join(",")
// if(n===rn){
//     console.log("palindrome")
// }
// else{
//     console.log("not a palindrome")
// }


let string="moom";
let length=string.length;
for(i=0;i<string.length;i++){
    if(string[i]==string[length-i-1]){
        console.log("palindrime")
    }
    else{
        console.log("not a palindrome")
    }
}



