import { motion } from 'framer-motion';
import { Store, Truck, Users } from 'lucide-react';

export default function Stakeholders() {
  const stakeholders = [
    {
      title: 'Shop Owner',
      description: 'Solved operational fear',
      icon: Store,
      color: 'from-[#CCFF00] to-lime-500',
    },
    {
      title: 'Porter Ops',
      description: 'API Integration',
      icon: Truck,
      color: 'from-cyan-400 to-blue-500',
    },
    {
      title: 'Gen-Z Users',
      description: 'Solved trust gap',
      icon: Users,
      color: 'from-purple-400 to-pink-500',
    },
  ];

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
          Collaboration
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {stakeholders.map((stakeholder, index) => {
            const Icon = stakeholder.icon;

            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-10 hover:border-zinc-700 transition-colors"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={`inline-block p-5 bg-gradient-to-br ${stakeholder.color} rounded-2xl mb-6`}>
                  <Icon className="w-12 h-12 text-white" strokeWidth={2} />
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">{stakeholder.title}</h3>

                <p className="text-lg text-zinc-400">{stakeholder.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
