import { motion } from 'framer-motion';
import { Quote, Lightbulb } from 'lucide-react';

export default function Discovery() {
  return (
    <section className="min-h-screen bg-zinc-950 text-white py-32 px-6 lg:px-20 flex items-center">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl lg:text-7xl font-bold mb-20 text-[#CCFF00]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Amazon Wins
        </motion.h2>

        <motion.div
          className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border-l-4 border-[#CCFF00] rounded-2xl p-12 lg:p-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Quote className="absolute top-8 right-8 w-16 h-16 text-zinc-800" strokeWidth={1} />

          <blockquote className="text-3xl lg:text-4xl font-medium text-zinc-200 leading-relaxed mb-8 relative z-10">
            "I need this shirt for a party tonight. If I have to wait 3 days, I'll just order from Zepto or drive there myself."
          </blockquote>

          <div className="text-lg text-zinc-500 mb-16">— Customer Exit Interview</div>

          <motion.div
            className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 flex items-start gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-[#CCFF00]/10 p-3 rounded-lg flex-shrink-0">
              <Lightbulb className="w-8 h-8 text-[#CCFF00]" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#CCFF00] mb-2 uppercase tracking-wide">Insight</div>
              <p className="text-2xl text-white font-medium">
                The problem wasn't the UI. The problem was <span className="text-[#CCFF00]">Latency</span>.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
