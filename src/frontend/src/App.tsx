import { PortfolioLayout } from './components/PortfolioLayout';
import { HeroSection } from './components/sections/HeroSection';
import { JourneyTimelineSection } from './components/sections/JourneyTimelineSection';
import { WorkProjectsSection } from './components/sections/WorkProjectsSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ContactSection } from './components/sections/ContactSection';
import { PortfolioNavbar } from './components/PortfolioNavbar';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <PortfolioLayout>
      <PortfolioNavbar />
      <HeroSection />
      <JourneyTimelineSection />
      <WorkProjectsSection />
      <ServicesSection />
      <ContactSection />
      <Toaster />
    </PortfolioLayout>
  );
}

export default App;
