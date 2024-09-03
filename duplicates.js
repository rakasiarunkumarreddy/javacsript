// let Nums=[1,2,-1,1,3,1]
// emp=[],uni=""
// for(i of Nums){
//     if(!emp.includes(i)){
//         emp.push(i)
//     }
// }
// console.log("program to print non repeating values in an array")
// console.log("array: ",Nums)
// // console.log(emp)
// for(i of emp){
//     c=0
//     for(j of Nums){
//         if(i==j){
//             c++
//         }
//     }
//     if(c==1){
//         uni+=i+","
//     }
// }
// console.log(uni.slice(0,6))


console.log("WAP to print arr1 is subset of arr2 or not")
console.log("arr1=[1,2,4,5]")
console.log("arr2=[1,3,6,9,2,4,5]")
let arr1=[1,2,4,5]
let arr2=[1,3,6,9,2,4,5]
let arr=[]
for(i of arr2){
    for(j of arr1){
        if(j==i){
            arr.push(i)
        }
    }
}
// console.log(arr)
let z=arr.length==arr1.length?"arr1 is subset of arr2":"arr1 is not subset of arr2"
console.log(z)

