import Accordion from '../_components/Accordion';
import ContactUs from '../_components/ContactUs';

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

export default function Page() {
  return (
    <div className="tracking-tighter  text-color-gray-custom">
      <div className="relative bg-color-very-light-gray px-4 pt-24 ">
        <div className="contact-left">
          <div className=" leading-10 text-pretty text-[1.5rem]">
            <h2 className="text-h4 font-semibold tracking-tighter mb-4">
              Contact Us
            </h2>
            <p>
              Have a question or need assistance? Get in touch with our team for
              reliable AC, plumbing, and electrical services.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <p>info@emailsupport.com</p>
              <p>+971-0074747747</p>
            </div>
          </div>

          {/* <div className="flex flex-wrap flex-col gap-8 mt-10">
            <div>
              <h5 className="font-semibold">Customer Support</h5>
              <p>
                Our customer support team is here to assist you with any
                inquiries or service requests. Whether you need help with AC,
                plumbing, or electrical issues, we are just a message away!
              </p>
            </div>
            <div>
              <h5 className="font-semibold">Customer Support</h5>
              <p>
                Our customer support team is here to assist you with any
                inquiries or service requests. Whether you need help with AC,
                plumbing, or electrical issues, we are just a message away!
              </p>
            </div>
            <div>
              <h5 className="font-semibold">Customer Support</h5>
              <p>
                Our customer support team is here to assist you with any
                inquiries or service requests. Whether you need help with AC,
                plumbing, or electrical issues, we are just a message away!
              </p>
            </div>
          </div> */}
        </div>

        <div className="contact-right bg-white py-4  mt-14 rounded-15">
          <h4 className="text-h5 font-semibold ml-4 my-4">Get in Touch</h4>
          <ContactUs />
        </div>
      </div>
      {/* Map section */}
      <div className="max-w-[90%] mx-auto  w-full overflow-hidden mt-32 tracking-tighter  text-color-gray-custom">
        <div className="flex flex-col gap-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2499.619876113629!2d55.4241666083863!3d25.127343638924245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sae!4v1739600002215!5m2!1sar!2sae"
            className="rounded-15  w-full h-[30rem]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div>
            <p className="text-color-light-gray">Our Location</p>
            <h3 className="text-h5 text-color-dark-meduim mb-8">
              Visit Us in our location
            </h3>

            <div>
              <h4 className="font-semibold">Headquaters</h4>
              <p className="*:block *:text-[1.5rem]">
                <span> Al Syed Al Hashimi LLC. </span>
                <span> Dubai, UAE </span>
                <span> Al Rashdiah center point.</span>
                <span>United Arab Emirates</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/**FAQ */}

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
    </div>
  );
}
