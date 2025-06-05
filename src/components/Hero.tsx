
import { Button } from "@/components/ui/button";
import { ArrowRight, Code } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Unlock Your{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Potential
            </span>
            <br />
            with AI-Powered Learning
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            The AI-powered Integrated Development Environment built to evolve with you. 
            Whether you're starting out, switching careers, or upskilling, our platform 
            creates a fully personalized, project-based learning journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-6 text-xl font-medium transition-all duration-300 transform hover:scale-105 rounded-full">
              Start Learning Now
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button variant="outline" size="lg" className="px-10 py-6 text-xl font-medium border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300 rounded-full">
              Watch Demo
            </Button>
          </div>

          {/* Bottom Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <Code className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
