const logos = [
  {
    src: '/icons/amazon-logo.svg',
    altText: 'amazon logo',
  },
  {
    src: '/icons/dribbble-logo.svg',
    altText: 'dribble logo',
  },
  {
    src: '/icons/hubspot-logo.svg',
    altText: 'hubspot logo',
  },
  {
    src: '/icons/netflix-logo.svg',
    altText: 'netflix logo',
  },
  {
    src: '/icons/notion-logo.svg',
    altText: 'notion logo',
  },
  {
    src: '/icons/zoom-logo.svg',
    altText: 'zoom logo',
  },
];

export default function PartnersSection() {
  return (
    <div className="partner-section p-8">
      <div className="partners-logo grid grid-cols-3">
        {logos.map((logo) => (
          <Logo key={logo.altText} logo={logo} />
        ))}
      </div>
    </div>
  );
}

function Logo({ logo }) {
  return (
    <div className="p-4 grayscale">
      <img src={logo.src} className="h-[4rem]" alt={logo.altText} />
    </div>
  );
}
