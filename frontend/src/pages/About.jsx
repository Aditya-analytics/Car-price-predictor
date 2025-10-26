import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Brain, Code, Target, Cpu } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

const About = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 relative">
      <AnimatedBackground />
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Predictor
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">About This Project</span>
          </h1>
          <p className="text-xl text-gray-600">
            Learn more about the technology and creator behind this application
          </p>
        </motion.div>

        {/* Creator Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-effect rounded-3xl p-8 mb-8 shadow-xl relative overflow-hidden"
        >
          {/* Animated background circles */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="flex flex-col items-center text-center relative z-10">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-400 rounded-full blur-xl opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <div className="relative w-24 h-24 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <User size={48} className="text-white" />
              </div>
            </motion.div>
            <h2 className="text-3xl font-bold gradient-text mb-2">Aditya Patil</h2>
            <p className="text-lg text-gray-600">Project Creator & Developer</p>
            <motion.div
              className="mt-4 flex gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {['💻', '🚀', '⚡'].map((emoji, i) => (
                <motion.span
                  key={i}
                  className="text-2xl"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Project Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-effect rounded-3xl p-8 mb-8 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-primary-600" size={32} />
            <h3 className="text-2xl font-bold text-gray-800">About This Project</h3>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            This is a machine learning project designed to predict car prices based on various features such as year, mileage, fuel type, transmission, and more. The project leverages the power of artificial intelligence to provide accurate car price estimations.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Created by <span className="font-semibold text-primary-600">Aditya Patil</span>, this application demonstrates the practical implementation of machine learning algorithms in real-world scenarios, specifically focusing on the automotive industry.
          </p>
        </motion.div>

        {/* ML Technology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-effect rounded-3xl p-8 mb-8 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Brain className="text-purple-600" size={32} />
            <h3 className="text-2xl font-bold text-gray-800">Machine Learning Technology</h3>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            This project uses <span className="font-bold text-purple-600">Random Forest</span> algorithm, a powerful ensemble learning method that operates by constructing multiple decision trees during training and outputting the mean prediction of individual trees. Random Forest is known for its high accuracy and ability to handle large datasets with higher dimensionality.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-effect rounded-3xl p-8 mb-8 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-blue-600" size={32} />
            <h3 className="text-2xl font-bold text-gray-800">Technology Stack</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, name: 'Random Forest', desc: 'ML Algorithm', colors: 'from-purple-500 to-pink-500' },
              { icon: Code, name: 'Python', desc: 'Backend Language', colors: 'from-blue-500 to-cyan-500' },
              { icon: Cpu, name: 'Flask', desc: 'Web Framework', colors: 'from-green-500 to-emerald-500' },
              { icon: Code, name: 'React', desc: 'Frontend Library', colors: 'from-orange-500 to-red-500' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.08, y: -5 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity"
                  style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                />
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${tech.colors} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <tech.icon size={32} className="text-white" />
                </motion.div>
                <h4 className="font-bold text-gray-800 mb-2">{tech.name}</h4>
                <p className="text-sm text-gray-600">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="glass-effect rounded-3xl p-8 mb-8 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-green-600" size={32} />
            <h3 className="text-2xl font-bold text-gray-800">Project Goals</h3>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            The main objective of this project is to help users make informed decisions when buying or selling cars by providing data-driven price predictions. By analyzing various car attributes, the model can estimate a fair market value, helping both buyers and sellers in the automotive market.
          </p>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center"
        >
          <Link 
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-xl"
          >
            <ArrowLeft size={20} />
            Back to Car Price Predictor
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
