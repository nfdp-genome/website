import { useLanguage } from '../../../hooks/useLanguage'
import { useScrollToSection } from '../../../hooks/useScrollToSection'
import { useMultipleScrollAnimations } from '../../../hooks/useScrollAnimation'
import SectionHeader from '../../common/SectionHeader'
import styles from './Packages.module.css'

const packagesData = [
  { key: 'standard', featured: false },
  { key: 'advanced', featured: true },
  { key: 'partnership', featured: false }
]

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 13l4 4L19 7"/>
  </svg>
)

export default function Packages() {
  const { t } = useLanguage()
  const { scrollToSection } = useScrollToSection()
  const { setRef, isVisible } = useMultipleScrollAnimations(packagesData.length, { staggerDelay: 100 })

  const handleClick = (e) => {
    e.preventDefault()
    scrollToSection('contact')
  }

  return (
    <section className={`${styles.packages} section`} id="packages">
      <div className="container">
        <SectionHeader
          tag={t('packages.tag')}
          title={t('packages.title')}
          center
        />

        <div className={styles.grid}>
          {packagesData.map((pkg, index) => (
            <div
              key={pkg.key}
              ref={setRef(index)}
              className={`${styles.card} ${pkg.featured ? styles.featured : ''} ${isVisible(index) ? styles.animate : ''}`}
            >
              {pkg.featured && (
                <div className={styles.popular}>{t('packages.mostPopular')}</div>
              )}
              <div className={styles.header}>
                <h3>{t(`packages.${pkg.key}.name`)}</h3>
                <div className={styles.badge}>{t(`packages.${pkg.key}.badge`)}</div>
              </div>
              <ul className={styles.features}>
                {t(`packages.${pkg.key}.features`).map((feature, idx) => (
                  <li key={idx}>
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn ${pkg.featured ? 'btn-primary' : 'btn-outline-dark'}`}
                onClick={handleClick}
              >
                {t('packages.inquireNow')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
