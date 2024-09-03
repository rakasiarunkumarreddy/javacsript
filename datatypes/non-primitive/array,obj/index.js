// non primitive datatypes--store multiple values,mutable,access/store thw value with their references,also called as composite or data stuctures.
let arr =["num",12]
console.log(typeof arr)


let arr1=[1,2,3,4]
console.log(arr1)

console.log(arr1[1])  //to access the particular element from the array


let arr2=["num",12]
console.log(typeof arr2[0])
console.log(typeof arr2[1])
console.log(arr2.length)

let arr3=["num",12,14,"we",["wqsdefw",12],22,"wddc"]
console.log(arr3)
console.log(arr3.length)
console.log(arr3[arr3.length-1])  
console.log(arr3[arr3.length-3])
arr3[0]=123
arr3[arr3.length-2]="wer"
console.log(arr3)



// objects--combination of key value pair

let obj={
    name:"arun",
    class:"btech",
    num:34,
    gender:"male",
    address:{                      //nested object
        place:"wnaa",
        area:"rtc colony"
    },
    skills:["html","css","js"]
}
console.log(obj)
console.log(obj.class)   //dot notation
console.log(obj["class"])  //bracket notation
console.log(obj.address.place)
console.log(obj.skills[1])


//my primary skill is js and secondary skills are html.css  using ` this symbol
console.log(`my primary skill is ${obj.skills[2]} and secondary skills are ${obj.skills[0]},${obj.skills[1]}`)