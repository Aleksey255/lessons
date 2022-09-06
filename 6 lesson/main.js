// switch (a) {
//     case "значение1":   // проверяется по строгому равенству
//         ...
//         break;
//     case "значение2":
//         ...
//          break;

//     default:
//         ...
//         break;
// }


// let amigo = 3 * 3
// console.log(amigo);
// switch (amigo) {
//     case 3:
//         alert("Мало")
//         break;
//     case 9:
//         alert("OK")
//         break
//     case 27:
//         alert("Много")
//         break
//     default:
//         alert("какое-то сообщение")
// }

// let amigo = "3"
// let hola = 0

// switch (+amigo) {
//     case hola + 3:
//         alert("Верно")
//         break;
//     default:
//         alert("NO")
// }

// let a = 10

// switch (a) {
//     case 1:
//     case 2:
//         alert("no")
//         break;
//     case 10:
//         alert("yes")
// }

// let result = prompt("Введи число")

// switch (result) {
//     case "1":
//         alert("yes")
//         break;
//     case 2:
//         alert("no")
//         break
//     default:
//         alert("nono")
// }

// ?? - оператор нулевого слияния

// a ?? b если а определено, то выйдет а, если а не определено, то выйдет b

// let user
// alert(user ?? "аноним")

// let user = null
// let phone = undefined
// let adres = "okey"
// alert(user ?? phone ?? adres ?? "Случайный текст")

let number = prompt("Введи число")

switch (+number) {
    case 0:
        console.log("Ты ввел 0");
        break;
    case 15:
         console.log("Ты ввел 15");
        break;
    case 26:
        console.log("Ты ввел 26");
        break;
    case 150:
        console.log("Ты ввел 150");
        break;
    default:
        console.log("Не то число");
}
