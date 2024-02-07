import Banner from '@/components/Banner/Banner'
import ProductList from '@/components/Product/ProductList'
import ClientLayout from '@/layouts/ClientLayout'
import React, { useState } from 'react'

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <ProductList
        title={'Khóa học xem nhiều nhất'}
        description={'Danh sách khóa học được xem nhiều nhất'}
      />
      <ProductList
        title={'Khóa học mới nhất'}
        description={'Danh sách khóa học được xem nhiều nhất'}
      />
      <ProductList
        title={'Combo khóa học siêu tiết kiệm'}
        description={'Danh sách khóa học được xem nhiều nhất'}
      />
    </React.Fragment>
  )
}

export default Home
