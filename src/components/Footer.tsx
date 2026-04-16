import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const logoUrl = "https://storage.googleapis.com/dala-prod-public-storage/attachments/8125c7aa-d9dd-4e40-b993-5621fdf4e946/1776176534136_logo.jpg";
  const brandTurquoise = "#00e0d1";

  return (
    <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="h-12 w-12 rounded-full border overflow-hidden grayscale-[0.2] hover:grayscale-0 transition-all shadow-[0_0_10px_rgba(0,224,209,0.1)]"
                style={{ borderColor: `${brandTurquoise}4d` }}
              >
                <img
                  src={logoUrl}
                  alt="Addis Tech Group Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-black tracking-tighter text-white uppercase italic">
                Addis Tech Group
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-8">
              Engineering Ethiopia’s smart future through intelligent hardware, PCB design, and local expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors" style={{ color: undefined }} onMouseEnter={(e) => e.currentTarget.style.color = brandTurquoise} onMouseLeave={(e) => e.currentTarget.style.color = ''}><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors" style={{ color: undefined }} onMouseEnter={(e) => e.currentTarget.style.color = brandTurquoise} onMouseLeave={(e) => e.currentTarget.style.color = ''}><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors" style={{ color: undefined }} onMouseEnter={(e) => e.currentTarget.style.color = brandTurquoise} onMouseLeave={(e) => e.currentTarget.style.color = ''}><Github className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white transition-colors" style={{ color: undefined }} onMouseEnter={(e) => e.currentTarget.style.color = brandTurquoise} onMouseLeave={(e) => e.currentTarget.style.color = ''}><Mail className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="transition-colors" style={{ color: undefined }} onMouseEnter={(e) => e.currentTarget.style.color = brandTurquoise} onMouseLeave={(e) => e.currentTarget.style.color = ''}>About Us</Link></li>
              <li><Link to="/" className="transition-colors" style={{ color: undefined }} onMouseEnter={(e) => e.currentTarget.style.color = brandTurquoise} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Our Impact</Link></li>
              <li><Link to="/training" className="transition-colors" style={{ color: undefined }} onMouseEnter={(e) => e.currentTarget.style.color = brandTurquoise} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Training</Link></li>
              <li><a href="#" className="transition-colors" style={{ color: undefined }} onMouseEnter={(e) => e.currentTarget.style.color = brandTurquoise} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="transition-colors" style={{ color: undefined }} onMouseEnter={(e) => e.currentTarget.style.color = brandTurquoise} onMouseLeave={(e) => e.currentTarget.style.color = ''}>PCB Design</Link></li>
              <li><Link to="/products" className="transition-colors" style={{ color: undefined }} onMouseEnter={(e) => e.currentTarget.style.color = brandTurquoise} onMouseLeave={(e) => e.currentTarget.style.color = ''}>AddisThings IoT</Link></li>
              <li><Link to="/products" className="transition-colors" style={{ color: undefined }} onMouseEnter={(e) => e.currentTarget.style.color = brandTurquoise} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Addis Medical</Link></li>
              <li><Link to="/services" className="transition-colors" style={{ color: undefined }} onMouseEnter={(e) => e.currentTarget.style.color = brandTurquoise} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Hardware Prototyping</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/contact" className="transition-colors" style={{ color: undefined }} onMouseEnter={(e) => e.currentTarget.style.color = brandTurquoise} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Contact</Link></li>
              <li><a href="#" className="transition-colors" style={{ color: undefined }} onMouseEnter={(e) => e.currentTarget.style.color = brandTurquoise} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Privacy Policy</a></li>
              <li><a href="#" className="transition-colors" style={{ color: undefined }} onMouseEnter={(e) => e.currentTarget.style.color = brandTurquoise} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 text-center text-xs tracking-widest uppercase font-black italic">
          <p>© {new Date().getFullYear()} ADDIS TECH GROUP. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;