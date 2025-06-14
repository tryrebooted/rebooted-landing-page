import { PenTool, Twitter, Linkedin, Github, Mail, Sparkles, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <PenTool className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold">rebootEd</span>
                <Badge variant="secondary" className="bg-purple-900/50 text-purple-200 border-purple-700">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Beta
                </Badge>
              </div>
            </div>
            
            <p className="text-slate-300 mb-8 max-w-md text-lg leading-relaxed">
              Intelligent AI tools that help L&D teams create compelling, effective courses faster with streamlined development processes and smart content optimization.
            </p>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-purple-400 hover:bg-purple-900/20 transition-all duration-200">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-blue-400 hover:bg-blue-900/20 transition-all duration-200">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-300 hover:bg-slate-700/50 transition-all duration-200">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-green-400 hover:bg-green-900/20 transition-all duration-200">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Product</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Features</span>
                  <Badge variant="outline" className="text-xs border-orange-600/30 text-orange-400 bg-orange-900/20">
                    Soon
                  </Badge>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Pricing</span>
                  <Badge variant="outline" className="text-xs border-orange-600/30 text-orange-400 bg-orange-900/20">
                    Soon
                  </Badge>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Enterprise</span>
                  <Badge variant="outline" className="text-xs border-orange-600/30 text-orange-400 bg-orange-900/20">
                    Soon
                  </Badge>
                </div>
              </li>
              <li><span className="text-slate-400 hover:text-purple-300 transition-colors cursor-pointer">API Docs</span></li>
              <li><span className="text-slate-400 hover:text-purple-300 transition-colors cursor-pointer">Integrations</span></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              <li><a href="/about" className="text-slate-400 hover:text-purple-300 transition-colors">About</a></li>
              <li>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Blog</span>
                  <Badge variant="outline" className="text-xs border-orange-600/30 text-orange-400 bg-orange-900/20">
                    Soon
                  </Badge>
                </div>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Careers</span>
                  <Badge variant="outline" className="text-xs border-green-600/30 text-green-400 bg-green-900/20">
                    Hiring
                  </Badge>
                </div>
              </li>
              <li><span className="text-slate-400 hover:text-purple-300 transition-colors cursor-pointer">Contact</span></li>
              <li><span className="text-slate-400 hover:text-purple-300 transition-colors cursor-pointer">Privacy</span></li>
              <li><span className="text-slate-400 hover:text-purple-300 transition-colors cursor-pointer">Terms</span></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-slate-700 my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 rebootEd. All rights reserved.
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="text-slate-400 text-sm">Built with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span className="text-slate-400 text-sm">for the future of course creation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
