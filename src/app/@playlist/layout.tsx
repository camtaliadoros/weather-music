import { SpotifyContextProvider } from '../_contexts/SpotifyAuthContextProvider';

export default function PlaylistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SpotifyContextProvider>{children}</SpotifyContextProvider>;
}
