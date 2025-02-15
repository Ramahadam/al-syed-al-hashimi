import HeadingSection from './HeadingSection';
import Button from './Button';
import { FaLinkedinIn } from 'react-icons/fa';

const teams = [
  {
    name: ' John Sith',
    designation: ' CEO and Founder',
    description:
      ' 10+ years of experience in digital marketing. Expertise in SEO, PPC,and content strategy',
    srcImg: '/profile-01.jpg',
  },
  {
    name: ' Jane Doe',
    designation: ' Director of Operations',
    description:
      '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
    srcImg: '/profile-02.jpg',
  },
  {
    name: 'Michael Brown',
    designation: 'Senior SEO Specialist',
    description:
      '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',

    srcImg: '/profile-03.jpg',
  },
  {
    name: 'Emily Johnson',
    designation: 'PPC Manager',
    description:
      '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
    srcImg: '/profile-04.jpg',
  },
];

function TeamSection() {
  return (
    <div className="team-section">
      <div>
        <HeadingSection
          headingText="Team"
          paragraphText="Meet the skilled and experienced team behind our successful digital marketing strategies"
        />
      </div>
      <div className="cards grid gap-8">
        {teams.map((team, i) => (
          <Card key={i} team={team} />
        ))}
      </div>
    </div>
  );
}

export default TeamSection;

function Card({ team }) {
  const { name, designation, description, srcImg } = team;
  const imageSrc = name.split(' ').at(0).toLowerCase();
  console.log(imageSrc);

  return (
    <div className="card overflow-hidden flex w-[35rem] flex-col  divide-y-[1px] divide-gray-dark rounded-[1rem] border border-b-4 border-gray-dark px-sm py-sm text-p-base tablet:w-[38.7rem] tablet:rounded-lg tablet:px-md tablet:py-lg bg-white">
      <div className="card-header flex justify-between">
        <div className="author flex gap-4">
          <img
            src={srcImg}
            alt={`${name} profile image`}
            className="w-[10rem]"
          />
          <p className="flex flex-col gap-0 self-end">
            <span className="font-medium tablet:text-h4">{name}</span>
            <span className="text-p-xs italic">{designation}</span>
          </p>
        </div>
      </div>
      <div className="card-body p-4 opacity-80 text-[1.4rem]">
        <p className="text-pretty">{description}</p>
      </div>
    </div>
  );
}
