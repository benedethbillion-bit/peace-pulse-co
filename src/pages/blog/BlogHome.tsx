import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  Search, 
  Clock, 
  User, 
  Calendar,
  ArrowRight,
  Brain,
  Filter
} from "lucide-react";

// Blog data structure (in real app, this would come from Supabase)
const blogPosts = [
  {
    id: 1,
    slug: "stress-management-techniques-exams",
    title: "5 Science-Backed Stress Management Techniques for Exams",
    excerpt: "Discover proven methods to reduce anxiety and perform better during high-pressure academic situations. These evidence-based strategies will help you maintain calm and focus.",
    content: "Full content here...",
    author: "Dr. Sarah Williams",
    category: "Stress Management",
    readTime: 5,
    publishedAt: "2024-03-15",
    tags: ["stress", "exams", "anxiety", "techniques"],
    featured: true
  },
  {
    id: 2,
    slug: "psychology-productive-study-habits",
    title: "The Psychology of Productive Study Habits",
    excerpt: "Learn how to build sustainable learning routines that stick and boost your academic performance through psychological insights.",
    content: "Full content here...",
    author: "Dr. Michael Chen",
    category: "Productivity",
    readTime: 7,
    publishedAt: "2024-03-12",
    tags: ["productivity", "habits", "psychology", "learning"],
    featured: true
  },
  {
    id: 3,
    slug: "building-emotional-resilience-college",
    title: "Building Emotional Resilience in College",
    excerpt: "Practical strategies for developing mental strength and bouncing back from setbacks during your college years.",
    content: "Full content here...",
    author: "Dr. Emily Rodriguez",
    category: "Emotional Growth",
    readTime: 6,
    publishedAt: "2024-03-10",
    tags: ["resilience", "college", "mental-health", "growth"],
    featured: true
  },
  {
    id: 4,
    slug: "mindfulness-meditation-students",
    title: "Mindfulness and Meditation for Busy Students",
    excerpt: "Simple meditation practices that fit into a student's hectic schedule and provide immediate stress relief.",
    content: "Full content here...",
    author: "Dr. James Park",
    category: "Stress Management",
    readTime: 4,
    publishedAt: "2024-03-08",
    tags: ["mindfulness", "meditation", "stress-relief"],
    featured: false
  },
  {
    id: 5,
    slug: "social-connections-mental-health",
    title: "The Power of Social Connections for Student Mental Health",
    excerpt: "Understanding how relationships and community support impact psychological well-being in academic settings.",
    content: "Full content here...",
    author: "Dr. Lisa Thompson",
    category: "Student Life",
    readTime: 8,
    publishedAt: "2024-03-05",
    tags: ["social", "community", "mental-health", "relationships"],
    featured: false
  },
  {
    id: 6,
    slug: "overcoming-procrastination-science",
    title: "Overcoming Procrastination: What Science Tells Us",
    excerpt: "Research-backed methods to beat procrastination and develop consistent work habits that lead to academic success.",
    content: "Full content here...",
    author: "Dr. Kevin Liu",
    category: "Productivity",
    readTime: 6,
    publishedAt: "2024-03-03",
    tags: ["procrastination", "productivity", "habits", "science"],
    featured: false
  }
];

const categories = [
  "All",
  "Stress Management", 
  "Productivity", 
  "Student Life", 
  "Emotional Growth",
  "Inspiration"
];

const BlogHome = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

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
              <Link to="/blog" className="text-primary font-medium">Blog</Link>
              <Link to="/community" className="text-muted-foreground hover:text-primary transition-colors">Community</Link>
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Wellness <span className="text-gradient">Insights</span> for Students
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Evidence-based articles, practical tips, and expert guidance to support 
              your mental health and academic success journey.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search articles..."
                className="pl-10 py-3"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Featured Posts */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>Featured Articles</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="wellness-card hover-lift border-0 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime} min read
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 leading-snug">
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">
            {selectedCategory === "All" ? "All Articles" : selectedCategory}
            <span className="text-muted-foreground font-normal text-base ml-2">
              ({filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'})
            </span>
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="wellness-card hover-lift border-0 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime} min read
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 leading-snug">
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 text-sm font-medium"
                      >
                        Read more
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogHome;