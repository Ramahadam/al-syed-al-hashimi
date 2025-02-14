import StructuredSection from '../_components/StructuredSection';
import { FaRegSnowflake } from 'react-icons/fa';

const acMaintenanceData = {
  banner: {
    image: 'man-fixing-ac.jpg',
    header: 'AC Air Conditioning Maintenance &',
  },
  stepsImage: ['cta.jpg', 'man-fixing-ac.jpg'],
  stepsHeadingText: '  Air conidtioning maintenance & installation process',

  iconStep: FaRegSnowflake,
  stepsData: [
    {
      title: 'Step 1: Inspection & Diagnosis',
      description:
        'Our experts thoroughly inspect your AC unit to identify any issues.',
      image: '/cta.jpg',
    },
    {
      title: 'Step 2: Cleaning & Maintenance',
      description:
        'We clean filters, coils, and other components to ensure efficiency.',
      image: '/man-fixing-ac.jpg',
    },
    {
      title: 'Step 3: Repair & Testing',
      description:
        'Our technicians fix any problems and run tests to ensure everything is working properly.',
      image: '/repair.jpg',
    },
  ],
  quote: {
    text: 'Quality maintenance leads to long-lasting comfort',
    author: 'AC Expert Team',
  },
};

export default function Page() {
  return (
    <div>
      <StructuredSection pageContent={acMaintenanceData} />
    </div>
  );
}
