import { Link } from 'react-router-dom'
import { useLanguage } from '../../../hooks/useLanguage'
import { useMultipleScrollAnimations } from '../../../hooks/useScrollAnimation'
import { formatDate } from '../../../utils/helpers'
import SectionHeader from '../../common/SectionHeader'
import newsData from '../../../data/news.json'
import styles from './News.module.css'

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
)

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

export default function News() {
  const { t, language, getLocalizedText } = useLanguage()
  const { setRef, isVisible } = useMultipleScrollAnimations(newsData.length, { staggerDelay: 100 })

  const featuredNews = newsData.find(item => item.featured)
  const otherNews = newsData.filter(item => !item.featured)

  return (
    <section className={`${styles.news} section`} id="news">
      <div className="container">
        <SectionHeader
          tag={t('news.tag')}
          title={t('news.title')}
          subtitle={t('news.subtitle')}
          center
        />

        <div className={styles.grid}>
          {featuredNews && (
            <article
              ref={setRef(0)}
              className={`${styles.card} ${styles.featured} ${isVisible(0) ? styles.animate : ''}`}
            >
              <div className={styles.image}>
                <img src={featuredNews.image} alt={getLocalizedText(featuredNews.title)} loading="lazy" />
                <span className={styles.category}>{getLocalizedText(featuredNews.category)}</span>
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.date}>
                    <CalendarIcon />
                    <span>{formatDate(featuredNews.date, language)}</span>
                  </span>
                </div>
                <h3>{getLocalizedText(featuredNews.title)}</h3>
                <p>{getLocalizedText(featuredNews.excerpt)}</p>
                <Link to={`/news/${featuredNews.id}`} className={styles.link}>
                  {t('news.readMore')}
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          )}

          {otherNews.map((item, index) => (
            <article
              key={item.id}
              ref={setRef(index + 1)}
              className={`${styles.card} ${isVisible(index + 1) ? styles.animate : ''}`}
            >
              <div className={styles.image}>
                <img src={item.image} alt={getLocalizedText(item.title)} loading="lazy" />
                <span className={styles.category}>{getLocalizedText(item.category)}</span>
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.date}>
                    <CalendarIcon />
                    <span>{formatDate(item.date, language)}</span>
                  </span>
                </div>
                <h3>{getLocalizedText(item.title)}</h3>
                <p>{getLocalizedText(item.excerpt)}</p>
                <Link to={`/news/${item.id}`} className={styles.link}>
                  {t('news.readMore')}
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
