
import { Brain, Code, Target, Users, Zap, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "🧠 Personalized Learning That Actually Adapts",
      description: "No more cookie-cutter tutorials. Our intelligent system learns from how you code—your successes, roadblocks, and momentum—to recommend the next best challenge and deliver real-time hints.",
      color: "text-purple-600"
    },
    {
      icon: Code,
      title: "💻 Learn by Building, Not Memorizing",
      description: "Work on real, interactive projects from day one. Each coding task strengthens what you know and introduces new skills exactly when you need them—never overwhelming, always engaging.",
      color: "text-blue-600"
    },
    {
      icon: Target,
      title: "🎯 Built for Career Changers & Learners",
      description: "Whether you're pivoting into tech or onboarding into a new team, our IDE helps you ramp up faster, stay in flow, and track progress with measurable outcomes.",
      color: "text-green-600"
    },
    {
      icon: Zap,
      title: "🔄 Dynamic. Adaptive. Human-Centered.",
      description: "Learning should feel like a conversation, not a lecture. We blend AI-driven guidance, interactive feedback, and flow-state design for productive, motivating sessions.",
      color: "text-orange-600"
    },
    {
      icon: Users,
      title: "Team & Mentor Support",
      description: "Managers and mentors can assign dynamic learning paths, monitor growth, and support users through intelligent insights and collaborative features.",
      color: "text-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Measurable Progress Tracking",
      description: "Track your coding journey with detailed analytics, skill assessments, and portfolio-ready projects that demonstrate your growing expertise.",
      color: "text-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            An IDE That
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Evolves With You</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Experience coding education reimagined—where every line of code you write teaches our AI how to teach you better
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
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
