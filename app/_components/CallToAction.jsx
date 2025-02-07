import Button from './Button';

function CallToAction() {
  return (
    <div className="callToAction flex flex-col bg-gray-light p-md tablet:h-[34.7rem] tablet:flex-row">
      <div className="mb-16 text-center">
        <h2 className="mb-5 text-balance text-heading3">
          Let’s make things happen
        </h2>
        <p className="mb-8 text-balance text-paragraphSmall">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <Button variation="primary" size="large" className="text-2xl">
          Get your free proposal
        </Button>
      </div>
      <div>
        {/* <img
          className="flex w-full items-center justify-center"
          src="./images/proposal-image.png"
          alt="illustration showing stars, emoji and circles"
        /> */}
      </div>
    </div>
  );
}

export default CallToAction;
