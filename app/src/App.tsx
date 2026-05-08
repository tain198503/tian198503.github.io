import { useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router'
import { LanguageProvider } from './contexts/LanguageContext'
import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import LatestNews from './sections/LatestNews'
import AdBanner from './sections/AdBanner'
import GuideCategories from './sections/GuideCategories'
import FeaturedGuides from './sections/FeaturedGuides'
import CommunityReviews from './sections/CommunityReviews'
import CombatShowcase from './sections/CombatShowcase'
import Newsletter from './sections/Newsletter'
import Footer from './sections/Footer'
import GuideDetail from './pages/GuideDetail'
import GuidesHub from './pages/GuidesHub'
import Lenis from 'lenis'

function HomePage() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08 })
    lenisRef.current = lenis
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => { lenis.destroy() }
  }, [])

  return (
    <div>
      <Navigation lenisRef={lenisRef} />
      <Hero lenisRef={lenisRef} />
      <div style={{ background: '#1a120b', padding: '20px 48px' }}>
        <AdBanner variant="horizontal" />
      </div>
      <LatestNews />
      <div style={{ background: '#1a120b', padding: '20px 48px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px' }}><AdBanner variant="square" /></div>
          <div style={{ flex: 1, minWidth: '300px' }}><AdBanner variant="square" /></div>
        </div>
      </div>
      <GuideCategories />
      <FeaturedGuides />
      <div style={{ background: '#1a120b', padding: '20px 48px' }}>
        <AdBanner variant="horizontal" />
      </div>
      <CommunityReviews />
      <CombatShowcase />
      <Newsletter />
      <div style={{ background: '#2c1810', padding: '20px 48px' }}>
        <AdBanner variant="horizontal" />
      </div>
      <Footer />
    </div>
  )
}

function GuideDetailPage() {
  return (
    <div>
      <div style={{ height: '60px', background: 'rgba(26, 18, 11, 0.95)', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, display: 'flex', alignItems: 'center', padding: '0 48px' }}>
        <a href="/" style={{ fontFamily: "'Cinzel', serif", fontSize: '16px', fontWeight: 700, letterSpacing: '2px', color: '#f4f1ea', textDecoration: 'none' }}>
          CRIMSON DESERT
        </a>
      </div>
      <div style={{ height: '60px' }} />
      <GuideDetail />
    </div>
  )
}

function GuidesHubPage() {
  return (
    <div>
      <div style={{ height: '60px', background: 'rgba(26, 18, 11, 0.95)', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, display: 'flex', alignItems: 'center', padding: '0 48px' }}>
        <a href="/" style={{ fontFamily: "'Cinzel', serif", fontSize: '16px', fontWeight: 700, letterSpacing: '2px', color: '#f4f1ea', textDecoration: 'none' }}>
          CRIMSON DESERT
        </a>
      </div>
      <div style={{ height: '60px' }} />
      <GuidesHub />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guide/:id" element={<GuideDetailPage />} />
        <Route path="/guides" element={<GuidesHubPage />} />
      </Routes>
    </LanguageProvider>
  )
}
