import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background/95" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-glow rounded-full blur-3xl animate-float opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-glow rounded-full blur-3xl animate-float opacity-20" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in-slow">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
          Every Child Deserves
          <br />
          <span className="text-accent">the Chance to Dream</span>
        </h1>

        <p className="font-inter text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
          Your kindness can light the path for a child's tomorrow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="group shadow-warm">
            Make a Difference
            <Heart className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          </Button>
          <Button variant="heroSecondary" size="lg" className="group">
            See Our Work
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
