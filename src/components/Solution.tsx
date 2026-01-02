import { motion } from 'framer-motion';
import { Zap, Shield, Sparkles, Image as ImageIcon } from 'lucide-react';

export default function Solution() {
  const features = [
    {
      title: 'Hybrid Logistics',
      description:
        'I built a split-delivery logic. "Express" (2-Hour) costs ₹150 and routes via Porter. "Standard" is free > ₹599. This monetizes urgency.',
      icon: Zap,
      color: 'from-[#CCFF00] to-lime-500',
      imageLabel: 'Split Delivery UI',
    },
    {
      title: 'Trust Engineering',
      description:
        'Users pay +₹50 for "Return Insurance". This creates a self-funded pool for reverse logistics.',
      icon: Shield,
      color: 'from-cyan-400 to-blue-500',
      imageLabel: 'Pricing Toggle UI',
    },
    {
      title: '3-Tap Admin',
      description:
        'Staff hated the old backend. I built a tool: Snap Photo -> Price -> Live. Reduced listing time to <45s.',
      icon: Sparkles,
      color: 'from-purple-400 to-pink-500',
      imageLabel: 'Admin Flow UI',
    },
  ];

  return (
    <section className="min-h-screen bg-zinc-950 text-white py-32 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl lg:text-7xl font-bold mb-20 text-[#CCFF00]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The "RetailOS" Engine
        </motion.h2>

        <div className="space-y-32">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isReverse = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${isReverse ? 'lg:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className={`space-y-6 ${isReverse ? 'lg:order-2' : ''}`}>
                  <div className={`inline-block p-4 bg-gradient-to-br ${feature.color} rounded-2xl`}>
                    <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>

                  <h3 className="text-4xl lg:text-5xl font-bold text-white">{feature.title}</h3>

                  <p className="text-xl text-zinc-400 leading-relaxed">{feature.description}</p>
                </div>

                <motion.div
                  className={`relative ${isReverse ? 'lg:order-1' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 overflow-hidden">
                    <div className="bg-zinc-950 rounded-2xl h-80 flex flex-col items-center justify-center relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5`}></div>
                      <ImageIcon className={`w-20 h-20 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent mb-4`} strokeWidth={1} />
                      <div className="text-zinc-600 text-lg font-medium">{feature.imageLabel}</div>
                    </div>
                  </div>
                  <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${feature.color} opacity-20 blur-3xl`}></div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
