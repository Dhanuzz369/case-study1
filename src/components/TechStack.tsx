import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Truck, MapPin, DollarSign } from 'lucide-react';

export default function TechStack() {
  return (
    <section className="min-h-screen bg-black text-white py-32 px-6 lg:px-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-5xl lg:text-7xl font-bold mb-20 text-[#CCFF00]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Under the Hood
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-8 items-center mb-20">
          <motion.div
            className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Code className="w-12 h-12 text-[#CCFF00] mb-4" strokeWidth={1.5} />
            <div className="text-xl font-bold">Next.js</div>
            <div className="text-sm text-zinc-500 mt-2">Frontend</div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <ArrowRight className="w-8 h-8 text-zinc-700" />
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Database className="w-12 h-12 text-[#CCFF00] mb-4" strokeWidth={1.5} />
            <div className="text-xl font-bold">PocketBase</div>
            <div className="text-sm text-zinc-500 mt-2">Backend</div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <ArrowRight className="w-8 h-8 text-zinc-700" />
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Truck className="w-12 h-12 text-[#CCFF00] mb-4" strokeWidth={1.5} />
            <div className="text-xl font-bold">Porter API</div>
            <div className="text-sm text-zinc-500 mt-2">Logistics</div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            className="bg-zinc-950 border border-zinc-800 rounded-2xl p-10 flex items-start gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-[#CCFF00]/10 p-3 rounded-lg flex-shrink-0">
              <MapPin className="w-8 h-8 text-[#CCFF00]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xl text-zinc-300 leading-relaxed">
                Geo-Routing Algorithm calculated via <span className="text-[#CCFF00] font-semibold">Turf.js</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-zinc-950 border border-zinc-800 rounded-2xl p-10 flex items-start gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-[#CCFF00]/10 p-3 rounded-lg flex-shrink-0">
              <DollarSign className="w-8 h-8 text-[#CCFF00]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xl text-zinc-300 leading-relaxed">
                Costs reduced from <span className="line-through text-zinc-600">₹2,000/mo</span> to{' '}
                <span className="text-[#CCFF00] font-semibold">₹400/mo</span>
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <motion.h3
            className="text-4xl font-bold mb-8 text-[#CCFF00]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Challenges & Debugging
          </motion.h3>
          <motion.div
            className="bg-zinc-950 border border-zinc-800 rounded-2xl p-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-zinc-300 leading-relaxed">
              <strong>Handling API Failures:</strong> Porter API would sometimes timeout during peak traffic. To address this, a <span className="text-[#CCFF00] font-semibold">retry mechanism</span> was implemented, along with a fallback to <span className="text-[#CCFF00] font-semibold">Standard Delivery</span> if the API didn’t respond within 3 seconds. This ensured the checkout process never crashed.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
