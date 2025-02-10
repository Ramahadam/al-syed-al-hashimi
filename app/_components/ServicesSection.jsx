import { FaArrowCircleRight } from 'react-icons/fa';
import HeadingSection from './HeadingSection';
import Card from './Card';

const services = [
  {
    price: '25 AED',
    title: 'AC Installation & Repair',
    tags: ['AC Fix', 'Maintenance'],
    src: 'engineer.jpg',
    alt: 'ac-installation-repair',
  },
  {
    price: '30 AED',
    title: 'Plumbing Services',
    tags: ['Leaks', 'Pipes', 'Drains'],
    src: 'man-fixing-small.jpg',
    alt: 'plumbing-services',
  },
  {
    price: '35 AED',
    title: 'Electrical Maintenance',
    tags: ['Wiring', 'Fuse Box', 'Lighting'],
    src: 'technician-small.jpg',
    alt: 'electrical-maintenance',
  },

  {
    price: '40 AED',
    title: 'Emergency Repair',
    tags: ['24/7', 'Quick Fix', 'Urgent'],
    src: 'technician-emergency.jpg',
    alt: 'emergency-repair-services',
  },
];

function ServicesSection() {
  /**
   * TODO: Consider removing the padding (p-8) from the services-section div
   * if it causes layout issues or is no longer needed.
   */
  return (
    <div className="services-section p-8">
      <div className="mb-10 flex flex-col gap-4">
        <HeadingSection className="capitalize text-balance mb-4 text-h4">
          discover most popular
          <span className="relative  after:absolute after:bg-color-accent after:top-0 after:bottom-0 after:right-0 after:left-0 after:-skew-y-2 after:z-0 px-4 py-1">
            <span className="relative z-50 ">services</span>
          </span>
        </HeadingSection>
        <p className="leading-9">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online
        </p>
      </div>

      <div className=" grid gap-12 mt-14">
        {services.map((service) => (
          <Card sectionContent={service} key={service.title} />
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
