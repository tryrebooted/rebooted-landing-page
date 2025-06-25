import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { ArrowRight, Star, PenTool, Users, Sparkles, Rocket, Heart, Mail, User } from "lucide-react";
import { useState } from "react";

const CallToAction = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.name) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // SheetDB typically expects data in this format
      const now = new Date();
      const payload = {
        data: {
          Name: formData.name,
          Email: formData.email,
          Company: formData.company || '',
          Date: now.toLocaleDateString(),
          Time: now.toLocaleTimeString(),
        }
      };

      console.log('Sending payload:', payload);

      const response = await fetch('https://sheetdb.io/api/v1/yd9piffcfld5y', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('Response status:', response.status);
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '' });
      } else {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist-form" className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M10 10h2v2h-2zM14 10h2v2h-2zM18 10h2v2h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-indigo-500/8 rounded-full blur-2xl animate-pulse delay-2000"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-slate-800/80 text-slate-300 border border-slate-600 px-6 py-3 text-base font-medium backdrop-blur-sm rounded-full transition-transform duration-200 hover:scale-105">
            <Rocket className="w-4 h-4 mr-2 text-purple-400" />
            Early Access Program
          </div>
        </div>

        {/* Enhanced stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform transition-all duration-300 group-hover:scale-105 group-hover:bg-white/15">
              <div className="flex items-center justify-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <PenTool className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-2">Coming Soon</div>
              <div className="text-blue-200 text-sm">AI Course Creator</div>
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
            of Course Creation
          </span>
        </h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl text-white/90 mb-6 leading-relaxed">
            We're validating our solution with early L&D partners. Join the waitlist to be among the first to experience AI-powered course creation tools that actually work.
          </p>
          <Separator className="bg-white/20 my-6 max-w-md mx-auto" />
          <p className="text-lg text-white/70">
            Your feedback will directly shape the future of intelligent course development technology.
          </p>
        </div>

                {/* Waitlist Form */}
        <div className="max-w-md mx-auto mb-12">
          {submitStatus === 'success' ? (
            <div className="text-center p-8 bg-green-900/20 rounded-2xl border border-green-500/30 backdrop-blur-sm">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">You're on the list!</h3>
              <p className="text-green-200">We'll notify you as soon as early access opens.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="pl-12 py-4 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 rounded-xl backdrop-blur-sm focus:border-purple-500 focus:ring-purple-500/20"
                />
              </div>
              
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="pl-12 py-4 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 rounded-xl backdrop-blur-sm focus:border-purple-500 focus:ring-purple-500/20"
                />
              </div>
              
              <div className="relative">
                <PenTool className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="text"
                  name="company"
                  placeholder="Company (Optional)"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="pl-12 py-4 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 rounded-xl backdrop-blur-sm focus:border-purple-500 focus:ring-purple-500/20"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email}
                size="lg" 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 rounded-xl shadow-2xl hover:shadow-purple-500/25"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                    Joining...
                  </>
                ) : (
                  <>
                    <Heart className="mr-3 w-5 h-5" />
                    Join Waitlist
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </>
                )}
              </Button>
              
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm text-center mt-2">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
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
