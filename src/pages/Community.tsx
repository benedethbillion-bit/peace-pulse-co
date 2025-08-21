import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, 
  MessageCircle, 
  Heart, 
  Shield,
  Brain,
  ArrowRight,
  Star,
  Clock,
  User,
  Settings
} from "lucide-react";

const Community = () => {
  const communityStats = [
    { label: "Active Members", value: "10,247", icon: Users },
    { label: "Support Groups", value: "24", icon: MessageCircle },
    { label: "Success Stories", value: "156", icon: Star },
    { label: "Daily Check-ins", value: "1,200+", icon: Heart }
  ];

  const supportGroups = [
    {
      name: "Exam Stress Support",
      members: 1240,
      description: "Share strategies and support each other through high-pressure exam periods.",
      category: "Stress Management",
      lastActive: "2 mins ago",
      featured: true
    },
    {
      name: "Study Buddies",
      members: 890,
      description: "Find accountability partners and build productive study habits together.",
      category: "Productivity",
      lastActive: "5 mins ago",
      featured: true
    },
    {
      name: "Mindfulness Circle",
      members: 756,
      description: "Practice meditation and mindfulness techniques with fellow students.",
      category: "Wellness",
      lastActive: "12 mins ago",
      featured: false
    },
    {
      name: "First-Year Support",
      members: 1100,
      description: "Navigate the challenges of college transition with peer mentorship.",
      category: "Student Life",
      lastActive: "8 mins ago",
      featured: true
    }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Computer Science Student",
      content: "The community helped me realize I wasn't alone in my struggles. Finding people who understood made all the difference.",
      avatar: "AC",
      rating: 5
    },
    {
      name: "Maya Rodriguez",
      role: "Psychology Major", 
      content: "The study buddies group kept me accountable during finals. We celebrated each other's wins and supported through tough times.",
      avatar: "MR",
      rating: 5
    },
    {
      name: "Jordan Kim",
      role: "Graduate Student",
      content: "The mindfulness circle taught me techniques I still use daily. The community aspect made it so much more engaging.",
      avatar: "JK", 
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-wellness">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-border/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gradient">Clarity On</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link>
              <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              <Link to="/community" className="text-primary font-medium">Community</Link>
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join a <span className="text-gradient">Supportive Community</span> of Students
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Connect with peers who understand your challenges, share experiences in a safe space, 
            and find the support you need to thrive academically and personally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="px-8 py-6 text-lg">
              Join Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              Browse Groups
            </Button>
          </div>

          {/* Community Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {communityStats.map((stat, index) => (
              <Card key={index} className="wellness-card border-0 text-center p-4">
                <CardContent className="p-0">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Backend Notice */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="wellness-card border-0 bg-accent/10 border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Settings className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Community Features Coming Soon</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    To enable full community functionality including user accounts, messaging, and real-time interactions, 
                    you'll need to connect your Lovable project to Supabase. This will provide:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• User authentication and profiles</li>
                    <li>• Real-time messaging and discussions</li>
                    <li>• Community moderation tools</li>
                    <li>• Progress sharing and accountability features</li>
                  </ul>
                  <Button size="sm" className="bg-accent hover:bg-accent/90">
                    Connect Supabase Integration
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Groups */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Support Groups</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find your community among our diverse support groups, each designed around 
              specific student challenges and wellness goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {supportGroups.map((group, index) => (
              <Card key={index} className={`wellness-card hover-lift border-0 p-6 ${group.featured ? 'ring-2 ring-primary/20' : ''}`}>
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold">{group.name}</h3>
                        {group.featured && (
                          <Badge variant="secondary" className="text-xs">Featured</Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {group.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{group.members.toLocaleString()} members</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{group.lastActive}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {group.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              View All Groups
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-12 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Safe & Moderated Environment</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your safety and privacy are our top priorities. Our community guidelines and 
              moderation ensure a supportive, respectful environment for all members.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="wellness-card border-0 text-center p-6">
              <CardContent className="p-0">
                <Shield className="h-8 w-8 text-wellness-green mx-auto mb-3" />
                <h3 className="font-semibold mb-2">24/7 Moderation</h3>
                <p className="text-muted-foreground text-sm">
                  Professional moderators ensure conversations stay supportive and respectful.
                </p>
              </CardContent>
            </Card>
            
            <Card className="wellness-card border-0 text-center p-6">
              <CardContent className="p-0">
                <User className="h-8 w-8 text-wellness-green mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Anonymous Options</h3>
                <p className="text-muted-foreground text-sm">
                  Share safely with anonymous posting options when you need extra privacy.
                </p>
              </CardContent>
            </Card>
            
            <Card className="wellness-card border-0 text-center p-6">
              <CardContent className="p-0">
                <Heart className="h-8 w-8 text-wellness-green mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Crisis Support</h3>
                <p className="text-muted-foreground text-sm">
                  Immediate access to mental health resources and crisis intervention when needed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Community Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from students who found support and growth in our community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="wellness-card border-0 p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-medium">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            You Don't Have to Face Challenges Alone
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join a community that understands your journey. Find support, make connections, 
            and grow together with fellow students who share your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
              Join Community Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-white/30 text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8" />
                <span className="text-xl font-bold">Clarity On</span>
              </div>
              <p className="text-background/70 leading-relaxed max-w-md">
                Empowering students and youth with evidence-based wellness tools 
                for emotional well-being, stress management, and academic success.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-background/70">
                <li><Link to="/features" className="hover:text-background transition-colors">Features</Link></li>
                <li><Link to="/blog" className="hover:text-background transition-colors">Blog</Link></li>
                <li><Link to="/community" className="hover:text-background transition-colors">Community</Link></li>
                <li><Link to="/pricing" className="hover:text-background transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-background/70">
                <li><Link to="/help" className="hover:text-background transition-colors">Help Center</Link></li>
                <li><Link to="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-background transition-colors">Terms of Service</Link></li>
                <li><Link to="/contact" className="hover:text-background transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
            <p>&copy; 2024 Clarity On. All rights reserved. Built with care for student wellness.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Community;