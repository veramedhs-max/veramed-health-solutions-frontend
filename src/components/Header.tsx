import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Phone,
  Menu,
  X,
  ChevronDown
} from "lucide-react";
import ConsultationForm from "./ConsultationModal";

// --- Configuration for the new Dropdown Links ---
const serviceRoutes = [
  { name: "CIS Region IVF", path: "/CIS-ivf" },
  { name: "East Africa Medical", path: "/east-africa-ivf" },
  { name: "Netherlands IVF", path: "/netherlands-ivf" },
  { name: "Arab Gulf Medical", path: "/arabs-golf-ivf" },
];

// --- 🎨 STYLES: Define the Hover Animation Class here ---
// 1. relative: positions the pseudo-element
// 2. after:w-0 -> hover:after:w-full: animates width from 0 to 100%
// 3. transition-colors: smooth text color change
const navLinkClasses = `
  text-sm font-medium text-gray-700 transition-colors duration-300
  hover:text-blue-600 relative
  after:absolute after:bottom-[-4px] after:left-0 
  after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400
  after:transition-all after:duration-300 
  hover:after:w-full cursor-pointer
`;

const mobileLinkClasses = `
  block py-2 text-lg font-medium text-gray-700 
  hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200
`;

// Smooth scroll component
const NavLink = ({
  to,
  hash,
  children,
  className,
  onClick,
}: any) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleClick = (e: any) => {
    if (onClick) onClick();
    if (isHomePage && hash) {
      e.preventDefault();
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isHomePage && hash) {
    return (
      <a href={hash} className={className} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <Link to={`/${hash || ""}`} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity group"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                <span className="text-white font-bold text-base">V</span>
              </div>
              <div>
                <h1 className="text-sm md:text-base font-bold text-foreground leading-tight">
                  Veramed Health Solutions
                </h1>
                <p className="text-[10px] md:text-xs text-muted-foreground group-hover:text-blue-500 transition-colors">
                  Medical Tourism India
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center space-x-6">
              
              {/* --- SERVICES DROPDOWN --- */}
              <div className="relative group h-full flex items-center">
                {/* Applied navLinkClasses here */}
                <NavLink to="/" hash="#services" className={`${navLinkClasses} flex items-center gap-1 pb-1`}>
                  Services 
                  {/* Chevron rotates on hover */}
                  <ChevronDown className="w-4 h-4 mt-0.5 opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                </NavLink>
                
                {/* Dropdown Content */}
                <div className="absolute top-full -left-2 pt-4 w-60 hidden group-hover:block hover:block z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2 ring-1 ring-black/5">
                    {serviceRoutes.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-4 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 hover:pl-6 transition-all duration-200 border-l-2 border-transparent hover:border-blue-500"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Standard Links with Animated Underline */}
              <NavLink to="/" hash="#about" className={navLinkClasses}>About</NavLink>
              <NavLink to="/" hash="#collaborate" className={navLinkClasses}>Partners</NavLink>
              <NavLink to="/" hash="#why-us" className={navLinkClasses}>Why Us</NavLink>
              <NavLink to="/" hash="#contact" className={navLinkClasses}>Contact</NavLink>
              
              <Link to="/blog" className={navLinkClasses}>Blog</Link>
              <Link to="/leave-review" className={navLinkClasses}>Reviews</Link>
            </nav>

            {/* CTA + PHONE */}
            <div className="flex items-center">
              <div className="hidden xl:flex items-center space-x-1 mr-4 group">
                <div className="p-2 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <a href="tel:+91-9953306560" className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                  +91-9953306560
                </a>
              </div>

              <DialogTrigger asChild>
                <Button className="hidden md:block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                  Get Second Opinion
                </Button>
              </DialogTrigger>

              {/* MOBILE MENU ICON */}
              <button
                className="ml-3 lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* ⭐ MOBILE MENU */}
          <div
            className={`lg:hidden absolute left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out origin-top ${
              isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
            }`}
          >
            <div className="px-4 py-6 space-y-2 text-center max-h-[85vh] overflow-y-auto">
              
              {/* Mobile Services Section */}
              <div className="flex flex-col space-y-2">
                <NavLink className={mobileLinkClasses} to="/" hash="#services" onClick={() => setIsMenuOpen(false)}>
                  Services
                </NavLink>
                {/* Indented Sub-links for Mobile */}
                <div className="flex flex-col space-y-1 bg-slate-50 py-2 rounded-xl mx-4 border border-slate-100">
                  {serviceRoutes.map((service, index) => (
                    <Link 
                      key={index} 
                      to={service.path} 
                      className="text-sm text-gray-600 py-2 hover:text-blue-600 hover:bg-blue-50/50 font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink className={mobileLinkClasses} to="/" hash="#about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
              <NavLink className={mobileLinkClasses} to="/" hash="#collaborate" onClick={() => setIsMenuOpen(false)}>Partners</NavLink>
              <NavLink className={mobileLinkClasses} to="/" hash="#why-us" onClick={() => setIsMenuOpen(false)}>Why Us</NavLink>
              <NavLink className={mobileLinkClasses} to="/" hash="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
              <Link className={mobileLinkClasses} to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <Link className={mobileLinkClasses} to="/leave-review" onClick={() => setIsMenuOpen(false)}>Reviews</Link>

              <div className="border-t pt-5 mt-4 space-y-4">
                <div className="flex justify-center items-center space-x-2 text-sm font-medium text-gray-800">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <a href="tel:+919953306560">+91-9953306560</a>
                </div>

                <DialogTrigger asChild>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white" onClick={() => setIsMenuOpen(false)}>
                    Get Second Opinion
                  </Button>
                </DialogTrigger>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* MODAL CONTENT */}
      <DialogContent className="sm:max-w-[480px] p-0 border-none">
        <ConsultationForm onSuccess={() => setIsModalOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default Header;