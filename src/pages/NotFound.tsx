import  { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react'; // Assuming you have lucide-react installed

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    // Set page title
    document.title = "Page Not Found | Veramed Health Solutions";

    // Interval to update the visible countdown number
    const timerInterval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Timeout to actually perform the redirect after 3 seconds
    const redirectTimeout = setTimeout(() => {
      navigate('/');
    }, 3000);

    // Cleanup timers if user leaves the page manually before 3s
    return () => {
      clearInterval(timerInterval);
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
      
      {/* Icon/Image */}
      <div className="mb-6 p-4 bg-blue-50 rounded-full animate-bounce">
        <AlertCircle className="w-16 h-16 text-blue-500" />
      </div>

      {/* 404 Text */}
      <h1 className="text-8xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
        404
      </h1>
      
      {/* Message */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      {/* Countdown & Redirect Message */}
      <div className="bg-white px-6 py-4 rounded-xl shadow-sm border border-blue-100 flex flex-col items-center">
        <div className="w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin mb-3"></div>
        <p className="text-gray-700 font-medium">
          Redirecting to Home in <span className="text-blue-600 font-bold text-lg">{countdown}</span> seconds...
        </p>
      </div>

      {/* Manual Button (in case they don't want to wait) */}
      <Link 
        to="/" 
        className="mt-8 flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      >
        <Home className="w-5 h-5" />
        Go Home Now
      </Link>

    </div>
  );
};

export default NotFound;