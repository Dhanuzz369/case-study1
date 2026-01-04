import Hero from './components/Hero';
import Situation from './components/Situation';
import Discovery from './components/Discovery';
import Strategy from './components/Strategy';
import Solution from './components/Solution';
import TechStack from './components/TechStack';
import Results from './components/Results';
import Stakeholders from './components/Stakeholders';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header className="bg-zinc-900 text-white py-4 px-6 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">Dhanush Mani</div>
        <a
          href="https://www.linkedin.com/in/dhanush369/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.59c-1.14 0-2.06-.93-2.06-2.07 0-1.14.92-2.07 2.06-2.07 1.14 0 2.06.93 2.06 2.07 0 1.14-.92 2.07-2.06 2.07zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7h-3.56V9h3.42v1.56h.05c.48-.91 1.66-1.87 3.42-1.87 3.66 0 4.34 2.41 4.34 5.54v6.22z" />
          </svg>
        </a>
      </div>
    </header>
  );
}

function App() {
  return (
    <div className="bg-zinc-950">
      <Header />
      <Hero />
      <Situation />
      <Discovery />
      <Strategy />
      <Solution />
      <TechStack />
      <Results />
      <Stakeholders />
      <Footer />
    </div>
  );
}

export default App;
