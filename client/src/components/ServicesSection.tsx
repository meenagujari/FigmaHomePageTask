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
    <section id="amenities" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-ekaant-primary mb-6">
            {services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.items.map((service: any, index: number) => (
            <div key={index} className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={serviceImages[index % serviceImages.length]}
                    alt={service.title}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-ekaant-secondary hover:bg-ekaant-primary text-white px-10 py-4 rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            {services.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
