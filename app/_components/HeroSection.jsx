import Button from './Button';
import HeroSlider from './HeroSlider';

const heroContent = [
  {
    id: 1,
    headingText: 'Reliable AC, Plumbing & Electrical Services',
    paraText:
      'Expert solutions for your home needs, ensuring comfort and safety.',
    btnText: 'Book Now',
    imgSrc: '/aclarge.jpg',
    imgAltTxt: 'Image for AC',
  },
  {
    id: 2,
    headingText: 'Your Trusted Home Service Experts',
    paraText:
      'Efficient repairs and installations for AC, plumbing, and electrical systems.',
    btnText: 'Book Now',
    imgSrc: '/hero.jpg',
    imgAltTxt: 'Image for technicans',
  },
  {
    id: 3,
    headingText: 'Fast & Reliable Services',
    paraText:
      'Quick, affordable solutions for any home issue, right at your doorstep.',
    btnText: 'Book Now',
    imgSrc: '/plumbing-large.jpg',
    imgAltTxt: 'Image for plumber',
  },
];

function HeroSection() {
  return (
    <HeroSlider>
      <Hero heroContent={heroContent[0]} />
      <Hero heroContent={heroContent[1]} />
      <Hero heroContent={heroContent[2]} />
    </HeroSlider>
  );
}

export default HeroSection;

function Hero({ heroContent }) {
  console.log(heroContent.imgSrc);
  return (
    <div className="relative">
      <img
        src={heroContent.imgSrc}
        alt={heroContent.imgAltTxt}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-color-primary bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative flex min-h-[75vh] sm:min-h-[85vh] md:h-[100svh] flex-col items-center justify-center text-center px-4 py-6">
        <h1 className="text-white text-h2  font-semibold leading-tight max-w-2xl mb-4">
          {heroContent.headingText}
        </h1>
        <p className="text-white text-p-sm max-w-xl mb-6">
          {heroContent.paraText}
        </p>
        <Button
          variation="secondary"
          size="sm"
          className="!text-color-primary bg-color-accent rounded-[1rem] font-medium"
        >
          {heroContent.btnText}
        </Button>
      </div>
    </div>
  );
}
