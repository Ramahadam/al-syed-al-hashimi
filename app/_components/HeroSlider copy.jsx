'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function HeroSlider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration errors
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
