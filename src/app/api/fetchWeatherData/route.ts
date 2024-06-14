import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const latitude = searchParams.get('latitude');
  const longitude = searchParams.get('longitude');

  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?q=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.error();
  }
}
