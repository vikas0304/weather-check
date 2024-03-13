import React from 'react'
import './WeatherApp.css'
import search_icon from '../Assets/search.png'
import wind_icon from '../Assets/wind.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import rain_icon from '../Assets/rain.png'
import humidity_icon from '../Assets/humidity.png'
import snow_icon from '../Assets/snow.png'
import drizzle_icon from '../Assets/drizzle.png'
const WeatherApp = () => {

  

    let api_key = '5095f97743bea62f0c17b92eff91f13a'
    const search = async ()=>{
        const element = document.getElementsByClassName('cityInput');
        if(element[0].value === ''){
          return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName('humidity');
        const wind = document.getElementsByClassName('wind');
        const temprature = document.getElementsByClassName('weather-temp')
        const location = document.getElementsByClassName('weather_location')

        humidity[0].innerHTML = data.main.humidity + "%"
        wind[0].innerHTML = data.wind.speed + "km/hr"
        temprature[0].innerHTML = data.main.temp + "°C"
        location[0].innerHTML = data.name


    }
  return (
    <>
        <div className='container'>
            <div className='topBar'>
              <input type="text"  className='cityInput' placeholder='search'/>
              <div className="search_icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
              </div>
            </div>  
            <div className="weather_image">
              <img src={cloud_icon} alt="" className='image'/>
            </div>
            <div className="weather-temp">24°C</div>
            <div className="weather_location">London</div>
            <div className="data_container">
              <div className="element">
                <img src={humidity_icon} alt="" className='icon' />
                <div className="data">
                  <div className="humidity">64%</div>
                  <div className="text">humidity</div>
                </div>
              </div>
              <div className="element">
                <img src={wind_icon} alt="" className='icon' />
                <div className="data">
                  <div className="wind">18km/hr</div>
                  <div className="text">Wind Speed</div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default WeatherApp