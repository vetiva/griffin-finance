'use client'

export default function HeroSlider() {
  // Single slide with dark-skinned African American working on laptop demonstrating finance
  const image = '/img/MT5FCoa6.png'

  return (
    <div className="relative min-h-[600px] overflow-hidden">
      {/* Animated Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-zoom"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${image})`,
          backgroundSize: '120%',
        }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-20 flex items-center justify-center min-h-[600px] px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            GRIFFIN FINANCE LIMITED
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Your Trusted Financial Partner
          </p>
        </div>
      </div>
    </div>
  )
}

