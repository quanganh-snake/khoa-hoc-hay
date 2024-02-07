import { Routes } from 'react-router-dom'
import RootRouter from './routes'
import ClientLayout from './layouts/ClientLayout'
import AutoBackToTop from './components/BackToTop/AutoBackToTop'
import BackToTop from './components/BackToTop/BackToTop'

const App = () => {
  return (
    <>
      <ClientLayout>
        <RootRouter />
      </ClientLayout>
      <AutoBackToTop />
      <BackToTop />
    </>
  )
}

export default App
