import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ConsultationForm from "@/components/ConsultationModal";
// import logo from "@/assets/WhatsApp_Image_2026-09-20_at_14.09.20-removebg-preview.png";
// import logo from "@/assets/newlogo.jpeg";
// import logo from "@/assets/veramed-logo-red.png";
import logo from "@/assets/logoImage-red.png";

const SERVICE_ROUTES = [
  { name: "CIS Region IVF", path: "/CIS-ivf" },
  { name: "East Africa Medical", path: "/east-africa-ivf" },
  { name: "Netherlands IVF", path: "/netherlands-ivf" },
  { name: "Arab Gulf Medical", path: "/arabs-golf-ivf" },
];

const NAV_ITEMS = [
  { label: "Services", to: "/", hash: "#services" },
  { label: "About Us", to: "/", hash: "#about" },
  { label: "Partners", to: "/", hash: "#collaborate" },
  { label: "Why Choose Us", to: "/", hash: "#why-us" },
  { label: "Contact", to: "/contact" },
  { label: "Blog", to: "/blog" },
  { label: "Patient Reviews", to: "/leave-review" },
];

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleHashClick = (e: React.MouseEvent, hash?: string) => {
    setIsMenuOpen(false);
    if (isHomePage && hash) {
      e.preventDefault();
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <header className="fixed top-0 inset-x-0 z-50 w-full bg-white border-b border-slate-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.04)] pt-[env(safe-area-inset-top)] transform-gpu will-change-transform">
        <div className="flex items-center justify-between h-16 px-3.5">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center shrink-0"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src={logo}
              alt="Veramed Health Solutions"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </Link>

          {/* Right Actions: Classic Consult Pill + Menu Toggle */}
          <div className="flex items-center gap-2">
            <DialogTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#16324F] hover:bg-[#1E4369] text-white text-xs font-semibold tracking-wide shadow-xs active:scale-95 transition-all"
              >
                <Stethoscope className="w-3.5 h-3.5 text-cyan-300" />
                <span>Consult</span>
              </button>
            </DialogTrigger>

            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 bg-white text-[#16324F] hover:bg-slate-50 active:scale-95 transition-all"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>
      <div
        aria-hidden="true"
        className="h-[calc(4rem+env(safe-area-inset-top))] w-full shrink-0"
      />

      {/* Classic Slide-Down Navigation Drawer (outside <header> so backdrop-blur doesn't trap fixed positioning) */}
      {isMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="fixed inset-x-0 top-[calc(4rem+env(safe-area-inset-top))] bottom-0 z-40 bg-white overflow-y-auto border-t border-slate-200 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col justify-between min-h-full px-4 py-4">
            {/* Navigation List */}
            <div className="divide-y divide-slate-100">
              {/* Collapsible Regional Services */}
              <div className="py-1">
                <button
                  type="button"
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                  className="flex items-center justify-between w-full py-3 text-left text-[15px] font-semibold text-[#0F2942]"
                >
                  <span>Regional & IVF Programs</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="mb-2 ml-2 pl-3 border-l-2 border-blue-600/30 space-y-1">
                    {SERVICE_ROUTES.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-between py-2 px-2 rounded-lg text-sm font-medium text-slate-600 hover:text-[#16324F] hover:bg-slate-50"
                      >
                        <span>{service.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Primary Links */}
              {NAV_ITEMS.map((item) => {
                const destination = item.hash ? `/${item.hash}` : item.to;
                return item.hash && isHomePage ? (
                  <a
                    key={item.label}
                    href={item.hash}
                    onClick={(e) => handleHashClick(e, item.hash)}
                    className="flex items-center justify-between py-3.5 text-[15px] font-semibold text-[#0F2942] hover:text-blue-700"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={destination}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between py-3.5 text-[15px] font-semibold text-[#0F2942] hover:text-blue-700"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}
            </div>

            {/* Bottom Care Desk Card */}
            <div className="mt-6 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#16324F]">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>24/7 International Care Desk</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>

              <a
                href="tel:+919953306560"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-bold text-[#16324F] hover:bg-slate-50"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+91-9953306560</span>
              </a>

              <DialogTrigger asChild>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full py-3 rounded-xl bg-[#16324F] hover:bg-[#1E4369] text-white text-sm font-semibold tracking-wide shadow-sm active:scale-[0.99] transition-all"
                >
                  Get Second Opinion
                </button>
              </DialogTrigger>
            </div>
          </div>
        </nav>
      )}

      <DialogContent className="sm:max-w-[480px] max-w-[94vw] rounded-2xl p-0 border-none overflow-hidden">
        <ConsultationForm onSuccess={() => setIsModalOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default MobileHeader;
