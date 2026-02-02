import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import BackToTop from '../components/common/BackToTop'
import Preloader from '../components/common/Preloader'

import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Impact from '../components/sections/Impact'
import Success from '../components/sections/Success'
import Packages from '../components/sections/Packages'
import News from '../components/sections/News'
import FAQ from '../components/sections/FAQ'
import Newsletter from '../components/sections/Newsletter'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />

      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Impact />
        <Success />
        <Packages />
        <News />
        <FAQ />
        <Newsletter />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
