import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, List, Send } from 'lucide-react';
import SearchableSelect from './SearchableSelect';

const FormSection = ({ formData, options, onInputChange, onSubmit, loading }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <form onSubmit={onSubmit}>
      {/* Basic Information Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/30">
            <Calculator className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-cyan-400">Basic Information</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-white mb-2">
              Year
            </label>
            <input
              type="number"
              value={formData.year}
              onChange={(e) => onInputChange('year', e.target.value)}
              min="1990"
              max="2024"
              required
              className="input-field"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-white mb-2">
              KM Driven
            </label>
            <input
              type="number"
              value={formData.km_driven}
              onChange={(e) => onInputChange('km_driven', e.target.value)}
              min="0"
              required
              className="input-field"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-white mb-2">
              Seats
            </label>
            <input
              type="number"
              value={formData.seats}
              onChange={(e) => onInputChange('seats', e.target.value)}
              min="2"
              max="10"
              required
              className="input-field"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Car Details Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/30">
            <List className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-cyan-400">Car Specifications</h2>
        </div>

        {options ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div variants={itemVariants}>
              <SearchableSelect
                label="Car Name"
                value={formData.name}
                options={options.car_names || []}
                onChange={(value) => onInputChange('name', value)}
                placeholder="Search car name..."
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SearchableSelect
                label="Fuel Type"
                value={formData.fuel}
                options={options.fuel_options || []}
                onChange={(value) => onInputChange('fuel', value)}
                placeholder="Select fuel type..."
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SearchableSelect
                label="Seller Type"
                value={formData.seller_type}
                options={options.seller_type_options || []}
                onChange={(value) => onInputChange('seller_type', value)}
                placeholder="Select seller type..."
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SearchableSelect
                label="Transmission"
                value={formData.transmission}
                options={options.transmission_options || []}
                onChange={(value) => onInputChange('transmission', value)}
                placeholder="Select transmission..."
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SearchableSelect
                label="Owner Type"
                value={formData.owner}
                options={options.owner_options || []}
                onChange={(value) => onInputChange('owner', value)}
                placeholder="Select owner type..."
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SearchableSelect
                label="Mileage"
                value={formData.mileage}
                options={options.mileage_options || []}
                onChange={(value) => onInputChange('mileage', value)}
                placeholder="Select mileage..."
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SearchableSelect
                label="Engine"
                value={formData.engine}
                options={options.engine_options || []}
                onChange={(value) => onInputChange('engine', value)}
                placeholder="Select engine..."
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SearchableSelect
                label="Max Power"
                value={formData.max_power}
                options={options.max_power_options || []}
                onChange={(value) => onInputChange('max_power', value)}
                placeholder="Select max power..."
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SearchableSelect
                label="Torque"
                value={formData.torque}
                options={options.torque_options || []}
                onChange={(value) => onInputChange('torque', value)}
                placeholder="Select torque..."
                required
              />
            </motion.div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-700 border-t-cyan-400"></div>
            <p className="mt-4 text-gray-300">Loading options...</p>
          </div>
        )}
      </motion.div>

      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <button
          type="submit"
          disabled={loading || !options}
          className="btn-primary inline-flex items-center gap-3 text-lg"
        >
          <Send size={20} />
          {loading ? 'Predicting...' : 'Predict Car Price'}
        </button>
      </motion.div>
    </form>
  );
};

export default FormSection;
