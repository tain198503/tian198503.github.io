import { useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, Swords, Scroll, Gem } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function GuideCategories() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const title = section.querySelector('.cat-title')
    const cards = section.querySelectorAll('.cat-card')

    if (title) {
      gsap.set(title, { opacity: 0, y: 30 })
      ScrollTrigger.create({
        trigger: section,
        start: 'top 75%',
        onEnter: () => gsap.to(title, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }),
        once: true,
      })
    }

    gsap.set(cards, { opacity: 0, scale: 0.95 })
    ScrollTrigger.create({
      trigger: section,
      start: 'top 75%',
      onEnter: () => {
        gsap.to(cards, {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.1,
        })
      },
      once: true,
    })

    return () => { ScrollTrigger.getAll().forEach(st => st.kill()) }
  }, [])

  const categories = [
    {
      icon: <Shield size={48} color="#c0392b" strokeWidth={1.5} />,
      title: t('categories.boss.title'),
      desc: t('categories.boss.desc'),
      count: 32,
    },
    {
      icon: <Swords size={48} color="#c0392b" strokeWidth={1.5} />,
      title: t('categories.combat.title'),
      desc: t('categories.combat.desc'),
      count: 18,
    },
    {
      icon: <Scroll size={48} color="#c0392b" strokeWidth={1.5} />,
      title: t('categories.quest.title'),
      desc: t('categories.quest.desc'),
      count: 45,
    },
    {
      icon: <Gem size={48} color="#c0392b" strokeWidth={1.5} />,
      title: t('categories.explore.title'),
      desc: t('categories.explore.desc'),
      count: 28,
    },
  ]

  return (
    <section
      id="categories"
      ref={sectionRef}
      style={{
        background: '#f4f1ea',
        padding: '120px 48px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2
          className="cat-title"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#2c1810',
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          {t('categories.title')}
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            fontWeight: 300,
            color: 'rgba(44, 24, 16, 0.5)',
            textAlign: 'center',
            marginBottom: '80px',
          }}
        >
          {t('categories.subtitle')}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {categories.map((cat, i) => (
            <div
              key={i}
              className="cat-card"
              style={{
                background: '#fff',
                border: '1px solid rgba(44, 24, 16, 0.08)',
                padding: '48px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Corner accent */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 0,
                  height: 0,
                  borderStyle: 'solid',
                  borderWidth: '0 60px 60px 0',
                  borderColor: 'transparent #c0392b transparent transparent',
                  opacity: 0.1,
                  transition: 'all 0.4s ease',
                }}
              />
              <div style={{ marginBottom: '24px' }}>{cat.icon}</div>
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#2c1810',
                  marginBottom: '12px',
                }}
              >
                {cat.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  color: 'rgba(44, 24, 16, 0.6)',
                  lineHeight: 1.7,
                }}
              >
                {cat.desc}
              </p>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '12px',
                  color: '#e67e22',
                  marginTop: '20px',
                  display: 'inline-block',
                  letterSpacing: '1px',
                }}
              >
                {cat.count} {t('categories.articles')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
