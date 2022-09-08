// const title = document.querySelector(".title")

// // // title.style.color = "green"
// // title.style.marginLeft = "300px"
// // console.log(title.style);

// title.classList.add ("black")
// title.classList.remove("black")
// let btn = document.querySelector(".btn")
// btn.onclick = function () {
//     this.classList.toggle("red")
// }

// console.log(title.getAttribute("data"));
// // console.log(document.querySelector("link").getAttribute("href"));
// console.log(document.querySelectorAll("link")[1].getAttribute("href"));

// [link1 link2]  массив
// [0, 1]

// title.setAttribute("date-num",6)

// let genge = document.querySelectorAll(".genge")
// console.log(genge);
// for (let i = 0; i < genge.length; i++) {
//     genge[i].onclick = function() {
//         let shop = document.querySelector(".shop").value
//         let price = this.getAttribute("data")
//         console.log(shop * price);
//     }
    
// }
let elem = document.querySelector(".element")
let btn = document.querySelector(".but")
let bnm = document.querySelector(".bun")
// btn.onclick = function() {
//     elem.classList.toggle("len")
// }

btn.onclick = function() {
    elem.classList.add("btn", "btn1", "btn2")
}

bnm.onclick = function( ) {
    elem.classList.remove("btn1")
}
