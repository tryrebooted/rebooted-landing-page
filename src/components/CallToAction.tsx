import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Star, Code, Users, Sparkles, Rocket, Heart } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M10 10h2v2h-2zM14 10h2v2h-2zM18 10h2v2h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <div className="flex justify-center mb-8">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-6 py-3 text-base font-medium backdrop-blur-sm">
            <Rocket className="w-4 h-4 mr-2" />
            Early Access Program
          </Badge>
        </div>

        {/* Enhanced stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform transition-all duration-300 group-hover:scale-105 group-hover:bg-white/15">
              <div className="flex items-center justify-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <Code className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-2">Coming Soon</div>
              <div className="text-blue-200 text-sm">Early Access Platform</div>
            </div>
          </div>
          
          <div className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform transition-all duration-300 group-hover:scale-105 group-hover:bg-white/15">
              <div className="flex items-center justify-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-2">Join Us</div>
              <div className="text-purple-200 text-sm">Be an Early Partner</div>
            </div>
          </div>
          
          <div className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform transition-all duration-300 group-hover:scale-105 group-hover:bg-white/15">
              <div className="flex items-center justify-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                  <Star className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-2">Shape</div>
              <div className="text-yellow-200 text-sm">The Future</div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          Be Part of the Future
          <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent block">
            of Learning
          </span>
        </h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl text-white/90 mb-6 leading-relaxed">
            We're validating our solution with early partners. Join the waitlist to be among the first to experience AI-powered learning that actually works.
          </p>
          <Separator className="bg-white/20 my-6 max-w-md mx-auto" />
          <p className="text-lg text-white/70">
            Your feedback will directly shape the future of adaptive learning technology.
          </p>
        </div>

        {/* Enhanced CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 text-xl font-medium transition-all duration-300 transform hover:scale-105 rounded-xl shadow-2xl hover:shadow-white/25"
          >
            <Heart className="mr-3 w-6 h-6" />
            Join Waitlist
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
          >
            Learn More
          </Button>
        </div>

        {/* Enhanced benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80 text-sm max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium">Early access priority</span>
          </div>
          
          <div className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium">Shape the product</span>
          </div>
          
          <div className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Star className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium">Special founding rates</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
