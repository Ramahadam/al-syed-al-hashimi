import Badage from './Badage';

function Card({ sectionContent }) {
  return (
    <div
      className={`relative w-[35rem] h-[40rem] bg-color-light-gray rounded-15 overflow-hidden`}
    >
      <img
        src={`/${sectionContent.src}`}
        alt={sectionContent.alt}
        className=" absolute w-full h-full object-cover brightness-50 "
      />
      <button className=" absolute top-5 left-5 text-color-secondary-dark">
        <Badage>
          Start from{' '}
          <span className="font-semibold ml-2">{sectionContent.price}</span> /hr
        </Badage>
      </button>
      <div className="absolute bottom-0 p-[2.4rem] text-color-very-light-gray">
        <h3 className="font-semibold tracking-wide capitalize mb-4 ">
          {sectionContent.title}
        </h3>
        <div className="">
          {sectionContent.tags.map((tag) => (
            <Badage
              key={tag}
              className="!py-[1px] bg-transparent border border-color-gray-custom rounded-15 mr-4 text-[1.4rem]"
            >
              {tag}
            </Badage>
          ))}
          {/* <Badage className="bg-transparent border border-color-gray-custom rounded-15 mr-4 ">
            AC Maintenace
          </Badage>
          <Badage className="bg-transparent border rounded-15 border-color-gray-custom">
            AC Repair
          </Badage> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
