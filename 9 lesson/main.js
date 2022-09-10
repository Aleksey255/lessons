// let a = "ANIME"
// let b = "TRIGAN"
// let c = 4

// let d = [a,b,c,true]
//     //  [0,1,2] индексы
// let e = []
// console.log(d[1]);
// console.log(d[0]);
// console.log(d[2]);
// console.log(d[10]);
// console.log(d[3]);
// console.log(d.length);
// // console.log(e);

// let a = [1,2,3,4,5,6,7]
// const b = ["a","b","c"]

// Array.push (elment1 ... elementN)  вариант добавления данных пуш

// console.log(a.length);
// a.push(8,9,10)
// console.log(a);
// a.push("ERIC")
// console.log(a);
// console.log(a.push(15,20,25));
// console.log(a);

// console.log(b.push("А я ж говорил!"));
// console.log(b);
// b.push("bla, bla, bla")
// console.log(b);
// b.pop()   //удаляет последний компонент списка
// console.log(b);
// console.log(b.pop());
// console.log(b);

// delete a[2]
// console.log(a);
// console.log(a[2]);
// a.splice(2, 3)   // удаляет нужный компонент  списка
// console.log(a);
// a.splice(5, 1)
// console.log(a);

// console.log(a);
// a.splice(3, 2, "оба а я добавился")  //можно добавлять элемент в список
// console.log(a);

// shift unshift  //добавляет и удаляет элементы в начале списка, не рекомендуется делать

// let a = [1,2,3]
// let b = [
//     [1,2,3],
//     [6,6,6],
//     [7,7,7]
// ]
// console.log(b);

// for (let i = 0; i < b.length; i++) {
//     let c = b[i]
//     for (let j = 0; j < c.length; j++) {
//         console.log(c[j]);
        
//     }
// }

// for (let i = 0; i < b.length; i++) {
//     let c = b[i]
//     for (let j = c.length - 1;j>=0; j--) {
//         console.log(c[j]);
        
//     }
// }

// let out = ""

// for (let i = 0; i < b.length; i++) {
//     for (let j = 0; j < b[i].length; j++) {
//         out += b[i][j] + " "
//     }
//     out += "<br>"
// }

// out = " "

// for (let i = 0; i < b.length; i++) {
//     for (let j = 0; j < b[i].length; j++) {
//         if (b[i][j]> 3) {
//             out += b[i][j] + " "
//         }
//     }
//     out += "<br>"
    
// }

// document.querySelector(".out").innerHTML = out

// let a = [1,0,0,0,0]
// document.querySelector(".out").innerHTML = a
// let b = 0
// document.querySelector("button").onclick = ( ) => {
//     if (b < 4) {
//         a[b] = 0
//         a[b + 1] = 1
//         b++
//         document.querySelector(".out").innerHTML = a
//     }else {
//         a = [1,0,0,0,0]
//         document.querySelector(".out").innerHTML = a
//         b = 0
//     }
    
   
// }

let a = [1,2,3,4,5,6,7,8,9,10,11,12]
document.querySelector("button").onclick = ( ) => {
    document.querySelector(".out").innerHTML = a[4]
}

let b = [1,2,3,4,5,6,7,8,9,10]
document.querySelector(".chet").onclick = () => {
    for (let i = 0; i < b.length; i++) {
        if (i % 2 == 0) continue 
            document.querySelector(".out1").innerHTML += b[i];
        
        
    }
}

let c = [1,2,3,4,5,6,7,8,9,10]
document.querySelector(".nechet").onclick = () => {
    for (let j = 0; j < c.length; j++) {
        if (j % 2 == 0) {
            document.querySelector(".out2").innerHTML += c[j]
        }
        
    }
}

let d = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
document.querySelector(".obr").onclick = () => {
    for (let f = d.length - 1; f >= 0; f--) {
        for (let g = d[f].length - 1; g >= 0; g-- ) {
            document.querySelector(".out3").innerHTML += d[f][g]
        }
        
    }
}