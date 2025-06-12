import { CheckCircle, ArrowRight, Code2, Lightbulb, Users2, TrendingUp, Zap, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const Benefits = () => {
  const benefits = [
    "Adaptive learning paths that keep you in flow state",
    "Project-based learning instead of static courses",
    "Clear progress tracking for managers and learners",
    "Practical AI skills through hands-on experience",
    "No more guesswork about what to learn next",
    "Measurable outcomes and skill development"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <Badge variant="secondary" className="mb-6 bg-purple-900/50 text-purple-200 border-purple-700">
              Our Solution
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Learning Technology
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
                That Actually Works
              </span>
            </h2>
            
            <div className="mb-8">
              <p className="text-xl text-purple-100 mb-4 leading-relaxed">
                rebootEd lets you complete real projects in an environment that dynamically adapts its difficulty
              </p>
              <Separator className="bg-purple-700 my-4" />
              <p className="text-lg text-purple-200 leading-relaxed">
                Keeping learners engaged on the fly while leaders track real progress. No busy-work courses, no guesswork: just targeted growth that sticks.
              </p>
            </div>

            {/* Benefits list */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-200">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-purple-100 text-lg group-hover:text-white transition-colors duration-200">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25">
                Join Waitlist
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-purple-400 text-purple-300 hover:bg-purple-800/50 px-8 py-4 text-lg backdrop-blur-sm">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right side - Enhanced IDE mockup */}
          <div className="relative">
            {/* Main card */}
            <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-slate-700 relative overflow-hidden">
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full"></div>
              
              {/* Window controls */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-slate-400 text-sm font-mono">rebootEd-platform.dev</div>
              </div>
              
              {/* Content sections */}
              <div className="space-y-6">
                {/* Current project section */}
                <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                  <div className="flex items-center gap-3 mb-3">
                    <Brain className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium">Current Learning Path</span>
                    <Badge variant="outline" className="border-green-400 text-green-400 text-xs">
                      In Progress
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI Chatbot Development</h3>
                  <Progress value={65} className="h-2 mb-2" />
                  <div className="text-sm text-slate-300">65% complete • Estimated completion: 3 days</div>
                </div>

                {/* Skills section */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-700/30 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Code2 className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-slate-300">Next Module</span>
                    </div>
                    <div className="text-white font-medium">API Integration</div>
                  </div>
                  <div className="bg-slate-700/30 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-slate-300">Skill Level</span>
                    </div>
                    <div className="text-white font-medium">Intermediate</div>
                  </div>
                </div>

                {/* AI insights */}
                <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg p-4 border border-purple-700/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-purple-200">AI Insight</span>
                  </div>
                  <p className="text-white text-sm">You're progressing 23% faster than average. Consider tackling async/await patterns next.</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl animate-bounce shadow-2xl">
              AI
            </div>
            <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold animate-pulse shadow-xl">
              ✓
            </div>
            
            {/* Connecting lines */}
            <div className="absolute top-1/2 -left-8 w-8 h-0.5 bg-gradient-to-r from-transparent to-purple-400"></div>
            <div className="absolute top-1/2 -right-8 w-8 h-0.5 bg-gradient-to-l from-transparent to-blue-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
