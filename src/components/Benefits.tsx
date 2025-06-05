
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Benefits = () => {
  const benefits = [
    "3x faster skill acquisition compared to traditional methods",
    "Personalized learning paths for every individual",
    "Real-time adaptation to your learning style",
    "Industry-recognized certifications and credentials",
    "24/7 AI-powered learning assistant",
    "Seamless integration with your workflow"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transform Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Learning Experience
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of professionals who have accelerated their careers with our AI-powered learning platform. 
              Experience personalized education that adapts to your unique learning style and pace.
            </p>

            {/* Benefits list */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Right side - Visual element */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-4">
                <div className="h-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full"></div>
                <div className="h-4 bg-gradient-to-r from-purple-200 to-purple-300 rounded-full w-3/4"></div>
                <div className="h-4 bg-gradient-to-r from-indigo-200 to-indigo-300 rounded-full w-1/2"></div>
                <div className="space-y-2 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Skill Mastery: 85%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Learning Velocity: +127%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Flow State: Optimal</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl animate-pulse">
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
