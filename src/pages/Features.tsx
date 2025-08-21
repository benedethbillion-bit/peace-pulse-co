import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Timer, 
  Music, 
  BookOpen, 
  Users, 
  Target,
  Brain,
  ArrowRight,
  CheckCircle,
  Smartphone,
  Shield,
  Zap
} from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: Heart,
      title: "Mood Tracker",
      description: "Monitor your emotional well-being with intelligent insights, mood patterns, and personalized recommendations based on your daily check-ins.",
      features: ["Daily mood logging", "Pattern recognition", "Emotional insights", "Progress tracking"]
    },
    {
      icon: Timer,
      title: "Focus Timer",
      description: "Boost productivity with customizable Pomodoro sessions, focus analytics, and distraction-blocking tools designed for students.",
      features: ["Pomodoro technique", "Custom time blocks", "Focus analytics", "Break reminders"]
    },
    {
      icon: Music,
      title: "Guided Stress Relief",
      description: "Calm your mind with curated music, breathing exercises, guided meditations, and nature sounds for instant relaxation.",
      features: ["Calming music library", "Breathing exercises", "Guided meditations", "Nature soundscapes"]
    },
    {
      icon: BookOpen,
      title: "Smart Journaling",
      description: "Express thoughts safely with AI-powered prompts, reflection tools, and secure private entries that help process emotions.",
      features: ["AI writing prompts", "Secure entries", "Reflection tools", "Mood correlation"]
    },
    {
      icon: Users,
      title: "Supportive Community",
      description: "Connect with peers in a safe, moderated environment for mutual support, shared experiences, and encouragement.",
      features: ["Peer support groups", "Anonymous sharing", "Moderated discussions", "Success stories"]
    },
    {
      icon: Target,
      title: "Personal Growth",
      description: "Track progress with goal setting, habit building, achievement milestones, and personalized wellness plans.",
      features: ["Goal setting", "Habit tracking", "Achievement badges", "Progress insights"]
    }
  ];

  const additionalFeatures = [
    {
      icon: Smartphone,
      title: "Cross-Platform Access",
      description: "Available on web, iOS, and Android for seamless wellness support wherever you are."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data is encrypted and secure. We prioritize your privacy and mental health confidentiality."
    },
    {
      icon: Zap,
      title: "Science-Based",
      description: "All features are backed by psychological research and evidence-based wellness practices."
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
              <Link to="/features" className="text-primary font-medium">Features</Link>
              <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              <Link to="/community" className="text-muted-foreground hover:text-primary transition-colors">Community</Link>
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
            Comprehensive <span className="text-gradient">Wellness Tools</span> for Students
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover all the features designed to support your mental health, boost productivity, 
            and help you thrive academically while maintaining emotional well-being.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-12">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-wellness-green" />
              <span>Evidence-based methods</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-wellness-green" />
              <span>Privacy protected</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-wellness-green" />
              <span>Student-focused design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="wellness-card hover-lift border-0 p-8">
                <CardContent className="p-0">
                  <div className="flex items-start gap-6">
                    <div className="p-3 bg-primary-soft rounded-xl flex-shrink-0">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.features.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-wellness-green flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-12 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Clarity On?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built specifically for students with features that matter most for academic success and personal growth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="wellness-card border-0 text-center p-6">
                <CardContent className="p-0">
                  <div className="p-3 bg-primary-soft rounded-xl w-fit mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already using Clarity On to improve their 
            mental health, manage stress, and achieve academic success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-white/30 text-white hover:bg-white/10">
              Watch Demo
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

export default Features;