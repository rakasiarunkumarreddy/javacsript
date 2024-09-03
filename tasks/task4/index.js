// 1. Calculate the sum of all even numbers between 1 and 100

// - Test case 1: Verify that the sum of all even numbers between 1 and 100 is 2550.
// - Test case 2: Verify that the sum of all even numbers between 1 and 50 is 650.

// let n1 =prompt("enter a number")
// let n1=50;
// let sum=0;
// for(i=2;i<=n1;i+=2){
// sum += i;
// }
// console.log("sum of even numbers upto 100 is:",sum)


// 2. Write a program to find the factorial of a given number

// - Test case 1: Input: 5, Expected output: 120
// - Test case 2: Input: 3, Expected output: 6
// let n=5
// fact=1;
// for(i=2;i<=n;i++){
// fact*=1
// }
// console.log(fact)

// let n = prompt("enter a number:"); 
// let factorial = 1;

// for (let i = 2; i <= n; i++) {
//     factorial *= i;
// }

// console.log("Factorial of", n, "is:", factorial);



// 3. Determine the number of digits in a given number

// - Test case 1: Input: 123, Expected output: 3
// - Test case 2: Input: 4567, Expected output: 4

// let n2="23678";
// length=n2.length
// console.log(length)

// let n2=4567;
// lnth=n2.toString()
// lnth1=lnth.length
// console.log(lnth1)


// let num = 12345; // Replace this with any number you want
// let numDigits = 0;

// while (num > 0) {
//     num = Math.floor(num / 10);
//     numDigits++;
// }

// console.log("The number of digits is:", numDigits);




// Else-If Ladder:

// 1. Write a program to determine the fare for a taxi ride based on the distance traveled:
//     - 0-5 km: $5
//     - 5-10 km: $10
//     - 10-20 km: $20
//     - Above 20 km: $30 + $5 for every additional km

// let d=30;
// if(d<=5){
//     console.log("$5 need to be charged")
// }
// else if(d==5 && d<=10){
//     console.log("$10 is charged")
// }
// else if(d==10 && d<=20){
//     console.log("$20 is charged")
// }

// else{
//     console.log(`${30}  is charged`)
// }



// let distance = 30;
// let fare = 0;

// if (distance <= 5) {
//     fare = 5;
// } else if (distance <= 10) {
//     fare = 10;
// } else if (distance <= 20) {
//     fare = 20;
// } else {
//     fare = 30 + (distance - 20) * 5;
// }

// console.log("The fare for your ride is: $" + fare);


// 2. Write a program to determine the discount on a product based on the quantity purchased:
//     - 1-5 units: No discount
//     - 6-10 units: 5% discount
//     - 11-20 units: 10% discount
//     - Above 20 units: 15% discount

// let units=21;
// if(units<=5){
//     console.log("No discount")
// }
// else if(units==6 && units<=10){
//     console.log("5% discount")
// }
// else if(units==11 && units<=20){
//     console.log("10% discount")
// }
// else{
//   console.log("15% discount")
// }  





//     Switch Statement:

//     1. Write a program to determine the type of coffee based on the user's selection:
//         - 1: Espresso
//         - 2: Cappuccino
//         - 3: Latte
//         - 4: Mocha
// coffee="Espresso"
// switch(coffee){
//     case "Espresso":console.log("right")
//     break;
//     case "Cappuccino":console.log("wrong1")
//     break;
//     case "Latte":console.log("wrong2")
//     break;
//     case "Mocha":console.log("wrong3")
//     break;
//     default:console.log("none")
//    break;
// }

// let choice = parseInt(prompt("Select a coffee type:\n1: Espresso\n2: Cappuccino\n3: Latte\n4: Mocha"));
// choice=1
// let coffeeType = "";


// switch (choice) {
//     case 1:
//         coffeeType = "Espresso";
//         break;
//     case 2:
//         coffeeType = "Cappuccino";
//         break;
//     case 3:
//         coffeeType = "Latte";
//         break;
//     case 4:
//         coffeeType = "Mocha";
//         break;
//     default:
//         coffeeType = "Invalid selection";
//         break;
// }

// console.log("You selected:", coffeeType);


//     2. Write a program to determine the shipping cost based on the region:
//         - 1: North America ($10)
//         - 2: South America ($20)
//         - 3: Europe ($30)
//         - 4: Asia ($40)
//         - 5: Australia ($50)
religion="South America"
switch(religion){
    case "North America":
        cost=5
    break;
    case "South America":
        cost=20
    break;
    case "Europe":
        cost=30
    break;
    case "Asia":
        cost=40
    break;
    case "Australia":
        cost=50
    break;
    default:cost=0
        break;
}
console.log("cost is:",cost)