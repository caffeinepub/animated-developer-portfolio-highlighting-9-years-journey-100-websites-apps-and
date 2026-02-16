import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const websiteCategories = [
  {
    id: 'schools',
    name: 'Schools',
    description: 'Educational platforms with student portals, course management, and parent communication systems',
    count: '25+',
    highlights: ['Student Management', 'Online Learning', 'Parent Portals', 'Event Calendars']
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Property listing platforms with advanced search, virtual tours, and CRM integration',
    count: '30+',
    highlights: ['Property Listings', 'Virtual Tours', 'Lead Management', 'Map Integration']
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Full-featured online stores with payment gateways, inventory management, and analytics',
    count: '35+',
    highlights: ['Payment Integration', 'Inventory System', 'Order Tracking', 'Customer Reviews']
  },
  {
    id: 'other',
    name: 'Other',
    description: 'Corporate websites, portfolios, blogs, and custom web applications across various industries',
    count: '10+',
    highlights: ['Corporate Sites', 'Portfolios', 'Blogs', 'Custom Solutions']
  }
];

const appCategories = [
  {
    id: 'fintech',
    name: 'Fintech',
    description: 'Financial technology applications with secure transactions, account management, and analytics',
    count: '12+',
    highlights: ['Payment Processing', 'Account Management', 'Transaction History', 'Security Features']
  },
  {
    id: 'cryptocurrency',
    name: 'Cryptocurrency',
    description: 'Crypto trading platforms, wallets, and blockchain-based applications',
    count: '8+',
    highlights: ['Trading Platforms', 'Crypto Wallets', 'Market Analytics', 'Blockchain Integration']
  },
  {
    id: 'real-estate-app',
    name: 'Real Estate',
    description: 'Mobile apps for property search, virtual tours, and agent-client communication',
    count: '10+',
    highlights: ['Property Search', 'AR Tours', 'Agent Chat', 'Mortgage Calculator']
  },
  {
    id: 'ecommerce-app',
    name: 'E-commerce',
    description: 'Shopping apps with seamless checkout, push notifications, and loyalty programs',
    count: '15+',
    highlights: ['Mobile Shopping', 'Push Notifications', 'Loyalty Programs', 'Quick Checkout']
  },
  {
    id: 'travel',
    name: 'Travel',
    description: 'Travel booking apps with itinerary planning, booking management, and local guides',
    count: '5+',
    highlights: ['Booking System', 'Itinerary Planning', 'Local Guides', 'Travel Tips']
  }
];

export function WorkCategoryTabs() {
  const [activeTab, setActiveTab] = useState('websites');

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
        <TabsTrigger value="websites" className="text-base">
          Websites
        </TabsTrigger>
        <TabsTrigger value="apps" className="text-base">
          Mobile Apps
        </TabsTrigger>
      </TabsList>

      <TabsContent value="websites" className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          {websiteCategories.map((category) => (
            <Card key={category.id} className="group hover:shadow-soft transition-all duration-300 hover:border-accent/50">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">{category.name}</CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    {category.count}
                  </Badge>
                </div>
                <CardDescription className="text-base">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.highlights.map((highlight, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="apps" className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          {appCategories.map((category) => (
            <Card key={category.id} className="group hover:shadow-soft transition-all duration-300 hover:border-accent/50">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">{category.name}</CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    {category.count}
                  </Badge>
                </div>
                <CardDescription className="text-base">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.highlights.map((highlight, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
