import Category from '@/pages/Category/Category'
import Home from '@/pages/Home'
import { Route } from 'react-router-dom'

export const publicRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/category/:category" element={<Category />} />
  </>
)
