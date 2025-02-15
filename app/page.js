import CallToAction from './_components/CallToAction';
import ContactUs from './_components/ContactUs';
import HeroSection from './_components/HeroSection';
import ServicesSection from './_components/ServicesSection';
import Testimonials from './_components/Testimonials';
import WhyChooseUs from './_components/WhyChooseUs';

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <WhyChooseUs />
      <Testimonials />
      <ServicesSection />
      <CallToAction />
      <ContactUs />
    </div>
  );
}
