import Hero from './components/Hero';
import Situation from './components/Situation';
import Discovery from './components/Discovery';
import Strategy from './components/Strategy';
import Solution from './components/Solution';
import TechStack from './components/TechStack';
import Results from './components/Results';
import Stakeholders from './components/Stakeholders';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-zinc-950">
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
