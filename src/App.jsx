import { Routes, Route } from 'react-router-dom'
import { useLanguage } from './hooks/useLanguage'
import Home from './pages/Home'
import NewsDetail from './pages/NewsDetail'

function App() {
  const { language } = useLanguage()

  return (
    <div className="app" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </div>
  )
}

export default App
