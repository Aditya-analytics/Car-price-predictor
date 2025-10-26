import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Award, Sparkles } from 'lucide-react';

const ResultCard = ({ result }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="mt-12"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500 via-purple-500 to-accent-500 p-1 shadow-2xl">
        <div className="bg-white rounded-3xl p-8 relative">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-100 to-purple-100 rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full blur-3xl opacity-50 -z-10"></div>

          <div className="text-center relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full mb-6 shadow-lg"
            >
              <Award size={20} />
              <span className="font-semibold">Prediction Complete</span>
            </motion.div>

            {/* Price Display */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="mb-6"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <TrendingUp size={32} className="text-primary-600" />
                <h3 className="text-2xl font-bold text-gray-700">Predicted Price</h3>
              </div>
              
              <div className="relative inline-block">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  className="text-6xl md:text-7xl font-extrabold gradient-text my-4"
                >
                  {result.formatted}
                </motion.div>
                
                {/* Sparkle effects */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -top-4 -right-4"
                >
                  <Sparkles size={24} className="text-yellow-500" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    rotate: -360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -bottom-4 -left-4"
                >
                  <Sparkles size={24} className="text-purple-500" />
                </motion.div>
              </div>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
            >
              <div className="bg-gradient-to-br from-blue-50 to-primary-50 p-4 rounded-2xl">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-sm font-semibold text-gray-700">ML Powered</div>
                <div className="text-xs text-gray-600 mt-1">Random Forest Model</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-sm font-semibold text-gray-700">Instant Result</div>
                <div className="text-xs text-gray-600 mt-1">Real-time Analysis</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl">
                <div className="text-3xl mb-2">✨</div>
                <div className="text-sm font-semibold text-gray-700">Accurate</div>
                <div className="text-xs text-gray-600 mt-1">Data-driven Prediction</div>
              </div>
            </motion.div>

            {/* Note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-sm text-gray-600"
            >
              💡 This is an estimated price based on similar cars in the market
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultCard;
