// console.log("hello world");
// let a=1;
// let b="1";
// console.log(a==b);
// console.log(a===b);
// let c="97";
// let d=97;
// console.log(c);
// console.log(c===d);
// console.log("object");
// const UPL=fetch("https://api.sampleapis.com/switch/games");
// console.log(UPL)

fetch("https://api.sampleapis.com/switch/games")
    // .then(res=>console.log(res))
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(error=>console.log("error"))
    

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(responce=>responce.json())
//     .then(data=>console.log(data.held_items))

// .catch(error=>console.log("error"));

// async function fetchData(){
//  try{
//     const responce=await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//  }
//  catch(error){
//     console.error(error);
//  }
// }




// const p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise resolved");
//     },10000);
// })

// function getData(){
//     p.then((res)=>console.log(res));
//     console.log("Namste Js");
// }
// getData();


// using async and await

// const p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise resolved");
//     },10000);
// })

// async function handle(){
//  const val=await p;
//  console.log("namstejs");
//  console.log(val);
// }
// handle();

// const p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise resolved");
//     },10000);
// })

// async function handle(){
//     console.log("namstejs");  //placing it before await
//  const val=await p;
 
//  console.log(val);
// }
// handle();


// with two promises,all of gets printed after 10sec

// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise resolved");
//     },10000);
// })
// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise resolved");
//     },5000);
// })

// async function handle(){
//     console.log("hello")
//  const val1=await p1;
//  console.log("namastejs");
//  console.log(val1);

//     const val2=await p2;
//     console.log("namstejs");
//     console.log(val2 );
//    }

// handle();


// after 5sec 1st promise printed .after 10sec another promise gets printed
// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise resolved");
//     },5000);
// })
// const p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise resolved");
//     },10000);
// })

// async function handle(){
//     console.log("hello")
//  const val1=await p1;
//  console.log("namastejs");
//  console.log(val1);

//     const val2=await p2;
//     console.log("namstejs");
//     console.log(val2 );
//    }

// handle();