import HeadingSection from './HeadingSection';
import { GoLightBulb } from 'react-icons/go';
import { FaRegHandshake } from 'react-icons/fa';
import { LiaCertificateSolid } from 'react-icons/lia';
import { MdOutlineBuildCircle } from 'react-icons/md';

function WhyChooseUs() {
  return (
    <div className="bg-very-light-color-gray-custom  my-32">
      <div className="md:border-x-[1px] md:border-t-[1px] border-dark-color-gray-custom text-center mb-8">
        <HeadingSection>
          Why <span className="block">choose us?</span>
        </HeadingSection>
      </div>
      <div className="md:border-[1px]  border-dark-color-gray-custom">
        <div className="grid text-center  grid-cols-2 ">
          <CardImage icon={<GoLightBulb />} title="Expert & Experienced " />
          <CardImage icon={<FaRegHandshake />} title="Committed & Trusted " />
          <CardImage
            icon={<LiaCertificateSolid />}
            title="Certified & Reliable"
          />
          <CardImage icon={<MdOutlineBuildCircle />} title="Fast & Efficient" />
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;

function CardImage({ icon, title }) {
  return (
    <div className="p-4 flex items-center justify-center flex-col">
      <span className="text-h3 mb-4 text-color-secondary-dark">{icon}</span>
      <p className="leading-8">{title}</p>
    </div>
  );
}
