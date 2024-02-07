import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { FaChevronUp } from 'react-icons/fa'

const BackToTop = () => {
  const [scroll, setScroll] = useState(0)

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    setScroll(0)
  }

  useEffect(() => {
    const handleScrollToTop = () => {
      setScroll(window.scrollY)
    }

    window.addEventListener('scroll', handleScrollToTop)

    return () => {
      window.removeEventListener('scroll', handleScrollToTop)
    }
  }, [])
  return (
    <div
      className={cn(
        'fixed bottom-10 right-10',
        scroll > 50 ? 'block' : 'hidden',
      )}
    >
      <span
        onClick={handleBackToTop}
        className="w-10 h-10 bg-white border border-sky-400 rounded-full flex items-center justify-center cursor-pointer"
      >
        <FaChevronUp className="text-center" />
      </span>
    </div>
  )
}

export default BackToTop
