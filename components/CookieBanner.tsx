'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    nonNecessary: false,
    marketing: false,
  })

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    localStorage.setItem('cookiePreferences', JSON.stringify({ ...preferences, nonNecessary: true, marketing: true }))
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    localStorage.setItem('cookiePreferences', JSON.stringify({ ...preferences, nonNecessary: false, marketing: false }))
    setIsVisible(false)
  }

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', 'custom')
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences))
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t-2 border-primary z-50 p-6 max-h-[90vh] overflow-y-auto">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800">Cookie Policy</h3>
          
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              We take your privacy seriously and only process your personal information to make your experience better while you use this website.
              In accordance with NDPA/GDPR, and any applicable regulations, continuing to use this platform indicates your consent to the processing of your personal data by <strong>Griffin Finance Limited</strong> as detailed in our{' '}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>.
            </p>
            <p>
              Our site also uses cookies to enhance your experience while you are here. You can modify your preference using the option below.
              For more detailed information about the cookies we use, see our{' '}
              <a href="/cookie-policy" className="text-primary hover:underline">
                Cookie Policy
              </a>.
            </p>
          </div>

          {showPreferences && (
            <div className="mt-4 space-y-4 p-4 bg-gray-50 rounded-lg">
              <div className="space-y-2">
                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <strong>Necessary Cookies</strong> (Required)
                    <p className="text-xs text-gray-500 mt-1">
                      These cookies are essential for basic website functions and security. They do not store personal data.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="ml-4 w-5 h-5 text-primary"
                  />
                </label>
              </div>

              <div className="space-y-2">
                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <strong>Non-Necessary Cookies</strong>
                    <p className="text-xs text-gray-500 mt-1">
                      These cookies collect user data for analytics, ads, and embedded content.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.nonNecessary}
                    onChange={(e) =>
                      setPreferences({ ...preferences, nonNecessary: e.target.checked })
                    }
                    className="ml-4 w-5 h-5 text-primary"
                  />
                </label>
              </div>

              <div className="space-y-2">
                <label className="flex items-center justify-between cursor-pointer">
                  <div>
                    <strong>Marketing Cookies</strong>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) =>
                      setPreferences({ ...preferences, marketing: e.target.checked })
                    }
                    className="ml-4 w-5 h-5 text-primary"
                  />
                </label>
              </div>

              <button
                onClick={savePreferences}
                className="w-full mt-4 px-6 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors"
              >
                Save & Continue
              </button>
            </div>
          )}

          <div className="flex flex-wrap gap-3 mt-6">
            <button
              onClick={acceptCookies}
              className="px-6 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors font-medium"
            >
              Accept All
            </button>
            <button
              onClick={rejectCookies}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors font-medium"
            >
              Reject All
            </button>
            <button
              onClick={() => setShowPreferences(!showPreferences)}
              className="px-6 py-2 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors font-medium"
            >
              Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

