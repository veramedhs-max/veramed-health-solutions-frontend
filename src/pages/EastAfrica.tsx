import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO'; // Ensure this path matches your project structure

// --- Icons ---
const PlaneIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
);
const PassportIcon = () => (
  <svg className="w-10 h-10 text-blue-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
);
const HospitalIcon = () => (
  <svg className="w-10 h-10 text-blue-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
);
const CheckCircle = () => (
  <svg className="w-5 h-5 text-cyan-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

const EastAfrica = () => {
  return (
    <div className="font-sans text-gray-700">
      
      {/* --- SEO Configuration --- */}
      <SEO 
        title="Medical Tourism from East Africa to India | Kenya, Ethiopia, Tanzania"
        description="Comprehensive guide for patients from Kenya, Ethiopia, Tanzania & Uganda traveling to India for medical treatment. Information on Visas, Flights, Costs, and Top Hospitals."
        keywords="Medical Tourism Kenya to India, Treatment in India for Ethiopians, Tanzania Patient India, Oncology India, Kidney Transplant Cost India, Ethiopian Airlines Medical Travel"
        canonical="https://veramedhealthsolutions.com/east-africa"
        ogType="article"
      />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-50 py-20 lg:py-28 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-blue-50 border border-blue-100 rounded-full px-4 py-1 mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm text-blue-800 font-medium">Serving Patients from Nairobi, Addis Ababa, Dar es Salaam & Kampala</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              World-Class Healthcare <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                Bridging Africa & India
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We specialize in assisting patients from East Africa with affordable, high-quality medical treatments in India. From medical visas to flight arrangements with <strong>Ethiopian Airlines & Kenya Airways</strong>, we handle every detail.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 flex items-center justify-center">
                <PlaneIcon />
                <span className="ml-2">Plan My Trip</span>
              </Link>
              <button className="px-8 py-4 bg-white text-blue-600 border border-blue-100 font-bold rounded-full shadow hover:bg-gray-50 transition duration-300">
                Get Cost Estimate
              </button>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Map Effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
           <svg className="absolute right-0 top-0 transform translate-x-1/4 -translate-y-1/4 w-[800px] h-[800px] text-blue-900" fill="currentColor" viewBox="0 0 200 200"><path d="M45.6,169.9c-1.4-4.5-5.9-10.7-3.6-15.5c1.7-3.6,8.8-5,10.6-9.1c2.1-4.7-1.5-12.7-1.1-18c0.3-4.2,4.4-7.9,5.5-12.1c1.8-6.9-3.9-12.8-5-19.3c-1.2-7.1,3.4-13.8,7.9-19.1c7.3-8.6,16.7-16.1,28.2-16.1c9.8,0,18.8,5.4,24.3,13.6c4.6,6.9,4.4,16.2,3.1,24.3c-1.5,9.6-6.6,18.4-7.5,28.2c-0.8,9.4,4.2,18.5,8.8,26.7c4.2,7.4,8.5,15.1,9.4,23.6c0.8,7.3-3.2,14.6-9.1,18.8c-6.1,4.3-13.8,4.7-21,2.8C86,196.4,78.2,192.8,71,189.6C62.4,185.7,51.8,189.4,45.6,169.9z"/></svg>
        </div>
      </section>

      {/* --- WHY PATIENTS TRUST INDIA --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Thousands of East Africans Choose India</h2>
              <div className="space-y-4">
                {[
                  "Affordability: Treatments cost 70-80% less than in the UK or USA.",
                  "Connectivity: Direct flights from Nairobi and Addis Ababa to Mumbai/Delhi.",
                  "Specialized Care: Advanced Oncology, Heart Transplants, and IVF centers.",
                  "Cultural Comfort: English-speaking doctors, Halal food availability, and prayer rooms.",
                  "No Waiting Time: Immediate scheduling for urgent surgeries."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-6 rounded-2xl text-center">
                    <h3 className="text-4xl font-bold text-blue-600 mb-2">15k+</h3>
                    <p className="text-sm text-gray-600">Patients from Africa Annually</p>
                </div>
                <div className="bg-cyan-50 p-6 rounded-2xl text-center">
                    <h3 className="text-4xl font-bold text-cyan-600 mb-2">98%</h3>
                    <p className="text-sm text-gray-600">Visa Success Rate</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl text-center col-span-2">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Top Partner Hospitals</h3>
                    <p className="text-sm text-gray-500">Apollo • Fortis • Medanta • Manipal • HCG</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SPECIALIZED TREATMENTS --- */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Most Sought-After Treatments</h2>
            <div className="grid md:grid-cols-4 gap-6">
                {[
                    { title: "Oncology (Cancer)", desc: "Comprehensive care including PET Scans, Chemotherapy, and CyberKnife radiation.", icon: "🎗️" },
                    { title: "Cardiac Surgery", desc: "Complex procedures like CABG, Valve Replacement, and pediatric heart surgeries.", icon: "❤️" },
                    { title: "Organ Transplant", desc: "Leading global center for Kidney, Liver, and Bone Marrow transplants with high success.", icon: "🏥" },
                    { title: "Orthopedics", desc: "Knee and Hip replacement surgeries using robotic-assisted technology.", icon: "🦴" },
                ].map((card, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-blue-400">
                        <div className="text-4xl mb-4">{card.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                        <p className="text-gray-600 text-sm">{card.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- TRAVEL LOGISTICS GUIDE --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Your Journey Step-by-Step</h2>
            
            <div className="grid md:grid-cols-2 gap-10">
                {/* Flight Info */}
                <div className="bg-blue-50 p-8 rounded-2xl">
                    <div className="flex items-center mb-6">
                        <PlaneIcon /> 
                        <h3 className="text-2xl font-bold ml-3 text-gray-800">Flight Connectivity</h3>
                    </div>
                    <p className="mb-4 text-gray-700">We recommend the following airlines for the best connectivity to New Delhi (DEL), Mumbai (BOM), and Bangalore (BLR):</p>
                    <ul className="space-y-3">
                        <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                            <span className="font-bold text-blue-800 w-24">Ethiopian</span> 
                            <span className="text-sm">Daily flights from Addis Ababa to Delhi/Mumbai.</span>
                        </li>
                        <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                            <span className="font-bold text-red-700 w-24">Kenya Air</span> 
                            <span className="text-sm">Direct flights from Nairobi to Mumbai.</span>
                        </li>
                        <li className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                            <span className="font-bold text-orange-600 w-24">Air India</span> 
                            <span className="text-sm">Direct connections from Nairobi & major African hubs.</span>
                        </li>
                    </ul>
                </div>

                {/* Visa Info */}
                <div className="bg-cyan-50 p-8 rounded-2xl">
                    <div className="flex items-center mb-6">
                        <PassportIcon />
                        <h3 className="text-2xl font-bold ml-3 text-gray-800">Medical Visa (e-Visa)</h3>
                    </div>
                    <p className="mb-4 text-gray-700">Citizens of Kenya, Tanzania, Uganda, and Ethiopia are eligible for the <strong>Indian e-Medical Visa</strong>.</p>
                    <div className="space-y-2">
                        <h4 className="font-bold text-gray-900">Required Documents:</h4>
                        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                            <li>Scanned copy of Passport Bio Page (valid for 6 months).</li>
                            <li>Recent passport-size photograph (white background).</li>
                            <li><strong>Visa Invitation Letter</strong> (We provide this from the hospital).</li>
                            <li>Yellow Fever Vaccination Certificate (Mandatory for return).</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- COST COMPARISON TABLE --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Cost Savings Comparison</h2>
          <p className="text-center text-gray-600 mb-10">Estimated costs in USD for major procedures.</p>
          
          <div className="overflow-hidden rounded-xl shadow-lg border border-gray-100">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
                <tr>
                  <th className="p-4 font-semibold">Procedure</th>
                  <th className="p-4 font-semibold hidden sm:table-cell">USA / UK Cost</th>
                  <th className="p-4 font-semibold hidden sm:table-cell">Turkey / Thailand</th>
                  <th className="p-4 font-semibold bg-blue-600">India Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { proc: "Heart Bypass (CABG)", west: "$100,000+", mid: "$12,000 - $15,000", india: "$4,500 - $6,000" },
                  { proc: "Knee Replacement", west: "$40,000+", mid: "$10,000 - $12,000", india: "$3,500 - $5,000" },
                  { proc: "Kidney Transplant", west: "$300,000+", mid: "$30,000 - $40,000", india: "$10,000 - $12,000" },
                  { proc: "Cancer Radiation (CyberKnife)", west: "$50,000+", mid: "$15,000", india: "$6,000 - $8,000" },
                  { proc: "IVF Cycle", west: "$15,000+", mid: "$6,000", india: "$3,000 - $4,500" },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-4 font-medium text-gray-900">{row.proc}</td>
                    <td className="p-4 text-gray-500 hidden sm:table-cell">{row.west}</td>
                    <td className="p-4 text-gray-500 hidden sm:table-cell">{row.mid}</td>
                    <td className="p-4 font-bold text-blue-600 bg-blue-50">{row.india}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">* Prices are approximate and depend on the specific hospital, doctor, and patient condition.</p>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white p-5 rounded-lg shadow-sm group">
              <summary className="font-bold text-gray-800 cursor-pointer flex justify-between items-center">
                Do I need a polio vaccination?
                <span className="text-blue-500 group-open:rotate-180 transition">+</span>
              </summary>
              <p className="mt-3 text-gray-600">Yes, travellers from certain countries including Kenya, Ethiopia, and Somalia are required to carry a valid Oral Polio Vaccination (OPV) certificate taken at least 4 weeks prior to departure.</p>
            </details>
            <details className="bg-white p-5 rounded-lg shadow-sm group">
              <summary className="font-bold text-gray-800 cursor-pointer flex justify-between items-center">
                Can I find Swahili or Amharic translators?
                <span className="text-blue-500 group-open:rotate-180 transition">+</span>
              </summary>
              <p className="mt-3 text-gray-600">Absolutely. Major hospitals like Apollo and Fortis have dedicated International Patient desks with translators for Swahili, Amharic, and Arabic to assist you throughout your stay.</p>
            </details>
            <details className="bg-white p-5 rounded-lg shadow-sm group">
              <summary className="font-bold text-gray-800 cursor-pointer flex justify-between items-center">
                How do I get US Dollars for treatment?
                <span className="text-blue-500 group-open:rotate-180 transition">+</span>
              </summary>
              <p className="mt-3 text-gray-600">We assist you with the 'Cost Estimation Letter' which you can present to your local bank in Kenya or Ethiopia to authorize the transfer of funds for medical purposes.</p>
            </details>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-400 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Healing Journey Today</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Get a free second opinion from India's top specialists and your medical visa invitation letter within 24 hours.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
              Get Free Consultation
            </button>
            <a href="https://wa.me/" className="bg-green-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center">
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default EastAfrica;