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
  try {
    const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=59509ce8074e43368c2103802232207&q=${city}&days=3`)
    const data = await res.json()
    if(data.length === 0) {
      setError(true)
    } else {
      setError(false)
      setData(data.forecast.forecastday)
    }
  }
  catch(error) {
    setError(true);
  }
  
}
  
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <p className={styles.description}>Holly's Weather App</p>
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
