import Image from 'next/image';
import HeadingSection from '../_components/HeadingSection';
import ExpandableText from '../_components/ExpandableText';
import TeamSection from '../_components/TeamSection';

const aboutUsText = `      About Us At [Your Company Name], we are committed to providing
            top-notch AC, plumbing, and electrical maintenance services across
            Dubai. With a team of certified professionals and years of industry
            experience, we ensure your home and business stay safe, efficient,
            and comfortable. Whether it's AC repair, leak fixes, or electrical
            troubleshooting, we deliver fast, reliable, and high-quality
            solutions tailored to your needs. We take pride in our
            customer-first approach, ensuring transparency, affordability, and
            unmatched service excellence. Your comfort and safety are our
            priority.`;

export default function Page() {
  return (
    <div>
      <div className="relative text-color-gray-custom ">
        <Image
          src="/image-group.png"
          width="400"
          height="400"
          alt="group of people"
        />
        <div className="bg-fixed max-w-fit rounded-md  bg-color-very-light-gray bg-opacity-50  px-4 py-6">
          <HeadingSection className="capitalize text-balance  text-h5  text-color-dark-meduim mb-8">
            About Us
          </HeadingSection>
          <ExpandableText text={aboutUsText} />
        </div>
      </div>

      <div className="mt-52 bg-color-accent bg-opacity-10 py-10 px-4">
        <h3 className="text-h3 tracking-tighter">
          Meet our <span className="block mb-12 leading-8">dedicated team</span>
        </h3>
        <TeamSection />
      </div>
    </div>
  );
}
