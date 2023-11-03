import './globals.css';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/providers';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'App',
   description: 'App',
}


export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {

   return (
      <html lang="en">
         <meta name="viewport" content="initial-scale=1, width=device-width" />
         <body className={`${inter.className} flex`}>
            <Providers>
               {children}
            </Providers>
         </body>
      </html>
   )
}
