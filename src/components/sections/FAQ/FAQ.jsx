import { useState } from 'react'
import { useLanguage } from '../../../hooks/useLanguage'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'
import { useScrollToSection } from '../../../hooks/useScrollToSection'
import faqData from '../../../data/faq.json'
import styles from './FAQ.module.css'

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 9l-7 7-7-7"/>
  </svg>
)

const QuestionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
)

export default function FAQ() {
  const { t, getLocalizedText } = useLanguage()
  const { scrollToSection } = useScrollToSection()
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { elementRef: listRef, isVisible: listVisible } = useScrollAnimation()
  const [activeId, setActiveId] = useState(null)

  const toggleItem = (id) => {
    setActiveId(activeId === id ? null : id)
  }

  const handleContactClick = (e) => {
    e.preventDefault()
    scrollToSection('contact')
  }

  return (
    <section className={`${styles.faq} section`} id="faq">
      <div className="container">
        <div className={styles.wrapper}>
          <div
            ref={headerRef}
            className={`${styles.header} ${headerVisible ? styles.animate : ''}`}
          >
            <span className={styles.tag}>{t('faq.tag')}</span>
            <h2 className={styles.title}>{t('faq.title')}</h2>
            <p>{t('faq.subtitle')}</p>

            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <QuestionIcon />
              </div>
              <div className={styles.contactText}>
                <h4>{t('faq.notFound')}</h4>
                <p>{t('faq.notFoundText')}</p>
                <a
                  href="#contact"
                  className="btn btn-primary btn-sm"
                  onClick={handleContactClick}
                >
                  {t('nav.contact')}
                </a>
              </div>
            </div>
          </div>

          <div
            ref={listRef}
            className={`${styles.list} ${listVisible ? styles.animate : ''}`}
          >
            {faqData.map((item) => (
              <div
                key={item.id}
                className={`${styles.item} ${activeId === item.id ? styles.active : ''}`}
              >
                <button
                  className={styles.question}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={activeId === item.id}
                >
                  <span>{getLocalizedText(item.question)}</span>
                  <ChevronIcon />
                </button>
                <div className={styles.answer}>
                  <p>{getLocalizedText(item.answer)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
