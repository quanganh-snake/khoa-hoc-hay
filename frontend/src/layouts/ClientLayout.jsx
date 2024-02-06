import Footer from '@/components/Footers/Footer'
import Header from '@/components/Headers/Header'
import React from 'react'

const ClientLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className="main py-30 min-h-96">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default ClientLayout
