import Button from './Button';
import HeadingSection from './HeadingSection';

function CallToAction() {
  return (
    <div className="bg-color-primary-linear p-10 md:grid md:grid-cols-2 md:justify-center md:items-center ">
      <div className="mb-16">
        <HeadingSection>
          Keeping Things Running Smoothly—Get in Touch!
        </HeadingSection>
        <p className="text-color-primary leading-8 mt-8">
          Fast, reliable maintenance solutions at your fingertips. Contact us
          today and let’s get the job done!
        </p>
      </div>
      <div className="hidden md:block ">
        <img src="/engineer-transparent.png" alt="cta" className="h-[40rem]" />
      </div>
    </div>
  );
}

export default CallToAction;
