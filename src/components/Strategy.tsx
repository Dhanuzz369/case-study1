import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

export default function Strategy() {
  const tableData = [
    {
      feature: 'Porter Express Integration',
      reach: 'High',
      impact: 'Massive',
      effort: 'Low',
      score: 95,
      status: 'winner',
      icon: CheckCircle,
    },
    {
      feature: 'VR Try-On',
      reach: 'Low',
      impact: 'Med',
      effort: 'High',
      score: 20,
      status: 'kill',
      icon: XCircle,
    },
    {
      feature: 'Loyalty Points',
      reach: 'Med',
      impact: 'Low',
      effort: 'Med',
      score: 45,
      status: 'later',
      icon: Clock,
    },
  ];

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
          Prioritizing Impact over Features
        </motion.h2>

        <motion.p
          className="text-2xl text-zinc-400 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I used the RICE framework to filter distractions.
        </motion.p>

        <div className="overflow-x-auto">
          <motion.div
            className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden min-w-max"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-6 gap-4 bg-zinc-900 p-6 text-sm font-semibold text-zinc-400 uppercase tracking-wider">
              <div className="col-span-1">Feature</div>
              <div className="text-center">Reach</div>
              <div className="text-center">Impact</div>
              <div className="text-center">Effort</div>
              <div className="text-center">Score</div>
              <div className="text-center">Status</div>
            </div>

            {tableData.map((row, index) => {
              const Icon = row.icon;
              const statusColors = {
                winner: 'bg-[#CCFF00]/10 text-[#CCFF00] border-[#CCFF00]/30',
                kill: 'bg-red-950/50 text-red-400 border-red-900/50',
                later: 'bg-yellow-950/50 text-yellow-400 border-yellow-900/50',
              };

              const statusLabels = {
                winner: '✅ WINNER',
                kill: '❌ KILL',
                later: '⏳ LATER',
              };

              return (
                <motion.div
                  key={index}
                  className={`grid grid-cols-6 gap-4 p-6 border-t border-zinc-800 items-center ${
                    row.status === 'winner' ? 'bg-[#CCFF00]/5' : ''
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="col-span-1 text-lg font-medium text-white">{row.feature}</div>
                  <div className="text-center text-zinc-400">{row.reach}</div>
                  <div className="text-center text-zinc-400">{row.impact}</div>
                  <div className="text-center text-zinc-400">{row.effort}</div>
                  <div
                    className={`text-center text-2xl font-bold ${
                      row.status === 'winner' ? 'text-[#CCFF00]' : 'text-zinc-500'
                    }`}
                  >
                    {row.score}
                  </div>
                  <div className="flex justify-center">
                    <div
                      className={`px-4 py-2 rounded-full text-sm font-semibold border flex items-center gap-2 ${
                        statusColors[row.status as keyof typeof statusColors]
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {statusLabels[row.status as keyof typeof statusLabels]}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
