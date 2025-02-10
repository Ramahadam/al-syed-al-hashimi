'use client';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function Counter({ end, duration, className }) {
  const { ref, inView } = useInView({ triggerOnce: true }); // Detects when the section is in view

  return (
    <div ref={ref}>
      {inView ? ( // Starts counting when in view
        <CountUp end={end} duration={duration} className={`${className}`} />
      ) : (
        <span className="text-h5">0</span> // Show 0 before scrolling
      )}
    </div>
  );
}

export default Counter;
