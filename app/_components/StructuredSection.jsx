import HeadingSection from './HeadingSection';

function StructuredSection({ pageContent }) {
  const { stepsImage, stepsHeadingText, banner, stepsData, iconStep } =
    pageContent;

  return (
    <>
      <div className="relative min-h-[50vh]">
        <img src={`/${banner.image}`} alt="hero image" className="max-h-full" />

        <div className="absolute inset-0 bg-color-primary bg-opacity-70"></div>

        <div className="absolute bottom-10 right-[40%] max-w-fit rounded-md  bg-color-very-light-gray bg-opacity-50  px-4 py-6">
          <HeadingSection className="capitalize text-balance mb-4 text-h4  ">
            {banner.header}
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
            src={`/${stepsImage[0]}`}
            alt="engineer repairing"
            className="h-72 w-72 object-cover border-4 border-color-very-light-gray relative"
          />
          <img
            src={`/${stepsImage[1]}`}
            alt="engineer repairing"
            className=" border-4 border-color-very-light-gray object-cover  h-60 w-60 relative -top-20 -left-20"
          />
        </div>
        <div>
          <p className="text-color-accent">How it works</p>
          <h3 className="text-h5 text-balance font-medium tracking-tighter">
            {stepsHeadingText}
          </h3>
          <HowItWorks
            pageContent={pageContent}
            steps={stepsData}
            iconStep={iconStep}
          />
        </div>
      </div>
    </>
  );
}

export default StructuredSection;

const HowItWorks = ({ pageContent }) => {
  const { stepsData: steps, iconStep: IconStep, quote } = pageContent;
  console.log(pageContent);
  // const IconStep = iconStep;

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {steps?.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 mb-12 `}
          >
            {/* Step Text */}
            <div className="md:w-1/2 flex items-start  gap-x-8">
              <div className="bg-color-accent  h-28 w-28 flex-shrink-0 flex items-center justify-center">
                <IconStep className="h-16 w-16" />
              </div>
              <div className="-mt-2">
                <h4 className=" font-medium mb-2 tracking-tighter ">
                  {step.title}
                </h4>
                <p className="tracking-tighter leading-10 opacity-75">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative container italic mx-auto bg-color-very-light-gray p-10">
        <p className="opacity-85">&quot; {quote.text} &quot;</p>
        <p className="text-p-xs mt-4">{quote.author}</p>
        <span className="absolute h-24 w-2 bg-color-accent top-1/2 left-0 -translate-y-1/2"></span>
      </div>
    </section>
  );
};
