import HeadingSection from './HeadingSection';
import Input from './Input';
import Button from './Button';
import Textarea from './Textarea';
function ContactUs() {
  return (
    <div className="w-[90%] mx-auto">
      <HeadingSection
        headingText="Contact Us"
        paragraphText="Connect with Us: Let's Discuss Your Digital Marketing Needs"
      />

      <div className="contact-us relative rounded-lg bg-gray-light p-md text-paragraphSmall">
        <div className="contact-form">
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

            <Button
              variation="accent"
              size="md"
              className="self-center w-auto !rounded-[1rem]"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
