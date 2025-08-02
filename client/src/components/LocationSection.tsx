import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Car, Train, Plane, MapPin } from "lucide-react";

export default function LocationSection() {
  const location = useSelector((state: RootState) => state.content.location);

  const getIcon = (method: string) => {
    switch (method) {
      case "road": return <Car className="text-white text-lg" />;
      case "train": return <Train className="text-white text-lg" />;
      case "air": return <Plane className="text-white text-lg" />;
      default: return <MapPin className="text-white text-lg" />;
    }
  };

  const getIconBg = (index: number) => {
    const colors = ["bg-ekaant-primary", "bg-ekaant-secondary", "bg-ekaant-accent"];
    return colors[index % colors.length];
  };

  return (
    <section className="py-16 lg:py-24 bg-ekaant-neutral">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-ekaant-primary mb-8">
              {location.title}
            </h2>
            
            <div className="space-y-8">
              {location.methods.map((method, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${getIconBg(index)} rounded-full flex items-center justify-center`}>
                    {getIcon(method.type)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                    {method.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 mb-2">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl h-96 flex items-center justify-center relative overflow-hidden">
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-ekaant-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white text-2xl" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{location.coordinates.title}</h4>
                <p className="text-gray-600">{location.coordinates.address}</p>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-ekaant-primary rounded-full opacity-30"></div>
              <div className="absolute bottom-8 left-6 w-6 h-6 bg-ekaant-secondary rounded-full opacity-40"></div>
              <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-ekaant-accent rounded-full opacity-50"></div>
            </div>
            
            <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
              <p className="text-sm text-gray-600 mb-2">{location.gps.title}</p>
              <p className="text-gray-900 font-mono">{location.gps.coordinates}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
