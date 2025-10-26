import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, Info, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
      className="text-center relative"
    >
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex justify-end mb-4"
      >
        <Link
          to="/about"
          className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900/80 backdrop-blur-sm rounded-full hover:bg-cyan-500/20 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 group border border-cyan-400/30 hover:border-cyan-400/60"
        >
          <Info size={20} className="text-cyan-400 group-hover:rotate-12 transition-transform" />
          <span className="font-semibold text-white">
            About Us
          </span>
        </Link>
      </motion.div>

      {/* Logo and Title */}
      <motion.div
        className="flex justify-center items-center mb-6"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
      >
        <motion.div
          className="relative"
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-3xl blur-2xl opacity-50 animate-pulse" />
          <div className="relative w-24 h-24 bg-gradient-to-br from-cyan-500 via-blue-600 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-cyan-500/50">
            <Car size={48} className="text-white" />
          </div>
        </motion.div>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-4 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <span className="inline-block">
          <span className="gradient-text">
            Car Price Predictor
          </span>
        </span>
        <motion.div
          className="absolute -right-8 -top-4"
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <Sparkles className="text-yellow-400" size={32} />
        </motion.div>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Get instant, accurate price estimates powered by{' '}
        <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Machine Learning
        </span>
      </motion.p>

      {/* Feature Pills */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {[
          { icon: '🎯', text: 'Accurate Predictions' },
          { icon: '⚡', text: 'Instant Results' },
          { icon: '🤖', text: 'AI-Powered' },
          { icon: '📊', text: 'Data-Driven' },
        ].map((feature, index) => (
          <motion.div
            key={feature.text}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-900/60 backdrop-blur-sm rounded-full shadow-md border border-cyan-400/20 hover:border-cyan-400/50 hover:bg-zinc-800/60 transition-all"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -2, boxShadow: "0 0 20px rgba(0, 191, 255, 0.3)" }}
          >
            <span className="text-2xl">{feature.icon}</span>
            <span className="text-sm font-medium text-gray-200">{feature.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.header>
  );
};

export default Header;
