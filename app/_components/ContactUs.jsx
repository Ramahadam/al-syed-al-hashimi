'use client';
import emailjs from '@emailjs/browser';

import HeadingSection from './HeadingSection';
import Input from './Input';
import Button from './Button';
import Textarea from './Textarea';
import { useState } from 'react';
function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        'your_service_id', // Replace with your EmailJS Service ID
        'your_template_id', // Replace with your EmailJS Template ID
        formData,
        'your_public_key' // Replace with your EmailJS Public Key
      );

      if (response.status === 200) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setStatus('Failed to send message. Try again!');
    }
  };

  return (
    <div className="w-[90%] mx-auto">
      <HeadingSection
        headingText="Contact Us"
        paragraphText="Connect with Us: Let's Discuss Your Digital Marketing Needs"
      />

      <div className="contact-us relative rounded-lg bg-gray-light p-md text-paragraphSmall">
        <div className="contact-form">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <Input
              type="text"
              name="name"
              id="name"
              labelText="Name"
              placeholder="Enter your name"
              isRequired={false}
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              type="number"
              name="mobile"
              id="mobile"
              labelText="Mobile"
              placeholder="Enter your mobile"
              isRequired={true}
              value={formData.number}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              id="email"
              labelText="Email"
              placeholder="Enter your email"
              isRequired={true}
              value={formData.email}
              onChange={handleChange}
            />

            <Textarea
              id="message"
              name="message"
              placeholder="Message"
              labelText="Message"
              isRequired={true}
              value={formData.message}
              onChange={handleChange}
            />

            <Button
              variation="secondary"
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
