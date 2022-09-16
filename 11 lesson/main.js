// let b = [1,2,3,4,4,4,4, "stroka"]
// console.log(b);

// for

// for (let i = 0; i < b.length; i++) {
//     console.log(i); 
// }

//for in

// key - item - i   // использовать как переменные в for

// for(let i in b ) {           //вывод индексов мвссива
//     console.log(i);
// }

// for(let i in b ) {           //вывод значения массива
//     console.log(b[i]);
// }

// let c = new Set (b)                 //перевод массива в set и обратно
// console.log(c);

// let d = Array.from(c)
// console.log(d);

// let a = new Set ()
// a.add (666)         //добавить элемент
// a.add("start")
// a.add(5)
// a.add(666)
// console.log(a);

// // a.clear()           //очистить set
// // console.log(a);

// a.delete("start")       //удалить элемент
// console.log(a);

// console.log(a.has(666));    //обращение к элементу

// for (let i of a) {          // вывести все значения из set
//     console.log(i);
// }

let a = new Set ()
a.add("e")
a.add("r")
a.add("i")
a.add("k")
a.add("t")
a.add("h")
a.add("e")
a.add("b")
a.add("e")
a.add("s")
a.add("t")
console.log(a);

let input = document.querySelector(".in")
let button = document.querySelector(".btn")

button.onclick = () => {
    a.add (input.value)
    console.log(a);
}

let input1 = document.querySelector(".in1")
let button1 = document.querySelector(".btn1")

button1.onclick = () => {
    document.querySelector(".result").innerHTML = a.has (input1.value)
}

let button2 = document.querySelector(".btn2")
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
button2.onclick = () => {
    for (let i of b ) {
        if (i > 5) {
            let c = [i]
           console.log(c);
        }
    }
}
