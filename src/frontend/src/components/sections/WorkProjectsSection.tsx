import { WorkCategoryTabs } from '../WorkCategoryTabs';

export function WorkProjectsSection() {
  return (
    <section id="work" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Work & Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of 100+ websites and 50+ mobile applications across diverse industries
          </p>
        </div>

        <WorkCategoryTabs />
      </div>
    </section>
  );
}
