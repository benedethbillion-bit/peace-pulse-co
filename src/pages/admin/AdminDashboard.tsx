import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Search,
  Brain,
  FileText,
  Users,
  BarChart3,
  Settings,
  Calendar,
  Clock
} from "lucide-react";

// Sample admin data (in real app, this would come from Supabase)
const dashboardStats = {
  totalPosts: 12,
  publishedPosts: 8,
  draftPosts: 4,
  totalViews: 24567,
  avgReadTime: 6.2
};

const recentPosts = [
  {
    id: 1,
    title: "5 Science-Backed Stress Management Techniques for Exams",
    status: "published",
    author: "Dr. Sarah Williams",
    publishedAt: "2024-03-15",
    views: 1240,
    category: "Stress Management"
  },
  {
    id: 2,
    title: "The Psychology of Productive Study Habits",
    status: "published", 
    author: "Dr. Michael Chen",
    publishedAt: "2024-03-12",
    views: 980,
    category: "Productivity"
  },
  {
    id: 3,
    title: "Building Emotional Resilience in College",
    status: "draft",
    author: "Dr. Emily Rodriguez",
    publishedAt: null,
    views: 0,
    category: "Emotional Growth"
  },
  {
    id: 4,
    title: "Mindfulness and Meditation for Busy Students",
    status: "published",
    author: "Dr. James Park", 
    publishedAt: "2024-03-08",
    views: 756,
    category: "Stress Management"
  }
];

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewPostForm, setShowNewPostForm] = useState(false);

  const filteredPosts = recentPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-wellness">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-border/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gradient">Clarity On Admin</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Site Home</Link>
              <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Blog Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your wellness blog content and monitor performance.
            </p>
          </div>

          {/* Important Notice */}
          <Card className="wellness-card border-0 mb-8 bg-accent/10 border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Settings className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Backend Integration Required</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    To enable full CRUD operations for blog posts, you'll need to connect your Lovable project 
                    to Supabase using our native integration. This will provide:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Database storage for blog posts and categories</li>
                    <li>• Authentication for admin access</li>
                    <li>• Real-time updates and data persistence</li>
                    <li>• User comments and engagement tracking</li>
                  </ul>
                  <Button size="sm" className="bg-accent hover:bg-accent/90">
                    Connect Supabase Integration
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Overview */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            <Card className="wellness-card border-0">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Posts</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl font-bold">{dashboardStats.totalPosts}</div>
              </CardContent>
            </Card>
            <Card className="wellness-card border-0">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Published</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl font-bold text-wellness-green">{dashboardStats.publishedPosts}</div>
              </CardContent>
            </Card>
            <Card className="wellness-card border-0">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Drafts</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl font-bold text-accent">{dashboardStats.draftPosts}</div>
              </CardContent>
            </Card>
            <Card className="wellness-card border-0">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Views</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl font-bold">{dashboardStats.totalViews.toLocaleString()}</div>
              </CardContent>
            </Card>
            <Card className="wellness-card border-0">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Read Time</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl font-bold">{dashboardStats.avgReadTime}m</div>
              </CardContent>
            </Card>
          </div>

          {/* Actions and Search */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-4">
              <Button 
                onClick={() => setShowNewPostForm(!showNewPostForm)}
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                New Post
              </Button>
              <Button variant="outline" size="sm">
                <BarChart3 className="h-4 w-4 mr-2" />
                Analytics
              </Button>
            </div>
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search posts..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* New Post Form */}
          {showNewPostForm && (
            <Card className="wellness-card border-0 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Create New Post
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Title</label>
                    <Input placeholder="Enter post title..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <Input placeholder="e.g., Stress Management" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Excerpt</label>
                  <Textarea placeholder="Brief description of the post..." rows={2} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Content</label>
                  <Textarea placeholder="Write your post content here..." rows={8} />
                </div>
                <div className="flex items-center gap-4">
                  <Button>Publish Now</Button>
                  <Button variant="outline">Save as Draft</Button>
                  <Button 
                    variant="ghost" 
                    onClick={() => setShowNewPostForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Posts List */}
          <Card className="wellness-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Recent Posts
                </span>
                <span className="text-sm font-normal text-muted-foreground">
                  {filteredPosts.length} posts
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-border/50">
                    <tr className="text-left">
                      <th className="p-4 font-medium text-muted-foreground">Title</th>
                      <th className="p-4 font-medium text-muted-foreground">Status</th>
                      <th className="p-4 font-medium text-muted-foreground">Author</th>
                      <th className="p-4 font-medium text-muted-foreground">Published</th>
                      <th className="p-4 font-medium text-muted-foreground">Views</th>
                      <th className="p-4 font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPosts.map((post) => (
                      <tr key={post.id} className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div>
                            <p className="font-medium">{post.title}</p>
                            <p className="text-xs text-muted-foreground">{post.category}</p>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge 
                            variant={post.status === 'published' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {post.status}
                          </Badge>
                        </td>
                        <td className="p-4 text-sm">{post.author}</td>
                        <td className="p-4">
                          {post.publishedAt ? (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                            </div>
                          ) : (
                            <span className="text-xs text-muted-foreground">-</span>
                          )}
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Eye className="h-3 w-3" />
                            <span>{post.views.toLocaleString()}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive hover:text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;