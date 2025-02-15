import StructuredSection from '../_components/StructuredSection';
import { FaWrench } from 'react-icons/fa';

const plumbingServicesData = {
  banner: {
    image: 'man-heater-fixing-small.jpg',
    header: 'Plumbing Installation &',
  },
  stepsImage: ['plumber-fixing.jpg', 'plumber-fixing.jpg'],
  stepsHeadingText: 'Reliable Plumbing Solutions for Your Home & Business',

  iconStep: FaWrench,
  stepsData: [
    {
      title: 'Step 1: Inspection & Diagnosis',
      description:
        'Our expert plumbers inspect your plumbing system to identify leaks, blockages, or inefficiencies.',
      image: '/pipe-inspection.jpg',
    },
    {
      title: 'Step 2: Repair & Replacement',
      description:
        'We repair leaks, replace damaged pipes, and fix any plumbing issues to restore functionality.',
      image: '/leak-repair.jpg',
    },
    {
      title: 'Step 3: Testing & Maintenance',
      description:
        'After repairs, we test the system for leaks and ensure long-term reliability with maintenance tips.',
      image: '/testing-plumbing.jpg',
    },
  ],
  quote: {
    text: 'A well-maintained plumbing system saves water and prevents costly damage.',
    author: 'Professional Plumbing Team',
  },
};

export default function Page() {
  return (
    <div>
      <StructuredSection pageContent={plumbingServicesData} />
    </div>
  );
}
