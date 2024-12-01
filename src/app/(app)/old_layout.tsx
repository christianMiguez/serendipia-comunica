import { Navbar } from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'
import { Carousel } from '@/components/Carousel'
import { Footer } from '@/components/Footer'

import './globals.scss'

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1">
          <main className="flex-1 p-4">{children}</main>
          <Sidebar />
        </div>
        <Carousel />
        <Footer />
      </body>
    </html>
  )
}

export default Layout
