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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${treehouseImage})`
        }}
      />
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {hero.title}
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 font-light max-w-2xl mx-auto">
          {hero.subtitle}
        </p>
        <button 
          onClick={scrollToAbout}
          className="bg-ekaant-primary hover:bg-ekaant-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          {hero.buttonText}
        </button>
      </div>
    </section>
  );
}
