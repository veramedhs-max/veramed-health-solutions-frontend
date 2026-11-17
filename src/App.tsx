import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useIsMobile } from "./hooks/use-mobile";
import ScrollToTop from "./components/ScrollToTop";

// --- Styles ---
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --- Lazy-Loaded Components ---
const Header = lazy(() => import("./components/Header"));
const MobileHeader = lazy(() => import("./components/mobile/MobileHeader"));
const Services = lazy(() => import("./components/Services"));

// --- Lazy-Loaded Pages ---
const Index = lazy(() => import("./pages/Index"));
const MobileIndex = lazy(() => import("./pages/MobileIndex"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const StartYourJourney = lazy(() => import("./pages/StartYourJourney"));
const Team = lazy(() => import("./pages/TeamPage"));
const TermsAndConditionPage = lazy(() => import("./pages/TermsAndConditionPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const MedicalDisclaimerPage = lazy(() => import("./pages/MedicalDisclaimer"));
const PatientGalleryPage = lazy(() => import("./pages/PetientsGallery"));
const LeaveReviewPage = lazy(() => import("./pages/LeaveReviewPage"));
const TreatmentAndPlaning = lazy(() => import("./pages/TreatmentAndPlaning"));
const VisaAndTravel = lazy(() => import("./pages/VisaAndTravel"));
const CultureAndLanguage = lazy(() => import("./pages/CultureAndLanguage"));
const PostTreatment = lazy(() => import("./pages/PostTreatment"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

// --- Lazy-Loaded Region Pages ---
const CIS = lazy(() => import("./pages/CIS"));
const EastAfrica = lazy(() => import("./pages/EastAfrica"));
const NetherLand = lazy(() => import("./pages/NetherLand"));
const ArabeGolf = lazy(() => import("./pages/ArabeGolf"));

const queryClient = new QueryClient();

const HomeRoute = () => {
  const isMobile = useIsMobile();
  return isMobile ? <MobileIndex /> : <Index />;
};

const HeaderSwitch = () => {
  const isMobile = useIsMobile();
  return isMobile ? <MobileHeader /> : <Header />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="h-16 w-full bg-white border-b border-slate-200/80" />}>
          <HeaderSwitch />
        </Suspense>
        <Suspense
          fallback={
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-[#16324F] border-t-transparent animate-spin" />
            </div>
          }
        >
          <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomeRoute />} />
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
          <Route path="/east-africa-ivf" element={<EastAfrica />} />
          <Route path="/netherlands-ivf" element={<NetherLand />} />
          <Route path="/arabs-golf-ivf" element={<ArabeGolf />} />
          <Route path="/contact" element={<ContactPage />} />



          {/* ⭐ 404 CATCH-ALL ROUTE (Must be last) */}
          <Route path="*" element={<NotFound />} />

          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;












