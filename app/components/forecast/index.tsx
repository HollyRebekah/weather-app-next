import WeatherTile from "../weatherTile"
import { WeatherData } from "@/app/types"

import styles from './index.module.css'

const Forecast = (props: {weatherData : Array<WeatherData>}) => {
    const { weatherData } = props
    return( 
        <div className={styles.container}>
            {weatherData.length > 0 && weatherData.map(day => <WeatherTile key={day.date} data={day} />)}
        </div>
    )
}

export default Forecast