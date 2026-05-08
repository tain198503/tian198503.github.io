import { useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CombatShowcase() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const lines = section.querySelectorAll('.animated-line')
    lines.forEach((el) => {
      gsap.set(el, { backgroundSize: '0% 100%' })
      ScrollTrigger.create({
        trigger: el,
        start: 'top 70%',
        onEnter: () => {
          gsap.to(el, {
            backgroundSize: '100% 100%',
            duration: 0.8,
            ease: 'power2.inOut',
          })
        },
        once: true,
      })
    })

    return () => { ScrollTrigger.getAll().forEach(st => { if (st.trigger && section.contains(st.trigger as Element)) st.kill() }) }
  }, [])

  return (
    <section
      id="combat"
      ref={sectionRef}
      style={{
        background: '#1a120b',
        padding: '160px 48px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2
          className="animated-line"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'transparent',
            backgroundImage: 'linear-gradient(90deg, #c0392b, #e67e22)',
            backgroundRepeat: 'no-repeat',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '40px',
            lineHeight: 1.2,
          }}
        >
          {t('combat.title')}
        </h2>
        <p
          className="animated-line"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '18px',
            fontWeight: 300,
            color: 'transparent',
            backgroundImage: 'linear-gradient(90deg, #c0392b, #e67e22)',
            backgroundRepeat: 'no-repeat',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.8,
            maxWidth: '640px',
          }}
        >
          {t('combat.body')}
        </p>
        <a
          href="#guides"
          className="animated-line"
          style={{
            display: 'inline-block',
            marginTop: '48px',
            fontFamily: "'Cinzel', serif",
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '2px',
            color: 'transparent',
            backgroundImage: 'linear-gradient(90deg, #c0392b, #e67e22)',
            backgroundRepeat: 'no-repeat',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            padding: '16px 40px',
            border: '1px solid rgba(244, 241, 234, 0.3)',
            backgroundColor: 'rgba(244, 241, 234, 0.05)',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.4s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(192, 57, 43, 0.2)'
            e.currentTarget.style.borderColor = '#c0392b'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(244, 241, 234, 0.05)'
            e.currentTarget.style.borderColor = 'rgba(244, 241, 234, 0.3)'
          }}
        >
          {t('combat.cta')}
        </a>
      </div>
    </section>
  )
}
