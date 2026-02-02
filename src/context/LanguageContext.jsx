import { createContext, useState, useEffect, useCallback } from 'react'
import translations from '../data/translations.json'

export const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('nfldp-lang')
    return saved || 'ar'
  })

  useEffect(() => {
    // Update HTML attributes
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr'

    // Save to localStorage
    localStorage.setItem('nfldp-lang', language)
  }, [language])

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar')
  }, [])

  const t = useCallback((key) => {
    const keys = key.split('.')
    let value = translations[language]

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key
      }
    }

    return value || key
  }, [language])

  const getLocalizedText = useCallback((textObj) => {
    if (typeof textObj === 'string') return textObj
    if (textObj && typeof textObj === 'object') {
      return textObj[language] || textObj.ar || textObj.en || ''
    }
    return ''
  }, [language])

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    getLocalizedText,
    isRTL: language === 'ar'
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
