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
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-ekaant-primary mb-12 leading-tight">
              {location.title}
            </h2>
            
            <div className="space-y-10">
              {location.methods.map((method: any, index: number) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-14 h-14 ${getIconBg(index)} rounded-2xl flex items-center justify-center shadow-lg`}>
                    {getIcon(method.type)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{method.title}</h3>
                    <div className="space-y-2">
                      {method.details.map((detail: string, detailIndex: number) => (
                        <p key={detailIndex} className="text-gray-600 text-lg leading-relaxed">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:mt-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 h-96 flex items-center justify-center relative overflow-hidden shadow-xl">
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-ekaant-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MapPin className="text-white text-3xl" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{location.coordinates.title}</h4>
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">{location.coordinates.address}</p>
              </div>
              <div className="absolute top-6 right-6 w-12 h-12 bg-ekaant-primary rounded-full opacity-20"></div>
              <div className="absolute bottom-10 left-8 w-8 h-8 bg-ekaant-secondary rounded-full opacity-30"></div>
              <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-ekaant-accent rounded-full opacity-40"></div>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <p className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">{location.gps.title}</p>
              <p className="text-gray-900 font-mono text-lg">{location.gps.coordinates}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
