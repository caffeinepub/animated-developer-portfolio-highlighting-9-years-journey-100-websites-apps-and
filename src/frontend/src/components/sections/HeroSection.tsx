import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.png"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            <span>Available for new projects</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
            Crafting Digital Excellence for{' '}
            <span className="gradient-text">9+ Years</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Full-stack developer with <strong className="text-foreground">9+ years of experience</strong> and{' '}
            <strong className="text-foreground">100+ websites</strong> delivered across schools, real estate,
            e-commerce, and more. Your one-stop solution for web development, mobile apps, digital marketing, SEO,
            and graphic design.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" onClick={scrollToContact} className="group">
              Let's Work Together
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.querySelector('#work');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Code2 className="mr-2 h-4 w-4" />
              View My Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
            {[
              { value: '9+', label: 'Years Experience' },
              { value: '100+', label: 'Websites Built' },
              { value: '50+', label: 'Apps Developed' },
              { value: '5', label: 'Core Services' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
}
