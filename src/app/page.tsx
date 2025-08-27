import { ContactForm } from '@/components/ContactForm'
import { FeatureSection } from '@/components/FeatureSection'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <FeatureSection />
      <ContactForm />
    </div>
  )
}