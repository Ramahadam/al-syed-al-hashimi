import HeadingSection from './HeadingSection';
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { BiSolidQuoteRight } from 'react-icons/bi';
import ResponsiveSlider from './ResponsiveSlider';

const testimonials = [
  {
    id: 1,
    quoteText: `Their expertise and professionalism exceeded my expectations. The team quickly diagnosed and fixed the issue, ensuring everything was running smoothly.`,
    clientName: 'Peter Mark',
    clientImg: 'profile-01.jpg',
  },
  {
    id: 2,
    quoteText: `Exceptional service! The team was professional and efficient. Highly recommend their expertise.`,
    clientName: 'Johnson Smith',
    clientImg: 'profile-02.jpg',
  },
  {
    id: 3,
    quoteText: `They went above and beyond to ensure everything was perfect. Outstanding quality and attention to detail.`,
    clientName: 'Michael Lee',
    clientImg: 'profile-03.jpg',
  },
  {
    id: 4,
    quoteText: `Reliable, fast, and affordable! I will definitely use their services again in the future.`,
    clientName: 'Mario Peter',
    clientImg: 'profile-04.jpg',
  },
];

function Testimonials() {
  return (
    <div className="bg-color-dark-meduim text-color-very-light-gray py-14 px-4  mt-32">
      <HeadingSection className="mb-[5rem] text-color-secondary">
        What client <span className="block">says about us?</span>
      </HeadingSection>

      <div className=" max-w-[85%] mx-auto">
        <ResponsiveSlider isResponsive={true}>
          {testimonials.map((testimonial) => (
            <Testimonial testimonial={testimonial} key={testimonial.id} />
          ))}
        </ResponsiveSlider>
      </div>
    </div>
  );
}

export default Testimonials;

function Testimonial({ testimonial }) {
  return (
    <div className="flex gap-4 px-4 flex-col">
      <BiSolidQuoteLeft />
      <p className="font-light">{testimonial.quoteText}</p>
      <BiSolidQuoteRight />
      <hr className="border-color-gray-custom h-2 my-4" />
      <div className="flex items-center gap-4 mb-4">
        <img
          src={`/${testimonial.clientImg}`}
          alt="customer image"
          className="h-20 w-20 rounded-full"
        />
        <p>{testimonial.clientName}</p>
      </div>
    </div>
  );
}
