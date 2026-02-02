import { useState } from 'react'
import { useLanguage } from '../../../hooks/useLanguage'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'
import styles from './Newsletter.module.css'

const roles = [
  'farmer',
  'researcher',
  'veterinarian',
  'policymaker',
  'student',
  'industry',
  'other'
]

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
)

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
  </svg>
)

export default function Newsletter() {
  const { t } = useLanguage()
  const { elementRef, isVisible } = useScrollAnimation()
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      setRole('')

      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 3000)
    }, 1500)
  }

  const getButtonText = () => {
    switch (status) {
      case 'loading':
        return t('newsletter.subscribing')
      case 'success':
        return t('newsletter.subscribed')
      default:
        return t('newsletter.subscribe')
    }
  }

  return (
    <section className={`${styles.newsletter} section`} id="newsletter">
      <div className="container">
        <div
          ref={elementRef}
          className={`${styles.wrapper} ${isVisible ? styles.animate : ''}`}
        >
          <div className={styles.content}>
            <div className={styles.icon}>
              <MailIcon />
            </div>
            <h2 className={styles.title}>{t('newsletter.title')}</h2>
            <p className={styles.description}>{t('newsletter.description')}</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="newsletterEmail" className="sr-only">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="newsletterEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('newsletter.emailPlaceholder')}
                  required
                  disabled={status !== 'idle'}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="newsletterRole" className="sr-only">
                  {t('newsletter.rolePlaceholder')}
                </label>
                <select
                  id="newsletterRole"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  disabled={status !== 'idle'}
                >
                  <option value="">{t('newsletter.rolePlaceholder')}</option>
                  {roles.map((r) => (
                    <option key={r} value={r}>
                      {t(`newsletter.roles.${r}`)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className={`${styles.btn} ${status === 'success' ? styles.success : ''}`}
              disabled={status !== 'idle'}
            >
              <span>{getButtonText()}</span>
              <SendIcon />
            </button>
            <p className={styles.privacy}>{t('newsletter.privacy')}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
