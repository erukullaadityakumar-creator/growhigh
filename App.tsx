import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { KeyMetrics } from './KeyMetrics';
import { WhoWeHelp } from './WhoWeHelp';
import { Services } from './Services';
import { Process } from './Process';
import { Results } from './Results';
import { Integrations } from './Integrations';
import { Comparison } from './Comparison';
import { FAQ } from './FAQ';
import { Footer } from './Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-white selection:bg-brand-primary/30 selection:text-white bg-brand-dark overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <KeyMetrics />
        <WhoWeHelp />
        <Services />
        <Process />
        <Results />
        <Integrations />
        <Comparison />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;