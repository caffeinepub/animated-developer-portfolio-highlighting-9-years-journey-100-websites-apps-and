import { ServiceCards } from '../ServiceCards';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">One-Stop Solution</span> for All Your Needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, I provide comprehensive digital services to bring your vision to life
          </p>
        </div>

        <ServiceCards />

        <div className="text-center mt-12">
          <Button size="lg" onClick={scrollToContact} className="group">
            Start Your Project Today
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
