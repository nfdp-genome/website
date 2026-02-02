import { useLanguage } from '../../../hooks/useLanguage'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'
import styles from './Impact.module.css'

const impactItems = [
  'foodSecurity',
  'empowerFarmers',
  'publicHealth',
  'sustainable',
  'biodiversity',
  'nativeBreed'
]

export default function Impact() {
  const { t } = useLanguage()
  const { elementRef: visualRef, isVisible: visualVisible } = useScrollAnimation()
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation()

  return (
    <section className={`${styles.impact} section`} id="impact">
      <div className="container">
        <div className={styles.wrapper}>
          <div
            ref={visualRef}
            className={`${styles.visual} ${visualVisible ? styles.animate : ''}`}
          >
            <div className={styles.imageStack}>
              <img
                src="/images/Vertical img3.jpg"
                alt="Impact"
                className={styles.img1}
                loading="lazy"
              />
              <img
                src="/images/Vertical img4.jpg"
                alt="Research"
                className={styles.img2}
                loading="lazy"
              />
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>🎯</span>
              <span>{t('impact.badge')}</span>
            </div>
          </div>

          <div
            ref={contentRef}
            className={`${styles.content} ${contentVisible ? styles.animate : ''}`}
          >
            <span className={styles.tag}>{t('impact.tag')}</span>
            <h2 className={styles.title}>{t('impact.title')}</h2>
            <p className={styles.intro}>{t('impact.intro')}</p>

            <div className={styles.list}>
              {impactItems.map((item) => (
                <div key={item} className={styles.item}>
                  <div className={styles.icon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div className={styles.text}>
                    <h4>{t(`impact.items.${item}`)}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
