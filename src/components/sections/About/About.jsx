import { useLanguage } from '../../../hooks/useLanguage'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'
import SectionHeader from '../../common/SectionHeader'
import styles from './About.module.css'

const species = [
  { key: 'camels', emoji: '🐪' },
  { key: 'sheep', emoji: '🐑' },
  { key: 'cattle', emoji: '🐄' },
  { key: 'chickens', emoji: '🐔' },
  { key: 'horses', emoji: '🐴' },
  { key: 'goats', emoji: '🐐' },
  { key: 'aquatic', emoji: '🐟' }
]

export default function About() {
  const { t } = useLanguage()
  const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation()
  const { elementRef: visualRef, isVisible: visualVisible } = useScrollAnimation()
  const { elementRef: speciesRef, isVisible: speciesVisible } = useScrollAnimation()

  return (
    <section className={`${styles.about} section`} id="about">
      <div className="container">
        <SectionHeader
          tag={t('about.tag')}
          title={t('about.title')}
        />

        <div className={styles.content}>
          <div
            ref={textRef}
            className={`${styles.text} ${textVisible ? styles.animate : ''}`}
          >
            <p className={styles.lead}>{t('about.lead')}</p>
            <p>{t('about.text')}</p>
          </div>

          <div
            ref={visualRef}
            className={`${styles.visual} ${visualVisible ? styles.animate : ''}`}
          >
            <div className={styles.imageGrid}>
              <div className={`${styles.imgWrapper} ${styles.main}`}>
                <img src="/images/Vertical img1.jpg" alt="Livestock Research" loading="lazy" />
              </div>
              <div className={`${styles.imgWrapper} ${styles.secondary}`}>
                <img src="/images/Vertical img2.jpg" alt="Genetic Analysis" loading="lazy" />
              </div>
            </div>
            <div className={styles.floatingCard}>
              <div className={styles.floatingIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <span>{t('about.govCertified')}</span>
            </div>
          </div>
        </div>

        <div
          ref={speciesRef}
          className={`${styles.speciesShowcase} ${speciesVisible ? styles.animate : ''}`}
        >
          <h3 className={styles.speciesTitle}>{t('about.speciesTitle')}</h3>
          <div className={styles.speciesGrid}>
            {species.map(({ key, emoji }) => (
              <div key={key} className={styles.speciesItem}>
                <div className={styles.speciesIcon}>{emoji}</div>
                <span>{t(`about.species.${key}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
