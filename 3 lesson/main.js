// let myhappy = prompt("год рождения")
// console.log(myhappy);

// if (myhappy == 1991) alert("yes")
    
// if (myhappy > 2000) {
//     alert("WOW")
//     alert("privet")
// }
// if (myhappy == 1991) {
//     alert("Верно")
// } else {
//     alert("Неверно")
// }

let inputin = document.querySelector(".text-in")
let button = document.querySelector(".check-in")
let div = document.querySelector(".result")

button.onclick = function() {
    let e = +inputin.value
   if (e > 100) {
    div.innerHTML = e
   } else{
    alert("wow")
    console.log(e);
   }
}
       
// let year = prompt("когда вышел ходячий замок?")
// if (year < 2004) {
//    alert("Слишком рано")
// } else if (year > 2004) {
//    alert("Слишком поздно")
// }else {
//    alert("Красавчик")
// }

// let summer
// let week = prompt("Сколько недель летом?")
// if (week == 12){
//    summer = true
// } else {
//    summer = false
// }
// console.log(summer);

// let result = (условие) ? значение1 : значение2 //синтаксис оператора "?"

// let week = prompt("Сколько недель летом?")
// let summer = (week == 12) ? true : false
// console.log(summer);

// 10 % 3
// 1
// 2**4
// 16
// 5<3
// false
// 5>3
// true
// "3">5
// false
// 0==false
// true
// 5>0
// true
// 0>1
// false
// "1"==1
// true
// "1"===1
// false
// 15!=14
// true
// 15!=15
// false
// alert ("яблоко" > "я")
// alert("сонный" > "соник")
// "аниме" > "волк"
// false
// "аниме" > "песи"
// false
// "сонный" > "сон"
// true
// "аниме" < "ониме"
// true
// "рыба" > "кот"
// true
// "телефон" < "ввод"
// false
// "тетраддь" > "шнур"
// false
// "мошка" > "номер"
// false
// "мошка" > "кошка"
// true

// || или             // для или единственный результат false это false || false
// result = a || b

// let season = 6
// if (season < 1 || season > 10) {
//    alert("сериал закончился")
// } 

// && и               // для и единственный результат true это true && true
// result = a && b

// let num1 = 13
// let num2 = 666
// if (num1 > 12 && num2 == 666) {
//    alert("12 , 666")
// }

// ! (не)
// alert(!true) // false 
// alert(!false) // true