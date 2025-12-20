// src/pages/BlogPage.tsx
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Home, 
  Calendar, 
  Clock, 
  ChevronRight, 
  Tag 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

// Ensure you have these images or placeholders
import img1 from "../assets/img01.png";
import img2 from "../assets/img02.png";
import img3 from "../assets/img03.png";

// --- Blog Data Configuration ---
const blogPosts = [
  {
    id: 1,
    title: "Robotic Surgery: A New Era in Healing",
    excerpt: "Discover how Veramed Health Solutions utilizes state-of-the-art robotic systems to ensure precision, reduce recovery time, and improve surgical outcomes for international patients.",
    image: img1,
    category: "Technology",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "Dr. Sharma",
  },
  {
    id: 2,
    title: "Precision and Recovery with Robotic Urology",
    excerpt: " Urology treatments have evolved. Learn about minimally invasive robotic procedures that offer less pain, shorter hospital stays, and faster returns to normal life.",
    image: img2,
    category: "Urology",
    date: "March 10, 2024",
    readTime: "4 min read",
    author: "Med Team",
  },
  {
    id: 3,
    title: "Revolutionizing Recovery: The Power of Tech",
    excerpt: "From AI-driven diagnostics to telemedicine follow-ups, see how technology bridges the gap between arrival in India and long-term recovery back home.",
    image: img3,
    category: "Innovation",
    date: "Feb 28, 2024",
    readTime: "6 min read",
    author: "Sarah Jenkins",
  },
];

const BlogPage: React.FC = () => {
  // Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2, // Show 2 slides on large screens for better density
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* =================== SEO =================== */}
      <SEO
        title="Medical Tourism Blogs & Healthcare Insights | Veramed"
        description="Explore expert blogs on medical tourism, robotic surgery, and patient recovery insights."
        keywords="medical tourism blog, robotic surgery, healthcare technology, India medical travel"
        canonical="https://veramedhealthsolutions.com/blog"
      />

      {/* =================== Main Content =================== */}
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in max-w-3xl mx-auto">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-1 text-sm font-medium border-none rounded-full">
              Latest Updates
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Innovations</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Stay informed about the latest breakthroughs in medical technology and tips for your healthcare journey in India.
            </p>
          </div>

          {/* Blog Slider */}
          <div className="max-w-6xl mx-auto px-4">
            <Slider {...settings} className="pb-10">
              {blogPosts.map((post) => (
                <div key={post.id} className="p-4">
                  <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group rounded-2xl flex flex-col">
                    
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-blue-700 hover:bg-white border-none shadow-sm backdrop-blur-sm">
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-6 flex flex-col flex-grow">
                      {/* Metadata */}
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
                        {post.excerpt}
                      </p>

                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                        <span className="text-sm font-medium text-gray-500">
                          By {post.author}
                        </span>
                        <Button variant="link" className="text-blue-600 p-0 h-auto font-semibold group/btn">
                          Read Article <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;