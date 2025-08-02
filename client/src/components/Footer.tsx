import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Mail, Phone, MapPin, Send, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const footer = useSelector((state: RootState) => state.content.footer);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubscribe = () => {
    if (email) {
      // Newsletter subscription logic would go here
      setEmail("");
    }
  };

  return (
    <footer id="contact" className="bg-ekaant-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 leading-tight">{footer.contact.title}</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="text-ekaant-accent mt-1.5 w-5 h-5" />
                <div>
                  <p className="font-semibold text-lg mb-1">{footer.contact.email.label}</p>
                  <a href={`mailto:${footer.contact.email.address}`} className="text-ekaant-accent hover:text-yellow-300 transition-colors text-lg">
                    {footer.contact.email.address}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="text-ekaant-accent mt-1.5 w-5 h-5" />
                <div>
                  <p className="font-semibold text-lg mb-1">{footer.contact.phone.label}</p>
                  <a href={`tel:${footer.contact.phone.number}`} className="text-ekaant-accent hover:text-yellow-300 transition-colors text-lg">
                    {footer.contact.phone.number}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="text-ekaant-accent mt-1.5 w-5 h-5" />
                <div>
                  <p className="font-semibold text-lg mb-1">{footer.contact.address.label}</p>
                  <p className="text-gray-300 text-lg whitespace-pre-line">{footer.contact.address.details}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">{footer.quickLinks.title}</h4>
            <ul className="space-y-3">
              {footer.quickLinks.items.map((item: any, index: number) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(item.link)}
                    className="text-gray-300 hover:text-ekaant-accent transition-colors text-lg"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h4 className="text-xl font-bold mb-6">{footer.activities.title}</h4>
            <ul className="space-y-3">
              {footer.activities.items.map((activity: string, index: number) => (
                <li key={index} className="text-gray-300 text-lg">{activity}</li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h5 className="text-lg font-semibold mb-4">{footer.social.title}</h5>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="w-12 h-12 bg-ekaant-secondary rounded-full flex items-center justify-center hover:bg-ekaant-accent transition-colors shadow-lg">
                  <Facebook className="text-white" size={18} />
                </a>
                <a href="#" className="w-12 h-12 bg-ekaant-secondary rounded-full flex items-center justify-center hover:bg-ekaant-accent transition-colors shadow-lg">
                  <Instagram className="text-white" size={18} />
                </a>
              </div>
              <div>
                <p className="text-gray-300 mb-3 font-medium">{footer.newsletter.title}</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-ekaant-accent"
                  />
                  <button 
                    onClick={handleSubscribe}
                    className="bg-ekaant-accent hover:bg-yellow-500 text-ekaant-primary px-6 py-3 rounded-r-lg font-semibold transition-colors shadow-lg"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-lg mb-6 md:mb-0">
              {footer.copyright}
            </p>
            <div className="flex space-x-8 text-lg">
              {footer.legal.map((item: string, index: number) => (
                <a key={index} href="#" className="text-gray-300 hover:text-ekaant-accent transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
