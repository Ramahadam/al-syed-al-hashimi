import StructuredSection from '../_components/StructuredSection';
import { FaBolt } from 'react-icons/fa';

const electricalServicesData = {
  banner: {
    image: 'technician-small.jpg',
    header: 'Electrical Installation &',
  },
  stepsImage: ['inspection.jpg', 'wiring-repair.jpg'],
  stepsHeadingText: 'Safe & Reliable Electrical Solutions',

  iconStep: FaBolt,
  stepsData: [
    {
      title: 'Step 1: Inspection & Assessment',
      description:
        'Our certified electricians assess your electrical system to ensure safety and compliance.',
      image: '/inspection.jpg',
    },
    {
      title: 'Step 2: Wiring & Repairs',
      description:
        'We repair faulty wiring, install new outlets, and ensure a safe power supply.',
      image: '/wiring-repair.jpg',
    },
    {
      title: 'Step 3: Testing & Certification',
      description:
        'We run comprehensive tests to verify efficiency and provide safety certification.',
      image: '/testing.jpg',
    },
  ],
  quote: {
    text: 'A safe home starts with reliable electrical work.',
    author: 'Certified Electricians Team',
  },
};

export default function Page() {
  return (
    <div>
      <StructuredSection pageContent={electricalServicesData} />
    </div>
  );
}
