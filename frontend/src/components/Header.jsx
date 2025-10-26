import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, Zap, Info } from 'lucide-react';

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center relative"
    >
      {/* About Link */}
      <Link 
        to="/about"
        className="absolute right-0 top-0 inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform text-primary-600 font-medium"
      >
        <Info size={20} />
        About
      </Link>
      <div className="inline-flex items-center justify-center gap-3 mb-4">
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          <Car size={48} className="text-primary-600" />
        </motion.div>
        <Zap size={32} className="text-yellow-500" />
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        <span className="gradient-text">Car Price Predictor</span>
      </h1>
      
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Get accurate price predictions for your car using advanced 
        <span className="font-semibold text-purple-600"> AI technology</span>
      </p>
      
      <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">ML Powered</span>
        </div>
        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">Real-time Analysis</span>
        </div>
        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">Instant Results</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
