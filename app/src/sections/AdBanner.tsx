import { useLanguage } from '../contexts/LanguageContext'
import { useEffect, useRef } from 'react'

interface AdBannerProps {
  variant?: 'horizontal' | 'square' | 'sidebar' | 'inline'
  slot?: string
}

export default function AdBanner({ variant = 'horizontal', slot }: AdBannerProps) {
  const { t } = useLanguage()
  const adRef = useRef<HTMLDivElement>(null)

  const dims = variant === 'horizontal'
    ? { height: '90px', maxWidth: '728px', minHeight: '90px' }
    : variant === 'square'
    ? { height: '250px', maxWidth: '300px', minHeight: '250px' }
    : variant === 'sidebar'
    ? { height: '600px', maxWidth: '160px', minHeight: '600px' }
    : { height: 'auto', maxWidth: '728px', minHeight: '90px' }

  useEffect(() => {
    // Try to load Google AdSense ads if available
    if (adRef.current && (window as any).adsbygoogle) {
      try {
        ;(window as any).adsbygoogle.push({})
      } catch (e) {
        // AdSense not loaded, show placeholder
      }
    }
  }, [variant, slot])

  return (
    <div style={{ width: '100%', maxWidth: dims.maxWidth, margin: '0 auto', padding: variant === 'inline' ? '16px 0' : '0' }}>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(244, 241, 234, 0.25)', display: 'block', textAlign: 'center', marginBottom: '4px' }}>
        {t('ad.sponsored')} — Google AdSense
      </span>
      <div
        ref={adRef}
        style={{
          width: '100%',
          minHeight: dims.minHeight,
          background: 'rgba(26, 18, 11, 0.6)',
          border: '1px dashed rgba(244, 241, 234, 0.12)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Google AdSense ad slot */}
        <ins
          className="adsbygoogle"
          style={{ display: 'inline-block', width: '100%', height: dims.minHeight }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot={slot || (variant === 'horizontal' ? '1234567890' : variant === 'square' ? '0987654321' : '1122334455')}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        {/* Fallback content when AdSense not loaded */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', pointerEvents: 'none' }}>
          <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #c0392b, #e67e22)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>🎮</div>
          <div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'rgba(244, 241, 234, 0.45)', fontWeight: 600 }}>Google AdSense</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: 'rgba(244, 241, 234, 0.25)', marginTop: '2px' }}>Ad slot reserved — 728×90</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sticky sidebar ad for guide detail pages
export function AdSidebar() {
  return (
    <div style={{ position: 'sticky', top: '100px', width: '160px', flexShrink: 0 }} className="hidden lg:block">
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(244, 241, 234, 0.25)', textAlign: 'center', marginBottom: '4px' }}>AD</div>
      <div style={{ width: '160px', height: '600px', background: 'rgba(26, 18, 11, 0.6)', border: '1px dashed rgba(244, 241, 234, 0.12)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
        <ins className="adsbygoogle" style={{ display: 'inline-block', width: '160px', height: '600px' }} data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot="5544332211" />
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: 'rgba(244, 241, 234, 0.3)', textAlign: 'center', padding: '0 8px' }}>160×600 Ad slot</div>
      </div>
    </div>
  )
}

// Inline ad for within guide content
export function AdInline() {
  return (
    <div style={{ margin: '32px 0', padding: '20px', background: 'rgba(44, 24, 16, 0.4)', border: '1px dashed rgba(244, 241, 234, 0.08)', borderRadius: '4px' }}>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(244, 241, 234, 0.25)', textAlign: 'center', marginBottom: '8px' }}>Sponsored</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
        <div style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #c0392b, #e67e22)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>🏆</div>
        <div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(244, 241, 234, 0.6)', fontWeight: 600 }}>Crimson Desert Official Store</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'rgba(244, 241, 234, 0.35)', marginTop: '4px' }}>Limited Offer — Game-themed figures, apparel & accessories</div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: '#c0392b', marginTop: '6px', letterSpacing: '1px' }}>SHOP NOW →</div>
        </div>
      </div>
      <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot="6677889900" data-ad-format="auto" data-full-width-responsive="true" />
    </div>
  )
}
