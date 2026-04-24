'use client'

import { useState } from 'react'
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')
    
    try {
      // Send to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }
      
      // Success
      setSubmitStatus('success')
      setSubmitMessage('Thank you for your message! We will get back to you soon.')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      
      // Optional: Open email client as fallback
      // window.location.href = mailtoLink
      
    } catch (error: unknown) {
      // Error handling
      const fallbackMessage =
        'Sorry, there was an error sending your message. Please try again or contact us directly at info@griffin-finance.com'
      const errorMessage =
        error instanceof Error && error.message.trim().length > 0
          ? error.message
          : fallbackMessage

      setSubmitStatus('error')
      setSubmitMessage(errorMessage)
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
        setSubmitMessage('')
      }, 5000)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-[#8a6530] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white/90">
            We&apos;d love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-gray-600 mb-8">
                    We&apos;re here to help. Reach out to us through any of the following channels.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                        <FaPhone className="text-primary text-xl" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Call Us</h3>
                      <p className="text-gray-600">
                        <a href="tel:+234-1-2700657-8" className="hover:text-primary transition-colors block">
                          +234-1-2700657-8
                        </a>
                        <a href="tel:+234-1-2719570" className="hover:text-primary transition-colors block">
                          +234-1-2719570
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                        <FaMapMarkerAlt className="text-primary text-xl" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Office</h3>
                      <p className="text-gray-600">
                        Plot 266B, Kofo Abayomi Street,<br />
                        Victoria Island, Lagos. Nigeria
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                        <FaEnvelope className="text-primary text-xl" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">Email</h3>
                      <p className="text-gray-600">
                        <a
                          href="mailto:info@griffin-finance.com"
                          className="hover:text-primary transition-colors"
                        >
                          info@griffin-finance.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  {/* Status Message */}
                  {submitStatus !== 'idle' && (
                    <div
                      className={`p-4 rounded-lg flex items-start space-x-3 ${
                        submitStatus === 'success'
                          ? 'bg-green-50 border border-green-200'
                          : 'bg-red-50 border border-red-200'
                      }`}
                    >
                      {submitStatus === 'success' ? (
                        <FaCheckCircle className="text-green-600 text-xl flex-shrink-0 mt-0.5" />
                      ) : (
                        <FaExclamationCircle className="text-red-600 text-xl flex-shrink-0 mt-0.5" />
                      )}
                      <p
                        className={`text-sm ${
                          submitStatus === 'success' ? 'text-green-800' : 'text-red-800'
                        }`}
                      >
                        {submitMessage}
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
