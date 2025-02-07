import HeadingSection from './HeadingSection';
import Input from './Input';
import Button from './Button';
import Textarea from './Textarea';
function ContactUs() {
  return (
    <div>
      <HeadingSection
        headingText="Contact Us"
        paragraphText="Connect with Us: Let's Discuss Your Digital Marketing Needs"
      />

      <div className="contact-us relative rounded-lg bg-gray-light p-md text-paragraphSmall">
        <div className="contact-form">
          <div className="mb-8 flex items-center gap-4">
            <p className="flex items-center gap-2">
              <input type="radio" name="sayHiOrquote" id="sayHi" />
              <label htmlFor="sayHi">Say Hi</label>
            </p>
            <p className="flex items-center gap-2">
              <input type="radio" name="sayHiOrquote" id="sayHi" />
              <label htmlFor="Get a Quote">Get a Quote</label>
            </p>
          </div>
          <form action="#" className="flex flex-col gap-8">
            <Input
              type="text"
              name="name"
              id="name"
              labelText="Name"
              placeholder="Enter your name"
              isRequired={false}
            />
            <Input
              type="email"
              name="email"
              id="email"
              labelText="Email"
              placeholder="Enter your email"
              isRequired={true}
            />

            <Textarea
              id="message"
              placeholder="Message"
              labelText="Message"
              isRequired={true}
            />

            <Button variation="primary" size="md" className="text-2xl">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
