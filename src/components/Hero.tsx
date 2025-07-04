import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowDown, PenTool, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist-form');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <div className="inline-flex items-center bg-slate-800/80 text-slate-300 border border-slate-700 px-4 py-2 text-sm font-medium backdrop-blur-sm rounded-full transition-transform duration-200 hover:scale-105">
              <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
              Pre-Launch • Join Early Partners
            </div>
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
            <Separator className="bg-slate-700 my-6 max-w-md mx-auto" />
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              rebootED empowers learning and development teams to create compelling, effective courses by
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
          {/* <div className="flex justify-center items-center mb-16">
            <Button 
              onClick={scrollToWaitlist}
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-6 text-xl font-medium transition-all duration-300 transform hover:scale-105 rounded-xl shadow-2xl hover:shadow-purple-500/25"
            >
              Join Waitlist
              <ArrowDown className="ml-3 w-6 h-6" />
            </Button>
          </div> */}


        </div>
      </div>
    </section>
  );
};

export default Hero;
