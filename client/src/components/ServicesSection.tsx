import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import activityImage1 from "@assets/Group 1_1754123784031.png";
import activityImage2 from "@assets/Group 2_1754123793682.png";
import sportsImage from "@assets/Mask group_1754123774208.png";

export default function ServicesSection() {
  const services = useSelector((state: RootState) => state.content.services);

  const serviceImages = [
    activityImage1,
    activityImage1,
    activityImage1,
    activityImage2,
    activityImage2,
    sportsImage
  ];

  return (
    <section id="amenities" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-ekaant-primary mb-4">
            {services.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.items.map((service, index) => (
            <div key={index} className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl">
                <img 
                  src={serviceImages[index % serviceImages.length]}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-ekaant-primary hover:bg-ekaant-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            {services.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
