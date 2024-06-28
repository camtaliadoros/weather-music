import { SpotifyContextProvider } from '../_contexts/SpotifyAuthContextProvider';

export default function PlayerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SpotifyContextProvider>{children}</SpotifyContextProvider>;
}
