// localStorage.setItem("dat", 13)
// console.log(localStorage.getItem("dat"));

let score = [100, 2000, 300]
localStorage.setItem("score", JSON.stringify (score))
let record = localStorage.getItem("score")
record = JSON.parse(record)
console.log(record);
console.log(record[2]);
console.log(typeof (record));