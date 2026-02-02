import { useLanguage } from '../../../hooks/useLanguage'
import { useScrollToSection } from '../../../hooks/useScrollToSection'
import styles from './Footer.module.css'

const quickLinks = [
  { id: 'about', key: 'nav.about' },
  { id: 'services-overview', key: 'nav.whatWeDo' },
  { id: 'impact', key: 'nav.whyItMatters' },
  { id: 'success', key: 'nav.success' }
]

const serviceLinks = [
  { key: 'packages.standard.name' },
  { key: 'packages.advanced.name' },
  { key: 'packages.partnership.name' }
]

export default function Footer() {
  const { t } = useLanguage()
  const { scrollToSection } = useScrollToSection()

  const handleClick = (e, id) => {
    e.preventDefault()
    scrollToSection(id)
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <img
              src="/images/National Livestock and Fisheries Development Program - logo.svg"
              alt="NFLDP Logo"
              className={styles.logo}
            />
            <p>{t('footer.description')}</p>
          </div>

          <div className={styles.links}>
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              {quickLinks.map(link => (
                <li key={link.id}>
                  <a href={`#${link.id}`} onClick={(e) => handleClick(e, link.id)}>
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.links}>
            <h4>{t('footer.services')}</h4>
            <ul>
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a href="#packages" onClick={(e) => handleClick(e, 'packages')}>
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.contact}>
            <h4>{t('footer.contact')}</h4>
            <a href="mailto:genome@nfdp.gov.sa">genome@nfdp.gov.sa</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>{t('footer.copyright')}</p>
          <div className={styles.govBadge}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            <span>{t('footer.govBadge')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
