import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-32 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-6xl lg:text-8xl font-bold mb-12 bg-gradient-to-r from-white via-[#CCFF00] to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Product is Logistics.
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.button
              className="px-8 py-4 bg-[#CCFF00] text-black font-bold rounded-full text-lg flex items-center gap-3 hover:bg-[#b8e600] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
              View Live Prototype
            </motion.button>

            <motion.button
              className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold rounded-full text-lg flex items-center gap-3 hover:bg-zinc-800 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              View GitHub
            </motion.button>
          </motion.div>

          <motion.div
            className="border-t border-zinc-800 pt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-zinc-600 text-sm">
              © 2026 RetailOS Case Study. Built with Next.js, PocketBase, and Porter API.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
