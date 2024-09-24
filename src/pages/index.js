import Navbar from '../app/components/Navbar';
import HeroSection from '../app/components/HeroSection';
import Skills from '../app/components/Skills';
import Footer from '../app/components/Footer';
import '../app/globals.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Skills />
      <Footer />
    </div>
  );
}
