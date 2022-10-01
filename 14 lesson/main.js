// let xhttp = new XMLHttpRequest()

// xhttp.onreadystatechange = () => {
//     if (this.readyState == 4 && this.Status == 200) {
//         myFanc(this.responseText)
//     }
// }

// xhttp.open("GET", "https://automarine.ru")
// xhttp.send()

// function myFanc(data){
//     console.log(data);
// }


// fetch("http://127.0.0.1:5501")
//      .then(data => {
//     console.log(data);               // учебная запись
//     console.log(data.text());
// })


// fetch("http://127.0.0.1:5501")
//      .then(data => {
//     console.log(data);
//     data.text().then(data2 => {         // рабочая запись
//         console.log(data2);
//     })
// })


// fetch("http://127.0.0.1:5501")
//     .then(data => {
//         console.log(data);
//         return data.text()        // рабочая запись (упрощенная)
//     })
//     .then(data => {
//         console.log(data);
//     })

// fetch("http://127.0.0.1:5501")
//     .then(data => data.text())
//     .then(data => {                     // рабочая запись (еще более упрошенная)
//         console.log(data);
//     })


let a = new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:5501")
        .then(data => {
            resolve(data.text())
        })
})

a.then (data => {
    console.log(data);
})


let b = new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:5501")
        .then(data => {
            resolve(data.text())
        })
})

b.then (data => {
    console.log(data);
})

Promise.all([a,b]).then(data => {
    console.log(data);
})