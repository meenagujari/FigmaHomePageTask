import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function AboutSection() {
  const about = useSelector((state: RootState) => state.content.about);

  return (
    <section id="about" className="py-16 lg:py-24 bg-ekaant-neutral">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-ekaant-primary mb-6">
              {about.title}
            </h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              {about.description.map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            <button className="bg-ekaant-primary hover:bg-ekaant-secondary text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              {about.buttonText}
            </button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Ekaant forest retreat setting" 
              className="rounded-xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-ekaant-accent rounded-full opacity-20 hidden lg:block"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-ekaant-primary rounded-full opacity-30 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
