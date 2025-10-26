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
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-600 to-cyan-400 p-1 shadow-2xl shadow-cyan-500/50">
        <div className="bg-zinc-900 rounded-3xl p-8 relative">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl opacity-50 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl opacity-50 -z-10"></div>

          <div className="text-center relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full mb-6 shadow-lg shadow-cyan-500/50"
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
                <TrendingUp size={32} className="text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Predicted Price</h3>
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
                  <Sparkles size={24} className="text-cyan-400" />
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
                  <Sparkles size={24} className="text-blue-400" />
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
              <div className="bg-gradient-to-br from-cyan-950/50 to-blue-950/50 p-4 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all hover:shadow-lg hover:shadow-cyan-400/20">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-sm font-semibold text-cyan-400">ML Powered</div>
                <div className="text-xs text-gray-400 mt-1">Random Forest Model</div>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-950/50 to-blue-950/50 p-4 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all hover:shadow-lg hover:shadow-cyan-400/20">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-sm font-semibold text-cyan-400">Instant Result</div>
                <div className="text-xs text-gray-400 mt-1">Real-time Analysis</div>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-950/50 to-blue-950/50 p-4 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all hover:shadow-lg hover:shadow-cyan-400/20">
                <div className="text-3xl mb-2">✨</div>
                <div className="text-sm font-semibold text-cyan-400">Accurate</div>
                <div className="text-xs text-gray-400 mt-1">Data-driven Prediction</div>
              </div>
            </motion.div>

            {/* Note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-sm text-gray-400"
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
