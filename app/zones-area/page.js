import Image from 'next/image';
import HeadingSection from '../_components/HeadingSection';

const zonesContent = {
  image: 'zones-area.png',
  header: 'Electrical Installation & Repair Services',

  stepsImage: ['inspection.jpg', 'wiring-repair.jpg'],
  stepsHeadingText: 'Safe & Reliable Electrical Solutions',

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
    <>
      <div className="relative max-h-[30vh]">
        <div className="relative w-full h-64">
          <Image
            src={`/${zonesContent.image}`}
            alt="hero image"
            className="object-cover"
            fill
          />
        </div>

        <div className="absolute inset-0 bg-color-accent bg-opacity-50"></div>

        <div className="absolute bottom-0  max-w-fit rounded-md  bg-color-very-light-gray bg-opacity-50  px-4 py-6">
          <HeadingSection className="capitalize text-balance  text-h4  ">
            Service Areas
          </HeadingSection>
          <p>Zones - We serve across UAE</p>
        </div>
      </div>

      <div>
        <p>Service Areas and zones</p>

        <div>
          <div className="zone-card">
            <div>
              <Image src="/burg-arab.png" alt="burg al arab tower" />
            </div>
            <div>
              <p>Zone 1</p>

              <ul>
                <li>All villa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
