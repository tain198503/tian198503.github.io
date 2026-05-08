import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Send, X } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

interface Review {
  quote: string
  author: string
  role: string
  rating: number
}

export default function CommunityReviews() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const [showForm, setShowForm] = useState(false)
  const [reviewerName, setReviewerName] = useState('')
  const [reviewText, setReviewText] = useState('')
  const [reviewRating, setReviewRating] = useState(5)
  const [submitted, setSubmitted] = useState(false)
  const [reviews, setReviews] = useState<Review[]>([
    { quote: "Crimson Desert redefines what an open-world action RPG can be. The combat is the deepest I've ever experienced, and the world of Pywel feels truly alive.", author: "Marcus Chen", role: "GAME CRITIC, IGN", rating: 5 },
    { quote: "After 200 hours, I'm still discovering new secrets. The boss fights are masterpieces of design — challenging, fair, and incredibly satisfying to master.", author: "Sarah Williams", role: "STREAMER, 500K FOLLOWERS", rating: 5 },
    { quote: "The 'watch and learn' mechanic is genius. Fighting bosses feels like a real martial arts journey where you grow alongside your enemies.", author: "Takeshi Yamamoto", role: "RPG VETERAN", rating: 4 },
    { quote: "From the Broken Spear to the final showdown with Umbra, every moment feels epic. This is the Dark Souls successor we've been waiting for.", author: "Elena Rodriguez", role: "COMMUNITY LEAD, PEARL ABYSS", rating: 5 },
  ])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const cards = section.querySelectorAll('.review-card')
    gsap.set(cards, { opacity: 0, x: 80 })
    ScrollTrigger.create({
      trigger: section,
      start: 'top 75%',
      onEnter: () => {
        gsap.to(cards, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
        })
      },
      once: true,
    })

    return () => { ScrollTrigger.getAll().forEach(st => { if (st.trigger === section) st.kill() }) }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!reviewerName.trim() || !reviewText.trim()) return
    const newReview: Review = {
      quote: reviewText,
      author: reviewerName,
      role: "COMMUNITY MEMBER",
      rating: reviewRating,
    }
    setReviews([newReview, ...reviews])
    setSubmitted(true)
    setTimeout(() => {
      setShowForm(false)
      setSubmitted(false)
      setReviewerName('')
      setReviewText('')
      setReviewRating(5)
    }, 2000)
  }

  return (
    <section
      id="reviews"
      ref={sectionRef}
      style={{
        background: '#f4f1ea',
        padding: '120px 48px',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h2
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#2c1810',
                marginBottom: '16px',
              }}
            >
              {t('reviews.title')}
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                fontWeight: 300,
                color: 'rgba(44, 24, 16, 0.5)',
                marginBottom: '80px',
              }}
            >
              {t('reviews.subtitle')}
            </p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '2px',
              color: '#f4f1ea',
              background: '#c0392b',
              border: 'none',
              padding: '14px 32px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Send size={14} />
            {t('reviews.write')}
          </button>
        </div>

        {/* Write Review Form Modal */}
        {showForm && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              background: 'rgba(0,0,0,0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
            onClick={(e) => { if (e.target === e.currentTarget) setShowForm(false) }}
          >
            <div
              style={{
                background: '#fff',
                padding: '48px',
                maxWidth: '520px',
                width: '100%',
                position: 'relative',
              }}
            >
              <button
                onClick={() => setShowForm(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#2c1810',
                }}
              >
                <X size={24} />
              </button>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
                  <p style={{ fontFamily: "'Cinzel', serif", fontSize: '20px', color: '#2c1810' }}>
                    {t('reviews.thanks')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: '24px',
                      color: '#2c1810',
                      marginBottom: '24px',
                    }}
                  >
                    {t('reviews.write')}
                  </h3>
                  <div style={{ marginBottom: '20px' }}>
                    <label
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '11px',
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        color: 'rgba(44, 24, 16, 0.5)',
                        display: 'block',
                        marginBottom: '8px',
                      }}
                    >
                      {t('reviews.name')}
                    </label>
                    <input
                      type="text"
                      value={reviewerName}
                      onChange={(e) => setReviewerName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: '1px solid rgba(44, 24, 16, 0.15)',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '15px',
                        color: '#2c1810',
                        outline: 'none',
                      }}
                      required
                    />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '11px',
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        color: 'rgba(44, 24, 16, 0.5)',
                        display: 'block',
                        marginBottom: '8px',
                      }}
                    >
                      {t('reviews.rate')}
                    </label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {[1, 2, 3, 4, 5].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setReviewRating(s)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '4px',
                          }}
                        >
                          <Star
                            size={24}
                            fill={s <= reviewRating ? '#f39c12' : 'none'}
                            color={s <= reviewRating ? '#f39c12' : 'rgba(44,24,16,0.2)'}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <label
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '11px',
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        color: 'rgba(44, 24, 16, 0.5)',
                        display: 'block',
                        marginBottom: '8px',
                      }}
                    >
                      {t('reviews.review')}
                    </label>
                    <textarea
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      rows={4}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: '1px solid rgba(44, 24, 16, 0.15)',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '15px',
                        color: '#2c1810',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: '13px',
                      fontWeight: 700,
                      letterSpacing: '2px',
                      color: '#f4f1ea',
                      background: '#c0392b',
                      border: 'none',
                      padding: '16px 40px',
                      cursor: 'pointer',
                      width: '100%',
                    }}
                  >
                    {t('reviews.submit')}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Reviews row */}
        <div
          style={{
            display: 'flex',
            gap: '32px',
            overflowX: 'auto',
            paddingBottom: '20px',
            scrollbarWidth: 'none',
          }}
        >
          <style>{`
            .reviews-row::-webkit-scrollbar { display: none; }
          `}</style>
          {reviews.map((review, i) => (
            <div
              key={i}
              className="review-card"
              style={{
                background: '#fff',
                border: '1px solid rgba(44, 24, 16, 0.08)',
                padding: '40px',
                minWidth: '380px',
                maxWidth: '380px',
                borderRadius: '4px',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '64px',
                  color: 'rgba(192, 57, 43, 0.15)',
                  lineHeight: 1,
                  marginBottom: '-20px',
                }}
              >
                &ldquo;
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  color: 'rgba(44, 24, 16, 0.7)',
                  lineHeight: 1.7,
                  fontStyle: 'italic',
                }}
              >
                {review.quote}
              </p>
              <div
                style={{
                  width: '40px',
                  height: '1px',
                  background: 'rgba(44, 24, 16, 0.1)',
                  margin: '24px 0',
                }}
              />
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#2c1810',
                }}
              >
                {review.author}
              </p>
              <p
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '11px',
                  color: '#e67e22',
                  marginTop: '4px',
                  letterSpacing: '1px',
                }}
              >
                {review.role}
              </p>
              <div style={{ display: 'flex', gap: '4px', marginTop: '12px' }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={16}
                    fill={s <= review.rating ? '#f39c12' : 'none'}
                    color={s <= review.rating ? '#f39c12' : 'rgba(44,24,16,0.15)'}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
