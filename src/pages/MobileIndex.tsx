import SEO from "@/components/SEO";
import MobileHero from "@/components/mobile/MobileHero";
import MobileSpecialists from "@/components/mobile/MobileSpecialists";
import MobileFounder from "@/components/mobile/MobileFounder";
import MobileServices from "@/components/mobile/MobileServices";
import MobileAbout from "@/components/mobile/MobileAbout";
import MobileCollaboration from "@/components/mobile/MobileCollaboration";
import MobileWhyChooseUs from "@/components/mobile/MobileWhyChooseUs";
import MobileTestimonials from "@/components/mobile/MobileTestimonials";
import MobileContact from "@/components/mobile/MobileContact";
import MobileFooter from "@/components/mobile/MobileFooter";

const MobileIndex = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Veramed Health Solutions: Medical Tourism, Global Healthcare"
        description="Veramed Health Solutions delivers expert Medical tourism, Global healthcare Treatment planning, and seamless access with trusted international partners."
        keywords="Medical Tourism, Treatment Planning, global healthcare, international treatment, medi tours, patients overseas, hospital abroad, hospital selection, visa travel, health tourism, health medical tourism, Veramed Health Solutions"
        canonical="https://veramedhealthsolutions.com"
        ogType="website"
        schemaType="MedicalOrganization"
      />

      {/* --- Mobile Page Content --- */}
      <MobileHero />
      <MobileSpecialists />
      <MobileFounder />
      <MobileServices />
      <MobileAbout />
      <MobileCollaboration />
      <MobileWhyChooseUs />
      <MobileTestimonials />
      <MobileContact />
      <MobileFooter />
    </div>
  );
};

export default MobileIndex;
