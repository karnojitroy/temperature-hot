API_KEY = '84caadd13810a42c631866cf1d27cf72';

const searchTemperature = () => {
    const cityInput = document.getElementById('city-name');
    const city = cityInput.value;
    cityInput.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    if (city === '') {
        alert('Please write city name!')
    }
    else {
        fetch(url)
            .then(res => res.json())
            .then(data => displayTemperature(data))
            .catch(error => console.log(error));
    }

}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = tameperature => {
    if (tameperature.name === undefined) {
        alert('City not found')
    }
    else {
        setInnerText('city', tameperature.name);
        setInnerText('temperature', tameperature.main.temp)
        setInnerText('weather', tameperature.weather[0].main)

        // set weather icon
        const url = ` http://openweathermap.org/img/wn/${tameperature.weather[0].icon}@2x.png`;
        const weatherIcon = document.getElementById('weather-icon');
        weatherIcon.setAttribute('src', url);
    }

}