'use client'

import { useState } from 'react'
import styles from './page.module.css'
import SearchBar from './components/searchBar/index'
import Forecast from './components/forecast'

const Home = () => {
const [data, setData] = useState([])

const getData = (city: string) => {
  fetch(`http://api.weatherapi.com/v1/forecast.json?key=59509ce8074e43368c2103802232207&q=${city}&days=3`)
  .then((response) => response.json())
  .then((data) => {
      setData(data.forecast.forecastday)
  })
}
  
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <p className={styles.description}>Weather App</p>
        <SearchBar handleSearch={getData}/>
        <Forecast weatherData={data}/>
      </div>
    </main>
  )
}

export default Home
