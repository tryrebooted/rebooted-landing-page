import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, PenTool, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Status Badge */}
          <div className="flex justify-center mb-8">
            <Badge variant="secondary" className="bg-slate-800/80 text-slate-300 border-slate-700 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
              Pre-Launch • Join Early Partners
            </Badge>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
            Build Better Courses,
            <br />
            50% Faster—
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              {" "}with AI
            </span>
          </h1>

          {/* Subheading */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-6">
              Creating effective training courses is complex, expensive, and time-consuming.
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="text-xl md:text-2xl font-semibold text-purple-300">
                "AI lets teams create custom learning in minutes, not weeks"
              </div>
              <a 
                href="https://www.docebo.com/learning-network/blog/enterprise-ai-and-learning-development/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Badge variant="outline" className="border-purple-400/30 text-purple-300 bg-purple-900/20">
                  Docebo, 2025
                </Badge>
              </a>
            </div>
            <Separator className="bg-slate-700 my-6 max-w-md mx-auto" />
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              rebootEd empowers learning and development teams to create compelling, effective courses by
              handling content generation, suggest interactive elements, and streamline the entire course development process.
            </p>
          </div>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="outline" className="border-purple-400/30 text-purple-300 bg-purple-900/20 backdrop-blur-sm">
              <Zap className="w-3 h-3 mr-1" />
              Faster Development
            </Badge>
            <Badge variant="outline" className="border-blue-400/30 text-blue-300 bg-blue-900/20 backdrop-blur-sm">
              <PenTool className="w-3 h-3 mr-1" />
              Smart Content Tools
            </Badge>
            <Badge variant="outline" className="border-green-400/30 text-green-300 bg-green-900/20 backdrop-blur-sm">
              Quality Assurance
            </Badge>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-6 text-xl font-medium transition-all duration-300 transform hover:scale-105 rounded-xl shadow-2xl hover:shadow-purple-500/25"
            >
              Join Waitlist
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-6 text-xl font-medium transition-all duration-300 transform hover:scale-105 rounded-xl shadow-2xl hover:shadow-purple-500/25"
            >
              Learn More
            </Button>
          </div>

          {/* Bottom Icon with enhanced design */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 shadow-2xl">
                <PenTool className="w-10 h-10 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
