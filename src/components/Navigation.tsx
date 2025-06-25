import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PenTool, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist-form');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if it's open
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-purple-500/25">
                <PenTool className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">rebootED</span>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs px-2 py-1 hidden sm:inline-flex">
                <Sparkles className="w-3 h-3 mr-1" />
                Beta
              </Badge>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* <Link to="/about" className="text-slate-600 hover:text-purple-600 transition-colors duration-200 font-medium relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-200 group-hover:w-full"></span>
            </Link> */}
            {/* <div className="text-slate-400 hover:text-slate-600 transition-colors duration-200 font-medium cursor-not-allowed relative group">
              Features
              <Badge variant="outline" className="absolute -top-2 -right-8 text-xs border-orange-200 text-orange-600 bg-orange-50">
                Soon
              </Badge>
            </div>
            <div className="text-slate-400 hover:text-slate-600 transition-colors duration-200 font-medium cursor-not-allowed relative group">
              Pricing
              <Badge variant="outline" className="absolute -top-2 -right-8 text-xs border-orange-200 text-orange-600 bg-orange-50">
                Soon
              </Badge>
            </div> */}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button 
              onClick={scrollToWaitlist}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 transform active:scale-95"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200/50 bg-white/95 backdrop-blur-lg">
            <div className="flex flex-col space-y-4">
              {/* <Link 
                to="/about" 
                className="text-slate-600 hover:text-purple-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-purple-50 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link> */}
              {/* <div className="text-slate-400 px-3 py-2 font-medium flex items-center justify-between">
                <span>Features</span>
                <Badge variant="outline" className="text-xs border-orange-200 text-orange-600 bg-orange-50">
                  Soon
                </Badge>
              </div>
              <div className="text-slate-400 px-3 py-2 font-medium flex items-center justify-between">
                <span>Pricing</span>
                <Badge variant="outline" className="text-xs border-orange-200 text-orange-600 bg-orange-50">
                  Soon
                </Badge>
              </div> */}
              
              <div className="pt-4 border-t border-slate-200/50">
                <Button 
                  onClick={scrollToWaitlist}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
