import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { 
  Plane, 
  Wallet, 
  HeartHandshake, 
  Baby, 
  Gavel, 
  FileText, 
  MapPin, 
  Stethoscope,
  Globe2,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ShieldCheck,
  Building2
} from 'lucide-react';

const ArabeGolf = () => {
  return (
    <div className="font-sans text-gray-700 bg-slate-50">

      {/* --- SEO INTEGRATION --- */}
      <SEO
        title="IVF in India for Dubai, Oman & Saudi Arabia | Costs & Clinics"
        description="Complete guide to IVF in India for patients from UAE, Oman, and Saudi Arabia. Legalities, Age Limits, Costs, and Top Clinics explained by Veramed Health Solutions."
        keywords="IVF India for Saudi, IVF Dubai to India, Fertility Treatment Oman, IVF Laws India for Foreigners, Veramed Health Solutions"
        canonical="https://veramedhealthsolutions.com/arabs-golf-ivf"
      />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-white py-20 lg:py-28 overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-4 relative z-10">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <Globe2 className="w-4 h-4" />
                Serving Families from Dubai, Oman & Saudi Arabia
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                IVF in India for <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Gulf Residents</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A trusted pathway to parenthood. India offers advanced fertility technology, globally trained specialists, and transparent regulations. We provide ethical, legal, and high-quality IVF treatment with complete cultural respect.
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <Link to="/contact">
                  <Button size="lg" className="rounded-full px-10 py-7 text-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    Get Free Consultation
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative mx-auto lg:mr-0 max-w-lg lg:max-w-full">
              {/* Decorative blob behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[2rem] transform rotate-6 opacity-20 blur-xl"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=800" 
                alt="Middle eastern couple consultation" 
                className="relative rounded-[2rem] shadow-2xl border-4 border-white w-full h-auto object-cover transform transition-transform hover:scale-[1.01]"
              />
            </div>

          </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      </section>

      {/* --- ELIGIBILITY & LEGAL FRAMEWORK (CRITICAL INFO) --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Eligibility & New ART Rules</h2>
            <p className="text-gray-500 mt-2">Everything you need to know about the Indian ART & Surrogacy Acts</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1: Eligibility */}
            <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Who Is Eligible?</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                  Married heterosexual couples.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                  Valid medical indication for IVF.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                  Valid Passport & Medical Visa.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                  Written consent from both partners.
                </li>
              </ul>
            </div>

            {/* Column 2: Age Limits */}
            <div className="bg-cyan-50/50 p-8 rounded-2xl border border-cyan-100">
               <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Age Limits (Strict)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
                  <span className="font-medium text-gray-700">Female Partner</span>
                  <span className="font-bold text-cyan-700">21 - 50 Years</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
                  <span className="font-medium text-gray-700">Male Partner</span>
                  <span className="font-bold text-cyan-700">21 - 55 Years</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4 italic">
                *Age limits are mandated by Indian Law.
              </p>
            </div>

            {/* Column 3: Restrictions */}
            <div className="bg-rose-50/50 p-8 rounded-2xl border border-rose-100">
               <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Important Restrictions</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <strong>Surrogacy:</strong> Strictly prohibited for foreign nationals.
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <strong>Gamete Donation:</strong> Only altruistic donation allowed (no commercial buying).
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <strong>Rights:</strong> Children born via IVF have full legal parentage rights.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- STEP BY STEP PROCESS --- */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Treatment Process</h2>
            <p className="text-gray-600 mt-2">A clear, step-by-step journey for international patients</p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

            <div className="space-y-8">
              {[
                { title: "Consultation", desc: "Initial video consultation and medical report review.", icon: <FileText className="w-5 h-5" /> },
                { title: "Planning & Visa", desc: "Treatment plan creation and Medical Visa facilitation.", icon: <Plane className="w-5 h-5" /> },
                { title: "Stimulation", desc: "Ovarian stimulation (hormonal injections) starts.", icon: <Stethoscope className="w-5 h-5" /> },
                { title: "Egg Retrieval", desc: "Collection of eggs under mild sedation.", icon: <Baby className="w-5 h-5" /> },
                { title: "Fertilization", desc: "IVF or ICSI procedure in the lab.", icon: <HeartHandshake className="w-5 h-5" /> },
                { title: "Embryo Transfer", desc: "Transferring the embryo into the uterus.", icon: <Baby className="w-5 h-5" /> },
                { title: "Follow-up", desc: "Pregnancy test and post-treatment care.", icon: <CheckCircle2 className="w-5 h-5" /> },
              ].map((step, idx) => (
                <div key={idx} className={`relative flex items-center md:justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block w-5/12"></div>
                  
                  {/* Center Node */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow flex items-center justify-center text-white z-10">
                    <span className="text-xs font-bold">{idx + 1}</span>
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 md:ml-0 w-full md:w-5/12 bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-blue-500 bg-blue-50 p-2 rounded-lg">{step.icon}</div>
                      <h3 className="font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- TOP LOCATIONS --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Network of IVF Clinics</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Veramed partners with the most demanded clinics in India's major medical hubs, known for international accreditation and high success rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Featured Cities */}
            {[
              { city: "Delhi NCR / Gurugram", desc: "Premium centers preferred by international patients." },
              { city: "Mumbai", desc: "Advanced labs & senior fertility consultants." },
              { city: "Bangalore", desc: "High-tech centers with global standards." },
              { city: "Chennai", desc: "Leading fertility research expertise." },
              { city: "Hyderabad", desc: "Cutting-edge reproductive technology." },
              { city: "Ahmedabad", desc: "Affordable and reliable services." },
            ].map((item, index) => (
              <div key={index} className="flex flex-col p-5 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span className="font-bold text-gray-900">{item.city}</span>
                </div>
                <p className="text-sm text-gray-600 ml-8">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Pan-India List */}
          <div className="mt-10 flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {["Allahabad", "Sikkim", "Patna", "Varanasi", "Nagpur", "Pune", "Kolkata", "Siliguri", "Punjab", "Kanpur", "Guwahati", "Darjeeling"].map((city, i) => (
               <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs text-gray-600">
                 {city}
               </span>
            ))}
          </div>

        </div>
      </section>

      {/* --- COST SECTION --- */}
      <section className="py-16 bg-blue-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
           <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
           </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Affordable & Transparent Pricing</h2>
              <p className="text-blue-100 text-lg mb-8">
                IVF packages in India are significantly more affordable than global averages, without compromising on quality.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Wallet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Standard IVF Cycle</h3>
                    <p className="text-blue-100">Highly cost-effective vs Dubai/Saudi</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">ICSI & Advanced Tech</h3>
                    <p className="text-blue-100">Transparent additional pricing</p>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-sm text-blue-200">
                *Costs vary based on clinic location, specific diagnosis, and required medications.
              </p>
            </div>

            {/* Veramed Assistance Card */}
            <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">End-to-End Assistance</h3>
              <ul className="space-y-4">
                {[
                  "Medical Visa facilitation (Invitation Letter).",
                  "Selection of renowned hospitals & doctors.",
                  "Travel & accommodation support.",
                  "Arabic language assistance (if required).",
                  "Complete privacy and confidentiality."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                 <Link to="/contact">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6">
                    Start Your Journey
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              { 
                q: "Can Dubai, Oman, and Saudi patients legally do IVF in India?", 
                a: "Yes, IVF is legal for foreigners under Indian ART regulations, provided they are a married heterosexual couple with a valid visa." 
              },
              { 
                q: "Is IVF in India safe?", 
                a: "Yes, when performed at registered clinics that follow strict government protocols and hygiene standards." 
              },
              { 
                q: "How long does IVF treatment take?", 
                a: "A typical cycle takes about 4–6 weeks. However, the stay in India can often be optimized to 3-4 weeks." 
              },
              { 
                q: "Does Veramed Health Solutions help with the process?", 
                a: "Yes, we provide complete end-to-end support including clinic selection, visa documents, travel, and appointments." 
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-blue-500">Q.</span> {faq.q}
                </h3>
                <p className="text-gray-600 pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArabeGolf;