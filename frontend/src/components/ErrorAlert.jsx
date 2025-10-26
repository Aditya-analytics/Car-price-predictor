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
      <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <AlertCircle className="text-red-600" size={24} />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-red-900 mb-1">
              Oops! Something went wrong
            </h3>
            <p className="text-red-700">
              {message}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ErrorAlert;
