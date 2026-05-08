import { useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { Link } from 'react-router'
import { allGuides } from '../data/guidesData'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function FeaturedGuides() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const title = section.querySelector('.fg-title')
    if (title) {
      gsap.set(title, { opacity: 0, x: -30 })
      ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
        onEnter: () => gsap.to(title, { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' }),
        once: true,
      })
    }

    const cards = section.querySelectorAll('.fg-card')
    gsap.set(cards, { opacity: 0, y: 40 })
    ScrollTrigger.create({
      trigger: section,
      start: 'top 70%',
      onEnter: () => {
        gsap.to(cards, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 })
      },
      once: true,
    })

    return () => { ScrollTrigger.getAll().forEach(st => { if (st.trigger === section) st.kill() }) }
  }, [])

  // Featured guides from all categories - 12 guides
  const featuredIds = ['kailok', 'beginner-master', 'combat-basics', 'mounts-guide', 'abyss-guide', 'fishing-guide', 'fast-travel-system', 'skill-tree-build', 'horse-taming-mounts', 'cooking-crafting', 'chapter1-walkthrough', 'combat-mastery']
  const featured = featuredIds.map(id => allGuides.find(g => g.id === id)).filter(Boolean)

  const tagColors: Record<string, string> = {
    'CHAPTER 2': '#6b4c3b', 'CHAPTER 3': '#8b4513', 'CHAPTER 5': '#7c3b3b', 'CHAPTER 7': '#5b4c7c',
    'CHAPTER 9': '#3b5b7c', 'CHAPTER 11': '#7c5b3b', 'OPTIONAL': '#4a7c59', 'ENDGAME': '#7c3b3b',
    'COMBAT': '#c0392b', 'SKILLS': '#e67e22', 'WEAPONS': '#d35400', 'EARLY': '#27ae60',
    'PvP': '#7c3b3b', 'BEGINNER': '#27ae60', 'LIFE': '#2980b9', 'CAMP': '#8e44ad',
    'EXPLORATION': '#8e44ad', 'MOUNTS': '#d35400', 'FISHING': '#2980b9', 'CRAFTING': '#e67e22',
    'STORY': '#c0392b', 'BOSS': '#c0392b', 'SYSTEM': '#e67e22',
  }

  return (
    <section id="guides" ref={sectionRef} style={{ background: '#1a120b', padding: '120px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="fg-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '60px' }}>
          <div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#f4f1ea' }}>
              {t('guides.title')}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'rgba(244, 241, 234, 0.4)', marginTop: '8px' }}>
              {allGuides.length} detailed guides，Click to read the full guide
            </p>
          </div>
          <Link to="/guides" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: "'Space Mono', monospace", fontSize: '13px', letterSpacing: '1.5px', color: '#c0392b', textDecoration: 'none', transition: 'color 0.3s', padding: '8px 16px', border: '1px solid rgba(192, 57, 43, 0.3)' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#e67e22')} onMouseLeave={(e) => (e.currentTarget.style.color = '#c0392b')}>
            VIEW ALL <ArrowRight size={14} />
          </Link>
        </div>

        {/* Guide Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {featured.map((guide) => guide && (
            <Link
              key={guide.id}
              to={`/guide/${guide.id}`}
              className="fg-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(44, 24, 16, 0.35)',
                border: '1px solid rgba(244, 241, 234, 0.06)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(44, 24, 16, 0.6)'
                e.currentTarget.style.borderColor = 'rgba(192, 57, 43, 0.2)'
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(44, 24, 16, 0.35)'
                e.currentTarget.style.borderColor = 'rgba(244, 241, 234, 0.06)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                <img src={guide.image} alt={guide.titleShort} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }} />
                <div style={{ position: 'absolute', top: '12px', left: '12px', fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '1.5px', color: '#fff', background: tagColors[guide.tag] || '#c0392b', padding: '3px 10px' }}>
                  {guide.tag}
                </div>
              </div>
              {/* Content */}
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 600, color: '#f4f1ea', lineHeight: 1.4, marginBottom: '8px' }}>
                  {guide.titleShort}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(244, 241, 234, 0.4)', lineHeight: 1.6, flex: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {guide.intro}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', paddingTop: '12px', borderTop: '1px solid rgba(244, 241, 234, 0.06)' }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: 'rgba(244, 241, 234, 0.3)', letterSpacing: '1px' }}>
                    {guide.sections.length} sections · {guide.tips.length} tips
                  </span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: '#c0392b', letterSpacing: '1px' }}>
                    READ →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
