import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options

  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce])

  return { elementRef, isVisible }
}

export function useMultipleScrollAnimations(count, options = {}) {
  const refs = useRef([])
  const [visibleItems, setVisibleItems] = useState(new Set())

  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    staggerDelay = 100
  } = options

  useEffect(() => {
    const observers = []

    refs.current.forEach((element, index) => {
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, index]))
            }, index * staggerDelay)

            if (triggerOnce) {
              observer.unobserve(element)
            }
          } else if (!triggerOnce) {
            setVisibleItems(prev => {
              const next = new Set(prev)
              next.delete(index)
              return next
            })
          }
        },
        { threshold, rootMargin }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer, index) => {
        if (refs.current[index]) {
          observer.unobserve(refs.current[index])
        }
      })
    }
  }, [count, threshold, rootMargin, triggerOnce, staggerDelay])

  const setRef = (index) => (el) => {
    refs.current[index] = el
  }

  const isVisible = (index) => visibleItems.has(index)

  return { setRef, isVisible }
}
