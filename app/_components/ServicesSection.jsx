import { FaArrowCircleRight } from 'react-icons/fa';
import { GrCompliance } from 'react-icons/gr';
import { MdOutlineDraw } from 'react-icons/md';
import { LiaUsersSolid } from 'react-icons/lia';
import { FaRegChartBar } from 'react-icons/fa';
import { LiaCertificateSolid } from 'react-icons/lia';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { LiaHeadsetSolid } from 'react-icons/lia';

import HeadingSection from './HeadingSection';
import Card from './Card';
import Counter from './Counter';

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
    <>
      <PopularServices />
      <ServiceStats />
      <ServiceHighlights />
    </>
  );
}

export default ServicesSection;

function ServiceStats() {
  return (
    <div className="bg-color-very-light-gray">
      <div className="grid grid-cols-2 gap-y-20 p-[2rem] bg-[url(/service-bg.jpg)] bg-fixed ">
        <StatsCounter
          title="Project completed"
          end={467}
          duration={2}
          icon={<GrCompliance className=" text-color-accent w-10 h-10" />}
        />
        <StatsCounter
          title="Project design"
          end={202}
          duration={2}
          icon={<MdOutlineDraw className=" text-color-accent w-12 h-12" />}
        />
        <StatsCounter
          title="happy clients"
          end={400}
          duration={2}
          icon={<LiaUsersSolid className=" text-color-accent w-12 h-12" />}
        />
        <StatsCounter
          title="project service"
          end={480}
          duration={2}
          icon={<FaRegChartBar className=" text-color-accent w-12 h-12" />}
        />
      </div>
    </div>
  );
}

function StatsCounter({ title, end, duration, icon }) {
  return (
    <div className="group flex flex-col items-center gap-4">
      <span className="bg-color-light-gray p-2 rounded-sm">{icon}</span>
      <p>{title}</p>
      <span>
        <Counter
          end={end}
          duration={duration}
          className="text-h5 font-bold tracking-tighter"
        />
      </span>
    </div>
  );
}

function PopularServices() {
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

function ServiceHighlights() {
  return (
    <div className="grid gap-y-12">
      <div className="shadow-sm bg-color-very-light-gray text-center w-[30rem] h-[30rem] mx-auto relative">
        <div className="header relative bg-yellow-200">
          <img
            src="/technician-small.jpg"
            alt="technician-small"
            className="h-[21rem] w-full  object-cover brightness-75 "
          />
        </div>

        {/* Centering the icon */}
        <span className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-28 w-28 bg-white shadow-sm flex items-center justify-center">
          <LiaCertificateSolid className="bg-color-very-light-gray h-16 w-16" />
        </span>

        <p className="text-p-md tracking-tighter mt-20">Professional Team</p>
      </div>
      <div className="shadow-sm bg-color-very-light-gray text-center w-[30rem] h-[30rem] mx-auto relative">
        <div className="header relative bg-yellow-200">
          <img
            src="/engineer.jpg"
            alt="technician-small"
            className="h-[21rem] w-full brightness-75 object-cover grayscale-25 "
          />
        </div>

        {/* Centering the icon */}
        <span className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-28 w-28 bg-white shadow-sm flex items-center justify-center">
          <AiFillSafetyCertificate className="bg-color-very-light-gray h-16 w-16" />
        </span>

        <p className="text-p-md tracking-tighter mt-20">High Quality Work</p>
      </div>
      <div className="shadow-sm bg-color-very-light-gray text-center w-[30rem] h-[30rem] mx-auto relative">
        <div className="header relative bg-yellow-200">
          <img
            src="/customer-service.jpg"
            alt="technician-small"
            className="h-[21rem] w-full brightness-75 object-cover grayscale-25 "
          />
        </div>

        {/* Centering the icon */}
        <span className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-28 w-28 bg-white shadow-sm flex items-center justify-center">
          <LiaHeadsetSolid className="bg-color-very-light-gray h-16 w-16" />
        </span>

        <p className="text-p-md tracking-tighter mt-20">
          24 &times; 7 Services
        </p>
      </div>
    </div>
  );
}
