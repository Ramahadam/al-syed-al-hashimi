import ContactUs from '../_components/ContactUs';
import Map from '../_components/Map';
import FAQ from '../_components/FAQ';

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
        </div>

        <div className="contact-right bg-white py-4  mt-14 rounded-15">
          <h4 className="text-h5 font-semibold ml-4 my-4">Get in Touch</h4>
          <ContactUs />
        </div>
      </div>

      <Map />
      <FAQ />
    </div>
  );
}
