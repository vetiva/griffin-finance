import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Griffin Finance Limited',
  description: 'Privacy Policy for Griffin Finance Limited in accordance with the Nigerian Data Protection Act (NDPA) and GDPR',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
          <div className="w-24 h-1 bg-primary mb-8"></div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            {/* Section 1: Introduction/Scope */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction / Scope</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Privacy Policy is prepared in accordance with the provisions of the Nigerian Data Protection Act (NDPA) and, 
                by extension, the EU General Data Protection Regulation (GDPR). It sets out how Griffin Finance Limited (hereinafter 
                called &quot;GFL&quot;) applies and complies with the principles of the regulations in processing the personal data of 
                individuals, clients, vendors, and even third parties that interact with GFL.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For personal data of individuals, this document also highlights their rights and covers the data subject(s) whose 
                personal data is collected and processed in compliance with the NDPA.
              </p>
            </section>

            {/* Section 2: Roles and Responsibilities */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Roles and Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed">
                GFL&apos;s Data Protection Officer (DPO) is responsible for ensuring that this document is correct and up-to-date. 
                The DPO also ensures that data subjects are duly notified prior to the collection and processing of their personal 
                data by GFL, including data collected via GFL&apos;s website. All GFL employees/staff who interact with personal data 
                must also ensure to follow the provisions in this policy document.
              </p>
            </section>

            {/* Section 3: Policy Statement */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Policy Statement</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">3.1 Who We Are</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                GFL is a Finance House licensed by the Central Bank of Nigeria. Due to the nature of GFL&apos;s business and the fact 
                that GFL provides financial services across the country, GFL is mandated to collect and process personal data of its clients.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 What Personal Data Do We Need?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The personal data we would collect and process, depending on the particular processing requirement, are under the following categories:
              </p>

              {/* Data Types Table */}
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-200 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Personal Data Type</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Data / Sources</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Identity Data</td>
                      <td className="border border-gray-300 px-4 py-2">Full Name, maiden name, marital status, title, biometric information, national identification number (NIN), passport details, driver&apos;s licence details, date of birth, gender, address, employment details and citizenship.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Contact Data</td>
                      <td className="border border-gray-300 px-4 py-2">Address, Email Address and Telephone Numbers. Information received during contact with face-to-face meetings, phone calls, emails, letters and SMS.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Financial Data</td>
                      <td className="border border-gray-300 px-4 py-2">Bank account information, Bank Verification Number (BVN), credit history, financial position, status and account number.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Technical Data</td>
                      <td className="border border-gray-300 px-4 py-2">Internet protocol (IP) address, login data, details of browser and operating system, time zone setting and location, browser plug-in types and versions, platforms and other technology such as device id, geolocation, IP, model and user agent on the devices used to access GFL&apos;s website.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Profile Data</td>
                      <td className="border border-gray-300 px-4 py-2">Includes username and password.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Job Application Data</td>
                      <td className="border border-gray-300 px-4 py-2">Data submitted throughout the recruitment process e.g. name, email address. Any personal information you provide to GFL as part of the recruitment process.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Usage Data</td>
                      <td className="border border-gray-300 px-4 py-2">Includes information about how data subject uses our website, products and services.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Marketing and Communications Data</td>
                      <td className="border border-gray-300 px-4 py-2">Information about data subject communications with GFL. Preferences in receiving marketing e-mails and consents given by data subject to GFL.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Others</td>
                      <td className="border border-gray-300 px-4 py-2">CCTV/Video footage whenever you come into our premises and telephone conversations via calls made through any of our contact centre lines.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Where the personal data we need to collect may fall under a special category of sensitive personal data, our lawful 
                basis of processing will be the explicit consent of the data subject, compliance with a legal obligation, or for 
                legal proceedings/advice.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Why Do We Need the Data?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                GFL ensures that the personal data collected and processed is necessary for the purpose of collection and shall not 
                collect or process more data than is reasonably required for a particular processing activity. In addition, every 
                processing purpose has at least one lawful basis for processing to safeguard the rights of the data subjects, as 
                listed below:
              </p>

              {/* Purposes Table */}
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-200 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Purpose of Processing</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Lawful Basis of Processing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Account creation</td>
                      <td className="border border-gray-300 px-4 py-2">Contract</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Identity verification and maintenance of records</td>
                      <td className="border border-gray-300 px-4 py-2">Compliance with a legal obligation in which GFL is subject.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Vendor validation/information processing</td>
                      <td className="border border-gray-300 px-4 py-2">Contract</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Employment</td>
                      <td className="border border-gray-300 px-4 py-2">Contract</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Legitimate Interest Assessment */}
              <h4 className="text-lg font-semibold text-gray-800 mb-3 mt-4">Legitimate Interest Assessment</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                Where Legitimate Interest is considered the legal basis for processing personal data, GFL shall follow the steps below 
                in carrying out a Legitimate Interest Assessment:
              </p>
              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Determine the Purpose for Processing:</strong> GFL will establish the exact reason for the processing and how it benefits the organisation, including description of the processing objective, likelihood of meeting the objective, benefits to the organisation, and impact of not processing.</li>
                <li><strong>Determine the Necessity of the Processing:</strong> GFL will establish why the processing must take place, how it relates to expected benefits, and any alternatives considered.</li>
                <li><strong>Balance the identified interest with the Privacy Interest of the Data Subjects:</strong> Considerations include: who the data subjects are, relationship with GFL, what personal data is processed, impact on data subject, and how the data subject would react.</li>
              </ol>
              <p className="text-gray-700 leading-relaxed mb-4">
                GFL records this information in line with this policy, data protection impact assessment, and data inventory.
              </p>

              {/* Consent */}
              <h4 className="text-lg font-semibold text-gray-800 mb-3">4. Consent</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                GFL requires the explicit consent of customers, visitors, and other relevant stakeholders (&quot;data subjects&quot;) to process 
                collected personal data. Visitors to GFL&apos;s website are expected to read and understand the website privacy notice and 
                then agree to the website&apos;s terms of use; and by consenting to this privacy policy, data subjects are giving us the 
                permission to use/process their personal data specifically for the purpose identified before collection.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                If, for any reason, GFL is requesting sensitive personal data from data subjects, they will be rightly notified why 
                and how the information will be used.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Where processing relates to a child under 18 years old, as in the case of NDPA or 16 years in the case of GDPR, GFL 
                shall demonstrate that consent has been provided by the person who holds parental responsibility over the child.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may withdraw consent at any time by requesting for Withdrawal of Consent form, following the GFL Withdrawal of 
                Consent Procedure.
              </p>
            </section>

            {/* Section 5: Disclosure */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                GFL will not pass on your personal data to third parties without first obtaining your consent.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Where there is a need for a third party to process the personal data of data subjects, GFL will enter into a Data 
                Processing Agreement with the third party and be satisfied that the third party has adequate measures in place to 
                protect the data against accidental or unauthorised access, use, disclosure, loss, or destruction.
              </p>
            </section>

            {/* Section 6: Retention of Records */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Retention of Records</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In compliance with the GDPR/NDPA data retention policy, GFL will process your personal data for the duration of your 
                relationship with us and will retain the personal data for a period of <strong>6 years</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This retention period has been established to enable us to use the personal data for the necessary legitimate purposes 
                identified, in full compliance with the legal and regulatory requirements. When we no longer need to use your personal 
                information, we will delete it from our systems and records, and/or take steps to encrypt it to protect your identity.
              </p>
            </section>

            {/* Section 7: Data Subject Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Data Subject Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Data subjects, according to the provision of the GDPR/NDPA, have certain rights. At any point while GFL is in possession 
                of or processing your personal data, you, the data subject, have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Request a copy of the information that we hold about you</li>
                <li>Correct the data that we hold about you that is inaccurate or incomplete</li>
                <li>Ask for the data we hold about you to be erased from our systems/records</li>
                <li>Restrict processing of your personal data where certain conditions apply</li>
                <li>Have the data we hold about you transferred to another organisation</li>
                <li>Object to certain types of processing like direct marketing</li>
                <li>Object to automated processing like profiling, as well as the right to be subject to the legal effects of automated processing or profiling</li>
                <li>Judicial review, in the event that GFL refuses your request under rights of access, we will provide you with a reason as to why</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                All of the above requests will be forwarded on should there be a third party involved in the processing of your personal data.
              </p>
            </section>

            {/* Section 8: DSAR Procedure */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Data Subject Access Request Procedure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                GFL maintains a procedure for handling Data Subject Access Requests (&quot;DSARs&quot;) in accordance with the Nigeria Data 
                Protection Act and applicable regulations:
              </p>
              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                <li>Data Subjects may submit requests relating to their personal data through GFL&apos;s designated privacy contact channels, highlighted in clause 9 below.</li>
                <li>Upon receipt of a request, GFL shall take reasonable steps to verify the identity of the requester before processing the request or disclosing any personal data.</li>
                <li>Requests are reviewed by the DPO to determine the appropriate response and whether any legal or regulatory exemptions apply.</li>
                <li>GFL shall respond to valid requests within the timeframe prescribed under applicable law and may request additional information where necessary to process the request.</li>
                <li>Where GFL is unable to comply with a request, whether in whole or in part, the Data Subject shall be informed of the reason for such decision, subject to applicable legal restrictions.</li>
                <li>GFL maintains records of all Data Subject requests received and actions taken in response thereto as part of its accountability obligations.</li>
              </ol>
            </section>

            {/* Section 9: Complaints and Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Complaints</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If for any reason a data subject wishes to make a complaint about how GFL (or any of GFL&apos;s third parties) processes 
                their personal data, or how their complaint has been handled, they have the right to lodge a complaint directly with 
                the Data Protection Officer of GFL.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Contact Us</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Data Protection Officer (DPO)</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Email: <a href="mailto:gflcompliance@griffin-finance.com" className="text-primary hover:underline">gflcompliance@griffin-finance.com</a>
                </p>
                <p className="text-gray-700">
                  Telephone: <a href="tel:09139350341" className="text-primary hover:underline">09139350341</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}