import founderImage from "@/assets/founder-with-children.jpg";

const WhoWeAreSection = () => {
  return (
    <section id="about" className="py-24 bg-muted relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-warm opacity-20 rounded-2xl blur-2xl" />
            <img
              src={founderImage}
              alt="Founder with children"
              className="relative rounded-2xl shadow-float w-full h-[500px] object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              We Don't Just Build Futures —
              <span className="text-secondary"> We Nurture Dreams</span>
            </h2>

            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              Founded with love and purpose, the D.V. Singh Foundation exists because every child,
              regardless of circumstance, carries within them infinite potential. We believe
              education is not a privilege — it's a birthright.
            </p>

            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              Through compassion-driven programs and community support, we transform lives one
              child at a time, creating ripples of hope that extend far beyond classrooms.
            </p>

            {/* Signature */}
            <div className="pt-6">
              <p className="font-playfair text-xl italic text-accent">
                "We don't just build futures — we nurture dreams."
              </p>
              <p className="font-inter text-sm text-muted-foreground mt-2">
                — D.V. Singh, Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
