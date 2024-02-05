import React from 'react'
import { publicRoutes } from './publicRoutes'
import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import { privateRoutes } from './privateRoutes'

const RootRouter = () => {
  return (
    <Routes>
      {publicRoutes}
      {privateRoutes}
    </Routes>
  )
}

export default RootRouter
