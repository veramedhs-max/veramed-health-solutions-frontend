
import SEO from '@/components/SEO'; // Ensure this path matches your project

// --- Icons ---
const PalmIcon = () => (
  <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /><path d="M12 3v10" /><path d="M12 13l-4 -3" /><path d="M12 13l4 -3" /></svg> 
  // Abstract representation suitable for region
);

const TranslatorIcon = () => (
  <svg className="w-10 h-10 text-cyan-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>
);

const VipIcon = () => (
  <svg className="w-10 h-10 text-blue-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
);

const ArabeGolf = () => {
  return (
    <div className="font-sans text-gray-700">
      
      {/* --- SEO Configuration --- */}
      <SEO 
        title="Medical Tourism from GCC to India | UAE, Saudi Arabia, Kuwait, Qatar"
        description="Premium medical travel services for Gulf patients. Specialized in Hair Transplant, Bariatric Surgery, Dental & Cardiac care with Halal facilities and Arabic translators."
        keywords="Medical Tourism India GCC, Saudi Arabia to India Treatment, Hair Transplant India Cost, Weight Loss Surgery India, Arabic Translator Hospital India, UAE Medical Visa India"
        canonical="https://veramedhealthsolutions.com/gcc-medical-tourism"
        ogType="article"
      />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-50 py-20 lg:py-28 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-white px-6 py-2 rounded-full border border-blue-100 shadow-sm mb-6">
            <span className="text-blue-600 font-bold text-sm">Welcome to our guests from KSA, UAE, Kuwait, Qatar, Oman & Bahrain</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            World-Class Healthcare with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Respect, Privacy & Luxury
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience advanced medical treatments in India tailored for Gulf residents. We provide <strong>VIP Suites, Arabic Translators, Halal Cuisine</strong>, and complete privacy for you and your family.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
              Get Free Consultation
            </button>
            <a href="https://wa.me/" className="px-8 py-4 bg-white text-green-600 border border-green-200 font-bold rounded-full shadow hover:bg-green-50 transition duration-300 flex items-center justify-center">
              <span>WhatsApp Us (Arabic/English)</span>
            </a>
          </div>
        </div>
        
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-40 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40 -ml-20 -mb-20"></div>
      </section>

      {/* --- CULTURAL COMFORT (Why GCC Patients Choose Us) --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Comfort is Our Priority</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">We understand your cultural and religious needs. Our partner hospitals are equipped to make you feel at home.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 border border-gray-100 rounded-2xl shadow-lg bg-white hover:-translate-y-1 transition duration-300">
              <TranslatorIcon />
              <h3 className="text-xl font-bold mb-3">Language Assistance</h3>
              <p className="text-gray-600">
                Dedicated <strong>Arabic-speaking patient coordinators</strong> and translators accompany you to every doctor appointment and assist with daily needs.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 border border-gray-100 rounded-2xl shadow-lg bg-white hover:-translate-y-1 transition duration-300">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-2xl">🕌</div>
              <h3 className="text-xl font-bold mb-3">Religious Facilities</h3>
              <p className="text-gray-600">
                Access to prayer rooms (Masjids) within hospital premises, Qibla direction in rooms, and strictly <strong>Halal food options</strong> for patients and attendants.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 border border-gray-100 rounded-2xl shadow-lg bg-white hover:-translate-y-1 transition duration-300">
              <VipIcon />
              <h3 className="text-xl font-bold mb-3">VIP & Privacy</h3>
              <p className="text-gray-600">
                Exclusive VIP suites with separate living areas for family members. We ensure high confidentiality and privacy for female patients with female staff availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- POPULAR TREATMENTS FOR GCC --- */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Most Requested Treatments</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "Hair Transplant", desc: "High-density FUE/DHI transplants offering natural results at 70% less cost than Turkey or Europe.", icon: "💇‍♂️" },
                    { title: "Bariatric Surgery", desc: "Gastric Sleeve and Bypass surgeries for weight loss and diabetes management by expert surgeons.", icon: "⚖️" },
                    { title: "Dental Cosmetics", desc: "Hollywood Smile, Veneers, and Implants completed in just 3-5 days using Swiss technology.", icon: "🦷" },
                    { title: "Full Body Checkup", desc: "Executive VIP health screening packages covering cardiac, cancer, and organ function.", icon: "🩺" },
                ].map((card, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-b-4 border-cyan-400">
                        <div className="text-4xl mb-4 bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center">{card.icon}</div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">{card.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- FLIGHTS & LOGISTICS --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Seamless Travel from the Gulf</h2>
                        <p className="mb-6 opacity-90 text-lg">
                            Direct flights are available from Dubai, Riyadh, Doha, Kuwait City, and Muscat to major Indian medical hubs like <strong>Delhi, Mumbai, and Bangalore</strong>.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center"><span className="mr-2">✈️</span> Emirates / Etihad / FlyDubai</li>
                            <li className="flex items-center"><span className="mr-2">✈️</span> Qatar Airways / Saudia</li>
                            <li className="flex items-center"><span className="mr-2">✈️</span> Oman Air / Kuwait Airways</li>
                        </ul>
                        <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition shadow-md">
                            Check Visa Requirements
                        </button>
                    </div>
                    <div className="hidden md:block">
                         {/* Abstract Globe/Map Visual */}
                         <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
                            <h3 className="font-bold text-xl mb-4 border-b border-white/20 pb-2">Flight Duration (Approx)</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between"><span>Dubai (DXB) ➔ Delhi</span> <span>3h 30m</span></div>
                                <div className="flex justify-between"><span>Riyadh (RUH) ➔ Delhi</span> <span>4h 15m</span></div>
                                <div className="flex justify-between"><span>Doha (DOH) ➔ Mumbai</span> <span>3h 45m</span></div>
                                <div className="flex justify-between"><span>Muscat (MCT) ➔ Bangalore</span> <span>3h 50m</span></div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white p-5 rounded-lg shadow-sm group">
              <summary className="font-bold text-gray-800 cursor-pointer flex justify-between items-center">
                Is Halal food easily available?
                <span className="text-blue-500 group-open:rotate-180 transition">+</span>
              </summary>
              <p className="mt-3 text-gray-600">Yes, India has a large Muslim population. All major hospitals provide certified Halal food, and there are many high-quality Arabic and Mughal restaurants in major cities.</p>
            </details>
            <details className="bg-white p-5 rounded-lg shadow-sm group">
              <summary className="font-bold text-gray-800 cursor-pointer flex justify-between items-center">
                Are there female doctors for ladies?
                <span className="text-blue-500 group-open:rotate-180 transition">+</span>
              </summary>
              <p className="mt-3 text-gray-600">Absolutely. We can specifically arrange appointments with senior female consultants for Obstetrics, Gynecology, Breast Cancer, and other treatments to ensure privacy and comfort.</p>
            </details>
            <details className="bg-white p-5 rounded-lg shadow-sm group">
              <summary className="font-bold text-gray-800 cursor-pointer flex justify-between items-center">
                Can I bring my family members?
                <span className="text-blue-500 group-open:rotate-180 transition">+</span>
              </summary>
              <p className="mt-3 text-gray-600">Yes, the Indian Medical Attendant Visa allows up to two blood relatives to accompany the patient. We can arrange serviced apartments with kitchens for large families.</p>
            </details>
          </div>
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-400 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Appointment Today</h2>
          <p className="text-xl mb-8 opacity-95">We take care of your Visa, Flights, Hotel, and Treatment.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
              Request a Callback
            </button>
            <a href="https://wa.me/" className="bg-green-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center">
               Chat in Arabic/English
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ArabeGolf;