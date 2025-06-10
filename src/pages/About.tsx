
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Twitter, Github } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former Google engineer with 10+ years in AI and education technology. Passionate about democratizing coding education.",
      avatar: "/placeholder.svg",
      initials: "SC",
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Full-stack architect and machine learning expert. Previously led engineering teams at Microsoft and Coursera.",
      avatar: "/placeholder.svg",
      initials: "MR",
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Learning Science",
      bio: "PhD in Cognitive Science from Stanford. Expert in adaptive learning systems and educational psychology.",
      avatar: "/placeholder.svg",
      initials: "EW",
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    {
      name: "Alex Kim",
      role: "Lead Product Designer",
      bio: "Design thinking advocate with experience at Apple and Figma. Focused on creating intuitive learning experiences.",
      avatar: "/placeholder.svg",
      initials: "AK",
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            About rebootED
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We're on a mission to transform how people learn to code by creating the world's first truly adaptive learning IDE.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Story</h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">The Problem</h3>
                <p className="text-slate-600 leading-relaxed">
                  Traditional coding education follows a one-size-fits-all approach. Learners are forced through rigid curricula that don't adapt to their unique learning styles, pace, or career goals. This leads to frustration, high dropout rates, and a widening skills gap in the tech industry.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Solution</h3>
                <p className="text-slate-600 leading-relaxed">
                  rebootED uses advanced AI to create a personalized learning journey for every user. Our adaptive IDE learns from your coding patterns, identifies knowledge gaps, and dynamically adjusts content to keep you in the optimal learning zone.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We envision a world where anyone can master coding skills through an intelligent, adaptive learning experience that evolves with them. By combining cutting-edge AI with proven pedagogical principles, we're making coding education more effective, engaging, and accessible than ever before.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our platform doesn't just teach you to code—it teaches you to think like a developer, building real projects while developing the problem-solving skills that define great engineers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
                <div className="text-slate-600">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-slate-600">Completion Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're a passionate group of educators, engineers, and designers united by our mission to revolutionize coding education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="text-lg font-semibold bg-gradient-to-br from-purple-100 to-blue-100 text-slate-700">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-center space-x-3">
                    <a href={member.linkedin} className="text-slate-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.twitter} className="text-slate-400 hover:text-blue-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={member.github} className="text-slate-400 hover:text-slate-900 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
