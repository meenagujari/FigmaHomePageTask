import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number>(-1);
  const faq = useSelector((state: RootState) => state.content.faq);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-ekaant-primary mb-4">
            {faq.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {faq.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faq.items.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
              <button 
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                  {openFAQ === index ? (
                    <Minus className="text-ekaant-primary transform transition-transform duration-200" />
                  ) : (
                    <Plus className="text-ekaant-primary transform transition-transform duration-200" />
                  )}
                </div>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4 text-gray-600">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
