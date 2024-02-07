import { useEffect } from 'react'

const AutoBackToTop = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])
  return null
}

export default AutoBackToTop
