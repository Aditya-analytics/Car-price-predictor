import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, X } from 'lucide-react';

const ErrorAlert = ({ message, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mt-8"
    >
      <div className="bg-red-950/40 border-2 border-red-500/50 rounded-2xl p-6 relative backdrop-blur-sm hover:border-red-500/70 transition-all shadow-lg shadow-red-500/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-400 hover:text-red-300 transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-red-900/50 rounded-full flex items-center justify-center border border-red-500/30">
              <AlertCircle className="text-red-400" size={24} />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-red-300 mb-1">
              Oops! Something went wrong
            </h3>
            <p className="text-red-200">
              {message}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ErrorAlert;
