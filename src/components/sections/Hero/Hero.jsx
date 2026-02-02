import { useLanguage } from '../../../hooks/useLanguage'
import { useScrollToSection } from '../../../hooks/useScrollToSection'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLanguage()
  const { scrollToSection } = useScrollToSection()

  const handleClick = (e, id) => {
    e.preventDefault()
    scrollToSection(id)
  }

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.videoContainer}>
        <video className={styles.video} autoPlay muted loop playsInline>
          <source src="/images/Vertical Introduction Video.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <span>{t('hero.badge')}</span>
        </div>
        <h1 className={styles.title}>
          <span className={`${styles.titleLine} ${styles.delay200}`}>{t('hero.titleLine1')}</span>
          <span className={`${styles.titleLine} ${styles.highlight} ${styles.delay400}`}>{t('hero.titleLine2')}</span>
          <span className={`${styles.titleLine} ${styles.delay600}`}>{t('hero.titleLine3')}</span>
        </h1>
        <p className={styles.description}>
          {t('hero.description')}
        </p>
        <div className={styles.cta}>
          <a
            href="#about"
            className="btn btn-primary"
            onClick={(e) => handleClick(e, 'about')}
          >
            {t('hero.discoverMore')}
          </a>
          <a
            href="#contact"
            className="btn btn-outline"
            onClick={(e) => handleClick(e, 'contact')}
          >
            {t('hero.contactUs')}
          </a>
        </div>
      </div>

      <div className={styles.scroll}>
        <span>{t('hero.explore')}</span>
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollDot}></div>
        </div>
      </div>
    </section>
  )
}
