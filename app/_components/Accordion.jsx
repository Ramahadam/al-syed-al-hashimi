"use client"
import { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

/***
 * 
 *       <div className="flex flex-col gap-4 px-sm">
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
 */

function Accordion({ title, number, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`accordion rounded-md border-b border-gray-200 bg-secondary transition-all delay-75 ease-in tablet:rounded-lg ${
        !isOpen && "!bg-gray-light"
      }`}
    >
      <button
        className={`accordion-header relative flex w-full items-center justify-between p-4 text-left before:absolute before:bottom-0 before:h-[1px] before:w-[90%] before:bg-gray-dark focus:outline-none ${!isOpen && "before:!h-0"}`}
        onClick={toggleAccordion}
      >
        <p className="flex items-center gap-4">
          <span className="text-heading4 font-semibold">{number}</span>
          <span className="text-2xl font-medium">{title}</span>
        </p>
        <span>
          {isOpen ? (
            <FaMinusCircle className="h-8 w-8 rounded-full bg-gray-dark text-gray-light" />
          ) : (
            <FaPlusCircle className="h-8 w-8 rounded-full bg-gray-dark text-gray-light" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="accordion-content p-4 text-paragraphSmall">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
