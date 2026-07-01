import { useEffect, useRef } from 'react'
import './SparkleHero.css'

function SparkleHero({ title, subtitle, breadcrumb }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2.5 + 0.5
        this.speedX = (Math.random() - 0.5) * 0.4
        this.speedY = (Math.random() - 0.5) * 0.4 - 0.3
        this.opacity = Math.random() * 0.7 + 0.2
        this.life = 0
        this.maxLife = Math.random() * 200 + 100
        this.isStar = Math.random() < 0.2
        this.twinkle = Math.random() * Math.PI * 2
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.life++
        this.twinkle += 0.05
        if (this.life > this.maxLife) this.reset()
      }
      draw() {
        const fade = this.life < 20
          ? this.life / 20
          : this.life > this.maxLife - 30
          ? (this.maxLife - this.life) / 30
          : 1
        const alpha = this.opacity * fade * (0.7 + 0.3 * Math.sin(this.twinkle))
        ctx.save()
        ctx.globalAlpha = alpha

        if (this.isStar) {
          // Draw sparkle star
          ctx.translate(this.x, this.y)
          const arms = 4
          const outerR = this.size * 3
          const innerR = this.size * 1.2
          ctx.beginPath()
          for (let i = 0; i < arms * 2; i++) {
            const angle = (i * Math.PI) / arms
            const r = i % 2 === 0 ? outerR : innerR
            i === 0
              ? ctx.moveTo(Math.cos(angle) * r, Math.sin(angle) * r)
              : ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r)
          }
          ctx.closePath()
          const starGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, outerR)
          starGrad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`)
          starGrad.addColorStop(0.4, `rgba(8, 210, 220, ${alpha * 0.8})`)
          starGrad.addColorStop(1, `rgba(8, 131, 149, 0)`)
          ctx.fillStyle = starGrad
          ctx.fill()
        } else {
          // Draw glowing dot
          const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 4)
          grad.addColorStop(0, `rgba(180, 255, 255, ${alpha})`)
          grad.addColorStop(0.3, `rgba(8, 210, 220, ${alpha * 0.6})`)
          grad.addColorStop(1, `rgba(8, 131, 149, 0)`)
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2)
          ctx.fillStyle = grad
          ctx.fill()
          // Bright core
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size * 0.6, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(220, 255, 255, ${alpha})`
          ctx.fill()
        }
        ctx.restore()
      }
    }

    // Init 60 particles
    for (let i = 0; i < 60; i++) {
      const p = new Particle()
      p.life = Math.random() * p.maxLife
      particles.push(p)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="sparkle-hero">
      <div className="sparkle-hero-bg" />
      <canvas ref={canvasRef} className="sparkle-canvas" />
      <div className="sparkle-hero-content">
        {breadcrumb && (
          <p className="sparkle-breadcrumb">{breadcrumb}</p>
        )}
        <h1 className="sparkle-title">{title}</h1>
        {subtitle && <p className="sparkle-subtitle">{subtitle}</p>}
      </div>
    </section>
  )
}

export default SparkleHero