import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const city = searchParams.get('city')
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${city}&days=3`)
        const data = await response.json()
        return NextResponse.json({ success: true, forecastData: data })
    } catch (error) {
        return NextResponse.json({ success: false, error })
    }
}