import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin,
  Globe,
  ChevronRight,
  ShieldCheck
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 text-white pt-20 pb-10 overflow-hidden">
      
      {/* --- Decorative Top Border --- */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600"></div>

      {/* --- Background Elements (Optional for depth) --- */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* 1. Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/50 group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">V</span>
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">Veramed</h3>
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">Health Solutions</p>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Your trusted partner in global healthcare, facilitating world-class 
              medical treatments abroad with comprehensive support since 2016.
            </p>
            
            {/* Trust Badge */}
            <div className="inline-flex items-center px-3 py-1 bg-blue-900/30 border border-blue-800 rounded-full">
              <ShieldCheck className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-xs text-blue-200">ISO Certified Partner</span>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-800 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Our Services", link: "#services" },
                { name: "About Us", link: "#about" },
                { name: "Why Choose Us", link: "#why-us" },
                { name: "Contact", link: "/contact" }, // Changed to route
                { name: "Patient Gallery", link: "/patients-gallery" },
              ].map((item, index) => (
                <li key={index}>
                  {item.link.startsWith('#') ? (
                    <a href={item.link} className="group flex items-center text-gray-400 hover:text-cyan-400 transition-all duration-300">
                      <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                      {item.name}
                    </a>
                  ) : (
                    <Link to={item.link} className="group flex items-center text-gray-400 hover:text-cyan-400 transition-all duration-300">
                      <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-800 pb-2 inline-block">Key Services</h4>
            <ul className="space-y-3">
              {[
                { name: "Treatment Planning", link: "/treatment-planning" },
                { name: "Visa & Travel Logistics", link: "/visa-travel" },
                { name: "Cultural Support", link: "/culture-language-support" },
                { name: "Post-Treatment Care", link: "/post-treatment" },
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className="group flex items-center text-gray-400 hover:text-cyan-400 transition-all duration-300">
                    <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-800 pb-2 inline-block">Get in Touch</h4>
            <div className="space-y-5">
              <ContactItem 
                icon={<Phone className="w-5 h-5" />} 
                text="+91-9953306560" 
                href="tel:+919953306560" 
              />
              <ContactItem 
                icon={<Mail className="w-5 h-5" />} 
                text="veramedhs@gmail.com" 
                href="mailto:veramedhs@gmail.com" 
              />
              <ContactItem 
                icon={<MapPin className="w-5 h-5" />} 
                text="Sec-46, Gurugram, Haryana" 
                href="https://www.google.com/maps/dir//3060-P,+near+ambedkar+chowk,+Samaspur+Village,+Sector+46,+Gurugram,+Samaspur,+Haryana+122003" 
                isExternal 
              />
              <div className="flex items-center space-x-4 text-gray-400">
                <div className="p-2 bg-gray-800 rounded-lg text-cyan-500">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">24/7 Global Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Veramed Health Solutions. <span className="hidden sm:inline">|</span> Founded by Shah Fahad
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-condition" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/medical-desclaimar" className="hover:text-white transition-colors">Medical Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Component for Contact Items
const ContactItem = ({ icon, text, href, isExternal }: { icon: any, text: string, href: string, isExternal?: boolean }) => (
  <a 
    href={href} 
    target={isExternal ? "_blank" : undefined}
    rel={isExternal ? "noopener noreferrer" : undefined}
    className="flex items-start space-x-4 group"
  >
    <div className="p-2 bg-gray-800 rounded-lg text-gray-400 group-hover:text-cyan-400 group-hover:bg-gray-700 transition-colors">
      {icon}
    </div>
    <span className="text-gray-300 group-hover:text-white transition-colors text-sm mt-1.5 break-all sm:break-normal">
      {text}
    </span>
  </a>
);

export default Footer;