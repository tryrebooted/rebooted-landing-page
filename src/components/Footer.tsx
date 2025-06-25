
import { PenTool, Twitter, Linkedin, Github, Mail, Sparkles, Heart, Copy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const Footer = () => {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('tryrebooted@gmail.com');
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 2000);
    } catch (error) {
      console.error('Failed to copy email:', error);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Company Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <PenTool className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold">rebootED</span>
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
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-blue-400 hover:bg-blue-900/20 transition-all duration-200">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-slate-400 hover:text-green-400 hover:bg-green-900/20 transition-all duration-200"
                onClick={() => window.open('mailto:tryrebooted@gmail.com', '_self')}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center lg:items-end gap-6 lg:mt-0 lg:min-w-[320px]">
            <div className="text-center lg:text-right">
              <h3 className="text-2xl font-semibold text-white mb-3">Get in Touch</h3>
              <p className="text-slate-300 text-lg mb-6 max-w-xs">
                Ready to transform your course creation process?
              </p>
            </div>
            
            <Button 
              onClick={() => window.open('mailto:tryrebooted@gmail.com', '_self')}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 px-10 py-4 text-lg font-medium"
            >
              <Mail className="w-6 h-6 mr-3" />
              Contact Us
            </Button>
            
            <div 
              onClick={copyEmailToClipboard}
              className="flex items-center gap-3 text-slate-400 hover:text-slate-300 cursor-pointer transition-colors duration-200 group p-3 rounded-lg hover:bg-slate-800/30"
            >
              <span className="text-lg font-medium">tryrebooted@gmail.com</span>
              {copyStatus === 'copied' ? (
                <span className="text-base text-green-400 font-medium">Copied!</span>
              ) : (
                <Copy className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              )}
            </div>
          </div>
        </div>

        <Separator className="bg-slate-700 my-12" />

        <div className="flex justify-center">
          <p className="text-slate-400 text-sm">
            © 2025 rebootED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
