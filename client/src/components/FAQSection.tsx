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
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-ekaant-primary mb-6">
            {faq.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {faq.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {faq.items.map((item: any, index: number) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl mb-6 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <button 
                className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 pr-4">{item.question}</h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <Minus className="text-ekaant-primary w-6 h-6 transform transition-transform duration-200" />
                    ) : (
                      <Plus className="text-ekaant-primary w-6 h-6 transform transition-transform duration-200" />
                    )}
                  </div>
                </div>
              </button>
              {openFAQ === index && (
                <div className="px-8 pb-6 text-gray-700 text-lg leading-relaxed border-t border-gray-100 pt-4">
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
