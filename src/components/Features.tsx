
import { Brain, TrendingUp, Users, Target, Clock, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Personalization",
      description: "Our advanced AI analyzes your learning patterns and adapts content in real-time to optimize your progress.",
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Real-Time Progress Tracking",
      description: "Monitor your skill development with detailed analytics and insights that help you stay motivated.",
      color: "text-green-600"
    },
    {
      icon: Target,
      title: "Adaptive Learning Paths",
      description: "Dynamic curricula that evolve based on your performance, ensuring you're always challenged but never overwhelmed.",
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Optimal Flow State",
      description: "Stay in the zone with perfectly balanced difficulty levels that maintain engagement and accelerate learning.",
      color: "text-orange-600"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Connect with peers, share progress, and learn together with collaborative tools and group challenges.",
      color: "text-indigo-600"
    },
    {
      icon: Award,
      title: "Industry Certifications",
      description: "Earn recognized credentials and certifications that advance your career and validate your expertise.",
      color: "text-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Modern Learning</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of education with AI-driven features designed to maximize your learning potential
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
