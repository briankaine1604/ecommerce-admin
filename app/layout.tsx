import Navbar from '@components/Navbar'
import '@styles/global.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className='layout'>
            <Navbar/>
            <div>
            {children}
            </div>
            </body>
      </html>
    )
  }