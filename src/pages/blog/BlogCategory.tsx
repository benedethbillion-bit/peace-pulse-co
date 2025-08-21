import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useParams } from "react-router-dom";
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Calendar,
  ArrowRight,
  Brain,
  Heart,
  Timer,
  Users,
  Target,
  Lightbulb
} from "lucide-react";

// Sample category data (in real app, this would come from Supabase)
const categoryData: { [key: string]: any } = {
  "stress-management": {
    name: "Stress Management",
    description: "Evidence-based techniques and strategies to help you manage academic stress, anxiety, and pressure effectively.",
    icon: Heart,
    color: "text-accent",
    posts: [
      {
        id: 1,
        slug: "stress-management-techniques-exams",
        title: "5 Science-Backed Stress Management Techniques for Exams",
        excerpt: "Discover proven methods to reduce anxiety and perform better during high-pressure academic situations.",
        author: "Dr. Sarah Williams",
        readTime: 5,
        publishedAt: "2024-03-15"
      },
      {
        id: 4,
        slug: "mindfulness-meditation-students",
        title: "Mindfulness and Meditation for Busy Students",
        excerpt: "Simple meditation practices that fit into a student's hectic schedule and provide immediate stress relief.",
        author: "Dr. James Park",
        readTime: 4,
        publishedAt: "2024-03-08"
      }
    ]
  },
  "productivity": {
    name: "Productivity",
    description: "Psychological insights and practical strategies to boost your academic performance and build sustainable study habits.",
    icon: Timer,
    color: "text-primary",
    posts: [
      {
        id: 2,
        slug: "psychology-productive-study-habits",
        title: "The Psychology of Productive Study Habits",
        excerpt: "Learn how to build sustainable learning routines that stick and boost your academic performance.",
        author: "Dr. Michael Chen",
        readTime: 7,
        publishedAt: "2024-03-12"
      },
      {
        id: 6,
        slug: "overcoming-procrastination-science",
        title: "Overcoming Procrastination: What Science Tells Us",
        excerpt: "Research-backed methods to beat procrastination and develop consistent work habits.",
        author: "Dr. Kevin Liu",
        readTime: 6,
        publishedAt: "2024-03-03"
      }
    ]
  },
  "student-life": {
    name: "Student Life",
    description: "Navigate the challenges of student life with insights on relationships, social connections, and campus wellness.",
    icon: Users,
    color: "text-primary",
    posts: [
      {
        id: 5,
        slug: "social-connections-mental-health",
        title: "The Power of Social Connections for Student Mental Health",
        excerpt: "Understanding how relationships and community support impact psychological well-being in academic settings.",
        author: "Dr. Lisa Thompson",
        readTime: 8,
        publishedAt: "2024-03-05"
      }
    ]
  },
  "emotional-growth": {
    name: "Emotional Growth",
    description: "Build emotional intelligence, resilience, and self-awareness to thrive during your academic journey and beyond.",
    icon: Target,
    color: "text-wellness-green",
    posts: [
      {
        id: 3,
        slug: "building-emotional-resilience-college",
        title: "Building Emotional Resilience in College",
        excerpt: "Practical strategies for developing mental strength and bouncing back from setbacks during your college years.",
        author: "Dr. Emily Rodriguez",
        readTime: 6,
        publishedAt: "2024-03-10"
      }
    ]
  },
  "inspiration": {
    name: "Inspiration",
    description: "Motivational insights and success stories to keep you inspired and focused on your personal growth journey.",
    icon: Lightbulb,
    color: "text-accent",
    posts: []
  }
};

const BlogCategory = () => {
  const { category } = useParams();
  const categoryKey = category?.toLowerCase().replace(/\s+/g, '-');
  const categoryInfo = categoryKey ? categoryData[categoryKey] : null;

  if (!categoryInfo) {
    return (
      <div className="min-h-screen bg-gradient-wellness flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-6">The category you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = categoryInfo.icon;

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

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link to="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Category Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-white rounded-2xl shadow-soft">
                <IconComponent className={`h-12 w-12 ${categoryInfo.color}`} />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {categoryInfo.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {categoryInfo.description}
            </p>
          </div>

          {/* Articles */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">
              Articles in {categoryInfo.name}
              <span className="text-muted-foreground font-normal text-base ml-2">
                ({categoryInfo.posts.length} {categoryInfo.posts.length === 1 ? 'article' : 'articles'})
              </span>
            </h2>
            
            {categoryInfo.posts.length === 0 ? (
              <Card className="wellness-card border-0 text-center p-12">
                <CardContent className="p-0">
                  <IconComponent className={`h-16 w-16 mx-auto mb-4 ${categoryInfo.color} opacity-50`} />
                  <h3 className="text-lg font-semibold mb-2">No articles yet</h3>
                  <p className="text-muted-foreground mb-6">
                    We're working on creating amazing content for this category. Check back soon!
                  </p>
                  <Button asChild>
                    <Link to="/blog">Explore Other Categories</Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {categoryInfo.posts.map((post: any) => (
                  <Card key={post.id} className="wellness-card hover-lift border-0 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {categoryInfo.name}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime} min read
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 leading-snug">
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 font-medium"
                        >
                          Read article
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Related Categories */}
          <div className="border-t border-border/50 pt-8">
            <h3 className="text-lg font-semibold mb-4">Explore Other Categories</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(categoryData)
                .filter(([key]) => key !== categoryKey)
                .map(([key, data]) => {
                  const CategoryIcon = data.icon;
                  return (
                    <Link
                      key={key}
                      to={`/blog/category/${key}`}
                      className="group"
                    >
                      <Card className="wellness-card border-0 hover-lift p-4 text-center">
                        <CardContent className="p-0">
                          <CategoryIcon className={`h-8 w-8 mx-auto mb-2 ${data.color}`} />
                          <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                            {data.name}
                          </h4>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCategory;