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
  Star,
  ArrowRight,
  CheckCircle,
  Brain,
  Smile
} from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

const Index = () => {
  const features = [
    {
      icon: Heart,
      title: "Mood Tracker",
      description: "Monitor your emotional well-being with intelligent insights and personalized recommendations.",
      color: "text-accent"
    },
    {
      icon: Timer,
      title: "Focus Timer",
      description: "Boost productivity with customizable Pomodoro sessions and focus analytics.",
      color: "text-primary"
    },
    {
      icon: Music,
      title: "Guided Stress Relief",
      description: "Calm your mind with curated music, breathing exercises, and meditation sessions.",
      color: "text-wellness-green"
    },
    {
      icon: BookOpen,
      title: "Smart Journaling",
      description: "Express thoughts safely with AI-powered prompts and reflection tools.",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Supportive Community",
      description: "Connect with peers in a safe, moderated environment for mutual support.",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Personal Growth",
      description: "Track progress with goal setting, habit building, and achievement milestones.",
      color: "text-wellness-green"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "University Student",
      content: "Clarity On helped me manage exam stress and stay focused. The mood tracker became my daily companion.",
      avatar: "SC"
    },
    {
      name: "Marcus Johnson",
      role: "High School Senior",
      content: "The focus timer transformed my study sessions. I'm more productive and less overwhelmed.",
      avatar: "MJ"
    },
    {
      name: "Priya Patel",
      role: "Graduate Student",
      content: "The community feature made me feel less alone. Finding support from peers who understand is invaluable.",
      avatar: "PP"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-border/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gradient">Clarity On</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link>
              <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              <Link to="/community" className="text-muted-foreground hover:text-primary transition-colors">Community</Link>
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Find Your <span className="text-gradient">Clarity</span> in Student Life
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Empower your emotional well-being, manage stress effectively, and boost productivity 
                with our comprehensive wellness platform designed specifically for students and youth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="px-8 py-6 text-lg">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-wellness-green" />
                  <span>Free to start</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-wellness-green" />
                  <span>Science-based methods</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-wellness-green" />
                  <span>Privacy focused</span>
                </div>
              </div>
            </div>
            <div className="slide-up lg:pl-8">
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Peaceful wellness landscape"
                  className="rounded-3xl shadow-wellness w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-wellness">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for <span className="text-gradient">Mental Wellness</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools designed with students in mind, backed by psychological research 
              and built for real-world challenges.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="wellness-card hover-lift border-0 p-6">
                <CardContent className="p-0">
                  <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Spotlight */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest from Our Blog</h2>
              <p className="text-lg text-muted-foreground">
                Evidence-based insights for student wellness and productivity.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "5 Science-Backed Stress Management Techniques for Exams",
                excerpt: "Discover proven methods to reduce anxiety and perform better during high-pressure situations.",
                category: "Stress Management",
                readTime: "5 min read"
              },
              {
                title: "The Psychology of Productive Study Habits",
                excerpt: "Learn how to build sustainable learning routines that stick and boost your academic performance.",
                category: "Productivity",
                readTime: "7 min read"
              },
              {
                title: "Building Emotional Resilience in College",
                excerpt: "Practical strategies for developing mental strength and bouncing back from setbacks.",
                category: "Emotional Growth",
                readTime: "6 min read"
              }
            ].map((post, index) => (
              <Card key={index} className="wellness-card hover-lift border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary-soft px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 leading-snug">{post.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-wellness">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by <span className="text-gradient">10,000+</span> Students
            </h2>
            <p className="text-lg text-muted-foreground">
              See how Clarity On is making a difference in student lives worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="wellness-card border-0 p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
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

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Smile className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Student Experience?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who've found their clarity. Start your wellness journey today 
            with personalized tools and supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-white/30 text-white hover:bg-white/10">
              Book a Demo
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

export default Index;