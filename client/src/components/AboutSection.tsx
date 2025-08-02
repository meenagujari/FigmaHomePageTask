import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function AboutSection() {
  const about = useSelector((state: RootState) => state.content.about);

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-ekaant-primary mb-8 leading-tight">
              {about.title}
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-6">
              {about.description.map((paragraph: string, index: number) => (
                <p key={index} className="text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
            <button className="mt-10 bg-ekaant-secondary hover:bg-ekaant-primary text-white px-8 py-4 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              {about.buttonText}
            </button>
          </div>
          
          <div className="relative lg:mt-8">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Ekaant forest retreat setting" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
