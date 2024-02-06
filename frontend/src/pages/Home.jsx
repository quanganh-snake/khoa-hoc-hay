import Banner from '@/components/Banner/Banner'
import ClientLayout from '@/layouts/ClientLayout'
import React, { useState } from 'react'

const Home = () => {
  return (
    <React.Fragment>
      <ClientLayout>
        <Banner />
      </ClientLayout>
    </React.Fragment>
  )
}

export default Home
