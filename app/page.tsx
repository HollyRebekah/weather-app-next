'use client'

import { useState } from 'react'
import styles from './page.module.css'
import SearchBar from './components/searchBar/index'
import Forecast from './components/forecast'

import { WeatherData } from "@/app/types"

const Home = () => {
const [data, setData] = useState<Array<WeatherData>>([])
const [error, setError] = useState<boolean>(false)

const getData =  async (city: string) => {
  const response = await fetch(`/api/weather?city=${city}`)
  const data = await response.json();
  
  if(data.success && data.forecastData.forecast.forecastday.length > 0) {
    setError(false)
    setData(data.forecastData.forecast.forecastday)
  } else {
    setError(true)
  }
}
  
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <p className={styles.description}>Holly&apos;s Weather App</p>
        <SearchBar handleSearch={getData}/>
        { error ? 
          <p data-testid="error-message"> Sorry, there has been an error retrieving the forecast. Please double check the city you have entered and search again. </p> : 
          <Forecast weatherData={data}/>
        }
      </div>
    </main>
  )
}

export default Home
