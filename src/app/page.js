import LandingPage from './LandingPage/landingPage';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';

export default function Home() {
  return (
    <main className="bg-body-tertiary">
      <Navbar />
      <LandingPage />
      <Footer />
    </main>
  );
}
