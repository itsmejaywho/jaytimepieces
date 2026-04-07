import { useState, useEffect } from 'react'
import { HeroSection, PopularBrands, ReviewStats, BuyerProtection, WatchCatalog, Testimonials } from './sections'
import HomeSkeleton from './HomeSkeleton'
import './Home.css'

const Home = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <HomeSkeleton />

  return (
    <main className="home">
      <HeroSection />
      <PopularBrands />
      <ReviewStats />
      <BuyerProtection />
      <WatchCatalog />
      <Testimonials />
    </main>
  )
}

export default Home
