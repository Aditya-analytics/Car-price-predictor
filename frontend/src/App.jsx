import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Sparkles, TrendingUp, Loader2 } from 'lucide-react';
import axios from 'axios';
import Header from './components/Header';
import FormSection from './components/FormSection';
import ResultCard from './components/ResultCard';
import ErrorAlert from './components/ErrorAlert';
import AnimatedBackground from './components/AnimatedBackground';
import Confetti from './components/Confetti';

function App() {
  const [options, setOptions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    year: '2020',
    km_driven: '50000',
    fuel: '',
    seller_type: '',
    transmission: '',
    owner: '',
    mileage: '',
    engine: '',
    max_power: '',
    torque: '',
    seats: '5'
  });

  // Load options on component mount
  useEffect(() => {
    loadOptions();
  }, []);

  const loadOptions = async () => {
    try {
      const response = await axios.get('/api/options');
      setOptions(response.data);
    } catch (err) {
      setError('Failed to load car options. Please refresh the page.');
      console.error('Error loading options:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.post('/api/predict', formData);
      
      if (response.data.success) {
        setResult({
          price: response.data.predicted_price,
          formatted: response.data.formatted_price
        });
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      } else {
        setError(response.data.error || 'Prediction failed. Please try again.');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Network error. Please check your connection and try again.');
      console.error('Error making prediction:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 relative">
      <AnimatedBackground />
      <Confetti show={showConfetti} />
      <div className="max-w-7xl mx-auto relative z-10">
        <Header />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <div className="glass-effect rounded-3xl p-8 shadow-2xl">
            <FormSection
              formData={formData}
              options={options}
              onInputChange={handleInputChange}
              onSubmit={handleSubmit}
              loading={loading}
            />

            {/* Loading State */}
            <AnimatePresence>
              {loading && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="mt-8 text-center"
                >
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-2xl shadow-lg shadow-cyan-500/50">
                    <Loader2 className="animate-spin" size={24} />
                    <span className="font-semibold">Analyzing car details...</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error Alert */}
            {error && <ErrorAlert message={error} onClose={() => setError(null)} />}

            {/* Result Card */}
            {result && <ResultCard result={result} />}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-gray-400"
        >
          <p className="flex items-center justify-center gap-2">
            <Sparkles size={16} className="text-cyan-400" />
            Powered by Machine Learning
            <Sparkles size={16} className="text-cyan-400" />
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
