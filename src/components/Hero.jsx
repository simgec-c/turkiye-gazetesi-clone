import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {
  useGSAP(() => {
    // "Türkiye Gazetesi" yazısı için yumuşak bir beliriş
    gsap.to('#hero-title', { opacity: 1, delay: 0.2, duration: 1 })
    
    // Canva'dan gelen görsel için aşağıdan yukarıya kayarak beliriş (Apple tarzı)
    gsap.to('#hero-img', { opacity: 1, y: -20, delay: 0.6, duration: 1.5, ease: 'power2.out' })
  }, [])

  return (
    <section id="hero">
      <div className="flex flex-col items-center relative top-12 md:top-20 z-20">
        <h1 id="hero-title" className="z-10 relative opacity-0">Türkiye Gazetesi</h1>
        {/* Canva'dan gelen görselin üstünde çok fazla şeffaf boşluk olduğu için negatif margin (eksi boşluk) ekleyerek yukarı çektik. 
            Eğer daha da yakınlaştırmak isterseniz -mt-20 değerini -mt-32 veya -mt-40 olarak değiştirebilirsiniz. */}
        <img id="hero-img" src={`${import.meta.env.BASE_URL}title2.png`} alt="Türkiye Gazetesi" className="-mt-38 md:-mt-46 relative z-0 opacity-0 translate-y-10" />
      </div>
      <video src={`${import.meta.env.BASE_URL}videos/hero.mp4`} autoPlay muted playsInline className="-mt-15 md:-mt-32 relative z-10" />
      <button className="!bg-red-600 hover:!bg-white">Satın al</button>
      <p> ilk ay abonelik 49 ₺'den başlayan fiyatlarla.</p>
    </section>
  )
}

export default Hero
