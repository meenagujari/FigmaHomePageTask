import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import treehouseImage from "@assets/4601c7cabda3c362fcbce6636bc7c0b440065bb7_1754123754312.jpg";

export default function HeroSection() {
  const hero = useSelector((state: RootState) => state.content.hero);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-start overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${treehouseImage})`
        }}
      />
      
      <div className="relative z-10 text-left text-white px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl mt-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight tracking-wide">
            {hero.title}
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-10 font-light leading-relaxed opacity-95">
            {hero.subtitle}
          </p>
          <button 
            onClick={scrollToAbout}
            className="bg-ekaant-secondary hover:bg-ekaant-primary text-white px-10 py-4 rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {hero.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
