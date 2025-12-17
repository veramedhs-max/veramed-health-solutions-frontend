import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// --- Components ---
import Header from "./components/Header";
import Services from "./components/Services";

// --- Pages ---
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import ServiceDetail from "./pages/ServiceDetail";
import StartYourJourney from "./pages/StartYourJourney";
import Team from "./pages/TeamPage";
import TermsAndConditionPage from "./pages/TermsAndConditionPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import MedicalDisclaimerPage from "./pages/MedicalDisclaimer";
import PatientGalleryPage from "./pages/PetientsGallery";
import LeaveReviewPage from "./pages/LeaveReviewPage";
import TreatmentAndPlaning from "./pages/TreatmentAndPlaning";
import VisaAndTravel from "./pages/VisaAndTravel";
import CultureAndLanguage from "./pages/CultureAndLanguage";
import PostTreatment from "./pages/PostTreatment";

// --- New Region Pages ---
import CIS from "./pages/CIS";
import EastAfrica from "./pages/EastAfrica";
import NetherLand from "./pages/NetherLand";
import ArabeGolf from "./pages/ArabeGolf";

// --- Styles ---
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/servicedetails/:serviceId" element={<ServiceDetail />} />
          
          {/* Company & Legal */}
          <Route path="/start-your-journey" element={<StartYourJourney />} />
          <Route path="/meet-out-team" element={<Team />} />
          <Route path="/terms-and-condition" element={<TermsAndConditionPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/medical-desclaimar" element={<MedicalDisclaimerPage />} />
          
          {/* Customer Interaction */}
          <Route path="/patients-gallery" element={<PatientGalleryPage />} />
          <Route path="/leave-review" element={<LeaveReviewPage />} />
          
          {/* Process & Support */}
          <Route path="/treatment-planning" element={<TreatmentAndPlaning />} />
          <Route path="/visa-travel" element={<VisaAndTravel />} />
          <Route path="/culture-language-support" element={<CultureAndLanguage />} />
          <Route path="/post-treatment" element={<PostTreatment />} />
          
          {/* Specific Regional Pages */}
          <Route path="/CIS-ivf" element={<CIS />} />
          <Route path="/east-africa-ivf" element={<EastAfrica/>} />
          <Route path="/netherlands-ivf" element={<NetherLand/>} />
          <Route path="/arabs-golf-ivf" element={<ArabeGolf/>} />

          {/* ⭐ 404 CATCH-ALL ROUTE (Must be last) */}
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;