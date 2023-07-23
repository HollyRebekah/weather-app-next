interface WeatherCondition {
    text: string,
    icon: string,
    code: number
}

interface Day {
    maxtemp_c: number,
    condition: WeatherCondition,
}

export interface WeatherData {
    date: string,
    day: Day,
    date_epoch: number

}