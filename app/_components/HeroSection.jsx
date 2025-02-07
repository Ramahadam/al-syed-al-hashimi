import Button from "./Button";
function HeroSection() {
  return (
    <div className="hero-content flex flex-col items-center text-center">
      <div className="hero-text p-md">
        <h1 className="mx-auto mb-2 w-[35rem] text-heading2 tablet:max-w-[53.1rem] tablet:text-heading1">
          Navigating the digital landscape for success
        </h1>
        <p className="mb-8 text-paragraphMedium">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button variation="primary" size="large">
          Book a consultation
        </Button>
      </div>

      <div className="hero-image w-full">
        <img src="./icons/hero-image-speaker.svg" />
      </div>
    </div>
  );
}

export default HeroSection;
