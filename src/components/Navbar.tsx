import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

 

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/SERVICES" },
    { name: "PRODUCTS", href: "/PRODUCTS" },
    { name: "TRAINING", href: "/TRAINING" },
    { name: "ABOUT", href: "/ABOUT" },
    { name: "CONTACT", href: "/CONTACT" },
  ];

  const logoUrl = "https://storage.googleapis.com/dala-prod-public-storage/attachments/8125c7aa-d9dd-4e40-b993-5621fdf4e946/1776176534136_logo.jpg";
  const brandTurquoise = "#00e0d1";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div 
              className="h-12 w-12 rounded-full border-2 overflow-hidden transition-transform duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(0,224,209,0.2)]"
              style={{ borderColor: `${brandTurquoise}4d` }} // 30% opacity
            >
              <img
                src={logoUrl}
                alt="Addis Tech Group"
                className="w-full h-full object-cover"
              />
            </div>
            <span 
              className="text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r transition-all duration-300 group-hover:tracking-tight"
              style={{ backgroundImage: `linear-gradient(to right, ${brandTurquoise}, #0284c7)` }}
            >
              ADDIS TECH GROUP
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm font-bold tracking-wide transition-all duration-300 ${
                    isActive ? "border-b-2 pb-1" : "text-foreground/70 hover:opacity-80"
                  }`
                }
                style={({ isActive }) => ({
                  color: isActive ? brandTurquoise : undefined,
                  borderColor: isActive ? brandTurquoise : undefined,
                })}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground/70 transition-colors"
              style={{ color: isOpen ? brandTurquoise : undefined }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-4 text-base font-bold rounded-xl transition-all ${
                      isActive ? "shadow-inner" : "text-foreground/70 hover:bg-white/5"
                    }`
                  }
                  style={({ isActive }) => ({
                    color: isActive ? brandTurquoise : undefined,
                    backgroundColor: isActive ? `${brandTurquoise}1a` : undefined, // 10% opacity
                  })}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
