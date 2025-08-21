import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useParams } from "react-router-dom";
import { 
  ArrowLeft, 
  Clock, 
  User, 
  Calendar,
  Share2,
  Heart,
  Brain,
  CheckCircle,
  Lightbulb,
  Target
} from "lucide-react";

// Sample blog post data (in real app, this would come from Supabase)
const blogPostsData: { [key: string]: any } = {
  "stress-management-techniques-exams": {
    title: "5 Science-Backed Stress Management Techniques for Exams",
    author: "Dr. Sarah Williams",
    category: "Stress Management",
    readTime: 5,
    publishedAt: "2024-03-15",
    tags: ["stress", "exams", "anxiety", "techniques"],
    content: `
      <h2>Understanding Exam Stress</h2>
      <p>Exam periods can be overwhelming, but understanding the science behind stress can help you manage it effectively. Research shows that moderate stress can actually improve performance, but excessive stress becomes counterproductive.</p>
      
      <h3>1. The 4-7-8 Breathing Technique</h3>
      <p>This evidence-based breathing exercise activates your parasympathetic nervous system, naturally calming your body and mind:</p>
      <ul>
        <li>Inhale quietly through your nose for 4 counts</li>
        <li>Hold your breath for 7 counts</li>
        <li>Exhale completely through your mouth for 8 counts</li>
        <li>Repeat 3-4 cycles before exams</li>
      </ul>
      
      <h3>2. Progressive Muscle Relaxation</h3>
      <p>Studies show that systematically tensing and relaxing muscle groups can reduce physical symptoms of anxiety. Start from your toes and work up to your head, tensing each muscle group for 5 seconds, then releasing.</p>
      
      <h3>3. Cognitive Reframing</h3>
      <p>Challenge negative thought patterns by:</p>
      <ul>
        <li>Identifying catastrophic thinking</li>
        <li>Examining evidence for and against your fears</li>
        <li>Developing balanced, realistic thoughts</li>
        <li>Using positive self-talk techniques</li>
      </ul>
      
      <h3>4. Strategic Study Breaks</h3>
      <p>The Pomodoro Technique isn't just for productivity—it's scientifically proven to reduce stress by preventing cognitive overload. Study for 25 minutes, then take a 5-minute break to reset your stress response.</p>
      
      <h3>5. Sleep Optimization</h3>
      <p>Quality sleep is crucial for stress management and memory consolidation. Research shows that students who get 7-9 hours of sleep perform significantly better on exams and report lower stress levels.</p>
      
      <h2>Conclusion: Your Path to Calm Success</h2>
      <p>Remember, these techniques require practice. Start implementing them now, not just during exam week. With consistent use, you'll develop resilience that serves you throughout your academic career and beyond.</p>
      
      <p><em>Take a deep breath—you've got this. Your preparation, combined with these stress management tools, will help you perform at your best when it matters most.</em></p>
    `
  },
  "psychology-productive-study-habits": {
    title: "The Psychology of Productive Study Habits",
    author: "Dr. Michael Chen",
    category: "Productivity",
    readTime: 7,
    publishedAt: "2024-03-12",
    tags: ["productivity", "habits", "psychology", "learning"],
    content: `
      <h2>The Science of Habit Formation</h2>
      <p>Understanding how habits work in your brain is the key to building sustainable study routines. Research in neuroscience shows that habits are formed through a neurological loop of cue, routine, and reward.</p>
      
      <h3>Building Your Study Habit Loop</h3>
      <p>Create a powerful study habit by designing each component:</p>
      <ul>
        <li><strong>Cue:</strong> A specific trigger (time, location, or preceding activity)</li>
        <li><strong>Routine:</strong> Your study behavior</li>
        <li><strong>Reward:</strong> Something your brain craves</li>
      </ul>
      
      <h3>The Power of Environment Design</h3>
      <p>Your environment shapes your behavior more than willpower. Research shows that students who optimize their study space see up to 40% improvement in focus and retention.</p>
      
      <h3>Spaced Repetition and Active Recall</h3>
      <p>These evidence-based techniques leverage how your memory actually works, leading to better long-term retention with less effort.</p>
      
      <h2>Building Sustainable Momentum</h2>
      <p>Start small, stay consistent, and trust the process. Your future self will thank you for the habits you build today.</p>
    `
  },
  "building-emotional-resilience-college": {
    title: "Building Emotional Resilience in College",
    author: "Dr. Emily Rodriguez", 
    category: "Emotional Growth",
    readTime: 6,
    publishedAt: "2024-03-10",
    tags: ["resilience", "college", "mental-health", "growth"],
    content: `
      <h2>What is Emotional Resilience?</h2>
      <p>Emotional resilience is your ability to adapt to stressful situations and bounce back from adversity. It's not about avoiding challenges—it's about developing the skills to navigate them successfully.</p>
      
      <h3>The Pillars of Resilience</h3>
      <p>Research identifies several key components of emotional resilience:</p>
      
      <h4>1. Self-Awareness</h4>
      <p>Understanding your emotional patterns, triggers, and responses is the foundation of resilience building.</p>
      
      <h4>2. Emotional Regulation</h4>
      <p>Learning to manage intense emotions without being overwhelmed or acting impulsively.</p>
      
      <h4>3. Social Connection</h4>
      <p>Building and maintaining supportive relationships that provide emotional support during difficult times.</p>
      
      <h4>4. Meaning-Making</h4>
      <p>Finding purpose and meaning in your experiences, even challenging ones.</p>
      
      <h3>Practical Resilience-Building Strategies</h3>
      <ul>
        <li>Practice mindfulness and meditation regularly</li>
        <li>Develop a growth mindset about challenges</li>
        <li>Build a support network of friends, family, and mentors</li>
        <li>Engage in regular physical activity</li>
        <li>Practice gratitude and positive thinking</li>
      </ul>
      
      <h2>Your Journey Forward</h2>
      <p>Remember, resilience is a skill that develops over time. Be patient with yourself as you grow, and celebrate small victories along the way. Every challenge you overcome makes you stronger for the next one.</p>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-wellness flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link to="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Article Header */}
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            
            {/* Meta Information */}
            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <Button size="sm" variant="outline" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Like
              </Button>
              <Button size="sm" variant="outline" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <Card className="wellness-card border-0 mb-8">
            <CardContent className="p-8">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  lineHeight: '1.7',
                }}
              />
            </CardContent>
          </Card>

          {/* Key Takeaways */}
          <Card className="wellness-card border-0 mb-8 bg-primary-soft/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Key Takeaways</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-wellness-green mt-0.5 flex-shrink-0" />
                  <span>Stress management techniques require practice to become effective</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-wellness-green mt-0.5 flex-shrink-0" />
                  <span>Evidence-based methods are more reliable than generic advice</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-wellness-green mt-0.5 flex-shrink-0" />
                  <span>Small, consistent actions lead to significant improvements over time</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="wellness-card border-0 gradient-hero text-white">
            <CardContent className="p-8 text-center">
              <Target className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-xl font-bold mb-2">Ready to Put This Into Practice?</h3>
              <p className="mb-6 opacity-90">
                Join thousands of students using Clarity On to build healthier study habits and manage stress effectively.
              </p>
              <Button size="lg" variant="secondary">
                Start Your Wellness Journey
              </Button>
            </CardContent>
          </Card>

          {/* Tags */}
          <div className="flex items-center gap-2 mt-8">
            <span className="text-sm font-medium text-muted-foreground">Tags:</span>
            {post.tags.map((tag: string) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;