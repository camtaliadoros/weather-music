import { Column } from '@/components/column';

export default function WeatherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Column>{children}</Column>;
}