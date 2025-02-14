import Image from 'next/image';
import HeadingSection from '../_components/HeadingSection';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const zones = [
  {
    id: '01',
    name: 'Zone 1',
    image: 'zone1.png',
    areas: [
      'All Villa Communities',
      'Emirates Hills',
      'Green Village',
      'Motor City',
      'Arabian Ranches',
      'Damac Hills',
      'Arabella',
      'Al Waha',
      'Falcon City',
      'The Villa',
      'Meydan',
      'Dubai Hills',
    ],
  },
  {
    id: '02',
    name: 'Zone 2',
    image: 'zone2.png',
    areas: [
      'Business Bay',
      'Downtown',
      'Discovery Gardens',
      'Jumeirah',
      'Al Barsha',
      'Internet City',
      'Umm Suqeim',
      'JVC',
      'JLT',
      'Dubai Marina',
      'Wadi Al Safa',
      'Al Quoz',
    ],
  },
  {
    id: '03',
    name: 'Zone 3',
    image: 'zone3.png',
    areas: [
      'Dubai Silicon Oasis',
      'Dubai Creek',
      'Dubai Festival City',
      'Dubai Airport',
      'Garhoud',
      'Badia',
      'Al Mamzar',
      'Deira',
      'Al Nahda',
      'Al Qusais',
      'Free Zone',
      'Al Twar',
      'Al Aweer',
    ],
  },
  {
    id: '04',
    name: 'Zone 4',
    image: 'zone4.png',
    areas: [
      'Nad Al Sheba',
      'Nad Al Hamar',
      'Nad Al Shamma',
      'Al Rashidiya',
      'Al Warqa',
      'Warsan',
      'Al Khawaneej',
      'Wadi Al Amardi',
      'Al Mizhar',
      'Muhaisnah',
    ],
  },
];

export default function Zones() {
  return (
    <>
      <div className="relative max-h-[30vh] ">
        <div className="relative w-full h-64">
          <Image
            src={`/zones-area.png`}
            alt="hero image"
            className="object-fill"
            fill
          />
        </div>

        <div className="absolute inset-0 bg-color-accent bg-opacity-50"></div>

        <div className="absolute bottom-0  max-w-fit rounded-md  bg-color-very-light-gray bg-opacity-50  px-4 py-6">
          <HeadingSection className="capitalize text-balance  text-h4  ">
            Service Areas
          </HeadingSection>
          <p>Zones - We serve across UAE</p>
        </div>
      </div>

      <div className=" p-10 bg-color-very-light-gray">
        {/* <h3 className="text-h5">Service Areas and zones</h3> */}
        <div className="mt-40 grid grid-cols-1 gap-y-36">
          {zones.map((zone) => (
            <Zone key={zone.id} zone={zone} />
          ))}
        </div>
      </div>
    </>
  );
}

function Zone({ zone }) {
  return (
    <div className="zone-card relative  flex flex-col rounded-15 bg-white w-[90%] shadow-sm ">
      <div className="card-header h-64">
        <div className="relative overflow-hidden rounded-15 bg-opacity-50 bg-color-accent -top-20 left-1/2 -translate-x-1/2  h-80 w-80">
          <Image
            src={`/${zone.image}`}
            alt="burg al arab tower"
            className="object-cover"
            fill
          />
        </div>
      </div>
      <div className="p-4">
        <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-color-accent bg-opacity-25">
          <span className="relative  text-p-md font-semibold">{zone.name}</span>
        </span>

        <ul
          role="list"
          className="mt-8 list-inside list-disc text-color-gray-custom text-[1.4rem]"
        >
          {zone.areas.map((area) => (
            <li className="flex items-center gap-2" key={area}>
              <span className="text-color-accent">
                <IoIosCheckmarkCircle />
              </span>
              <span className="font-medium">{area}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
