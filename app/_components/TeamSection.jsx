import HeadingSection from "./HeadingSection";
import Button from "./Button";
import { FaLinkedinIn } from "react-icons/fa";

const teams = [
  {
    name: " John Sith",
    designation: " CEO and Founder",
    description:
      " 10+ years of experience in digital marketing. Expertise in SEO, PPC,and content strategy",
    srcImg: "./images/john-image.png",
  },
  {
    name: " Jane Doe",
    designation: " Director of Operations",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    srcImg: "./images/jane-image.png",
  },
  {
    name: "Michael Brown",
    designation: "Senior SEO Specialist",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",

    srcImg: "./images/michael-image.png",
  },
  {
    name: "Emily Johnson",
    designation: "PPC Manager",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    srcImg: "./images/emily-image.png",
  },
  {
    name: "Brian Williams",
    designation: "Social Media Specialist",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    srcImg: "./images/brian-image.png",
  },
  {
    name: "Sarah Kim",
    designation: "Content Creator",
    description:
      "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
    srcImg: "./images/sarah-image.png",
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
      <Button variation="primary" size="large">
        See all team
      </Button>
    </div>
  );
}

export default TeamSection;

function Card({ team }) {
  const { name, designation, description, srcImg } = team;
  const imageSrc = name.split(" ").at(0).toLowerCase();
  console.log(imageSrc);

  return (
    <div className="card flex w-[35rem] flex-col gap-5 divide-y-[1px] divide-gray-dark rounded-[3.5rem] border border-b-4 border-gray-dark px-sm py-sm text-paragraphSmall tablet:w-[38.7rem] tablet:rounded-lg tablet:px-md tablet:py-lg">
      <div className="card-header flex justify-between">
        <div className="author flex gap-4">
          <img
            src={srcImg}
            alt={`${name} profile image`}
            className="w-[10rem]"
          />
          <p className="flex flex-col gap-0 self-end">
            <span className="font-bold leading-none tablet:text-heading4">
              {name}
            </span>
            <span>{designation}</span>
          </p>
        </div>
        <a
          href="#"
          className="flex h-md w-md items-center justify-center rounded-full bg-gray-dark text-secondary"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div className="card-body pt-sm">
        <p className="text-pretty">{description}</p>
      </div>
    </div>
  );
}
