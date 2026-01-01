import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions | Griffin Finance Limited',
  description: 'Terms and Conditions for Griffin Finance Limited',
}

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Terms and Conditions</h1>
          <div className="w-24 h-1 bg-primary mb-8"></div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the Griffin Finance Limited website 
                and services. Please read these Terms carefully before using our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Use License</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on Griffin Finance Limited&apos;s website for 
                personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under 
                this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Griffin Finance Limited provides various financial services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Consumer and business loans</li>
                <li>Funds management</li>
                <li>Asset finance</li>
                <li>Trade finance</li>
                <li>Project finance</li>
                <li>Debt securitization and covered bonds</li>
                <li>Loan syndication</li>
                <li>Financial consultancy</li>
                <li>Payment system services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                All services are subject to separate agreements and terms specific to each service offering.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The materials on Griffin Finance Limited&apos;s website are provided on an &apos;as is&apos; basis. Griffin Finance 
                Limited makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, 
                without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or 
                non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Further, Griffin Finance Limited does not warrant or make any representations concerning the accuracy, likely results, 
                or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked 
                to this site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Limitations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In no event shall Griffin Finance Limited or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the 
                materials on Griffin Finance Limited&apos;s website, even if Griffin Finance Limited or a Griffin Finance Limited 
                authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Accuracy of Materials</h2>
              <p className="text-gray-700 leading-relaxed">
                The materials appearing on Griffin Finance Limited&apos;s website could include technical, typographical, or 
                photographic errors. Griffin Finance Limited does not warrant that any of the materials on its website are accurate, 
                complete, or current. Griffin Finance Limited may make changes to the materials contained on its website at any time 
                without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Links</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Griffin Finance Limited has not reviewed all of the sites linked to its website and is not responsible for the contents 
                of any such linked site. The inclusion of any link does not imply endorsement by Griffin Finance Limited of the site. 
                Use of any such linked website is at the user&apos;s own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Modifications</h2>
              <p className="text-gray-700 leading-relaxed">
                Griffin Finance Limited may revise these terms of service for its website at any time without notice. By using this 
                website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the Federal Republic of Nigeria 
                and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
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


