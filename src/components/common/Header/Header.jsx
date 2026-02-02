import { useState, useEffect } from 'react'
import { useLanguage } from '../../../hooks/useLanguage'
import { useScrollToSection } from '../../../hooks/useScrollToSection'
import styles from './Header.module.css'

const navItems = [
  { id: 'about', key: 'about' },
  { id: 'services-overview', key: 'whatWeDo' },
  { id: 'impact', key: 'whyItMatters' },
  { id: 'success', key: 'success' },
  { id: 'packages', key: 'services' },
  { id: 'news', key: 'news' },
  { id: 'faq', key: 'faq' },
  { id: 'contact', key: 'contact' }
]

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage()
  const { scrollToSection } = useScrollToSection()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section
      const sections = document.querySelectorAll('section[id]')
      let current = ''

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id')
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <img
            src="/images/National Livestock and Fisheries Development Program - logo.svg"
            alt="NFLDP Logo"
          />
        </a>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? styles.active : ''}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {t(`nav.${item.key}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.langSwitch}
            onClick={toggleLanguage}
            aria-label="Switch Language"
          >
            <span className={styles.langCurrent}>
              {language === 'ar' ? 'EN' : 'AR'}
            </span>
            <svg className={styles.langIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </button>

          <button
            className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
