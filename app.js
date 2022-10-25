const api_key = `79caba000403a8d1bb274a2e65b2a799`;

const loadTemperatures = async city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    displayTemperature(data)
}

const displayTemperature = temp => {
    const weatherId = document.getElementById('weather');
    weatherId.innerHTML = `
    <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
    <div>
        <h1 id="city-name">${temp.name}</h1>
        <h3><span id="temperature">${temp.main.temp}</span>&deg;C</h3>
        <h1 id="condition" class="lead">${temp.weather[0].main}</h1>
    </div>
    `;
}


const display = () => {
    const inputText = document.getElementById('input-field')
    const text = inputText.value;
    inputText.value = '';
    loadTemperatures(text)
}


document.getElementById('btn-src').addEventListener('click', () => {
    display()
})



document.getElementById('input-field').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        display()
    }
})


loadTemperatures('rajshahi')
