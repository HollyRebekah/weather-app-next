import { WeatherData } from "@/app/types"
import WeatherCodes from '../../../weatherCode.json'
import Image from 'next/image'

import styles from './index.module.css'

const WeatherTile = (props:{ data :WeatherData }) => {
    const {data} = props

    const getIconCode = (): number => {
        const weatherCode = WeatherCodes.find(condition => condition.code === data.day?.condition.code)
        if(!weatherCode) return 0
        return weatherCode.icon
    }

    const date = new Date(data.date_epoch * 1000).toDateString()

    return (
        <div className={styles.tile} data-testid='weather-tile'>
            <p className={styles.text}>{date}</p>
            <Image className={styles.icon} src={`/weather-icons/${getIconCode()}.png`} alt={data.day?.condition.text || 'weather-icon'} width="64" height="64"/>
            <p className={styles.text}>{`${data.day?.maxtemp_c}°C `}</p>
            <p className={styles.text}>{data.day?.condition.text}</p>
        </div>
    )
}

export default WeatherTile