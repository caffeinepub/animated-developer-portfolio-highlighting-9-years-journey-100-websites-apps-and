import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { TimelineProgressIndicator } from '../TimelineProgressIndicator';
import { Briefcase, Award, TrendingUp, Rocket } from 'lucide-react';

const milestones = [
  {
    year: '2016-2018',
    title: 'Foundation Years',
    role: 'Junior Developer',
    description: 'Started journey in web development, mastering HTML, CSS, JavaScript, and building first client websites.',
    icon: Briefcase,
    highlights: ['Built 20+ websites', 'Learned modern frameworks', 'First e-commerce project']
  },
  {
    year: '2018-2020',
    title: 'Growth & Expansion',
    role: 'Full-Stack Developer',
    description: 'Expanded into mobile app development and digital marketing, delivering comprehensive solutions.',
    icon: TrendingUp,
    highlights: ['30+ websites delivered', 'First mobile apps', 'SEO & marketing services']
  },
  {
    year: '2020-2022',
    title: 'Specialization Era',
    role: 'Senior Developer',
    description: 'Specialized in fintech and cryptocurrency apps, real estate platforms, and complex e-commerce systems.',
    icon: Award,
    highlights: ['Fintech applications', 'Crypto platforms', 'Enterprise solutions']
  },
  {
    year: '2022-Present',
    title: 'Industry Expert',
    role: 'Lead Developer & Consultant',
    description: 'Established as a one-stop solution provider, offering end-to-end services from design to deployment.',
    icon: Rocket,
    highlights: ['100+ websites milestone', 'Multi-platform apps', 'Full-service agency']
  }
];

export function JourneyTimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { observeElement } = useScrollReveal();

  useEffect(() => {
    const milestoneElements = sectionRef.current?.querySelectorAll('.timeline-milestone');
    milestoneElements?.forEach((el) => observeElement(el as HTMLElement));
  }, [observeElement]);

  return (
    <section id="journey" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 opacity-10 pointer-events-none">
        <img
          src="/assets/generated/timeline-accent.dim_1200x2400.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">9+ Years Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From building my first website to becoming a comprehensive digital solutions provider
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <TimelineProgressIndicator milestones={milestones} />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`timeline-milestone reveal ${isEven ? 'reveal-left' : 'reveal-right'} relative`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Content */}
                    <div className={`${isEven ? 'md:order-1' : 'md:order-2'} space-y-4`}>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold">{milestone.title}</h3>
                      <p className="text-accent font-medium">{milestone.role}</p>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                      <ul className="space-y-2">
                        {milestone.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Icon */}
                    <div className={`${isEven ? 'md:order-2' : 'md:order-1'} flex justify-center`}>
                      <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 border border-accent/30 flex items-center justify-center shadow-glow">
                        <Icon className="w-16 h-16 text-accent" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
