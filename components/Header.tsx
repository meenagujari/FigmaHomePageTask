import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Image from "next/image";
import logoImage from "@/public/logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const content = useSelector((state: RootState) => state.content.site);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image 
              src={logoImage} 
              alt="Ekaant Logo" 
              width={120}
              height={48}
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-800 hover:text-ekaant-primary transition-colors font-medium text-sm tracking-wide"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection("amenities")}
              className="text-gray-800 hover:text-ekaant-primary transition-colors font-medium text-sm tracking-wide"
            >
              AMENITIES
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-800 hover:text-ekaant-primary transition-colors font-medium text-sm tracking-wide"
            >
              PHOTO GALLERY
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-800 hover:text-ekaant-primary transition-colors font-medium text-sm tracking-wide"
            >
              CONTACT US
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-ekaant-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-gray-700 hover:text-ekaant-primary transition-colors font-medium"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection("amenities")}
                className="text-left text-gray-700 hover:text-ekaant-primary transition-colors font-medium"
              >
                AMENITIES
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-gray-700 hover:text-ekaant-primary transition-colors font-medium"
              >
                PHOTO GALLERY
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-ekaant-primary transition-colors font-medium"
              >
                CONTACT US
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}