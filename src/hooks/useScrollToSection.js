import { useCallback } from 'react'

export function useScrollToSection() {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const header = document.querySelector('.header')
    const headerHeight = header ? header.offsetHeight : 80
    const targetPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight - 20

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  return { scrollToSection, scrollToTop }
}
