import CartDrawer from '@/components/Cart/CartDrawer'
import ClientLayout from '@/layouts/ClientLayout'
import React from 'react'

const Home = () => {
  return (
    <React.Fragment>
      <ClientLayout>
        <p>Home</p>
        <CartDrawer />
      </ClientLayout>
    </React.Fragment>
  )
}

export default Home
