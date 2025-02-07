import { FaArrowCircleRight } from "react-icons/fa";

const services = [
  {
    title: "Search engine, optimization",
    cardBackground: "bg-gray-light ",
    cardHeadingBackground: "bg-secondary",
    src: "./images/globe-magnifier-happy-emoji@3x.png",
    alt: "globe-magnifier-happy-emoji",
    srcSet:
      "./images/globe-magnifier-happy-emoji@1x.png 1x, ./images/globe-magnifier-happy-emoji@2x.png 2x, ./images/globe-magnifier-happy-emoji@3x.png 3x",
  },
  {
    title: "Pay-per-click, advertising",
    cardBackground: "bg-secondary ",
    cardHeadingBackground: "bg-gray-light ",
    src: "./images/Pay-per-click@3x.png",
    alt: "Pay-per-click",
    srcSet:
      "./images/Pay-per-click@1x.png 1x, ./images/Pay-per-click@2x.png 2x, ./images/Pay-per-click@3x.png 3x",
  },
  {
    title: "Social Media, Marketing",
    cardBackground: "bg-gray-dark",
    cardHeadingBackground: "bg-gray-light ",
    src: "./images/social-media-marketing@3x.png",
    alt: "social-media-marketing",
    srcSet:
      "./images/social-media-marketing@1x.png 1x, ./images/social-media-marketing@2x.png 2x, ./images/social-media-marketing@3x.png 3x",
  },
  {
    title: "Email, Marketing",
    cardBackground: "bg-gray-light ",
    cardHeadingBackground: "bg-secondary",
    src: "./images/email-marketing@3x.png",
    alt: "email-marketing",
    srcSet:
      "./images/email-marketing@1x.png 1x, ./images/email-marketing@2x.png 2x, ./images/email-marketing@3x.png 3x",
  },
  {
    title: "Content, Creation",
    cardBackground: "bg-secondary ",
    cardHeadingBackground: "bg-gray-light ",
    src: "./images/content-creation@3x.png",
    alt: "content-creation",
    srcSet:
      "./images/content-creation@1x.png 1x, ./images/content-creation@2x.png 2x, ./images/content-creation@3x.png 3x",
  },
  {
    title: "Analytics and , Tracking",
    cardBackground: "bg-gray-dark",
    cardHeadingBackground: "bg-gray-light ",
    src: "./images/analytics-tracking@3x.png",
    alt: "analytics-tracking",
    srcSet:
      "./images/analytics-tracking@1x.png 1x, ./images/analytics-tracking@2x.png 2x, ./images/analytics-tracking@3x.png 3x",
  },
];

function ServicesSection() {
  /**
   * TODO: Consider removing the padding (p-8) from the services-section div
   * if it causes layout issues or is no longer needed.
   */
  return (
    <div className="services-section p-8">
      <div className="mb-10 flex flex-col gap-4">
        <h2 className="inline-block self-start rounded-sm bg-secondary px-2 text-heading3 md:text-heading2">
          Services
        </h2>
        <p className="text-paragraphSmall md:text-paragraphMedium">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="services grid gap-4">
        {services.map((service) => (
          <Card key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;

function Card({ service }) {
  const { cardBackground, cardHeadingBackground, src, alt, srcSet } = service;
  const title = service.title.split(",");
  //bg-gray-dark
  return (
    <div
      className={`card rounded-md ${cardBackground} border border-b-4 border-gray-dark p-md md:h-[30rem] md:w-[70rem] md:rounded-lg md:p-[5rem]`}
    >
      <div className="card-content flex justify-between gap-8">
        <div className="card-text flex-2 flex flex-col justify-between">
          <div>
            <h3 className="inline-flex flex-col text-[2rem] font-medium md:text-heading3">
              <span className={`w-fit rounded-sm ${cardHeadingBackground}`}>
                {title[0]}
              </span>
              <span className={`w-fit rounded-sm ${cardHeadingBackground}`}>
                {title[1]}
              </span>
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <FaArrowCircleRight
                className={`origin-center ${cardHeadingBackground} ${cardBackground === "bg-gray-dark" && "!bg-gray-dark fill-white"} -rotate-45 rounded-full fill-gray-dark text-3xl`}
              />
            </span>
            <span
              className={`text-paragraphSmall ${cardBackground === "bg-gray-dark" && "text-white"}`}
            >
              Learn more
            </span>
          </div>
        </div>
        <div className="card-image h-[12rem] flex-1">
          <img
            className="h-[12rem] w-[21rem] bg-top object-contain"
            src={src}
            alt={alt}
            srcSet={srcSet}
          />
        </div>
      </div>
    </div>
  );
}
