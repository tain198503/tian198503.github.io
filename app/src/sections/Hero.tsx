import { useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import SandCanvas from './SandCanvas'
import gsap from 'gsap'

interface HeroProps {
  lenisRef: React.MutableRefObject<any>
}

export default function Hero({ lenisRef }: HeroProps) {
  const { t } = useLanguage()
  const labelRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.fonts.ready.then(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      if (labelRef.current) {
        gsap.set(labelRef.current, { opacity: 0, y: 20 })
        tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
      }
      if (titleRef.current) {
        gsap.set(titleRef.current, { opacity: 0, y: 20 })
        tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      }
      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, { opacity: 0, y: 20 })
        tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      }
      if (ctaRef.current) {
        gsap.set(ctaRef.current, { opacity: 0, y: 20 })
        tl.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      }
      if (scrollRef.current) {
        gsap.set(scrollRef.current, { opacity: 0 })
        tl.to(scrollRef.current, { opacity: 1, duration: 0.6, ease: 'power3.out' }, '-=0.2')
      }
    })
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el && lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: -80 })
    }
  }

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
        background: '#1a120b',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          backgroundImage: 'url(/assets/news-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          mixBlendMode: 'screen',
        }}
      />

      {/* Sand particle canvas */}
      <SandCanvas />

      {/* Hero content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '0 48px 120px',
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        <div ref={labelRef} style={{ opacity: 0, marginBottom: '24px' }}>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '13px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'rgba(244, 241, 234, 0.5)',
            }}
          >
            {t('hero.label')}
          </span>
        </div>

        <h1
          ref={titleRef}
          style={{
            opacity: 0,
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(40px, 8vw, 72px)',
            fontWeight: 700,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            lineHeight: 1.1,
            color: '#f4f1ea',
            textShadow: '0 2px 30px rgba(0,0,0,0.7), 0 0 60px rgba(0,0,0,0.5)',
            maxWidth: '700px',
          }}
        >
          {t('hero.title')}
        </h1>

        <p
          ref={subtitleRef}
          style={{
            opacity: 0,
            fontFamily: "'Inter', sans-serif",
            fontSize: '18px',
            fontWeight: 300,
            lineHeight: 1.7,
            color: 'rgba(244, 241, 234, 0.7)',
            maxWidth: '520px',
            marginTop: '24px',
            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
          }}
        >
          {t('hero.subtitle')}
        </p>

        <div
          ref={ctaRef}
          style={{
            opacity: 0,
            display: 'flex',
            gap: '20px',
            marginTop: '48px',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => scrollTo('guides')}
            className="hero-cta-primary"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '2px',
              color: '#f4f1ea',
              background: 'rgba(244, 241, 234, 0.1)',
              border: '1px solid rgba(244, 241, 234, 0.3)',
              padding: '16px 40px',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(192, 57, 43, 0.2)'
              e.currentTarget.style.borderColor = '#c0392b'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(244, 241, 234, 0.1)'
              e.currentTarget.style.borderColor = 'rgba(244, 241, 234, 0.3)'
            }}
          >
            {t('hero.cta.primary')}
          </button>
          <button
            onClick={() => scrollTo('news')}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '2px',
              color: 'rgba(244, 241, 234, 0.6)',
              background: 'transparent',
              border: '1px solid rgba(244, 241, 234, 0.2)',
              padding: '16px 40px',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(244, 241, 234, 0.5)'
              e.currentTarget.style.color = '#f4f1ea'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(244, 241, 234, 0.2)'
              e.currentTarget.style.color = 'rgba(244, 241, 234, 0.6)'
            }}
          >
            {t('hero.cta.secondary')}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
          opacity: 0,
        }}
      >
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'rgba(244, 241, 234, 0.3)',
            animation: 'scrollPulse 1.5s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { transform: translateY(0); opacity: 0.3; }
          50% { transform: translateY(8px); opacity: 0.7; }
        }
      `}</style>
    </section>
  )
}
