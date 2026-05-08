import { Link } from 'react-router'
import { useEffect, useRef } from 'react'
import { allGuides } from '../data/guidesData'
import { ArrowLeft, Sword, Shield, BookOpen, Mountain, Crosshair, Cog, Scroll } from 'lucide-react'
import gsap from 'gsap'

export default function GuidesHub() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (contentRef.current) {
      const els = contentRef.current.querySelectorAll('.hub-animate')
      gsap.set(els, { opacity: 0, y: 30 })
      gsap.to(els, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.08, delay: 0.2 })
    }
  }, [])

  const categories = [
    {
      key: 'boss',
      title: 'Boss GUIDES',
      desc: 'Detailed boss fight strategies and phase analysis',
      icon: <Sword size={28} color="#c0392b" />,
      color: '#c0392b',
      guides: allGuides.filter(g => ['CHAPTER 2', 'CHAPTER 3', 'CHAPTER 5', 'CHAPTER 7', 'CHAPTER 9', 'CHAPTER 11', 'OPTIONAL', 'ENDGAME', 'BOSS'].includes(g.tag)),
    },
    {
      key: 'story',
      title: 'STORY WALKTHROUGH',
      desc: 'Main story chapter complete walkthrough',
      icon: <Scroll size={28} color="#c0392b" />,
      color: '#c0392b',
      guides: allGuides.filter(g => g.tag === 'STORY'),
    },
    {
      key: 'combat',
      title: 'COMBAT GUIDES',
      desc: 'Combat system, skills & weapons guide',
      icon: <Shield size={28} color="#e67e22" />,
      color: '#e67e22',
      guides: allGuides.filter(g => ['COMBAT', 'SKILLS', 'WEAPONS', 'EARLY', 'PvP'].includes(g.tag)),
    },
    {
      key: 'system',
      title: 'SYSTEM GUIDES',
      desc: 'Fast travel, skill tree, mounts, cooking & more',
      icon: <Cog size={28} color="#e67e22" />,
      color: '#e67e22',
      guides: allGuides.filter(g => ['SYSTEM'].includes(g.tag)),
    },
    {
      key: 'beginner',
      title: 'BEGINNER GUIDES',
      desc: 'Survival & progression from scratch',
      icon: <BookOpen size={28} color="#27ae60" />,
      color: '#27ae60',
      guides: allGuides.filter(g => ['BEGINNER', 'LIFE', 'CAMP'].includes(g.tag)),
    },
    {
      key: 'explore',
      title: 'EXPLORATION & COLLECTION',
      desc: 'Abyss, mounts, travel, fishing & secrets',
      icon: <Mountain size={28} color="#8e44ad" />,
      color: '#8e44ad',
      guides: allGuides.filter(g => ['EXPLORATION', 'MOUNTS', 'FISHING', 'CRAFTING', 'TRAVEL'].includes(g.tag)),
    },
    {
      key: 'pvp',
      title: 'PvP ARENA',
      desc: 'Multiplayer modes & advanced tips',
      icon: <Crosshair size={28} color="#7c3b3b" />,
      color: '#7c3b3b',
      guides: allGuides.filter(g => g.tag === 'PvP'),
    },
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#1a120b', color: '#f4f1ea' }}>
      {/* Header */}
      <div style={{ background: '#2c1810', padding: '40px 48px', borderBottom: '1px solid rgba(244, 241, 234, 0.06)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(244, 241, 234, 0.5)', fontFamily: "'Inter', sans-serif", fontSize: '14px', textDecoration: 'none', marginBottom: '16px', transition: 'color 0.3s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#f4f1ea')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(244, 241, 234, 0.5)')}>
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, letterSpacing: '3px' }}>
            GUIDE HUB
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: 'rgba(244, 241, 234, 0.5)', marginTop: '8px' }}>
            {allGuides.length} detailed guides，Covering boss fights, story walkthroughs, combat systems, exploration & collection
          </p>
        </div>
      </div>

      {/* Categories */}
      <div ref={contentRef} style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 48px' }}>
        {categories.map((cat) => (
          cat.guides.length > 0 && (
            <div key={cat.key} className="hub-animate" style={{ marginBottom: '60px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                {cat.icon}
                <div>
                  <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: '24px', fontWeight: 700, color: '#f4f1ea' }}>{cat.title}</h2>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(244, 241, 234, 0.4)', marginTop: '2px' }}>{cat.desc} · {cat.guides.length}  guides</p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '16px' }}>
                {cat.guides.map((guide) => (
                  <Link
                    key={guide.id}
                    to={`/guide/${guide.id}`}
                    style={{ display: 'flex', gap: '16px', padding: '20px', background: 'rgba(44, 24, 16, 0.4)', border: '1px solid rgba(244, 241, 234, 0.06)', textDecoration: 'none', color: 'inherit', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(44, 24, 16, 0.7)'; e.currentTarget.style.borderColor = `${cat.color}40`; e.currentTarget.style.transform = 'translateX(4px)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(44, 24, 16, 0.4)'; e.currentTarget.style.borderColor = 'rgba(244, 241, 234, 0.06)'; e.currentTarget.style.transform = 'translateX(0)' }}
                  >
                    <img src={guide.image} alt="" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '1.5px', color: cat.color }}>{guide.tag}</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 600, color: '#f4f1ea', marginTop: '6px', lineHeight: 1.4 }}>{guide.titleShort}</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(244, 241, 234, 0.4)', marginTop: '8px', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{guide.intro}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  )
}
