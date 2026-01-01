'use client'

import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import HeroSlider from '@/components/HeroSlider'
import {
  FaMoneyBillWave,
  FaChartLine,
  FaAnchor,
  FaGlobe,
  FaHourglassHalf,
  FaCogs,
  FaUsers,
  FaBriefcase,
  FaCreditCard,
  FaArrowRight,
} from 'react-icons/fa'

const services = [
  {
    icon: FaMoneyBillWave,
    title: 'Consumer Loans',
    description:
      'GFL offers consumer and business loans to individuals and Micro-, Small- and Medium Enterprises (MSMEs) at affordable and competitive rates.',
  },
  {
    icon: FaChartLine,
    title: 'Funds Management',
    description:
      'We leverage our in-house competencies, group support and strategic alliances in managing funds for our clients in line with agreed investment objectives, tenor and rates.',
  },
  {
    icon: FaAnchor,
    title: 'Asset Finance',
    description:
      'We provide both Finance Lease and Hire Purchase asset-financing options to our clients. Finance Lease avails the obligor (borrower/lessee) the option of asset-purchase at the expiry of agreed lease period whilst Hire Purchase allows the borrower acquire goods or assets through payments in instalments over an agreed period.',
  },
  {
    icon: FaGlobe,
    title: 'Local and International Trade Finance',
    description:
      'GFL provides financial support to contractors and vendors in executing their local purchase orders (LPOs) and work-orders, and facilitates Imports and Exports of goods through its LPO Finance and Import-Export Finance offerings.',
  },
  {
    icon: FaHourglassHalf,
    title: 'Project Finance',
    description:
      'Asides supporting infrastructural/industrial projects with loanable funds to be repaid through expected cashflow of same projects, we provide financing for projects promoted by small scale ventures and public-private partnership and concessions.',
  },
  {
    icon: FaCogs,
    title: 'Debt Securitization & Covered Bonds',
    description:
      'GFL packages and markets asset-backed securities (ABS) against the cashflows of existing assets; thus providing financial support for the sell-side of the business.',
  },
  {
    icon: FaUsers,
    title: 'Loan Syndication',
    description:
      'For very large ticket projects, we provide financial solution to our clients through partnership with our financial institutions- both banks and non-banks, in harnessing funds through syndicated loan structures.',
  },
  {
    icon: FaBriefcase,
    title: 'Financial Consultancy',
    description: 'We offer financial advisory and consultancy services to our clients.',
  },
  {
    icon: FaCreditCard,
    title: 'Issuing of Vouchers, Coupons, Cards & Token Stamps',
    description: 'GFL provides payments-system services to its clients.',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Slider */}
      <section className="relative">
        <HeroSlider />
        
        {/* CTA Buttons Overlay */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 w-full max-w-4xl px-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg backdrop-blur-sm"
            >
              Our Services
              <FaArrowRight className="ml-2" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Griffin Finance Limited</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Griffin Finance Limited (&quot;GFL&quot;), a subsidiary of Vetiva Capital Management Limited (&quot;Vetiva Group&quot;),
              is licensed by the Central Bank of Nigeria to carry on business as a Finance Company. GFL runs one of the foremost
              non-bank financial intermediary boutiques in Nigeria with a corporate objective of providing financial and investment
              solutions that assist our clients achieve success within their expressed objectives. Our services include, but are not necessarily limited to the following:
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to meet your business and personal needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90">
            Contact us today to learn how we can help you achieve your financial goals
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Get in Touch
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
