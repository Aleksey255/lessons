// 354eb0a9c61f23942679d31fc0fefe97

fetch("https://api.openweathermap.org/data/2.5/weather?q=пермь&lang=ru&appid=354eb0a9c61f23942679d31fc0fefe97")
.then(function(resp){return resp.json()})
.then(function(data){
    console.log(data);
    document.querySelector(".city-name").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273)+'&deg;C'
    document.querySelector(".weather").innerHTML = data.weather[0]['description']
    document.querySelector(".icon").innerHTML = `<img src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png>`
})