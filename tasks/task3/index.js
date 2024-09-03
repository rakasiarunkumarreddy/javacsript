task:
// --------
// 1. Determine if a triangle is right-angled

a=3;
b=4;
c=5;
if (a**2 + b**2 == c**2){
    console.log("triangle is right angled triangle")
}
else{
    console.log("not a right angled triangle")
}


//    2. Check if a number is a power of 2(use bitwise operator here..need research)

let number = 16;

if (number > 0 && (number & (number - 1)) === 1) 
    console.log(number + " is a power of 2");
 else 
    console.log(number + " is not a power of 2");





// 3. To determine if a person is eligible for a loan based on their credit score and income:
// the conditions for eligibility are:

// - Credit score of 600 or higher
// - Annual income of $40,000 or higher
// - Loan amount does not exceed 50% of annual income

let cs=720;
let income="$50000";
let la=20000
if(cs<600){
    console.log("not eligible eligible for loan,because of low credit score")
}
else if (income<40000){
 console.log("not eligible,because of less income")
}
else if(la>0.5*income){
    console.log("not eligible ,because loan amount exceed anual amount")
}

else{
    console.log("eligible for loan")
}



