import Accordion from './Accordion';

const faqData = [
  {
    key: '01',
    title: 'What AC maintenance services do you provide?',
    number: '01',
    content:
      'We provide a range of AC maintenance services, including regular cleaning, filter replacement, refrigerant checks, and performance optimization to ensure your air conditioning system is running efficiently and effectively.',
  },
  {
    key: '02',
    title: 'How often should I schedule plumbing maintenance?',
    number: '02',
    content:
      'We recommend scheduling plumbing maintenance at least once a year to check for leaks, inspect pipes, and ensure everything is functioning correctly to avoid costly repairs later.',
  },
  {
    key: '03',
    title: 'What should I do if I experience electrical issues?',
    number: '03',
    content:
      "If you're experiencing electrical issues, such as flickering lights or power surges, it's important to contact a professional immediately. We can assess the situation safely and recommend necessary repairs or upgrades.",
  },
  {
    key: '04',
    title: 'Do you offer emergency services?',
    number: '04',
    content:
      "Yes, we offer emergency maintenance services for AC, plumbing, and electrical systems. Our team is available 24/7 to handle urgent issues, ensuring you're not left without essential services.",
  },
  {
    key: '05',
    title: 'How do I know when my AC needs servicing?',
    number: '05',
    content:
      'Signs that your AC needs servicing include unusual noises, weak airflow, poor cooling performance, or higher energy bills. Regular maintenance can prevent these issues and extend the life of your unit.',
  },
  {
    key: '06',
    title: 'What are the benefits of regular electrical system inspections?',
    number: '06',
    content:
      'Regular electrical inspections can help detect potential hazards, prevent electrical fires, improve energy efficiency, and ensure your system meets safety standards, ultimately saving you money on repairs.',
  },
];
function FAQ() {
  return (
    <div className="max-w-[90%] mx-auto  flex flex-col gap-4 px-sm mt-32">
      <div>For big screen you should eitght show omething here</div>
      <h3 className="text-h5 bg-color-accent w-fit p-2 -skew-x-12 ">
        Frequently Asked Questions
      </h3>

      <div className="my-4">
        {faqData.map((faq) => (
          <Accordion
            key={faq.key}
            title={faq.title}
            number={faq.number}
            content={faq.content}
          />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
