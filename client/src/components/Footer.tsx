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
    <footer id="contact" className="bg-ekaant-primary text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">{footer.contact.title}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="text-ekaant-accent mt-1" />
                <div>
                  <p className="font-semibold">{footer.contact.email.label}</p>
                  <a href={`mailto:${footer.contact.email.address}`} className="text-ekaant-accent hover:text-yellow-300 transition-colors">
                    {footer.contact.email.address}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="text-ekaant-accent mt-1" />
                <div>
                  <p className="font-semibold">{footer.contact.phone.label}</p>
                  <a href={`tel:${footer.contact.phone.number}`} className="text-ekaant-accent hover:text-yellow-300 transition-colors">
                    {footer.contact.phone.number}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-ekaant-accent mt-1" />
                <div>
                  <p className="font-semibold">{footer.contact.address.label}</p>
                  <p className="text-gray-300">{footer.contact.address.details}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{footer.quickLinks.title}</h4>
            <ul className="space-y-2">
              {footer.quickLinks.items.map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(item.link)}
                    className="text-gray-300 hover:text-ekaant-accent transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{footer.activities.title}</h4>
            <ul className="space-y-2">
              {footer.activities.items.map((activity, index) => (
                <li key={index} className="text-gray-300">{activity}</li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{footer.social.title}</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 bg-ekaant-secondary rounded-full flex items-center justify-center hover:bg-ekaant-accent transition-colors">
                <Facebook className="text-white" size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-ekaant-secondary rounded-full flex items-center justify-center hover:bg-ekaant-accent transition-colors">
                <Instagram className="text-white" size={16} />
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-300 mb-2">{footer.newsletter.title}</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-l-lg text-gray-900 focus:outline-none"
                />
                <button 
                  onClick={handleSubscribe}
                  className="bg-ekaant-accent hover:bg-yellow-500 text-ekaant-primary px-4 py-2 rounded-r-lg font-semibold transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              {footer.copyright}
            </p>
            <div className="flex space-x-6 text-sm">
              {footer.legal.map((item, index) => (
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
