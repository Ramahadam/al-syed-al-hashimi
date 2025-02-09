import Slider from './HeroSlider';
import HeadingSection from './HeadingSection';

function Testimonials() {
  /**
   * I want to create slider in React js :
   * The sliders content are cards with text inside the card and author below the card
   * The silder shows 3 slides current in the middle and half of both sliders from right and left.
   * The slider has left arrow and right arrow and in the middle dots of number of slidest for navigation
   */
  return (
    <div>
      <HeadingSection
        headingText="Testimonials"
        paragraphText="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />
      <div className="slider bg-gray-dark py-lg">
        <Slider />
      </div>
    </div>
  );
}

export default Testimonials;
