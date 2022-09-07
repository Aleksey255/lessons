// let func1 = document.querySelector(".btn-1")

// function one () {
//     console.log("Hello");
// }
// one()

// func1.onclick = one

// function borsh() {
//     тело функции с описанием
//     нарезать картофель ...
// }

// function one () {
//     console.log("Hello");
//     return 666
// }

// one()
// console.log(one() +1);

// let a = 9
// let b = 9

// function multi () {
//     console.log(a*b);
//     return a*b
// }
// let c = multi()
// console.log(c*55);

// function multi (x,y){
//     console.log("he he");
//     return x*y
//     console.log("he he");
// }
// console.log(multi (20,20));
// console.log(multi (a,20));
// console.log(multi (a,b));

// func1.onclick = function ( ){
//     console.log("anonim");
// }

// func1.onclick = () => {
//     console.log("anonim strelka");
// }

// function(x,y){
//     ...
// }

// (x,y) => {
//     ...
// }

// let bottom = document.querySelector(".btn-2")
// let div = document.querySelector(".result")
// let a = 20
// function num (){
//     div.innerHTML = a
// }
// bottom.onclick = num

let input = document.querySelector(".number")
let input2 = document.querySelector(".number2")
let plus = document.querySelector(".btn-1")
let minus = document.querySelector(".btn-2")
let umnozh = document.querySelector(".btn-3")
let delit = document.querySelector(".btn-4")
let div = document.querySelector(".res")

 function sum () {
    let a = +input.value
    let b = +input2.value
    div.innerHTML = a + b
    return a+b
}
plus.onclick = sum

function min () {
    let a = +input.value
    let b = +input2.value
    div.innerHTML = a - b
    return a - b
}
minus.onclick = min

function umn () {
    let a = +input.value
    let b = +input2.value
    div.innerHTML = a * b
    return a * b
}
umnozh.onclick = umn

function del () {
    let a = +input.value
    let b = +input2.value
    div.innerHTML = a / b
    return a / b
}
delit.onclick = del