import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6 lg:px-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm font-medium text-zinc-400">
              Product Strategy
            </span>
            <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm font-medium text-zinc-400">
              Logistics
            </span>
            <span className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm font-medium text-zinc-400">
              Next.js
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-none mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              RetailOS:
            </span>
            <br />
            <span className="text-[#CCFF00]">
              The Hyperlocal Turnaround
            </span>
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-zinc-400 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Reviving a legacy retailer from 0 orders to daily revenue in 4 weeks.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative transform rotate-6 hover:rotate-0 transition-transform duration-500">
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-3xl p-8 border border-zinc-700 shadow-2xl backdrop-blur-xl">
              <div className="bg-zinc-950 rounded-2xl h-[600px] flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/10 to-transparent"></div>
                <div className="relative w-[300px] h-[600px] bg-black rounded-[50px] border-[14px] border-black overflow-hidden">
                  <img
                    src="/images/image.png"
                    alt="A high-fidelity mobile UI screenshot for a premium streetwear fashion brand's homepage"
                    className="w-full h-full object-contain rounded-2xl"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -z-10 inset-0 bg-[#CCFF00]/20 blur-3xl"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#CCFF00] rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
