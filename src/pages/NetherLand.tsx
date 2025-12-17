
import SEO from '@/components/SEO'; // Ensure this path matches your project


const PlaneIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
);

const MicroscopeIcon = () => (
  <svg className="w-10 h-10 text-cyan-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
);

const EuroIcon = () => (
    <svg className="w-10 h-10 text-blue-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4"></path></svg>
);

const NetherLand = () => {
  return (
    <div className="font-sans text-gray-700">
      
      {/* --- SEO Configuration --- */}
      <SEO 
        title="IVF for Dutch Patients in India | Netherlands to India Medical Travel"
        description="Comprehensive guide for patients from the Netherlands seeking affordable IVF in India. Bypass waiting lists, access advanced fertility tech, and save up to 70%."
        keywords="IVF India Netherlands, Fertility Treatment for Dutch, Amsterdam to Delhi IVF, IVF Cost Comparison Euro, ICSI India, Medical Tourism Netherlands"
        canonical="https://veramedhealthsolutions.com/netherlands-ivf"
        ogType="article"
      />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-50 py-20 lg:py-28 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-white px-4 py-2 rounded-full border border-blue-100 shadow-sm mb-6">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Serving Patients from Amsterdam, Rotterdam & Utrecht</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Your Dream of Parenthood <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Is Closer Than You Think
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Skip the long waiting lists in the Netherlands. Access world-class <strong>IVF, ICSI, and Fertility treatments</strong> in India with higher success rates and personalized care at a fraction of the cost.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 flex items-center justify-center">
              <PlaneIcon />
              <span className="ml-2">Start Your Journey</span>
            </button>
            <button className="px-8 py-4 bg-white text-blue-600 border border-blue-100 font-bold rounded-full shadow hover:bg-gray-50 transition duration-300">
              Compare Euro Costs
            </button>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-30 -mr-10 -mt-10"></div> {/* Subtle Orange for NL reference */}
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 -ml-10 -mb-10"></div>
      </section>

      {/* --- WHY DUTCH PATIENTS CHOOSE INDIA --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Travel from the Netherlands?</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">While Dutch healthcare is excellent, fertility treatments often come with strict insurance caps (usually 3 cycles) and long waiting times.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-100 rounded-2xl shadow-lg bg-white hover:-translate-y-1 transition duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-2xl">⏳</div>
              <h3 className="text-xl font-bold mb-3">Zero Waiting Lists</h3>
              <p className="text-gray-600">
                In the Netherlands, waiting times for donor eggs or specialized IVF can take months or years. In India, treatment begins immediately upon your arrival.
              </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-2xl shadow-lg bg-white hover:-translate-y-1 transition duration-300">
              <MicroscopeIcon />
              <h3 className="text-xl font-bold mb-3">Advanced Technology</h3>
              <p className="text-gray-600">
                Indian clinics standardly use <strong>Embryoscope (Time-lapse), Laser Hatching, and PGS/PGD</strong> testing, which are often expensive add-ons or unavailable in basic Dutch protocols.
              </p>
            </div>

            <div className="p-8 border border-gray-100 rounded-2xl shadow-lg bg-white hover:-translate-y-1 transition duration-300">
              <EuroIcon />
              <h3 className="text-xl font-bold mb-3">Cost Efficiency</h3>
              <p className="text-gray-600">
                Even with flights and accommodation included, a full IVF cycle in India is significantly cheaper than private clinic costs in Europe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TREATMENT & COST --- */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Cost Comparison (Euros €)</h2>
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
                            <th className="p-5 font-semibold">Treatment</th>
                            <th className="p-5 font-semibold">Netherlands (Private)</th>
                            <th className="p-5 font-semibold">India (All Inclusive)</th>
                            <th className="p-5 font-semibold">Savings</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-blue-50 transition">
                            <td className="p-5 font-medium text-gray-900">Standard IVF Cycle</td>
                            <td className="p-5 text-gray-500">€4,500 - €6,000</td>
                            <td className="p-5 font-bold text-blue-600">€2,800 - €3,500</td>
                            <td className="p-5 text-green-600 font-bold">~40%</td>
                        </tr>
                        <tr className="hover:bg-blue-50 transition">
                            <td className="p-5 font-medium text-gray-900">ICSI (Micromanipulation)</td>
                            <td className="p-5 text-gray-500">€5,500+</td>
                            <td className="p-5 font-bold text-blue-600">€3,200 - €3,800</td>
                            <td className="p-5 text-green-600 font-bold">~45%</td>
                        </tr>
                        <tr className="hover:bg-blue-50 transition">
                            <td className="p-5 font-medium text-gray-900">Donor Egg Cycle</td>
                            <td className="p-5 text-gray-500">€8,000+ (Long Wait)</td>
                            <td className="p-5 font-bold text-blue-600">€5,000 - €6,500</td>
                            <td className="p-5 text-green-600 font-bold">High Access</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">* Indian costs typically include medication, consultation, and procedure fees.</p>
        </div>
      </section>

      {/* --- TRAVEL LOGISTICS --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Amsterdam to India: Smooth Travel</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <div className="space-y-6">
                        <div className="flex">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-xl font-bold text-gray-800">Direct Connectivity</h4>
                                <p className="text-gray-600 mt-1">
                                    <strong>KLM Royal Dutch Airlines</strong> offers excellent direct flights from Amsterdam Schiphol (AMS) to Delhi (DEL) and Mumbai (BOM), taking approximately 8-9 hours.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">2</div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-xl font-bold text-gray-800">e-Medical Visa</h4>
                                <p className="text-gray-600 mt-1">
                                    Dutch citizens enjoy a hassle-free, fully online <strong>e-Medical Visa</strong> process. We provide the mandatory Hospital Invitation Letter within 24 hours.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">3</div>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-xl font-bold text-gray-800">Stay & Comfort</h4>
                                <p className="text-gray-600 mt-1">
                                    We arrange accommodation in premium apartments or hotels near the clinic, ensuring you have reliable Wi-Fi, kitchenettes, and a comfortable environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-1 md:order-2 bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Timeline: The "Vacation" Approach</h3>
                    <ul className="space-y-4 text-gray-600">
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            <strong>Week 1:</strong> Arrival, Initial Tests, Stimulation Start.
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            <strong>Week 2:</strong> Monitoring & Egg Retrieval.
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            <strong>Week 3:</strong> Embryo Transfer & Rest.
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            <strong>Sightseeing:</strong> In between visits, explore the Taj Mahal or vibrant markets.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Questions from our Dutch Patients</h2>
            <div className="space-y-4">
                <details className="bg-white p-5 rounded-lg shadow-sm group">
                    <summary className="font-bold text-gray-800 cursor-pointer flex justify-between items-center">
                        Can I get reimbursed by my Dutch health insurance?
                        <span className="text-blue-500 group-open:rotate-180 transition">+</span>
                    </summary>
                    <p className="mt-3 text-gray-600">
                        Many Dutch insurers (like CZ, VGZ, Zilveren Kruis) may reimburse part of the treatment if you have prior authorization, as long as the cost is lower than the Dutch rate. We provide detailed medical invoices to assist with your claim.
                    </p>
                </details>
                <details className="bg-white p-5 rounded-lg shadow-sm group">
                    <summary className="font-bold text-gray-800 cursor-pointer flex justify-between items-center">
                        Is it safe to fly back after Embryo Transfer?
                        <span className="text-blue-500 group-open:rotate-180 transition">+</span>
                    </summary>
                    <p className="mt-3 text-gray-600">
                        Yes, doctors usually recommend 2-3 days of rest after the transfer. Flying does not affect implantation. We provide a "Fit to Fly" certificate if required by your airline.
                    </p>
                </details>
                <details className="bg-white p-5 rounded-lg shadow-sm group">
                    <summary className="font-bold text-gray-800 cursor-pointer flex justify-between items-center">
                        Do the doctors speak English?
                        <span className="text-blue-500 group-open:rotate-180 transition">+</span>
                    </summary>
                    <p className="mt-3 text-gray-600">
                        Yes, India is the second-largest English-speaking country. All medical consultations, reports, and staff interactions will be in fluent English, ensuring no communication gap.
                    </p>
                </details>
            </div>
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-400 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Discuss Your Options</h2>
          <p className="text-xl mb-8 opacity-95">Free consultation via Zoom/WhatsApp to discuss your medical history and cost estimate.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
              Book Video Consultation
            </button>
            <a href="https://wa.me/" className="bg-green-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center">
               Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default NetherLand;