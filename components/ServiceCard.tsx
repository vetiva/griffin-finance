'use client'

import { IconType } from 'react-icons'

interface ServiceCardProps {
  icon: IconType
  title: string
  description: string
  index: number
}

export default function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <div
      className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full border-l-4 border-primary hover:scale-105 hover:-translate-y-2 overflow-hidden"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
      
      <div className="flex flex-col items-center text-center h-full relative z-10">
        {/* 3D Icon with enhanced effects */}
        <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary opacity-20 rounded-full blur-2xl group-hover:opacity-40 group-hover:blur-3xl transition-all duration-500 scale-150"></div>
            {/* Icon container with 3D effect */}
            <div className="relative bg-gradient-to-br from-primary to-[#8a6530] p-4 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:rotate-[-5deg]">
              <Icon 
                className="relative text-white text-3xl" 
                style={{ 
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
                  transform: 'perspective(1000px) rotateX(5deg)',
                }} 
              />
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </div>
  )
}

