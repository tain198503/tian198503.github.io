import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Newsletter() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const els = section.querySelectorAll('.nl-animate')
    gsap.set(els, { opacity: 0, y: 30 })
    ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(els, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.15,
        })
      },
      once: true,
    })

    return () => { ScrollTrigger.getAll().forEach(st => { if (st.trigger === section) st.kill() }) }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <section
      id="newsletter"
      ref={sectionRef}
      style={{
        background: '#c0392b',
        padding: '100px 48px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
        <h2
          className="nl-animate"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#f4f1ea',
            marginBottom: '16px',
          }}
        >
          {t('newsletter.title')}
        </h2>
        <p
          className="nl-animate"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            fontWeight: 300,
            color: 'rgba(244, 241, 234, 0.7)',
            maxWidth: '520px',
            margin: '0 auto 48px',
          }}
        >
          {t('newsletter.subtitle')}
        </p>

        {submitted ? (
          <p
            className="nl-animate"
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '20px',
              color: '#f4f1ea',
            }}
          >
            {t('newsletter.thanks')}
          </p>
        ) : (
          <form
            className="nl-animate"
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('newsletter.placeholder')}
              required
              style={{
                width: '360px',
                height: '56px',
                background: 'rgba(244, 241, 234, 0.1)',
                border: '1px solid rgba(244, 241, 234, 0.3)',
                color: '#f4f1ea',
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                padding: '0 24px',
                outline: 'none',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#f4f1ea')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(244, 241, 234, 0.3)')}
            />
            <button
              type="submit"
              style={{
                height: '56px',
                padding: '0 40px',
                fontFamily: "'Cinzel', serif",
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '2px',
                color: '#c0392b',
                background: '#f4f1ea',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#f4f1ea')}
            >
              {t('newsletter.submit')}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
