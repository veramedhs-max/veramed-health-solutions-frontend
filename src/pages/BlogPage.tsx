import React, { useRef } from "react";
import Slider from "react-slick";
import {
  Calendar,
  Clock,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  BookOpen
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

// Images
import img1 from "../assets/img01.png";
import img2 from "../assets/img02.png";
import img3 from "../assets/img03.png";

// --- Blog Data ---
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
    excerpt: "Urology treatments have evolved. Learn about minimally invasive robotic procedures that offer less pain, shorter hospital stays, and faster returns to normal life.",
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
  {
    id: 4, // Added dummy post to demonstrate scrolling better
    title: "Navigating Medical Visas: A Comprehensive Guide",
    excerpt: "Understanding the paperwork shouldn't be a headache. Here is a step-by-step guide to securing your medical visa for treatment in India.",
    image: img1,
    category: "Travel Guide",
    date: "Feb 15, 2024",
    readTime: "7 min read",
    author: "Travel Desk",
  },
];

const BlogPage: React.FC = () => {
  // Reference for custom slider buttons
  const sliderRef = useRef<Slider>(null);

  // Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3, // Display 3 on large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Disable default arrows to use custom ones
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  // Custom Navigation Handlers
  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50/50 to-white">
      {/* =================== SEO =================== */}
      <SEO
        title="Medical Tourism Blogs & Healthcare Insights | Veramed"
        description="Explore expert blogs on medical tourism, robotic surgery, and patient recovery insights."
        keywords="medical tourism blog, robotic surgery, healthcare technology, India medical travel"
        canonical="https://veramedhealthsolutions.com/blog"
      />

      {/* =================== Main Content =================== */}
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4 md:px-8">

          {/* Section Header & Controls */}
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 max-w-7xl mx-auto gap-8">

            {/* Title Section */}
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
                <BookOpen className="w-4 h-4 mr-2" />
                Latest Updates
              </div>
              <h1 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
                Insights & <span className="text-blue-600">Innovations</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Stay informed about the latest breakthroughs in medical technology and expert tips for your healthcare journey.
              </p>
            </div>

            {/* Manual Scroll Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="w-14 h-14 rounded-full bg-white border border-gray-200 text-gray-700 shadow-md hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                aria-label="Previous Slide"
              >
                <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleNext}
                className="w-14 h-14 rounded-full bg-white border border-gray-200 text-gray-700 shadow-md hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                aria-label="Next Slide"
              >
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Blog Slider */}
          <div className="max-w-7xl mx-auto  px-4">
            <Slider ref={sliderRef} {...settings} className="pb-12 blog-slider">
              {blogPosts.map((post) => (
                <div key={post.id} className="p-4 h-full">
                  <Card className="h-full bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-3xl overflow-hidden flex flex-col group">

                    {/* Image Container */}
                    <div className="relative h-60 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <Badge className="bg-white/95 text-blue-700 px-3 py-1 text-xs font-bold uppercase tracking-wide border-none shadow-md backdrop-blur-md">
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-6 md:p-8 flex flex-col flex-grow bg-white relative z-20">

                      {/* Metadata */}
                      <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-4 uppercase tracking-wider">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          {post.date}
                        </div>
                        <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-blue-500" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-grow text-sm md:text-base">
                        {post.excerpt}
                      </p>

                      <div className="pt-5 border-t border-gray-100 flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                            {post.author.charAt(0)}
                          </div>
                          <span className="text-sm font-semibold text-gray-700">
                            {post.author}
                          </span>
                        </div>

                        <Button
                          variant="ghost"
                          className="text-blue-600 p-0 hover:bg-transparent hover:text-blue-800 font-semibold group/btn"
                        >
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