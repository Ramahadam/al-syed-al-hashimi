import { FaArrowUp } from "react-icons/fa";
import HeadingSection from "./HeadingSection";

function CaseStudies() {
  return (
    <div>
      <HeadingSection
        headingText="Case Studies"
        paragraphText="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <div className="bg-gray-dark p-md">
        {/*BUG: consider the divide on large screen=> grid grid-cols-3 divide-x*/}
        <div className="grid grid-cols-1 gap-6 divide-y text-paragraphSmall text-white">
          <div>
            <p className="mb-8">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <a href="#" className="flex items-center gap-2 text-secondary">
              Learn more <FaArrowUp className="rotate-45" />
            </a>
          </div>
          <div className="py-4">
            <p className="mb-8">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <a href="#" className="flex items-center gap-2 text-secondary">
              Learn more <FaArrowUp className="rotate-45" />
            </a>
          </div>
          <div className="py-4">
            <p className="mb-8">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <a href="#" className="flex items-center gap-2 text-secondary">
              Learn more <FaArrowUp className="rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
