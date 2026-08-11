'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState('hr')

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('white-belt-language') === 'en' ? 'en' : 'hr'
    setLanguageState(savedLanguage)
    document.documentElement.lang = savedLanguage
  }, [])

  const setLanguage = useCallback((nextLanguage) => {
    const normalizedLanguage = nextLanguage === 'en' ? 'en' : 'hr'
    setLanguageState(normalizedLanguage)
    document.documentElement.lang = normalizedLanguage
    window.localStorage.setItem('white-belt-language', normalizedLanguage)
  }, [])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      copy: translations[language],
    }),
    [language, setLanguage],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
