import Footer from '@/components/Footers/Footer'
import Header from '@/components/Headers/Header'
import React from 'react'

const ClientLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default ClientLayout
