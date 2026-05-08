import { useRef, useEffect } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  alpha: number
  life: number
  maxLife: number
}

export default function SandCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000, active: false })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const colors = ['#e74c3c', '#c0392b', '#e67e22', '#f39c12', '#d35400', '#2c1810', '#4a2c17', '#3d1f00', '#8b4513']
    const PARTICLE_COUNT = 2500

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Initialize particles
    const particles: Particle[] = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.2,
        life: 0,
        maxLife: Math.random() * 200 + 100,
      })
    }
    particlesRef.current = particles

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
      mouseRef.current.active = true
    }
    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    let time = 0
    const animate = () => {
      time += 0.016
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mouse = mouseRef.current
      const windX = Math.sin(time * 0.5) * 0.3
      const windY = Math.cos(time * 0.3) * 0.15

      for (const p of particlesRef.current) {
        p.life++

        // Wind + gravity
        p.vx += windX * 0.02 + (Math.random() - 0.5) * 0.01
        p.vy += 0.01 + windY * 0.02 + (Math.random() - 0.5) * 0.01

        // Mouse repulsion/attraction
        if (mouse.active) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 200 && dist > 1) {
            const force = (1 - dist / 200) * 2
            p.vx += (dx / dist) * force
            p.vy += (dy / dist) * force
          }
        }

        // Friction
        p.vx *= 0.98
        p.vy *= 0.98

        // Move
        p.x += p.vx
        p.y += p.vy

        // Wrap around
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Fade near edges of life
        const lifeRatio = p.life / p.maxLife
        const fadeAlpha = lifeRatio < 0.1 ? lifeRatio / 0.1 : lifeRatio > 0.9 ? (1 - lifeRatio) / 0.1 : 1
        const finalAlpha = p.alpha * fadeAlpha

        if (finalAlpha > 0.01) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fillStyle = p.color + Math.floor(finalAlpha * 255).toString(16).padStart(2, '0')
          ctx.fill()
        }

        // Respawn
        if (p.life >= p.maxLife) {
          p.x = Math.random() * canvas.width
          p.y = Math.random() * canvas.height
          p.vx = (Math.random() - 0.5) * 0.5
          p.vy = (Math.random() - 0.5) * 0.3
          p.life = 0
          p.alpha = Math.random() * 0.6 + 0.2
        }
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'auto',
      }}
    />
  )
}
