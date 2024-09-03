// 1. What is the result of 10 + '5'?

console.log(10+'5');
//in javascript when we use + operator in between a number and string,then number is converted 
//into string and the two strings are concatinated.

// console.log(10 + parseInt('5'));                     // Outputs: 15
// console.log(10 + Number('5'));                      // Outputs: 15
//To perform arithmetic operations without type coercion, ensure both operands are numbers.
// For example, you can convert strings to numbers using parseInt(), parseFloat(), or the Number constructor:


// 2. What is the value of x after x = 10; x += 5;?

let x=10;
x+=5;
console.log(x);


// 3. What is the result of 10 - null?

console.log(10-null); //null is converted into 0
console.log(10+null);
//JavaScript performs type coercion, converting null to a number


// 4. What is the value of x after x = 10; x *= 2;?

y=10;
y+=2;
console.log(y)


// 5. What is the result of 10 / '2'?

console.log(10/'2');
//when we use divide symbol,if the string was a number .js performs coersion,converts string to a number


// 6. What is the result of 10 % 3?

console.log(10%3);     //gives remainder


// 7. What is the value of x after x = 10; x = x ** 2;?

z=10;
z=z**2;
console.log(2);          //gives result of 10 power 2


// 8. What is the result of 10 > 5 && 5 < 10?

console.log(10>5 && 5<10);          //if the both conditions are true ,gives true as output


// 9. What is the result of 10 === '10'?

console.log(10==="10")     //strictly equal to (===) compares number and datatype


// 10. What is the result of null ?? 'default'?

console.log(null ?? 'default')



// 11. What is the result of 10 || 'default'?

console.log(10||'default')

// 12. What is the result of !true?

console.log(!true)   //false


// 13. What is the result of 10 & 5?

console.log(10 & 5);       

// 14. What is the result of 10 | 5?

console.log(10|5);

// 15. What is the result of 10 ^ 5?

console.log(10^5)

  
// What is the result of x = 10; y = ++x;? What are the values of x and y?

let p=10;                  
console.log(p)
q=++p;                               //Pre-increment p (p becomes 11) and assign it to q (q is now 11)
console.log(q,p);                    //Output the current values of q and p (both are 11)



// 2. What is the result of x = 10; y = x++;? What are the values of x and y?

x3=10;
y3=x3++;
// console.log(y3,x3)


// 3. What is the result of x = 10; console.log(++x);?

x4=10;
// console.log(++x4)


// 4. What is the result of x = 10; console.log(x++);?

p1=10;
// console.log(++p1)


// 5. What is the result of x = 10; y = --x;? What are the values of x and y?

p2=10;
q2=--p2;
// console.log(q2,p2)


// 6. What is the result of x = 10; y = x--;? What are the values of x and y?

p3=10;
q3=p3--;
// console.log(q3,p3);

// Ternary Operators:

// 1. What is the result of x = 10; y = x > 5 ? 'yes' : 'no';? What is the value of y?

let t1=10;
let tres=t1>5?"yes":"no"
console.log(tres)              //opt:yes,because t1 is graeter than 5

// 2. What is the result of x = 10; y = x > 5 ? 'yes' : x > 3 ? 'maybe' : 'no';? What is the value of y?

t2=10;
t2res=t2<5?"yes":(t2>3)?"maybe":"no"
console.log(t2res)

// Optional Chaining:

// 1. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.a?.b);?

const obj = { 
    a: {
         b: 'c' 
    }
 };
console.log(obj.a.b)                    //opt:c


// 2. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.a?.c);?

const obj1 = {
     a:{ 
        b:'c'
    } 
};
console.log(obj1?.a?.c);                  //undefined


// 3. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.b?.c);?

const obj3 = { 
    a: {
         b: 'c'
     }
 };
console.log(obj3.b?.c);             //opt:undefined  
//if we didnt place ? after b,then we will get an error

// Nullish Coalescing:

// 1. What is the result of x = null; y = x ?? 'default';? What is the value of y?

x = null;
 y = x ?? 'default';
 console.log(y)

// 2. What is the result of x = undefined; y = x ?? 'default';? What is the value of y?

x = undefined;
 y = x ?? 'default';
 console.log(y)

// 3. What is the result of x = 0; y = x ?? 'default';? What is the value of y?

x = 0;
y = x ?? 'default';
console.log(y)