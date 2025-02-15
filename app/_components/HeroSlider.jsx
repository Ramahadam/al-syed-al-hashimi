'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function HeroSlider({ children, isResponsive = false }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration errors
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
