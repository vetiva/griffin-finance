'use client'

import Link from 'next/link'
import { FaCaretUp } from 'react-icons/fa'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-100 py-12 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <img
              src="/img/logo-green.png"
              alt="Griffin Finance Limited"
              className="h-10"
            />
          </Link>
        </div>

        {/* Footer Links */}
        <div className="text-center text-sm text-gray-600 space-y-2">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href="/cookie-policy"
              className="hover:text-primary transition-colors"
            >
              Cookie Policy
            </Link>
            <span className="text-gray-400">|</span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-primary transition-colors"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>

        {/* Top Link */}
        <div className="flex justify-center mt-8">
          <button
            onClick={scrollToTop}
            className="p-3 bg-primary text-white rounded-full hover:bg-opacity-90 transition-all hover:scale-110 shadow-lg"
            aria-label="Scroll to top"
          >
            <FaCaretUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}

