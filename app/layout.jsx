import "../styles/globals.css"
import { Navigation } from "./components/Navigation";
import { Inter, Roboto, Space_Grotesk } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: '700',

  subsets: ['latin'],
})
const font = Space_Grotesk({weight: "500"})

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={font.className}>
     <head/>
      <body>
       <Navigation/>
        {children}
      </body>
    </html>
  )
}
