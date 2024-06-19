import { NextResponse } from 'next/server';

export async function POST() {
  const url = 'https://accounts.spotify.com/api/token';

  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    });

    const result = await response.json();

    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.error();
  }
}
