import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderSlick from "react-slick";

export default function Slider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="mt-4 flex justify-center space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="flex h-6 w-6 items-center justify-center">
        <svg
          width="10"
          height="10"
          viewBox="0 0 14 14"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
            fill="white"
          />
        </svg>
      </div>
    ),
  };
  return (
    <div className="slider-container text-paragraphSmall text-white">
      <SliderSlick {...settings}>
        <div className="min-h-[14rem]">
          <Slide />
          <div className="slideFooter mt-4 flex flex-col items-center justify-center">
            <span className="text-secondary">Author</span>
            <span>Designation</span>
          </div>
        </div>
        <div className="h-[10rem]">
          <Slide />
        </div>
        <div className="h-[10rem]">
          <Slide />
        </div>
        <div className="h-[12rem]">
          <Slide />
        </div>
      </SliderSlick>
    </div>
  );
}

function Slide() {
  return (
    <div className="relative mx-auto mt-10 rounded-md border border-secondary shadow-lg">
      <div className="p-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          magni illo modi minus ab, aperiam possimus sapiente enim tempora eum.
        </p>
      </div>
      {/* Triangle at the bottom */}
      <div className="relative bottom-[1px] left-14 z-50">
        <span className="absolute h-5 w-[1px] origin-center -rotate-[35deg] bg-secondary"></span>
        <span className="absolute left-[0.66rem] h-5 w-[1px] origin-center rotate-[35deg] bg-secondary"></span>
      </div>
      <div className="absolute -bottom-5 left-16 -translate-x-1/2 transform border-l-[7px] border-r-[13px] border-t-[20px] border-l-transparent border-r-transparent border-t-gray-dark"></div>
    </div>
  );
}
