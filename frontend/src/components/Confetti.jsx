import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Confetti = ({ show }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (show) {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -20,
        rotation: Math.random() * 360,
        color: ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#ffd700'][Math.floor(Math.random() * 5)],
        size: Math.random() * 10 + 5,
        velocity: Math.random() * 3 + 2,
      }));
      setParticles(newParticles);

      const timer = setTimeout(() => {
        setParticles([]);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {particles.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                backgroundColor: particle.color,
                left: particle.x,
              }}
              initial={{
                y: particle.y,
                rotate: particle.rotation,
                opacity: 1,
              }}
              animate={{
                y: window.innerHeight + 100,
                rotate: particle.rotation + 360,
                opacity: 0,
              }}
              transition={{
                duration: particle.velocity,
                ease: 'easeIn',
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default Confetti;
