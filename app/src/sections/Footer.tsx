import { useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const { t } = useLanguage()
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return

    const els = footer.querySelectorAll('.footer-animate')
    gsap.set(els, { opacity: 0, y: 20 })
    ScrollTrigger.create({
      trigger: footer,
      start: 'top 90%',
      onEnter: () => {
        gsap.to(els, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
        })
      },
      once: true,
    })

    return () => { ScrollTrigger.getAll().forEach(st => { if (st.trigger === footer) st.kill() }) }
  }, [])

  const columns = [
    {
      heading: t('footer.guides'),
      links: [
        { label: t('footer.boss'), href: '#guides' },
        { label: t('footer.combat'), href: '#combat' },
        { label: t('footer.quests'), href: '#guides' },
        { label: t('footer.explore'), href: '#guides' },
      ],
    },
    {
      heading: t('footer.community'),
      links: [
        { label: t('footer.reviews'), href: '#reviews' },
        { label: t('footer.forums'), href: '#' },
        { label: t('footer.discord'), href: '#' },
        { label: t('footer.submit'), href: '#' },
      ],
    },
    {
      heading: t('footer.resources'),
      links: [
        { label: t('footer.patches'), href: '#' },
        { label: t('footer.tier'), href: '#' },
        { label: t('footer.map'), href: '#' },
        { label: t('footer.downloads'), href: '#' },
      ],
    },
    {
      heading: t('footer.about'),
      links: [
        { label: t('footer.aboutUs'), href: '#' },
        { label: t('footer.contact'), href: '#' },
        { label: t('footer.privacy'), href: '#' },
        { label: t('footer.terms'), href: '#' },
      ],
    },
  ]

  return (
    <footer
      ref={footerRef}
      style={{
        background: '#2c1810',
        padding: '80px 48px 40px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Top row */}
        <div
          className="footer-animate"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '60px',
          }}
        >
          {/* Logo + tagline */}
          <div style={{ maxWidth: '320px' }}>
            <h3
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '24px',
                fontWeight: 700,
                letterSpacing: '3px',
                color: '#f4f1ea',
              }}
            >
              CRIMSON DESERT
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: 'rgba(244, 241, 234, 0.4)',
                marginTop: '16px',
                lineHeight: 1.7,
              }}
            >
              {t('footer.tagline')}
            </p>
          </div>

          {/* Link columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '60px',
              flex: 1,
              maxWidth: '700px',
            }}
          >
            {columns.map((col, i) => (
              <div key={i}>
                <h4
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '12px',
                    letterSpacing: '1.5px',
                    color: 'rgba(244, 241, 234, 0.3)',
                    marginBottom: '20px',
                    textTransform: 'uppercase',
                  }}
                >
                  {col.heading}
                </h4>
                {col.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.href}
                    style={{
                      display: 'block',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '14px',
                      color: 'rgba(244, 241, 234, 0.6)',
                      textDecoration: 'none',
                      lineHeight: 2.4,
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#f4f1ea')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(244, 241, 234, 0.6)')}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="footer-animate"
          style={{
            height: '1px',
            background: 'rgba(244, 241, 234, 0.08)',
            margin: '60px 0 40px',
          }}
        />

        {/* Bottom row */}
        <div
          className="footer-animate"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '12px',
              color: 'rgba(244, 241, 234, 0.3)',
            }}
          >
            {t('footer.copyright')}
          </span>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '24px' }}>
            {['X', 'YT', 'TW', 'DC'].map((icon, i) => (
              <a
                key={i}
                href="#"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '12px',
                  color: 'rgba(244, 241, 234, 0.4)',
                  textDecoration: 'none',
                  letterSpacing: '1px',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#f4f1ea')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(244, 241, 234, 0.4)')}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
