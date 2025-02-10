import Button from './Button';
import HeadingSection from './HeadingSection';

function CallToAction() {
  return (
    <div className="bg-color-primary-linear ">
      <div className="mb-16">
        <HeadingSection>
          Keeping Things Running Smoothly—Get in Touch!
        </HeadingSection>
        <p className="text-color-primary leading-8 mt-8">
          Fast, reliable maintenance solutions at your fingertips. Contact us
          today and let’s get the job done!
        </p>
      </div>
      <div className="hidden sm:block">
        <img src="/cta.jpg" alt="cta" className="  brightness-75" />
      </div>
    </div>
  );
}

export default CallToAction;
