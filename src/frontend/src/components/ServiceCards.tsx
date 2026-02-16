import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Smartphone, TrendingUp, Search, Palette } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies, responsive design, and optimal performance.',
    features: ['Responsive Design', 'CMS Integration', 'E-commerce', 'Web Apps']
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
    features: ['iOS & Android', 'Cross-platform', 'API Integration', 'Cloud Sync']
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing campaigns to grow your online presence and reach your target audience.',
    features: ['Social Media', 'Content Strategy', 'Email Marketing', 'Analytics']
  },
  {
    icon: Search,
    title: 'SEO',
    description: 'Search engine optimization to improve your website visibility and drive organic traffic.',
    features: ['On-page SEO', 'Technical SEO', 'Link Building', 'Local SEO']
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Creative visual designs including branding, UI/UX, and marketing materials that make an impact.',
    features: ['Brand Identity', 'UI/UX Design', 'Marketing Materials', 'Illustrations']
  }
];

export function ServiceCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <Card
            key={index}
            className="group hover:shadow-soft transition-all duration-300 hover:border-accent/50 hover:-translate-y-1"
          >
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-xl group-hover:text-accent transition-colors">{service.title}</CardTitle>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
