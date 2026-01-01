import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | Griffin Finance Limited',
  description: 'Cookie Policy for Griffin Finance Limited',
}

export default function CookiePolicy() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Cookie Policy</h1>
          <div className="w-24 h-1 bg-primary mb-8"></div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Cookies allow a website to recognize your device and store some information about your preferences or past actions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Griffin Finance Limited uses cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.</li>
                <li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                <li><strong>Functional Cookies:</strong> These cookies allow the website to remember choices you make and provide enhanced, personalized features.</li>
                <li><strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites to display relevant advertisements.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Types of Cookies We Use</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Necessary Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  These cookies are essential for the website to function and cannot be switched off. They are usually set in response 
                  to actions made by you, such as setting your privacy preferences or filling in forms.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Performance Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. 
                  They help us know which pages are most and least popular.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Functional Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by 
                  third-party providers whose services we have added to our pages.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.4 Marketing Cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  These cookies may be set through our site by our advertising partners. They may be used to build a profile of your 
                  interests and show you relevant content on other sites.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Managing Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually 
                modify your browser settings to decline cookies if you prefer.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                However, please note that disabling cookies may affect the functionality of our website and may prevent you from 
                accessing certain features.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can manage your cookie preferences through:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Your browser settings</li>
                <li>Our cookie consent banner (when available)</li>
                <li>Third-party opt-out tools</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, 
                deliver advertisements, and so on. These third-party cookies are subject to the respective privacy policies of these 
                third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Changes to This Cookie Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy 
                on this page and updating the &quot;Last Updated&quot; date. You are advised to review this Cookie Policy periodically 
                for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Griffin Finance Limited</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Plot 266B, Kofo Abayomi Street, Victoria Island, Lagos. Nigeria
                </p>
                <p className="text-gray-700 mb-2">
                  Email: <a href="mailto:info@griffin-finance.com" className="text-primary hover:underline">info@griffin-finance.com</a>
                </p>
                <p className="text-gray-700">
                  Phone: <a href="tel:+234-1-2700657-8" className="text-primary hover:underline">+234-1-2700657-8</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}


