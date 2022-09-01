console.log("Hello World");
console.log("123");
console.log(123);

// alert("01.09.2022");

// var number = 1;
// console.log(number);

let num = 123;
num = 321;
console.log(num);

const happy = "10";
console.log(happy);

//Number числа

let number = 12345;
console.log(number);

console.log(1/0); //Бесконечность
console.log("hello" / 123); //Ошибка
console.log(NaN ** 0); //Исключение из правил

//Bigint огромные числа
let bigi = 1223365465n
console.log(bigi);

//string строка
let str1 = "hello " + "THE WARDO!!!" //канкатинация
let str2 = 'hello'
let str3 = `hello ${str1}`
console.log(str1);
console.log(str2);
console.log(str3);
let str4 = "Добро " + "пожаловать " + "на курс " + "Алексей"
console.log(str4);

//Boolean логика
let DotCheck = true
console.log(DotCheck);
let notDotCheck = false
console.log(notDotCheck);
let one = 5
let two = 10
console.log(one > 10);
console.log(one < two);

//Null ничего, пусто, значение не известно
let nuller = null
console.log(nuller);

// undefined значение не присвоено
let text
console.log(text);

// typeof возвращает тип данных
typeof x
typeof(x)
console.log(typeof nuller);
console.log(typeof DotCheck);

document.getElementById("one").innerHTML = "Hello World"