import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../../../hooks/useLanguage'
import { animateCounter } from '../../../utils/helpers'
import styles from './Stats.module.css'

const statsData = [
  { target: 7, key: 'animalSpecies', icon: 'layers' },
  { target: 6, key: 'successStories', icon: 'check' },
  { target: 3, key: 'servicePackages', icon: 'flask' },
  { target: 2030, key: 'visionAligned', icon: 'globe' }
]

const icons = {
  layers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  ),
  flask: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  )
}

export default function Stats() {
  const { t } = useLanguage()
  const [values, setValues] = useState(statsData.map(() => 0))
  const [animated, setAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true)
          statsData.forEach((stat, index) => {
            animateCounter(
              (value) => setValues(prev => {
                const newValues = [...prev]
                newValues[index] = value
                return newValues
              }),
              stat.target
            )
          })
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [animated])

  return (
    <section className={styles.stats} id="stats" ref={sectionRef}>
      <div className="container">
        <div className={styles.grid}>
          {statsData.map((stat, index) => (
            <div key={stat.key} className={styles.item}>
              <div className={styles.icon}>
                {icons[stat.icon]}
              </div>
              <div className={styles.number}>{values[index]}</div>
              <div className={styles.label}>{t(`stats.${stat.key}`)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
