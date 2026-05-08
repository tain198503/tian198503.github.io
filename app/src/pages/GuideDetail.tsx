import { useParams, Link } from 'react-router'
import { useEffect, useRef, useState } from 'react'
import { getGuideById, allGuides, type Guide } from '../data/guidesData'
import { ArrowLeft, Star, Clock, Sword, Shield, Heart, Zap } from 'lucide-react'
import gsap from 'gsap'

export default function GuideDetail() {
  const { id } = useParams<{ id: string }>()
  const guide = getGuideById(id || '')
  const contentRef = useRef<HTMLDivElement>(null)
  const [showAd, setShowAd] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (contentRef.current) {
      const els = contentRef.current.querySelectorAll('.gd-animate')
      gsap.set(els, { opacity: 0, y: 30 })
      gsap.to(els, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1, delay: 0.2 })
    }
    // Show inline ad after 3 seconds
    const timer = setTimeout(() => setShowAd(true), 3000)
    return () => clearTimeout(timer)
  }, [id])

  if (!guide) {
    return (
      <div style={{ minHeight: '100vh', background: '#1a120b', color: '#f4f1ea', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
        <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: '32px' }}>Guide Not Found</h1>
        <Link to="/" style={{ color: '#c0392b', fontFamily: "'Inter', sans-serif" }}>Back to Home</Link>
      </div>
    )
  }

  const relatedGuides = allGuides
    .filter((g: Guide) => g.tag === guide.tag && g.id !== guide.id)
    .slice(0, 3)

  const tagColors: Record<string, string> = {
    'CHAPTER 1': '#4a7c59',
    'CHAPTER 2': '#6b4c3b',
    'CHAPTER 3': '#8b4513',
    'OPTIONAL': '#5b4a7c',
    'ENDGAME': '#7c3b3b',
    'COMBAT': '#c0392b',
    'SKILLS': '#e67e22',
    'BEGINNER': '#27ae60',
    'LIFE': '#2980b9',
    'EXPLORATION': '#8e44ad',
    'MOUNTS': '#d35400',
  }

  return (
    <div style={{ minHeight: '100vh', background: '#1a120b' }}>
      {/* Header Image */}
      <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
        <img
          src={guide.image}
          alt={guide.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,18,11,0.3) 0%, #1a120b 100%)' }} />
        <div style={{ position: 'absolute', bottom: '40px', left: 0, right: 0, padding: '0 48px', maxWidth: '900px', margin: '0 auto' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(244, 241, 234, 0.6)',
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              textDecoration: 'none',
              marginBottom: '16px',
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#f4f1ea')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(244, 241, 234, 0.6)')}
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div
            style={{
              display: 'inline-block',
              fontFamily: "'Space Mono', monospace",
              fontSize: '11px',
              letterSpacing: '2px',
              color: '#fff',
              background: tagColors[guide.tag] || '#c0392b',
              padding: '4px 12px',
              marginBottom: '12px',
            }}
          >
            {guide.tag}
          </div>
          <h1
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 'clamp(24px, 4vw, 40px)',
              fontWeight: 700,
              color: '#f4f1ea',
              lineHeight: 1.2,
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
            }}
          >
            {guide.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 48px' }}>
        {/* Intro */}
        <div className="gd-animate" style={{ marginBottom: '48px' }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(244, 241, 234, 0.8)',
              borderLeft: '3px solid #c0392b',
              paddingLeft: '20px',
              fontStyle: 'italic',
            }}
          >
            {guide.intro}
          </p>
        </div>

        {/* Quick Info Bar */}
        <div
          className="gd-animate"
          style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            marginBottom: '48px',
            padding: '20px 24px',
            background: 'rgba(44, 24, 16, 0.5)',
            border: '1px solid rgba(244, 241, 234, 0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={16} color="#e67e22" />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: 'rgba(244, 241, 234, 0.6)' }}>Read time: ~8 min</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sword size={16} color="#c0392b" />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: 'rgba(244, 241, 234, 0.6)' }}>{guide.sections.length}  sections</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Star size={16} color="#f39c12" />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: 'rgba(244, 241, 234, 0.6)' }}>{guide.tips.length}  tips</span>
          </div>
        </div>

        {/* Ad Banner - Inline */}
        {showAd && (
          <div className="gd-animate" style={{ marginBottom: '48px' }}>
            <div
              style={{
                background: 'rgba(44, 24, 16, 0.5)',
                border: '1px dashed rgba(244, 241, 234, 0.15)',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #c0392b, #e67e22)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Zap size={20} color="#fff" />
                </div>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(244, 241, 234, 0.7)', fontWeight: 600 }}>Crimson Desert Official Store</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: 'rgba(244, 241, 234, 0.4)', marginTop: '2px' }}>Limited Offer - Game-themed figures, apparel & accessories</div>
                </div>
              </div>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: 'rgba(244, 241, 234, 0.3)', letterSpacing: '1px' }}>AD</span>
            </div>
          </div>
        )}

        {/* Sections */}
        {guide.sections.map((section, i) => (
          <div key={i} className="gd-animate" style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '24px',
                fontWeight: 700,
                color: '#f4f1ea',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  background: '#c0392b',
                  fontFamily: "'Cinzel', serif",
                  fontSize: '14px',
                  color: '#fff',
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </span>
              {section.heading}
            </h2>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                lineHeight: 1.8,
                color: 'rgba(244, 241, 234, 0.75)',
              }}
            >
              {section.content.split('/n').map((para, j) => (
                <p key={j} style={{ marginBottom: para.startsWith('-') || para.startsWith('Move') ? '8px' : '16px' }}>
                  {para.startsWith('-') ? (
                    <span style={{ display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#c0392b', flexShrink: 0 }}>•</span>
                      <span>{para.substring(1).trim()}</span>
                    </span>
                  ) : para.startsWith('Move') ? (
                    <span style={{ display: 'block', padding: '8px 12px', background: 'rgba(44, 24, 16, 0.3)', marginBottom: '8px', borderLeft: '2px solid #e67e22' }}>
                      <strong style={{ color: '#e67e22' }}>{para.split('——')[0]}</strong>
                      {para.includes('——') && <span> —— {para.split('——')[1]}</span>}
                    </span>
                  ) : para.match(/^\d+\./) ? (
                    <span style={{ display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#e67e22', fontWeight: 600, flexShrink: 0 }}>{para.match(/^\d+/)?.[0]}.</span>
                      <span>{para.replace(/^\d+\.\s*/, '')}</span>
                    </span>
                  ) : (
                    para
                  )}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Tips Box */}
        <div
          className="gd-animate"
          style={{
            background: 'rgba(192, 57, 43, 0.08)',
            border: '1px solid rgba(192, 57, 43, 0.2)',
            padding: '32px',
            marginBottom: '48px',
          }}
        >
          <h3
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '18px',
              color: '#c0392b',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Shield size={18} /> KEY TIPS
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {guide.tips.map((tip, i) => (
              <li
                key={i}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '15px',
                  color: 'rgba(244, 241, 234, 0.8)',
                  padding: '10px 0',
                  borderBottom: i < guide.tips.length - 1 ? '1px solid rgba(244, 241, 234, 0.05)' : 'none',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                }}
              >
                <Heart size={16} color="#c0392b" style={{ flexShrink: 0, marginTop: '3px' }} />
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Related Guides */}
        {relatedGuides.length > 0 && (
          <div className="gd-animate" style={{ marginBottom: '48px' }}>
            <h3
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '20px',
                color: '#f4f1ea',
                marginBottom: '24px',
              }}
            >
              RELATED GUIDES
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
              {relatedGuides.map((rg: Guide) => (
                <Link
                  key={rg.id}
                  to={`/guide/${rg.id}`}
                  style={{
                    display: 'flex',
                    gap: '12px',
                    padding: '16px',
                    background: 'rgba(44, 24, 16, 0.4)',
                    border: '1px solid rgba(244, 241, 234, 0.06)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(44, 24, 16, 0.7)'
                    e.currentTarget.style.borderColor = 'rgba(192, 57, 43, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(44, 24, 16, 0.4)'
                    e.currentTarget.style.borderColor = 'rgba(244, 241, 234, 0.06)'
                  }}
                >
                  <img src={rg.image} alt="" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: '#e67e22', letterSpacing: '1px' }}>{rg.tag}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#f4f1ea', marginTop: '4px', lineHeight: 1.4 }}>{rg.title.split('——')[0]}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Ad */}
        <div className="gd-animate" style={{ marginTop: '48px', padding: '24px', background: 'rgba(44, 24, 16, 0.4)', border: '1px dashed rgba(244, 241, 234, 0.1)' }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: 'rgba(244, 241, 234, 0.3)', letterSpacing: '2px' }}>AD</span>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(244, 241, 234, 0.4)', marginTop: '8px' }}>
              Join our Discord COMMUNITY to share GUIDES tips with thousands of players
            </p>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '48px',
          height: '48px',
          background: '#c0392b',
          color: '#f4f1ea',
          border: 'none',
          cursor: 'pointer',
          fontSize: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 40,
        }}
      >
        ↑
      </button>
    </div>
  )
}
