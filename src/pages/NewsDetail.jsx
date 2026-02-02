import { useParams, Link, Navigate } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import { formatDate } from '../utils/helpers'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import BackToTop from '../components/common/BackToTop'
import newsData from '../data/news.json'
import styles from './NewsDetail.module.css'

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
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
)

export default function NewsDetail() {
  const { id } = useParams()
  const { t, language, getLocalizedText } = useLanguage()

  const article = newsData.find(item => item.id === id)

  if (!article) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <Header />

      <main className={styles.main}>
        <div className="container">
          <Link to="/" className={styles.backLink}>
            <ArrowIcon />
            <span>{t('news.backToNews')}</span>
          </Link>

          <article className={styles.article}>
            <div className={styles.hero}>
              <img
                src={article.image}
                alt={getLocalizedText(article.title)}
                className={styles.image}
              />
              <div className={styles.overlay}></div>
              <div className={styles.heroContent}>
                <span className={styles.category}>
                  {getLocalizedText(article.category)}
                </span>
                <h1 className={styles.title}>
                  {getLocalizedText(article.title)}
                </h1>
                <div className={styles.meta}>
                  <span className={styles.date}>
                    <CalendarIcon />
                    <span>{formatDate(article.date, language)}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.content}>
              <p className={styles.excerpt}>
                {getLocalizedText(article.excerpt)}
              </p>
              <div className={styles.body}>
                {getLocalizedText(article.content).split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>

          <div className={styles.otherNews}>
            <h2>{t('news.tag')}</h2>
            <div className={styles.newsGrid}>
              {newsData
                .filter(item => item.id !== id)
                .slice(0, 2)
                .map(item => (
                  <Link
                    key={item.id}
                    to={`/news/${item.id}`}
                    className={styles.newsCard}
                  >
                    <div className={styles.newsImage}>
                      <img src={item.image} alt={getLocalizedText(item.title)} />
                    </div>
                    <div className={styles.newsContent}>
                      <span className={styles.newsCategory}>
                        {getLocalizedText(item.category)}
                      </span>
                      <h3>{getLocalizedText(item.title)}</h3>
                      <span className={styles.newsDate}>
                        {formatDate(item.date, language)}
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
