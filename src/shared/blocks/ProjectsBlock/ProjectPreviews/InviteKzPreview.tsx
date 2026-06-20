import { motion } from 'framer-motion';

export const InviteKzPreview = () => {
  return (
    <div className="w-full h-full bg-linear-to-tr from-pink-500/20 to-orange-400/20 flex items-center justify-center relative overflow-hidden group">
      <motion.div
        className="absolute w-48 h-48 bg-pink-500/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="w-[60%] h-[70%] bg-secondary rounded-2xl shadow-xl border border-layer/30 flex items-center justify-center z-10 relative overflow-hidden"
        initial={{ rotate: -5, scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="absolute top-0 w-full h-8 bg-layer/20 flex justify-center items-center">
          <div className="w-12 h-2 rounded-full bg-layer/40" />
        </div>

        <motion.div
          className="text-6xl"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          ✉️
        </motion.div>
      </motion.div>
    </div>
  );
};
