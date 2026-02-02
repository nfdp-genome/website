import { useState } from 'react'
import { useLanguage } from '../../../hooks/useLanguage'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'
import styles from './Contact.module.css'

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

const services = [
  { value: '', key: 'selectService' },
  { value: 'standard', key: 'packages.standard.name' },
  { value: 'advanced', key: 'packages.advanced.name' },
  { value: 'partnership', key: 'packages.partnership.name' },
  { value: 'other', key: 'common.other' }
]

export default function Contact() {
  const { t } = useLanguage()
  const { elementRef: infoRef, isVisible: infoVisible } = useScrollAnimation()
  const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle, loading, success

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate API call
    setTimeout(() => {
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        organization: '',
        service: '',
        message: ''
      })

      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 3000)
    }, 1500)
  }

  const getButtonText = () => {
    switch (status) {
      case 'loading':
        return t('contact.form.sending')
      case 'success':
        return t('contact.form.sent')
      default:
        return t('contact.form.send')
    }
  }

  return (
    <section className={`${styles.contact} section`} id="contact">
      <div className="container">
        <div className={styles.wrapper}>
          <div
            ref={infoRef}
            className={`${styles.info} ${infoVisible ? styles.animate : ''}`}
          >
            <span className={styles.tag}>{t('contact.tag')}</span>
            <h2 className={styles.title}>{t('contact.title')}</h2>
            <p>{t('contact.subtitle')}</p>

            <div className={styles.details}>
              <div className={styles.item}>
                <div className={styles.icon}>
                  <MailIcon />
                </div>
                <div className={styles.text}>
                  <span className={styles.label}>{t('contact.email')}</span>
                  <a href="mailto:genome@nfdp.gov.sa">genome@nfdp.gov.sa</a>
                </div>
              </div>
            </div>

            <div className={styles.image}>
              <img src="/images/Vertical img5.jpg" alt="Contact" loading="lazy" />
            </div>
          </div>

          <div
            ref={formRef}
            className={`${styles.formWrapper} ${formVisible ? styles.animate : ''}`}
          >
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('contact.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status !== 'idle'}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status !== 'idle'}
                />
              </div>
              <div className="form-group">
                <label htmlFor="organization">{t('contact.form.organization')}</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  disabled={status !== 'idle'}
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">{t('contact.form.service')}</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  disabled={status !== 'idle'}
                >
                  {services.map(s => (
                    <option key={s.value} value={s.value}>
                      {s.value === '' ? t('contact.form.selectService') : t(s.key)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group full">
                <label htmlFor="message">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status !== 'idle'}
                />
              </div>
              <button
                type="submit"
                className={`btn btn-primary btn-full ${status === 'success' ? styles.success : ''}`}
                disabled={status !== 'idle'}
              >
                <span>{getButtonText()}</span>
                <SendIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
