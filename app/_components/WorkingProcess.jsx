import Accordion from "./Accordion";
import HeadingSection from "./HeadingSection";

function WorkingProcess() {
  return (
    <div>
      <HeadingSection
        headingText="Our Working Process"
        paragraphText="Step-by-Step Guide to Achieving Your Business Goals"
      />

      <div className="flex flex-col gap-4 px-sm">
        <Accordion
          key="01"
          title="Consultation"
          number="01"
          content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        />
        <Accordion
          key="02"
          title="Research and Strategy Development"
          number="02"
          content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements"
        />
        <Accordion
          key="03"
          title="Implementation"
          number="03"
          content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        />
        <Accordion
          key="04"
          title="Monitoring and Optimization"
          number="01"
          content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        />
        <Accordion
          key="05"
          title="Reporting and Communication"
          number="05"
          content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        />
        <Accordion
          key="06"
          title="Continual Improvement"
          number="06"
          content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        />
      </div>
    </div>
  );
}

export default WorkingProcess;
