import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// --- TypeScript Type Definitions ---
interface SocialLinks {
  linkedin: string;
  twitter: string;
  email: string;
}

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  socials: SocialLinks;
}

// --- Team Member Data ---
const teamMembers: TeamMember[] = [
  {
    name: "Mr. Shah Fahad",
    role: "Owner",
    imageUrl: "",
    bio: "Shah Fahad is the visionary owner behind the organization, driving strategy, growth, and long-term success.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:shah.fahad@veramedhs.com",
    },
  },
  {
    name: "Mr. Sumit Kumar",
    role: "Team Lead",
    imageUrl: "",
    bio: "Sumit leads the development team, ensuring high-quality delivery, technical excellence, and smooth collaboration.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:sumit.kumar@veramedhs.com",
    },
  },
  {
    name: "Mr. Md Aqib",
    role: "Full Stack Developer",
    imageUrl: "",
    bio: "Aqib works as a Full Stack Developer, building scalable web applications from front end to back end. He ensures clean code, performance optimization, and seamless user experiences.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:aqibcse4530@gmail.com",
    },
  },
  {
    name: "Ms. Shruti",
    role: "Senior Developer",
    imageUrl: "",
    bio: "Shruti brings strong technical expertise and mentors the team while building scalable and reliable solutions.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:shruti@veramedhs.com",
    },
  },
  {
    name: "Mr. Abhishek Kumar",
    role: "Frontend Developer",
    imageUrl: "",
    bio: "Abhishek is a passionate intern, learning and contributing to real-world projects with dedication.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:abhishek.kumar@veramedhs.com",
    },
  },
  {
    name: "Ms. Yashi Tiwari",
    role: "Frontend Developer",
    imageUrl: "",
    bio: "Yashi focuses on developing clean, user-friendly interfaces and robust application features.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:yashi@veramedhs.com",
    },
  },
  {
    name: "Mr. Ravi",
    role: "UI/UX Designer",
    imageUrl: "",
    bio: "Ravi crafts intuitive and accessible user experiences, ensuring our digital platforms are not only functional but beautiful.",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:ravi@veramedhs.com",
    },
  },

];

// --- Helper Functions ---
const getInitials = (name: string) => {
  const parts = name.split(' ').filter(p => !p.toLowerCase().includes('mr.') && !p.toLowerCase().includes('ms.'));
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.charAt(0).toUpperCase();
};

const getBackgroundColor = (name: string) => {
  const colors = [
    'bg-blue-500', 'bg-green-500', 'bg-purple-500',
    'bg-pink-500', 'bg-orange-500', 'bg-teal-500',
    'bg-indigo-500', 'bg-rose-500'
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};

// --- Team Component ---
const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* --- Page Header --- */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our
            <span className="text-primary"> Dedicated Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our team of experienced professionals is committed to providing you with
            personalized care and expert guidance throughout your healthcare journey.
          </p>
        </div>

        {/* --- Team Member Grid --- */}
        {/* Optimized to lg:grid-cols-3 for a balanced 2x3 layout with 6 members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="flex flex-col relative overflow-hidden group border-border/40 bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Decorative top gradient line */}
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-8 flex flex-col h-full items-center text-center">

                {/* --- Image with Ring Effect --- */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Avatar className="w-36 h-36 border-4 border-background shadow-md group-hover:scale-105 transition-transform duration-300">
                    <AvatarImage src={member.imageUrl} alt={member.name} className="object-cover" />
                    <AvatarFallback className={`text-3xl font-bold text-white ${getBackgroundColor(member.name)} shadow-inner`}>
                      {getInitials(member.name)}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* --- Content --- */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>

                  {/* Role Badge */}
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-4">
                    <p className="text-primary font-semibold text-xs tracking-wide uppercase">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                {/* --- Social Links --- */}
                <div className="flex justify-center items-center space-x-3 w-full pt-6 border-t border-border/40">
                  <SocialButton href={member.socials.linkedin} icon={<Linkedin className="w-4 h-4" />} />
                  <SocialButton href={member.socials.twitter} icon={<Twitter className="w-4 h-4" />} />
                  <SocialButton href={member.socials.email} icon={<Mail className="w-4 h-4" />} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* --- Call to Action --- */}
        <div className="mt-24 text-center">
          <div className="max-w-3xl mx-auto bg-muted/30 rounded-2xl p-8 md:p-12 border border-border/50">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Have Questions for Our Team?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              We are here to help. Reach out to us for a free, no-obligation consultation.
            </p>
            <Link to="/contact">
              <Button size="lg" className="min-w-[200px] text-base font-semibold shadow-lg shadow-primary/20">
                Contact Us Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component for social icons to keep code clean
const SocialButton: React.FC<{ href: string; icon: React.ReactNode }> = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2.5 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
  >
    {icon}
  </a>
);

export default Team;