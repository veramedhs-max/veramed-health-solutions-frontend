
import SEO from '@/components/SEO';
import Footer from '@/components/Footer';

// --- Icon Components ---
const PlaneIcon = () => (
    <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

const WalletIcon = () => (
    <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

const HeartIcon = () => (
    <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
);

const CIS = () => {
    return (
        <div className="font-sans text-gray-700">

            {/* --- SEO INTEGRATION --- */}
            <SEO
                title="IVF Medical Tourism India | Affordable Fertility Treatments"
                description="Comprehensive guide to IVF medical tourism in India. Discover world-class fertility clinics, 70% cost savings, and high success rates for international patients."
                keywords="IVF India, Medical Tourism India, Fertility Treatment Cost, IVF Success Rates India, International IVF Patients"
                canonical="https://veramedhealthsolutions.com/CIS"
                ogType="website"
                schemaType="MedicalOrganization"
            />

            {/* --- HERO SECTION --- */}
            <section className="relative bg-slate-50 py-20 lg:py-32 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                        Your Journey to Parenthood <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                            Starts in India
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        World-class fertility treatments, advanced technology, and high success rates at a fraction of the global cost. We guide international patients every step of the way.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
                            Get a Free Consultation
                        </button>
                        <button className="px-8 py-4 bg-white text-blue-500 border border-blue-200 font-bold rounded-full shadow hover:bg-gray-50 transition duration-300">
                            Check Success Rates
                        </button>
                    </div>
                </div>

                {/* Decorative Background Blob */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            </section>

            {/* --- WHY CHOOSE INDIA SECTION --- */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose India for IVF?</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded"></div>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">India has emerged as the global hub for fertility treatments, combining medical expertise with compassionate care.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="p-8 border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow bg-white">
                            <WalletIcon />
                            <h3 className="text-xl font-bold mb-3">Affordable Treatment</h3>
                            <p className="text-gray-600">
                                Save up to 70% compared to prices in the USA, UK, or Europe without compromising on quality or technology.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="p-8 border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow bg-white">
                            <HeartIcon />
                            <h3 className="text-xl font-bold mb-3">High Success Rates</h3>
                            <p className="text-gray-600">
                                Indian clinics utilize cutting-edge technology (PGS/PGD, ERA, IMSI) yielding success rates comparable to top global clinics.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="p-8 border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow bg-white">
                            <PlaneIcon />
                            <h3 className="text-xl font-bold mb-3">Seamless Travel</h3>
                            <p className="text-gray-600">
                                Dedicated medical visa processes and international patient coordinators make your arrival and stay hassle-free.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- COST COMPARISON TABLE --- */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Cost Comparison (USD)</h2>
                    <div className="overflow-x-auto max-w-4xl mx-auto bg-white rounded-xl shadow-md">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
                                    <th className="p-4 font-semibold">Treatment</th>
                                    <th className="p-4 font-semibold">USA / UK Cost</th>
                                    <th className="p-4 font-semibold">India Cost</th>
                                    <th className="p-4 font-semibold">Your Savings</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="hover:bg-gray-50">
                                    <td className="p-4 font-medium text-gray-900">Standard IVF Cycle</td>
                                    <td className="p-4">$15,000 - $25,000</td>
                                    <td className="p-4 font-bold text-blue-600">$3,000 - $5,000</td>
                                    <td className="p-4 text-green-600 font-bold">~80%</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-4 font-medium text-gray-900">ICSI Procedure</td>
                                    <td className="p-4">$1,500 - $3,000</td>
                                    <td className="p-4 font-bold text-blue-600">$500 - $1,000</td>
                                    <td className="p-4 text-green-600 font-bold">~70%</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="p-4 font-medium text-gray-900">Medications (Avg)</td>
                                    <td className="p-4">$3,000 - $5,000</td>
                                    <td className="p-4 font-bold text-blue-600">$1,000 - $1,500</td>
                                    <td className="p-4 text-green-600 font-bold">~65%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-4">*Prices are approximate and vary by clinic and case complexity.</p>
                </div>
            </section>

            {/* --- STEP BY STEP PROCESS --- */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
                        <p className="text-gray-600">A simplified 5-step process for international patients.</p>
                    </div>

                    <div className="space-y-8">
                        {[
                            { title: "Virtual Consultation", desc: "Connect with our top specialists via video call to discuss medical history and treatment plan.", step: "01" },
                            { title: "Financial Estimate & Visa", desc: "Receive a transparent cost estimate and an invitation letter to apply for your Medical Visa (M-Visa).", step: "02" },
                            { title: "Arrival & Hospitality", desc: "Our team assists with airport pickup, hotel accommodation near the clinic, and local transport.", step: "03" },
                            { title: "Treatment Phase", desc: "Undergo your IVF cycle, stimulation, egg retrieval, and embryo transfer in state-of-the-art facilities.", step: "04" },
                            { title: "Safe Return", desc: "Receive your 'Fit to Fly' certificate and continue follow-up care remotely with your doctor.", step: "05" },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-center bg-slate-50 p-6 rounded-xl hover:shadow-md transition">
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-2xl mb-4 md:mb-0 md:mr-6">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                                    <p className="text-gray-600 mt-2">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FAQ SECTION --- */}
            <section className="py-16 bg-blue-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
                    <div className="grid gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h4 className="font-bold text-lg mb-2">Is IVF legal for foreigners in India?</h4>
                            <p className="text-gray-600">Yes, IVF is fully legal for international couples. However, laws regarding surrogacy differ. It is important to consult regarding the latest ART laws affecting specific treatments.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h4 className="font-bold text-lg mb-2">How long do I need to stay in India?</h4>
                            <p className="text-gray-600">Typically, a stay of 3 to 4 weeks is required for a full IVF cycle. However, this can be reduced if the stimulation phase is started in your home country under our guidance.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h4 className="font-bold text-lg mb-2">What documents do I need?</h4>
                            <p className="text-gray-600">You will need a valid Passport, a Medical Visa (M-Visa), passport-sized photos, and your previous medical records.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    );
};

export default CIS;