import { motion } from 'framer-motion';

export const HubnityPreview = () => {
  return (
    <div className="w-full h-full bg-linear-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden group">
      <motion.div
        className="absolute w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="w-[70%] h-[60%] bg-secondary rounded-xl shadow-lg border border-layer/30 flex flex-col p-3 z-10"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />

          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />

          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>

        <div className="flex gap-3 h-full">
          <div className="w-1/3 h-full bg-layer/20 rounded-lg" />

          <div className="w-2/3 h-full flex flex-col gap-2">
            <div className="w-full h-1/2 bg-layer/20 rounded-lg flex items-end p-2 gap-1 overflow-hidden">
              <motion.div
                className="w-1/4 bg-accent/40 rounded-t-sm"
                initial={{ height: 0 }}
                whileInView={{ height: '40%' }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />

              <motion.div
                className="w-1/4 bg-accent/60 rounded-t-sm"
                initial={{ height: 0 }}
                whileInView={{ height: '70%' }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />

              <motion.div
                className="w-1/4 bg-accent/80 rounded-t-sm"
                initial={{ height: 0 }}
                whileInView={{ height: '50%' }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />

              <motion.div
                className="w-1/4 bg-accent rounded-t-sm"
                initial={{ height: 0 }}
                whileInView={{ height: '90%' }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            </div>

            <div className="w-full h-1/2 bg-layer/20 rounded-lg" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
