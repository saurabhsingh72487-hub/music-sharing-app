import './globals.css'

import Navbar from '../app/components/Navbar.jsx'

export const metadata = {
  title: 'Music Sharing App',
  description: 'Upload and share MP3 files',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}