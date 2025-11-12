import educateImage from "@/assets/educate.jpg";
import nurtureImage from "@/assets/nurture.jpg";
import empowerImage from "@/assets/empower.jpg";
import protectImage from "@/assets/protect.jpg";

const initiatives = [
  {
    title: "Educate",
    description: "Education gives them wings.",
    image: educateImage,
    color: "from-sky/20 to-transparent",
  },
  {
    title: "Nurture",
    description: "Care that fills hearts and minds.",
    image: nurtureImage,
    color: "from-accent/20 to-transparent",
  },
  {
    title: "Empower",
    description: "Building confidence through creativity.",
    image: empowerImage,
    color: "from-secondary/20 to-transparent",
  },
  {
    title: "Protect",
    description: "Safe spaces where dreams can grow.",
    image: protectImage,
    color: "from-primary/20 to-transparent",
  },
];

const InitiativesSection = () => {
  return (
    <section id="initiatives" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Turning Compassion into <span className="text-secondary">Action</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            These are not just programs. They are promises kept.
          </p>
        </div>

        {/* Flowing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {initiatives.map((initiative, index) => (
            <div
              key={initiative.title}
              className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-warm transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${initiative.color}`} />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-transparent flex flex-col justify-end p-6 transition-all duration-500">
                <h3 className="font-playfair text-3xl font-bold text-primary-foreground mb-2">
                  {initiative.title}
                </h3>
                <p className="font-inter text-sm text-primary-foreground/90 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {initiative.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-glow" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <p className="text-center font-playfair text-xl italic text-muted-foreground mt-16 animate-fade-in-slow">
          These are not just programs. They are promises kept.
        </p>
      </div>
    </section>
  );
};

export default InitiativesSection;
