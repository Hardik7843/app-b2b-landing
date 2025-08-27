import { FeatureBox } from "./FeatureBox"


const features = [
  {
    icon: '🤝',
    title: 'Stronger Customer Relationships',
    description: 'Collect data on loyal customers, understand their preferences, and create long-lasting connections.',
    gradient: 'from-yellow-500/20 to-orange-500/20'
  },
  {
    icon: '🍽️',
    title: 'Curated Food Categories',
    description: 'Easily organize your menu into custom categories, making browsing and ordering effortless for users.',
    gradient: 'from-pink-500/20 to-rose-500/20'
  },
  {
    icon: '📊',
    title: 'Smart Analytics',
    description: 'Gain insights into customer behavior, track top-selling dishes, and make data-driven decisions with ease.',
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: '🛒',
    title: 'Online & Offline Bookings',
    description: 'Seamlessly manage food orders and reservations across both online and offline channels in one place.',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: '🎯',
    title: 'Targeted Marketing',
    description: 'Engage frequent visitors with personalized campaigns and promotions to boost repeat sales.',
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    icon: '⭐',
    title: 'Customer Reviews & Feedback',
    description: 'Build trust and improve your service with genuine reviews, ratings, and comments from your customers.',
    gradient: 'from-indigo-500/20 to-purple-500/20'
  },
  
]


export function FeatureSection() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why You&apos;ll
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Love It</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We&apos;re building more than just a product – we&apos;re creating an experience that will transform how you work and play.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureBox
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  )
}