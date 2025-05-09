import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const inter = Roboto({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Confirme sua idade para acessar o conteúdo.',

  icons: {
    icon: '/logo-site.png', // usa como favicon também
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
  <head />
  <body className="bg-gray-100 font-roboto">{children}</body>
</html>

  );
}
