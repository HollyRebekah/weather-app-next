import { WeatherData } from "@/app/types"
import WeatherCodes from '../../../weatherCode.json'
import Image from 'next/image'

import styles from './index.module.css'

const WeatherTile = (props:{ data :WeatherData }) => {
    const {data} = props

    const getIconCode = () => {
        return WeatherCodes.find(condition => condition.code === data.day?.condition.code ).icon
    }

    const date = new Date(data.date_epoch * 1000).toDateString()

    return (
        <div className={styles.tile} data-testid='weather-tile'>
            <p>{date}</p>
            <Image src={`/weather-icons/${getIconCode()}.png`} alt={data.day?.condition.text || 'weather-icon'} width="64" height="64"/>
            <p>{`${data.day?.maxtemp_c}°C `}</p>
            <p>{data.day?.condition.text}</p>
        </div>
    )
}

export default WeatherTile