//get HTML elements

/*
    1: Tempature

    2: Wind Chill

    3: Humidity

    4: Wind Speed

*/

const currently = [document.querySelector('#current-temp'),
document.querySelector('#current-windChill'),
document.querySelector('#current-humid'),
document.querySelector('#current-windSpeed')]







//api work
const url = 'https://api.openweathermap.org/data/2.5/weather?q=tooele&appid=9d41b79c9f21e04a57f59ee61de10204'
fetch(url)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const wObject = jsObject;
        console.log(wObject.main.temp)

        currently[0].textContent = Math.floor((wObject.main.temp - 273.15) * 1.8 + 32)
        currently[1].textContent = wObject.wind.deg
        currently[2].textContent = wObject.main.humidity
        currently[3].textContent = wObject.wind.speed
    })

const titles = document.querySelectorAll('.title')

const imgs = document.querySelectorAll('.article-img')

const descriptions = document.querySelectorAll('.description')

const links = document.querySelectorAll('.article-link')

console.log(titles[0])


const url2 = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=581ba71649fc4b389ec64ae2ddc8cf04`
fetch(url2)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        

        for(let i = 0; i < titles.length; i ++)  {
            titles[i].textContent = jsObject.articles[i].title
            imgs[i].src = jsObject.articles[i].urlToImage
            descriptions[i].textContent = jsObject.articles[i].description 
            links[i].href = jsObject.articles[i].url
            links[i].textContent = jsObject.articles[i].source.name
        }

    })