import { TrendingUp, Users, DollarSign, Clock, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const MarketStats = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            L&D Reality
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            The Course Creation
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent"> Bottleneck</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            L&D teams spend too much time on manual content creation and not enough time on strategic learning outcomes and impact measurement.
          </p>
        </div>

        {/* Main stats grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left side - Time Challenge Stat */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-200/30 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <Badge variant="outline" className="border-red-200 text-red-700 bg-white/80">
                  Time Challenge
                </Badge>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Course Development Takes Too Long
              </h3>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-red-600 mb-2">43-55</div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  hours of development time needed to create one hour of instructor-led training
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span>Source:</span>
                <span className="text-red-600 font-medium">Chapman Alliance</span>
              </div>
            </div>
          </div>

          {/* Right side - AI Efficiency Stat */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-200/30 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <Badge variant="outline" className="border-green-200 text-green-700 bg-white/80">
                  AI Solution
                </Badge>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                AI-Powered Course Creation Benefits
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-1">9x</div>
                  <p className="text-base text-slate-700">AI accelerates course creation</p>
                </div>
                <Separator className="bg-green-200" />
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-1">25%</div>
                  <p className="text-base text-slate-700">of L&D content budgets are wasted</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span>Sources:</span>
                <span className="text-green-600 font-medium">Articulate 2024, Go1 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom insight */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl border border-purple-200">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            <div className="text-left">
              <div className="text-sm font-medium text-slate-600">The Solution</div>
              <div className="text-lg font-semibold text-slate-900">
                L&D teams need intelligent tools for rapid course creation—not more manual processes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketStats; 