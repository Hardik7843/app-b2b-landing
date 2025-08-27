import { ContactForm } from '@/components/ContactForm'
import { FeatureSection } from '@/components/FeatureSection'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-dark via-bg-light to-bg-dark">
      <Hero />
      <FeatureSection />
      <ContactForm />
    </div>
  )
}