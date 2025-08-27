interface FeatureBoxProps {
  icon: string
  title: string
  description: string
  gradient?: string
}

export function FeatureBox({ 
  icon, 
  title, 
  description, 
  gradient = "from-purple-500/20 to-cyan-500/20" 
}: FeatureBoxProps) {
  return (
    <div className="group relative">
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200`}></div>
      
      <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
        <div className="text-4xl mb-4 text-center">{icon}</div>
        
        <h3 className="text-xl font-semibold text-white mb-4 text-center">
          {title}
        </h3>
        
        <p className="text-white/70 text-center leading-relaxed">
          {description}
        </p>
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      </div>
    </div>
  )
}