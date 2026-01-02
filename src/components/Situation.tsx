import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown } from 'lucide-react';

export default function Situation() {
  return (
    <section className="min-h-screen bg-black text-white py-32 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl lg:text-7xl font-bold mb-6 text-[#CCFF00]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The "Ghost Town" Problem
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-6 mt-16">
          <motion.div
            className="lg:col-span-2 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AlertCircle className="w-12 h-12 text-zinc-600 mb-6" strokeWidth={1.5} />
            <p className="text-2xl lg:text-3xl text-zinc-300 leading-relaxed">
              My client had <span className="text-white font-semibold">4 branches in Bengaluru</span> and great inventory.
              But their online store had <span className="text-red-400 font-semibold">zero orders in Q4 2025</span>. Why?
              Because they asked local customers to <span className="text-white font-semibold">wait 3 days for delivery</span>.
              In 2026, <span className="text-[#CCFF00] font-bold">speed is the product</span>.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-red-950/50 to-zinc-950 border border-red-900/50 rounded-3xl p-10 flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <TrendingDown className="w-10 h-10 text-red-500 mb-4" strokeWidth={1.5} />
              <div className="text-7xl font-bold text-red-400 mb-2">0</div>
              <div className="text-xl text-zinc-400">Orders (Volume)</div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3 bg-gradient-to-br from-red-950/50 to-zinc-950 border border-red-900/50 rounded-3xl p-10 flex items-center justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-baseline gap-4">
              <div className="text-8xl font-bold text-red-400">98%</div>
              <div className="text-2xl text-zinc-400">Cart Abandonment</div>
            </div>
            <TrendingDown className="w-20 h-20 text-red-500/30" strokeWidth={1} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
