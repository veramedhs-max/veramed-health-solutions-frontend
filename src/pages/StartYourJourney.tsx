import { 
  CheckCircle, 
  HeartHandshake, 
  Stethoscope, 
  Plane, 
  ShieldCheck, 
  FileText, 
  Home, 
  Languages, 
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import img from "@/assets/suj.jpg";

const StartYourJourney = () => {
  
  const tourismServices = [
    {  
      title: "Doctor & Hospital Selection",
      description: "We find the right specialist and hospital based on your diagnosis, preference, and budget.",
      icon: <Stethoscope className="w-6 h-6 text-white" />
    },
    {
      title: "Medical Visa Assistance",
      description: "We provide documentation support and embassy coordination for a smoother, faster visa process.",
      icon: <FileText className="w-6 h-6 text-white" />
    },
    {
      title: "Airport Pickup & Accommodation",
      description: "Our staff receives you upon arrival, arranging safe lodging near your hospital.",
      icon: <Home className="w-6 h-6 text-white" />
    },
    {
      title: "Interpretation & Translation",
      description: "We offer translators in French, Arabic, Russian, Swahili, and more, breaking all language barriers.",
      icon: <Languages className="w-6 h-6 text-white" />
    }
  ];

  return (
    <>
      {/* =================== SEO CONFIGURATION =================== */}
      <SEO 
        title="Start Your Medical Journey in India | Veramed Health Solutions"
        description="Begin your path to recovery with Veramed. From doctor selection and medical visas to accommodation and translation, we handle every step of your medical trip to India."
        keywords="Medical Tourism India Process, Visa Assistance India, Medical Translator India, Hospital Selection India, Veramed Services"
        canonical="https://veramedhealthsolutions.com/start-your-journey"
      />

      <section className="bg-slate-50 min-h-screen flex flex-col">
        
        {/* --- HERO SECTION --- */}
        <div className="relative py-24 lg:py-32 bg-white overflow-hidden border-b border-gray-100">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <Plane className="w-4 h-4" />
              Your Health, Our Priority
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Healing Journey</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every healing journey begins with a single step. We are here to make that step — and every one that follows — easier, safer, and more reassuring.
            </p>
          </div>
          {/* Decorative Background Blobs */}
          <div className="absolute top-0 left-0 -ml-20 -mt-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-60"></div>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="container mx-auto px-4 py-20 space-y-24">
          
          {/* 1. The Veramed Difference (Image Left/Right) */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="order-2 lg:order-1 space-y-6">
              <div className="p-3 bg-blue-100 w-fit rounded-xl">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Discover the Veramed Difference
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Navigating a new country's medical system can be overwhelming. We are more than a tourism company — we are your <strong>full-service healthcare companion</strong>.
                </p>
                <p>
                  Our experienced, multilingual team serves patients from across the globe, ensuring you feel heard, safe, and supported every step of the way.
                </p>
              </div>
              
              <div className="pt-4">
                <Link to="/contact">
                  <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200">
                    Speak to an Expert <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image Card */}
            <div className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video lg:aspect-square">
                <img 
                  src={img}
                  alt="Diverse team of Veramed Health Solutions professionals"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* 2. End-to-End Support Services */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                End-to-End Medical Support
              </h2>
              <p className="text-lg text-gray-600">
                We offer comprehensive services tailored to your individual case, ensuring a hassle-free experience from arrival to departure.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {tourismServices.map((service, index) => (
                <Card 
                  key={index} 
                  className="p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white group flex flex-col items-center text-center h-full"
                >
                  <div className="mb-6 p-4 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* 3. Trust Section */}
          <div className="bg-blue-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
             {/* Background Pattern */}
             <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/3">
               <HeartHandshake className="w-96 h-96" />
             </div>

             <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                   <div className="inline-block p-3 bg-white/10 rounded-xl mb-6 backdrop-blur-sm">
                      <HeartHandshake className="w-8 h-8 text-cyan-300" />
                   </div>
                   <h2 className="text-3xl md:text-4xl font-bold mb-6">
                     Trusted by Patients & Partners
                   </h2>
                   <p className="text-blue-100 text-lg leading-relaxed mb-8">
                      From life-saving treatments to wellness retreats, our patients and partners trust us for professional care, affordable options, and heartfelt service. We are a symbol of care without borders.
                   </p>
                   <Link to="/leave-review">
                     <Button variant="outline" className="border-white/20 text-blue-900 bg-white hover:bg-blue-50">
                       Read Patient Stories
                     </Button>
                   </Link>
                </div>
                
                {/* Visual Stats or Quote */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                   <blockquote className="text-xl italic font-medium text-blue-50 mb-4">
                     "Veramed didn't just help me find a doctor; they treated me like family during my hardest times."
                   </blockquote>
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                     <div>
                       <div className="font-bold">Fatima Al-Sayed</div>
                       <div className="text-sm text-blue-300">Patient from Oman</div>
                     </div>
                   </div>
                </div>
             </div>
          </div>

          {/* 4. Final CTA */}
          <div className="text-center py-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Begin Today — With Confidence
            </h2>
            <p className="text-xl text-gray-500 italic max-w-2xl mx-auto mb-8">
              "Travel for treatment. Return with trust."
            </p>
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-10 py-6 text-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-xl hover:shadow-2xl transition-all">
                Start Your Journey Now
              </Button>
            </Link>
          </div>

        </div>

        {/* --- FOOTER --- */}
        <Footer />
      </section>
    </>
  );
};

export default StartYourJourney;