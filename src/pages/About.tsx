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
      bio: "Former Google engineer with 10+ years in AI and education technology. Passionate about empowering L&D teams with intelligent tools.",
      avatar: "/placeholder.svg",
      initials: "SC",
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Full-stack architect and machine learning expert. Previously led engineering teams at Microsoft and specialized in content generation tools.",
      avatar: "/placeholder.svg",
      initials: "MR",
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Learning Science",
      bio: "PhD in Cognitive Science from Stanford. Expert in instructional design optimization and educational content development systems.",
      avatar: "/placeholder.svg",
      initials: "EW",
      linkedin: "#",
      twitter: "#",
      github: "#"
    },
    {
      name: "Alex Kim",
      role: "Lead Product Designer",
      bio: "Design thinking advocate with experience at Apple and Figma. Focused on creating intuitive course creation experiences for L&D teams.",
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
            We're on a mission to transform how L&D teams create courses by providing intelligent AI tools that make course development faster, easier, and more effective.
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
                  Creating effective training courses is time-consuming, complex, and expensive. L&D teams struggle with slow content development, difficulty creating engaging materials, and lack of data-driven insights to optimize learning outcomes before launch.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Solution</h3>
                <p className="text-slate-600 leading-relaxed">
                  rebootED empowers L&D teams with intelligent AI tools that handle content generation, suggest interactive elements, and streamline the entire course development process. No more endless content creation cycles or manual formatting headaches.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We envision a world where L&D teams can focus on strategy and learning outcomes while AI handles the heavy lifting of content creation. By combining cutting-edge AI with proven instructional design principles, we're making course development more efficient and effective than ever before.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our platform doesn't just help you create courses—it helps you create better courses faster, with built-in quality assurance and optimization tools that ensure consistent, engaging learning experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">Coming Soon</div>
                <div className="text-slate-600">L&D Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">AI-Powered</div>
                <div className="text-slate-600">Course Creation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">10x Faster</div>
                <div className="text-slate-600">Development Time</div>
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
              We're a passionate group of educators, engineers, and designers united by our mission to revolutionize course creation for L&D teams.
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
