// input = prompt("Enter a number: ") 
// sum=0
// for(num of input){
//     if(num>1){
//         for(i=2;i<num;i++){
//             if(num%i==0){
//                 sum=sum+Number(num)
//                 break
//             }
//         }
//     }
// }
// console.log("Non prime sum is: "+sum)







// input = prompt("Enter a number: ") 
// sum=0, sum1=0
// for(num of input){
//     if(num>1){
//         c=0
//         for(i=2;i<num;i++){
//             if(num%i==0){
//                 sum+=Number(num)
//                 c++
//                 break
//             }
//         }
//         if(c==0){
//           sum1=sum1+Number(num)  
//         }
//     }
// }
// res=(sum>sum1)?"Non prime sum is bigger":"Prime sum is bigger"
// console.log(res)






input = prompt("Enter a number: ") 
primeCount=0,nonPrimeCount=0
for(num of input){
    if(num>1){
        c=0
        for(i=2;i<num;i++){
            if(num%i==0){
                nonPrimeCount++
                c++
                break
            }
        }
        if(c==0){
           primeCount++
        }
    }
}
res=(primeCount>nonPrimeCount)?"true":(primeCount==nonPrimeCount)?"Both are equal":"false"
console.log(res)



