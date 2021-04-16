const api = {
    key: "939cc161f9160a617e33cc9a283e8d00",
    url: "http://api.openweathermap.org/data/2.5/"
}

function getResult (query) {
    fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResult);
}

function displayResult (weather) {
    console.log(weather);
    let city = document.getElementById('city').value

    let now = new Date();
    let date = document.getElementById('city__date');
    date.innerHTML = dateBuilder(now);
}

function dateBuilder(d) {
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = month[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`

}

