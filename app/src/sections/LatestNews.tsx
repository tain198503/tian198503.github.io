import { useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LatestNews() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const cards = section.querySelectorAll('.news-card')
    gsap.set(cards, { opacity: 0, y: 60 })

    const st = ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
        })
      },
      once: true,
    })

    return () => { st.kill() }
  }, [])

  const news = [
    {
      image: '/assets/news-1.jpg',
      date: 'MAR 29, 2026',
      title: t('news.card1.title') || 'Crimson Desert Surpasses 5 Million Players Worldwide',
      excerpt: t('news.card1.excerpt') || 'Pearl Abyss announces the milestone alongside a major content update featuring new Abyssal Dungeons and the long-awaited Dragon Mount system.',
    },
    {
      image: '/assets/news-2.jpg',
      date: 'MAR 15, 2026',
      title: t('news.card2.title') || 'Chapter 12 Boss Guide: How to Defeat Umbra',
      excerpt: t('news.card2.excerpt') || 'Our comprehensive walkthrough covers every phase of the final encounter, including dragon riding mechanics and optimal artifact loadouts.',
    },
    {
      image: '/assets/news-3.jpg',
      date: 'MAR 8, 2026',
      title: t('news.card3.title') || 'Best Early Game Weapons and Skills Tier List',
      excerpt: t('news.card3.excerpt') || 'From the Broken Spear to the Fire Greataxe, we rank every weapon and skill combination for new players starting their journey in Pywel.',
    },
  ]

  return (
    <section
      id="news"
      ref={sectionRef}
      style={{
        background: '#1a120b',
        padding: '120px 48px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#f4f1ea',
            textAlign: 'center',
            marginBottom: '16px',
          }}
        >
          {t('news.title')}
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            fontWeight: 300,
            color: 'rgba(244, 241, 234, 0.5)',
            textAlign: 'center',
            marginBottom: '80px',
          }}
        >
          {t('news.subtitle')}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}
        >
          {news.map((item, i) => (
            <div
              key={i}
              className="news-card"
              style={{
                cursor: 'pointer',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-8px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div style={{ borderRadius: '4px', overflow: 'hidden', marginBottom: '20px' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '11px',
                  color: '#e67e22',
                  letterSpacing: '1px',
                }}
              >
                {item.date}
              </span>
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#f4f1ea',
                  marginTop: '8px',
                  lineHeight: 1.4,
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#c0392b')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#f4f1ea')}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  color: 'rgba(244, 241, 234, 0.5)',
                  marginTop: '8px',
                  lineHeight: 1.6,
                }}
              >
                {item.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
