import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-ekaant-primary rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L22 7V17L12 22L2 17V7L12 2Z" fill="white"/>
                <path d="M6 8L12 11L18 8M12 11V20" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="text-2xl font-bold text-ekaant-primary">{content.name}</div>
            <div className="text-sm text-gray-600 hidden md:block">{content.tagline}</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-ekaant-primary transition-colors font-medium"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection("amenities")}
              className="text-gray-700 hover:text-ekaant-primary transition-colors font-medium"
            >
              AMENITIES
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-ekaant-primary transition-colors font-medium"
            >
              PHOTO GALLERY
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-ekaant-primary transition-colors font-medium"
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
