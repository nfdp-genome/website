import { useLanguage } from '../../../hooks/useLanguage'
import { useMultipleScrollAnimations } from '../../../hooks/useScrollAnimation'
import SectionHeader from '../../common/SectionHeader'
import styles from './Services.module.css'

const servicesData = [
  {
    key: 'geneticAnalysis',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
      </svg>
    )
  },
  {
    key: 'dataAnalytics',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    )
  },
  {
    key: 'pathogenProtection',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    )
  },
  {
    key: 'internationalCollab',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
      </svg>
    )
  }
]

export default function Services() {
  const { t } = useLanguage()
  const { setRef, isVisible } = useMultipleScrollAnimations(servicesData.length, { staggerDelay: 100 })

  return (
    <section className={`${styles.services} section`} id="services-overview">
      <div className="container">
        <SectionHeader
          tag={t('services.tag')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
          center
        />

        <div className={styles.grid}>
          {servicesData.map((service, index) => (
            <div
              key={service.key}
              ref={setRef(index)}
              className={`${styles.card} ${isVisible(index) ? styles.animate : ''}`}
            >
              <div className={styles.icon}>
                {service.icon}
              </div>
              <h3>{t(`services.${service.key}.title`)}</h3>
              <p>{t(`services.${service.key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bgPattern}></div>
    </section>
  )
}
