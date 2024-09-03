//
//ARRAYS
//



//minimum number in an array

// function smallest(arr){
//     let min=arr[0]
//     for(i=1;i<arr.length;i++){
//         if(arr[i]<min){
//             min=arr[i]
//         }
//     }
//     console.log(min)
// }
// smallest([4,321,455])


//maximum number in an array

// function max(arr){
//     let max=arr[0]
//     for(i=1;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     console.log(max)
// }
// max([22,425,21122,1])


//finding max and min numbers in an array

// let maxmin=(arr)=>{
//     max=arr[0],min=arr[0]
//     for(i=1;i<arr.length;i++){
//         if(arr[i]<min){
//             min=arr[i]
//         }
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     console.log(min)
//     console.log(max)
// }
// maxmin([24,31,435,21,1,4])





//finding second smallest integer

// function secSmall(arr){
//     smallest=arr[0]
//     secondSmallest=arr[0]
//     for(i=1;i<arr.length;i++){
//         if(arr[i]<smallest){
//             secondSmallest=smallest
//             smallest=arr[i]
//         }
//         else if(arr[i]<secondSmallest && arr[i]>smallest){
//             secondSmallest=arr[i]
//         }
//     }
//     console.log(secondSmallest)
// }
// secSmall([123,2,2,4,5,121])




// secondLargest in an array

// function secLarge(arr) {
//     let largest = -Infinity;
//     let secondLargest = -Infinity;  
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             secondLargest = largest;
//             largest = arr[i];
//         } else if (arr[i] > secondLargest && arr[i] < largest) {
//             secondLargest = arr[i];
//         }
//     }
    
//     if (secondLargest === -Infinity) {
//         console.log("No second largest element");
//     } else {
//         console.log(secondLargest);
//     }
// }
// secLarge([123, 2, 2, 4, 5, 121,122]);




//reverse of given array

// function reverse(arr){
//     rev=[]
//     for(i=arr.length-1;i>=0;i--){
//         rev.push(arr[i])
//     }
//     console.log(rev)
// }
// reverse([1,2,3,4,5,6])






//frequency of elements in an array

// function frequency(arr){
//     emp=[]
//     for(i of arr){
//         if(!emp.includes(i)){
//             emp.push(i)
//         }
//     }
//     console.log(emp)
//     for(i of emp){
//         c=0
//         for(j of arr){
//             if(i==j){
//                 c++
//             }      
//         }  
//         console.log(i,"=>",c)
//     }   
// }
// frequency([1,1,2,3,3,4,5,5,5,5])





//Rearrange array in increasing-decreasing order

// let arr=[33,44,22,1,5,8,2,0]
// let z=arr.sort((a,b)=>a-b)
// console.log(arr)
// let z1=arr.sort((a,b)=>b-a)
// console.log(z1)

// function arrange(arr){
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[j]>arr[i]){
//                 temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//     }
//     console.log(arr)
// }
// arrange([2,1,4,7,3,8])





//sum of elements in an array

// function sum(arr){
//     let sum1=0
//     for(i=0;i<arr.length;i++){
//         sum1+=arr[i]
//     }
//     console.log(sum1)
// }
// sum([1,2,3,4,5])




//Rotate array by K elements - Block Swap Algorithm

// 1. Rotate Array to the Right by k Positions
// When rotating to the right, each element in the array is shifted k positions to the right, with elements that overflow moving to the beginning of the array.

// Example Code

// function rotateRight(arr, k) {
//     let n = arr.length;
//     k = k % n; // In case k is greater than the array length

//     // Create a new array to store the rotated elements
//     let rotatedArr = new Array(n);

//     // Move elements to their new positions
//     for (let i = 0; i < n; i++) {
//         rotatedArr[(i + k) % n] = arr[i];
//     }

//     // Copy rotatedArr back to arr
//     for (let i = 0; i < n; i++) {
//         arr[i] = rotatedArr[i];
//     }

//     return arr;
// }

// // Example usage
// let numbers = [1, 2, 3, 4, 5];
// let k = 2;
// console.log(rotateRight(numbers, k)); // Output: [4, 5, 1, 2, 3]


// 2. Rotate Array to the Left by k Positions
// When rotating to the left, each element in the array is shifted k positions to the left, with elements that overflow moving to the end of the array.

// Example Code

// function rotateLeft(arr, k) {
//     let n = arr.length;
//     k = k % n; // In case k is greater than the array length

//     // Create a new array to store the rotated elements
//     let rotatedArr = new Array(n);

//     // Move elements to their new positions
//     for (let i = 0; i < n; i++) {
//         rotatedArr[i] = arr[(i + k) % n];
//     }

//     // Copy rotatedArr back to arr
//     for (let i = 0; i < n; i++) {
//         arr[i] = rotatedArr[i];
//     }

//     return arr;
// }

// // Example usage
// let numbers = [1, 2, 3, 4, 5];
// let k = 2;
// console.log(rotateLeft(numbers, k)); // Output: [3, 4, 5, 1, 2]







//average of all elements in an array

// function average(arr){
//     sum=0,n=arr.length
//     for(i=0;i<n;i++){
//         sum+=arr[i]
//     }
//     console.log(sum/n)
// }
// average([1,2,3,4,5])



//median of given array
//If the array has an odd number of elements, there will be one middle element.
//If the array has an even number of elements, there will be two middle elements.

// function median(arr){
//     n=arr.length
//     if(n%2==1){
//         median=Math.floor(n/2)
//         console.log(median)
//     }else{
//         middle=n-2/2
//         middle1=n/2
//         console.log(middle,middle1)
//     }
// }
// median([1,2,3,7,5,6,2])




//Remove duplicates from a sorted array





//Remove duplicates from a unsorted array






//adding element in an array

// let arr=[1,2,3,4,5]
// console.log(arr)
// arr.unshift(8)
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.push(6)
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.splice(1,0,3)
// console.log(arr)
// arr.splice(0,2,4,5)
// console.log(arr)
// arr.splice(2)
// console.log(arr)





//find all repeating elements in an array

// let arr=[1,3,3,4,5,6,6]
// let emp=[],dup="",uni=""
// for(i of arr){
//     if(!emp.includes(i)){
//         emp.push(i)
//     }
// }
// console.log(emp)
// for(i of emp){
//     c=0
//     for(j of arr){
//         if(i==j){
//             c++
//         }
//     }
//     if(c>1){
//         dup+=i+" "
//     }else{
//         uni+=i+" "
//     }
// }
// console.log(dup)
// console.log(uni)


//Find all non-repeating elements in an array


//Find all symmetric pairs in array

//Maximum product subarray in an array

//Replace each element of the array by its rank in the array

//Sorting elements of an array by frequency

//Rotation of elements of array- left and right

//Finding equilibrium index of an array



//
//Problems on Numbers
//


//Check if a number is palindrome or not

// let num1=1211
// num=num1.toString()
// reverse=""
// for(i of num){                                    
// reverse=i+reverse
// }
// console.log(reverse)
// if(num==reverse){
//     console.log("palindrome")
// }else{
//     console.log("not palindrome")
// }

//use for(i=num.length-1;i>=0;i--)


//Find all Palindrome numbers in a given range

// min=10
// max=50
// rev=""
// for(i=min;i<=max;i++){
//     num=i
//     reversedNumber=0
//     while(num>0){
//         let lastDigit=num%10;                           ////to get the last digit
//         reversedNumber=reversedNumber*10+lastDigit
//         num=(num-lastDigit)/10;                         ////removing last digit
//     }
//     if(i==reversedNumber){
//         rev+=i+","
//     }
// }
// console.log(rev)









