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
   if (inputin > 100) {
    div.innerHTML = +inputin.value
   } else{
    alert("wow")
    console.log(+inputin.value);
   }
}
       
