import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useNavigate, useLocation } from 'react-router'
import { Menu, X, ChevronDown, Globe, ScrollText, Map, Package } from 'lucide-react'

interface NavigationProps {
  lenisRef: React.MutableRefObject<any>
}

export default function Navigation({ lenisRef }: NavigationProps) {
  const { t, language, setLanguage } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langDropdown, setLangDropdown] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    if (!isHome) { navigate('/'); setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 300); return }
    const el = document.getElementById(id)
    if (el && lenisRef.current) { lenisRef.current.scrollTo(el, { offset: -80 }) }
    else if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
  }

  const navLinks = [
    { key: 'nav.guides', target: 'guides', icon: <ScrollText size={14} /> },
    { key: 'nav.combat', target: 'combat', icon: <Map size={14} /> },
    { key: 'nav.community', target: 'reviews', icon: <Package size={14} /> },
  ]

  const languages: { code: 'en' | 'zh' | 'ja'; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'zh', label: '中文' },
    { code: 'ja', label: '日本語' },
  ]

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '80px', zIndex: 50, background: scrolled ? 'rgba(26, 18, 11, 0.95)' : 'rgba(26, 18, 11, 0.88)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(244, 241, 234, 0.08)', transition: 'background 0.3s ease' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px' }}>
          {/* Logo */}
          <button onClick={() => isHome ? scrollTo('hero') : navigate('/')} style={{ fontFamily: "'Cinzel', serif", fontSize: '16px', fontWeight: 700, letterSpacing: '2px', color: '#f4f1ea', background: 'none', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
            CRIMSON DESERT
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {/* GUIDEScategory dropdown */}
            <div style={{ position: 'relative' }} className="nav-dropdown-wrap">
              <button style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', fontWeight: 400, letterSpacing: '1.5px', textTransform: 'uppercase' as const, color: 'rgba(244, 241, 234, 0.6)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.3s ease', padding: 0, display: 'flex', alignItems: 'center', gap: '4px' }} onClick={() => navigate('/guides')} onMouseEnter={(e) => (e.currentTarget.style.color = '#c0392b')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(244, 241, 234, 0.6)')}>
                GUIDES
              </button>
            </div>

            {navLinks.map((link) => (
              <button key={link.key} onClick={() => scrollTo(link.target)} style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', fontWeight: 400, letterSpacing: '1.5px', textTransform: 'uppercase' as const, color: 'rgba(244, 241, 234, 0.6)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.3s ease', padding: 0, display: 'flex', alignItems: 'center', gap: '4px' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#c0392b')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(244, 241, 234, 0.6)')}>
                {link.icon} {t(link.key)}
              </button>
            ))}
          </div>

          {/* Right: Language + CTA */}
          <div className="hidden md:flex" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Language Switcher */}
            <div style={{ position: 'relative' }}>
              <button onClick={() => setLangDropdown(!langDropdown)} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'Space Mono', monospace", fontSize: '11px', color: 'rgba(244, 241, 234, 0.6)', background: 'none', border: '1px solid rgba(244, 241, 234, 0.15)', padding: '6px 12px', cursor: 'pointer', letterSpacing: '1px' }}>
                <Globe size={14} /> {language === 'en' ? 'EN' : language === 'zh' ? '中文' : '日本語'} <ChevronDown size={12} />
              </button>
              {langDropdown && (
                <div style={{ position: 'absolute', top: '100%', right: 0, marginTop: '8px', background: '#2c1810', border: '1px solid rgba(244, 241, 234, 0.15)', minWidth: '120px', zIndex: 100 }}>
                  {languages.map((lang) => (
                    <button key={lang.code} onClick={() => { setLanguage(lang.code); setLangDropdown(false) }} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 16px', fontFamily: "'Space Mono', monospace", fontSize: '12px', color: language === lang.code ? '#c0392b' : 'rgba(244, 241, 234, 0.7)', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '1px' }} onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(192, 57, 43, 0.1)')} onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}>
                      {t(`lang.${lang.code}`)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <a href="https://www.crimsongames.com/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Cinzel', serif", fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#f4f1ea', background: '#c0392b', padding: '10px 22px', textDecoration: 'none', display: 'inline-block' }}>
              {t('nav.playNow')}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} style={{ background: 'none', border: 'none', color: '#f4f1ea', cursor: 'pointer', padding: '8px' }}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 49, background: 'rgba(26, 18, 11, 0.98)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '32px' }}>
          <button onClick={() => { navigate('/guides'); setMobileOpen(false) }} style={{ fontFamily: "'Cinzel', serif", fontSize: '24px', fontWeight: 700, letterSpacing: '3px', color: '#c0392b', background: 'none', border: 'none', cursor: 'pointer' }}>GUIDES</button>
          {navLinks.map((link) => (
            <button key={link.key} onClick={() => scrollTo(link.target)} style={{ fontFamily: "'Cinzel', serif", fontSize: '24px', fontWeight: 700, letterSpacing: '3px', color: '#f4f1ea', background: 'none', border: 'none', cursor: 'pointer' }}>
              {t(link.key)}
            </button>
          ))}
          <div style={{ display: 'flex', gap: '16px', marginTop: '20px' }}>
            {languages.map((lang) => (
              <button key={lang.code} onClick={() => setLanguage(lang.code)} style={{ fontFamily: "'Space Mono', monospace", fontSize: '14px', color: language === lang.code ? '#c0392b' : 'rgba(244, 241, 234, 0.5)', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '1px' }}>
                {lang.label}
              </button>
            ))}
          </div>
          <a href="https://www.crimsongames.com/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Cinzel', serif", fontSize: '14px', fontWeight: 700, letterSpacing: '2px', color: '#f4f1ea', background: '#c0392b', padding: '14px 40px', textDecoration: 'none', marginTop: '20px' }}>
            {t('nav.playNow')}
          </a>
        </div>
      )}
    </>
  )
}
