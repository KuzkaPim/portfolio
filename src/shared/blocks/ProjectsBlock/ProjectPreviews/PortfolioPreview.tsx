import { motion } from 'framer-motion';

export const PortfolioPreview = () => {
  return (
    <div className="w-full h-full bg-linear-to-b from-cyan-500/20 to-blue-600/20 flex items-center justify-center relative overflow-hidden group">
      <motion.div
        className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="text-6xl md:text-8xl font-mono font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 z-10 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] cursor-default"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      >
        {'</>'}
      </motion.div>
    </div>
  );
};
