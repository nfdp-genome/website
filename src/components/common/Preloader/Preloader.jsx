import { useState, useEffect } from 'react'
import styles from './Preloader.module.css'

export default function Preloader() {
  const [isHidden, setIsHidden] = useState(false)
  const [isRemoved, setIsRemoved] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true)
      setTimeout(() => {
        setIsRemoved(true)
      }, 500)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isRemoved) return null

  return (
    <div className={`${styles.preloader} ${isHidden ? styles.hidden : ''}`}>
      <div className={styles.content}>
        <img
          src="/images/National Livestock and Fisheries Development Program - logo.svg"
          alt="NFLDP Logo"
          className={styles.logo}
        />
        <div className={styles.spinner}></div>
      </div>
    </div>
  )
}
