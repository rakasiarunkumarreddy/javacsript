let rows = +prompt("Enter rows");
let cols = +prompt("Enter cols");
let m1 = [];

for (let i = 1; i <= rows; i++) {
    let temp = [];
    for (let j = 1; j <= cols; j++) {
        console.log("Enter " + i + " " + j + " Number");
        let ele = +prompt();
        temp.push(ele);
    }
    m1.push(temp);
}
console.log(m1)
console.log("Matrix:");
for (let i of m1) {
    console.log(i.join(" "));
}

console.log("Largest element in each row:");
for (let row of m1) {
    let maxElement = row[0];  
    for (let num of row) {
        if (num > maxElement) {
            maxElement = num;
        }
    }
    console.log("largest number in row"+" "+maxElement);
}









// let rows = +prompt("rows: "); // Assuming a 3x3 matrix
// let cols = +prompt("coms: ");
// let m1 = [];

for (let i = 1; i <= rows; i++) {
    let temp = [];
    for (let j = 1; j <= cols; j++) {
        console.log("Enter value for position " + i + ", " + j);
        let ele = +prompt();
        temp.push(ele);
    }
    m1.push(temp);
}

console.log("Matrix:");
for (let i of m1) {
    console.log(i.join(" "));
}


let d1=[]
for (let i = 0; i < m1.length; i++) {
    d1.push(m1[i][i]);
    
}
console.log("Diagonal Elements :"+d1);
let d2=[]
for (let i = 0; i < m1.length; i++) {
    d2.push(m1[i][m1.length - 1 - i]);
}
console.log("Diagonal Elements:"+d2);









// let rows = +prompt("Enter rows: ");
// let cols = +prompt("Enter cols: ");
// let m1 = [];

for (let i = 1; i <= rows; i++) {
    let temp = [];
    for (let j = 1; j <= cols; j++) {
        console.log("Enter " + i + " " + j + " Number");
        let ele = +prompt();
        temp.push(ele);
    }
    m1.push(temp);
}
console.log(m1)
// console.log("Matrix:");
// for (let i of m1) {
//     console.log(i.join(" "));
// }

for(i=0;i<m1.length;i++){
    res=""
    for(j=0;j<m1.length;j++){
        if(i==j||i+j==rows-1){
            res=res+m1[i][j]
        }
    }console.log(res)
}
