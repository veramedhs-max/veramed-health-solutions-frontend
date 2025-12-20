import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { 
  Loader2, 
  AlertTriangle, 
  Camera, 
  ZoomIn, 
  X, 
  ImageIcon 
} from 'lucide-react';
import { apiClient } from '@/lib/apiClient';
import Footer from "@/components/Footer"; // Assuming you want the footer included

// --- Types ---
interface Image {
  imageUrl: string;
  publicId: string;
  _id: string;
}

interface GalleryDoc {
  _id: string;
  images: Image[];
}

// --- Grid Logic (Zig-Zag / Mosaic) ---
// Returns Tailwind classes for spanning rows/cols based on index pattern
const getGridClassName = (index: number): string => {
  const pattern = index % 8; // Repeating pattern of 8
  switch (pattern) {
    case 0:
      return "md:col-span-2 md:row-span-2"; // Big Square
    case 3:
      return "md:row-span-2"; // Tall Portrait
    case 4:
      return "md:col-span-2"; // Wide Landscape
    case 5:
      return "md:col-span-1"; 
    default:
      return "md:col-span-1"; // Standard Square
  }
};

const PatientGalleryPage: React.FC = () => {
  const [galleryImages, setGalleryImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // State for Lightbox
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        setIsLoading(true);
        const response = await apiClient.get<{ success: boolean; data: GalleryDoc[] }>('/api/v1/veramed/gallery');

        if (response.data.success) {
          const allImages = response.data.data.flatMap(doc => doc.images);
          setGalleryImages(allImages);
        } else {
          throw new Error("Failed to fetch gallery data.");
        }
      } catch (err) {
        console.error("Gallery fetch error:", err);
        setError("Could not load the patient gallery. Please refresh the page.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchGallery();
  }, []);

  // Handle closing lightbox with ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const renderContent = () => {
    // 1. Loading State
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <div className="p-4 bg-white rounded-full shadow-xl mb-4">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
          <p className="text-lg font-medium text-gray-500 animate-pulse">Curating Patient Stories...</p>
        </div>
      );
    }

    // 2. Error State
    if (error) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center px-4">
          <div className="p-4 bg-red-50 rounded-full mb-4">
            <AlertTriangle className="w-10 h-10 text-red-500" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Unable to Load Gallery</h3>
          <p className="text-gray-500 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Try Again
          </button>
        </div>
      );
    }
    
    // 3. Empty State
    if (galleryImages.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                <div className="p-6 bg-gray-100 rounded-full mb-4">
                    <ImageIcon className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700">Gallery Empty</h3>
                <p className="text-gray-500">No patient stories have been uploaded yet.</p>
            </div>
        )
    }

    // 4. The Gallery Grid
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[280px] gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={image._id || image.publicId}
            className={`group relative overflow-hidden rounded-3xl shadow-lg border border-gray-100 cursor-pointer ${getGridClassName(index)}`}
            onClick={() => setSelectedImage(image.imageUrl)}
          >
            {/* Image Wrapper */}
            <div className="w-full h-full bg-gray-200">
                <LazyLoadImage
                  alt="Patient Journey"
                  src={image.imageUrl}
                  effect="blur"
                  width="100%"
                  height="100%"
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  wrapperClassName="w-full h-full !block" 
                />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="bg-white/20 p-3 rounded-full border border-white/50 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6 text-white" />
                </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <section id="patient-gallery" className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <Camera className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Patient <span className="text-blue-600">Journeys</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Visual stories of hope, recovery, and renewed life. Browse through the moments that define our commitment to global healthcare.
            </p>
          </div>

          {/* Main Gallery Render */}
          {renderContent()}

        </div>
      </section>

      {/* Lightbox / Modal Overlay */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
        >
            <button 
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                onClick={() => setSelectedImage(null)}
            >
                <X className="w-8 h-8" />
            </button>

            <img 
                src={selectedImage} 
                alt="Full screen view" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl scale-95 animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
        </div>
      )}

      {/* Footer (Optional inclusion based on previous patterns) */}
      <Footer />
    </>
  );
};

export default PatientGalleryPage;