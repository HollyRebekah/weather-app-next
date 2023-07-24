import {render} from '@testing-library/react'
import Forecast from '../app/components/forecast/index'

describe('forecast', () => {
    it('it renders a tile for each day of the forecast data', () => {
        const twoDaysForecast = [
            {date: '1st July', day: {maxtemp_c: 15, condition: {icon:113, text: 'Sunny', code:1000}}}, 
            {date: '2nd July', day: {maxtemp_c: 12, condition: {icon:116, text: 'Partly cloudy', code:1003}}}
        ]

        const { getAllByTestId } = render(<Forecast weatherData={twoDaysForecast} />)

        expect(getAllByTestId('weather-tile')).toHaveLength(twoDaysForecast.length)
    })
})