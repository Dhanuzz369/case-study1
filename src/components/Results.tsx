import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign } from 'lucide-react';

export default function Results() {
  const metrics = [
    {
      value: '60%',
      label: 'Express Adoption Rate',
      icon: TrendingUp,
      color: 'from-[#CCFF00] to-lime-500',
    },
    {
      value: '<45s',
      label: 'Time-to-List',
      icon: Clock,
      color: 'from-cyan-400 to-blue-500',
    },
    {
      value: '18%',
      label: 'AOV Increase',
      icon: DollarSign,
      color: 'from-purple-400 to-pink-500',
    },
  ];

  return (
    <section className="min-h-screen bg-zinc-950 text-white py-32 px-6 lg:px-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-5xl lg:text-7xl font-bold mb-20 text-center text-[#CCFF00]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Validating the Pivot
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <motion.div
                key={index}
                className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-12 overflow-hidden group hover:border-zinc-700 transition-colors"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>

                <div className="relative z-10">
                  <div className={`inline-block p-4 bg-gradient-to-br ${metric.color} rounded-2xl mb-6`}>
                    <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>

                  <motion.div
                    className={`text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-br ${metric.color} bg-clip-text text-transparent`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.3, type: 'spring', bounce: 0.4 }}
                  >
                    {metric.value}
                  </motion.div>

                  <div className="text-xl text-zinc-400 font-medium">{metric.label}</div>
                </div>

                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${metric.color} opacity-20 blur-3xl rounded-full`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
