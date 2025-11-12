import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import raniImage from "@/assets/child-rani.jpg";
import arjunImage from "@/assets/child-arjun.jpg";

const stories = [
  {
    name: "Rani",
    age: 8,
    quote: "Now I can go to school every day.",
    image: raniImage,
  },
  {
    name: "Arjun",
    age: 10,
    quote: "I want to become a doctor so I can help others.",
    image: arjunImage,
  },
];

const ImpactStoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section id="stories" className="py-24 bg-gradient-hope relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Faces of <span className="text-accent">Change</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground">
            These are the voices of hope we're helping create.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl shadow-float">
            {stories.map((story, index) => (
              <div
                key={story.name}
                className={`transition-all duration-700 ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 absolute inset-0 translate-x-full"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-96 md:h-[500px]">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/30" />
                  </div>

                  {/* Content */}
                  <div className="bg-card p-12 flex flex-col justify-center">
                    <div className="mb-8">
                      <div className="w-16 h-1 bg-secondary mb-6" />
                      <p className="font-playfair text-3xl md:text-4xl italic text-foreground leading-relaxed mb-6">
                        "{story.quote}"
                      </p>
                      <p className="font-inter text-lg text-muted-foreground">
                        — {story.name}, {story.age} years old
                      </p>
                    </div>

                    <p className="font-inter text-sm text-accent">
                      Your kindness made this moment possible.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full shadow-soft hover:shadow-warm transition-shadow"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full shadow-soft hover:shadow-warm transition-shadow"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-secondary w-8"
                    : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStoriesSection;
