import Header from './components/Header';
import Hero from './components/Hero';
import SEOProjects from './components/SEOProjects';
import Expertise from './components/Expertise';
import SocialMediaProjects from './components/SocialMediaProjects';
import Tools from './components/Tools';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Expertise />
      <SEOProjects />
      <SocialMediaProjects />
      <Tools />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
