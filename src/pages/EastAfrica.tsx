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
  Building2
} from 'lucide-react';

const EastAfrica = () => {
  return (
    <div className="font-sans text-gray-700 bg-slate-50">

      {/* --- SEO INTEGRATION --- */}
      <SEO
        title="IVF in India for East African Patients | Kenya, Tanzania, Ethiopia"
        description="Comprehensive guide to IVF in India for patients from Kenya, Tanzania, Uganda, Rwanda & Ethiopia. Save on fertility treatments with Veramed Health Solutions."
        keywords="IVF for East Africa India, IVF Cost India vs Kenya, Fertility Treatment for Ethiopians India, IVF Age Limit India, Veramed Health Solutions"
        canonical="https://veramedhealthsolutions.com/east-africa-ivf"
      />

      {/* --- HERO SECTION --- */}
      <section className="relative bg-white py-20 lg:py-28 overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-4 relative z-10">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <Globe2 className="w-4 h-4" />
                Serving Kenya, Tanzania, Uganda, Rwanda & Ethiopia
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                IVF in India for <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">East Africa</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A complete guide for intended parents. Over the past decade, India has become a trusted fertility solution for East African couples, offering advanced technology, internationally trained specialists, and affordable costs.
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
                src="https://images.unsplash.com/photo-1516574187841-693083f69802?auto=format&fit=crop&q=80&w=800" 
                alt="Happy African family consultation" 
                className="relative rounded-[2rem] shadow-2xl border-4 border-white w-full h-auto object-cover transform transition-transform hover:scale-[1.01]"
              />
            </div>

          </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      </section>

      {/* --- WHY EAST AFRICA CHOOSES INDIA --- */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why East African Patients Choose India</h2>
              <p className="text-gray-600 mb-6 text-lg">
                India offers a unique combination of world-class medical infrastructure and cost-effective treatment. East African patients prefer India for its ethical medical practices, high success rates, and cultural hospitality.
              </p>
              <ul className="space-y-4">
                {[
                  "Ethical medical practices under strict ART laws.",
                  "Internationally trained IVF specialists & Embryologists.",
                  "High success rates comparable to Western countries.",
                  "Cost-effective solutions (70-80% savings).",
                  "Direct flights from Nairobi & Addis Ababa."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                <Wallet className="w-10 h-10 text-blue-500 mb-3" />
                <h3 className="font-bold text-gray-900">Affordable</h3>
                <p className="text-sm text-gray-500">Save up to 70% vs West</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                <Building2 className="w-10 h-10 text-cyan-500 mb-3" />
                <h3 className="font-bold text-gray-900">Advanced Labs</h3>
                <p className="text-sm text-gray-500">Cutting-edge Technology</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                <Gavel className="w-10 h-10 text-indigo-500 mb-3" />
                <h3 className="font-bold text-gray-900">Legal Safety</h3>
                <p className="text-sm text-gray-500">Regulated by ART Act</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                <HeartHandshake className="w-10 h-10 text-pink-500 mb-3" />
                <h3 className="font-bold text-gray-900">Full Support</h3>
                <p className="text-sm text-gray-500">Visa & Logistics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ELIGIBILITY & RULES (CRITICAL INFO) --- */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Eligibility & New ART Rules</h2>
            <p className="text-gray-500 mt-2">Essential requirements for Foreigners under the Indian ART Act</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1: Who is Eligible */}
            <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Baby className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Who Can Apply?</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                  Married heterosexual couples.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                  Diagnosed infertility condition.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                  Valid Medical Visa & Passport.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
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
                *Age limits are strictly enforced by the Assisted Reproductive Technology (ART) Act.
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
                  <strong>Surrogacy:</strong> Not permitted for foreign nationals in India.
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <strong>Gamete Donation:</strong> Strictly regulated; commercial sale prohibited.
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <strong>Sex Selection:</strong> Strictly illegal and punishable by law.
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
            <p className="text-gray-600 mt-2">A step-by-step journey for East African patients</p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>

            <div className="space-y-8">
              {[
                { title: "Consultation", desc: "Initial consultation and medical evaluation via video call.", icon: <FileText className="w-5 h-5" /> },
                { title: "Planning & Visa", desc: "Fertility testing, treatment planning, and Medical Visa assistance.", icon: <Plane className="w-5 h-5" /> },
                { title: "Stimulation", desc: "Ovarian stimulation and monitoring at the clinic.", icon: <Stethoscope className="w-5 h-5" /> },
                { title: "Egg Retrieval", desc: "Collection of eggs and sperm collection.", icon: <Baby className="w-5 h-5" /> },
                { title: "Fertilization", desc: "Embryo culture in advanced embryology labs.", icon: <HeartHandshake className="w-5 h-5" /> },
                { title: "Embryo Transfer", desc: "Transferring the best quality embryo into the uterus.", icon: <Baby className="w-5 h-5" /> },
                { title: "Follow-up", desc: "Pregnancy testing and follow-up care after returning home.", icon: <CheckCircle2 className="w-5 h-5" /> },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Top IVF Destinations in India</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              India has a wide network of modern IVF clinics. We help you choose the right city based on expertise and travel convenience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              "Delhi NCR (Gurugram)", "Mumbai", "Bangalore", "Chennai", 
              "Hyderabad", "Kolkata", "Pune", "Ahmedabad",
              "Allahabad", "Varanasi", "Punjab", "Sikkim",
              "Nagpur", "Patna", "Guwahati", "Darjeeling"
            ].map((city, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:text-blue-700 transition-colors group cursor-default">
                <MapPin className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                <span className="font-medium">{city}</span>
              </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transparent & Affordable Pricing</h2>
              <p className="text-blue-100 text-lg mb-8">
                IVF packages in India are significantly more affordable than East Africa and the West.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-2xl font-bold">$</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Standard IVF Cycle</h3>
                    <p className="text-blue-100 text-2xl font-bold">$2,500 – $4,000 USD</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-xl font-bold">+</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">ICSI Procedure</h3>
                    <p className="text-blue-100">Additional cost based on complexity</p>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-sm text-blue-200">
                *Costs vary based on clinic location, technology used, and patient-specific needs.
              </p>
            </div>

            {/* Veramed Assistance Card */}
            <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">How Veramed Helps You</h3>
              <ul className="space-y-4">
                {[
                  "Selection of the right IVF clinic & specialist.",
                  "Medical Visa support & invitation letter.",
                  "Travel & accommodation arrangements.",
                  "Treatment planning & follow-up coordination.",
                  "Transparent cost estimation."
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
                q: "Is IVF in India legal for East African citizens?", 
                a: "Yes, IVF treatment is legal for East African citizens under Indian ART laws." 
              },
              { 
                q: "Do East African patients need a medical visa?", 
                a: "Yes, a Medical Visa is required for all medical treatments in India." 
              },
              { 
                q: "Is surrogacy allowed for East African patients?", 
                a: "No, commercial surrogacy is prohibited for foreigners. Only IVF without surrogacy is permitted." 
              },
              { 
                q: "How long should I stay in India?", 
                a: "Typically 3–4 weeks depending on the treatment plan. We help optimize your stay." 
              },
              { 
                q: "Can embryos be frozen for future use?", 
                a: "Yes, embryo cryopreservation is permitted and widely available in Indian clinics." 
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

export default EastAfrica;