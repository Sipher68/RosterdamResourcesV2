import Intro from '../../../components/Intro/intro';
import FAQ from '../../../components/FAQ/faq';
import ContactUs from '../../../components/ContactUs/contactUs';
import Location from '../../../components/Location/location';

export default function LandingPage() {
  return (
    <div>
      <Intro />
      <FAQ />
      {/* <ContactUs /> */}
      <Location />
    </div>
  );
}
