import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import OurCollaboration from "@/components/ui/OurCollabration";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      
      {/* --- SEO Configuration --- */}
      <SEO 
        title="Veramed Health Solutions: Medical Tourism, Global Healthcare"
        description="Veramed Health Solutions delivers expert Medical tourism, Global healthcare Treatment planning, and seamless access with trusted international partners."
        keywords="Medical Tourism, Treatment Planning, global healthcare, international treatment, medi tours, patients overseas, hospital abroad, hospital selection, visa travel, health tourism, health medical tourism, Veramed Health Solutions"
        canonical="https://veramedhealthsolutions.com"
        ogType="website"
        schemaType="MedicalOrganization"
      />

      {/* --- Page Content --- */}
      <Hero />
      <Services />
      <About />
      <OurCollaboration />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />

    </div>
  );
};

export default Index;