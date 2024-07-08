type AccessTokenRequestParamsType = {
  client_id: string;
  grant_type: string;
  code: string;
  redirect_uri: string;
  code_verifier: string;
};

const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!;
const redirectUri = 'http://localhost:3000/';

export async function redirectToAuthCodeFlow() {
  const verifier = generateCodeVerifier(128);
  const challenge = (await generateCodeChallenge(verifier)) as string;

  localStorage.setItem('code_verifier', verifier);

  const params = new URLSearchParams();
  params.append('client_id', clientId);
  params.append('response_type', 'code');
  params.append('redirect_uri', redirectUri);
  params.append(
    'scope',
    'user-top-read user-read-currently-playing user-modify-playback-state user-read-private playlist-modify-public playlist-modify-private streaming user-read-email'
  );
  params.append('code_challenge_method', 'S256');
  params.append('code_challenge', challenge);

  document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

export function generateCodeVerifier(length: number) {
  let text = '';
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export async function generateCodeChallenge(codeVerifier: string) {
  if (typeof window !== undefined) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }
}

export async function getAccessToken(code: string): Promise<string> {
  const codeVerifier = localStorage.getItem('code_verifier');

  const searchParams: AccessTokenRequestParamsType = {
    client_id: clientId,
    grant_type: 'authorization_code',
    code,
    redirect_uri: redirectUri,
    code_verifier: codeVerifier ?? '',
  };

  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },

    body: new URLSearchParams(searchParams),
  };

  const body = await fetch('https://accounts.spotify.com/api/token', payload);
  const response = await body.json();

  return response.access_token;
}
