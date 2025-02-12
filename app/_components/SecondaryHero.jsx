import HeadingSection from './HeadingSection';

const stepsData = [
  {
    title: 'Step 1: Inspection & Diagnosis',
    description:
      'Our experts thoroughly inspect your AC unit to identify any issues.',
    image: '/inspection.jpg',
  },
  {
    title: 'Step 2: Cleaning & Maintenance',
    description:
      'We clean filters, coils, and other components to ensure efficiency.',
    image: '/cleaning.jpg',
  },
  {
    title: 'Step 3: Repair & Testing',
    description:
      'Our technicians fix any problems and run tests to ensure everything is working properly.',
    image: '/repair.jpg',
  },
];

function SecondaryHero() {
  return (
    <>
      <div className="relative min-h-[50vh]">
        <img
          src="/man-fixing-ac.jpg"
          alt="hero image"
          // src={heroContent.imgSrc}
          // alt={heroContent.imgAltTxt}
          className="max-h-full"
        />

        <div className="absolute inset-0 bg-color-primary bg-opacity-70"></div>

        <div className="absolute bottom-10 right-[40%] max-w-fit rounded-md  bg-color-very-light-gray bg-opacity-50  px-4 py-6">
          <HeadingSection className="capitalize text-balance mb-4 text-h4  ">
            AC aircondition Maintenance &
            <span className="relative  after:absolute after:bg-color-accent after:top-0 after:bottom-0 after:right-0 after:left-0 after:-skew-y-2 after:z-0 px-4 py-1">
              <span className="relative z-50 "> Repair</span>
            </span>
          </HeadingSection>
        </div>
      </div>
      {/**********************Section divider************************** */}
      <div className="flex flex-col mt-36">
        <div className="text-center mx-auto">
          <img
            src="/cta.jpg"
            alt="engineer repairing"
            className="h-72 border-4 border-color-very-light-gray relative"
          />
          <img
            src="/man-fixing-ac.jpg"
            alt="engineer repairing"
            className=" border-4 border-color-very-light-gray  h-60 relative -top-20 -left-20"
          />
        </div>
        <div>
          <p className="text-color-accent">How it works</p>
          <h3 className="text-h5 text-balance font-medium tracking-tighter">
            Air conidtioning maintenance & installation process
          </h3>
          <HowItWorks steps={stepsData} />
        </div>
      </div>
    </>
  );
}

export default SecondaryHero;

const HowItWorks = ({ steps }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 mb-12 `}
          >
            {/* Step Text */}
            <div className="md:w-1/2">
              <h4 className=" font-medium mb-2 tracking-tighter">
                {step.title}
              </h4>
              <p className="tracking-tighter leading-10 opacity-75">
                {step.description}
              </p>
            </div>

            {/* Step Image */}
          </div>
        ))}
      </div>
    </section>
  );
};
