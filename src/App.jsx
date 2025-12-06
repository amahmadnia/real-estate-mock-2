import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Amenities from './components/Amenities/Amenities';
import FloorPlans from './components/FloorPlans/FloorPlans';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Amenities />
        <FloorPlans />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
