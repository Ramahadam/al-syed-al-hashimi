import PropTypes from "prop-types";

function HeadingSection({ headingText, paragraphText }) {
  return (
    <div className="mb-10 flex flex-col gap-4">
      <h2 className="inline-block self-start rounded-sm bg-secondary px-2 text-heading3 md:text-heading2">
        {headingText}
      </h2>
      <p className="text-paragraphSmall md:text-paragraphMedium">
        {paragraphText}
      </p>
    </div>
  );
}

export default HeadingSection;

HeadingSection.prototype = {
  headingText: PropTypes.string.isRequired,
  paragrphText: PropTypes.string.isRequired,
};
