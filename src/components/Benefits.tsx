
import { CheckCircle, ArrowRight, Code2, Lightbulb, Users2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Benefits = () => {
  const benefits = [
    "Personalized learning paths that adapt to your coding style",
    "Real, interactive projects instead of theoretical exercises", 
    "AI-powered hints and guidance when you're stuck",
    "Progress tracking with measurable skill development",
    "Team collaboration and mentor oversight tools",
    "Portfolio-ready projects that showcase your abilities"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transform How You
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
                Learn to Code
              </span>
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Join developers who've accelerated their careers with our adaptive IDE. 
              Experience coding education that understands your unique learning journey and grows with you every step of the way.
            </p>

            {/* Benefits list */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-purple-100 text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Start Coding Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Right side - IDE mockup */}
          <div className="relative">
            {/* IDE Window */}
            <div className="bg-slate-800 rounded-2xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-300">
              {/* Title bar */}
              <div className="bg-slate-700 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-300 text-sm ml-4">adaptive-ide.app</span>
              </div>
              
              {/* Code content */}
              <div className="p-6 font-mono text-sm">
                <div className="text-green-400 mb-2">// AI Suggestion: Try using a map function here</div>
                <div className="text-blue-400 mb-1">const <span className="text-yellow-300">projects</span> = [</div>
                <div className="text-purple-300 ml-4">{'{ name: "Todo App", status: "completed" },'}</div>
                <div className="text-purple-300 ml-4">{'{ name: "Weather Widget", status: "in-progress" }'}</div>
                <div className="text-blue-400">];</div>
                
                {/* Progress indicators */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs text-slate-300">Skill Level: Intermediate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-slate-300">Progress: 73% complete</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-slate-300">Next: React Hooks</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl animate-pulse">
              AI
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold animate-pulse delay-1000">
              ✓
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
