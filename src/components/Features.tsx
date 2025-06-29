import { Brain, PenTool, Target, Users, Zap, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "L&D / HR Teams",
      description: "Create high-quality, engaging courses in a fraction of the time with AI-powered content generation, interactive elements, and built-in analytics.",
      color: "text-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      badge: "Primary Users"
    },
    {
      icon: Users,
      title: "Training Managers",
      description: "Scale course creation across your organization with consistent quality and data-driven optimization tools.",
      color: "text-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      badge: "Management"
    },
    {
      icon: Target,
      title: "Instructional Designers",
      description: "Focus on strategy and learning outcomes while AI handles content structuring, formatting, and generating interactive elements",
      color: "text-green-600",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      badge: "Design"
    },
    {
      icon: Zap,
      title: "Rapid Content Generation",
      description: "Transform course creation from weeks to hours with intelligent AI tools that handle content generation and structuring.",
      color: "text-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      badge: "Efficiency"
    },
    {
      icon: PenTool,
      title: "Smart Formatting & Structure",
      description: "Intelligent formatting and content structuring tools ensure consistency and professional quality across all your courses.",
      color: "text-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
      borderColor: "border-indigo-200",
      badge: "Quality"
    },
    {
      icon: TrendingUp,
      title: "Scalable Templates & Frameworks",
      description: "Build once, use everywhere. Create scalable templates and frameworks that maintain consistency across your organization.",
      color: "text-pink-600",
      bgColor: "from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
      badge: "Scale"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Who We Help & How
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Built for L&D Teams &
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Course Creators</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From individual instructional designers to enterprise L&D teams, rebootEd provides intelligent tools that make course creation faster, easier, and more effective.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg bg-gradient-to-br ${feature.bgColor} hover:scale-105 relative overflow-hidden`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/50 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-slate-50 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <Badge variant="outline" className={`${feature.borderColor} bg-white/80 backdrop-blur-sm`}>
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-slate-700 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-slate-700 font-medium">Pre-product: Specifics to come as we validate with early partners</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
