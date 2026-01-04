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
            {/* Removed View Live Prototype and View GitHub buttons */}
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
            <div className="text-center space-y-4 mt-8">
              <p className="text-lg text-zinc-400">Designed and Developed by Dhanush Mani</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/Dhanuzz369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition"
                >
                  View GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/dhanush369/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:dhanuzh369@gmail.com"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition"
                >
                  Email Me
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
