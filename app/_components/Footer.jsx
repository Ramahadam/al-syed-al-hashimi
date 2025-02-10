import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { ImLinkedin2 } from 'react-icons/im';
import Input from './Input';
import Button from './Button';

function Footer() {
  return (
    <footer className="rounded-t-md bg-color-dark-meduim p-4 text-center text-white">
      <div className="flex flex-col items-center justify-between gap-4 text-paragraphSmall sm:gap-6 md:flex-row md:items-center">
        <div>
          <ul className="flex flex-col gap-8 md:flex-row md:gap-4">
            <li>
              <a href="#" className="underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                Use Cases
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="underline">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="my-8">
          <ul className="flex gap-4">
            <li>
              <a href="#" className="hover:underline">
                <FaFacebook className=" h-14 w-14 text-3xl" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white"
              >
                <FaTwitter className="fill-color-dark-meduim  text-3xl" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white"
              >
                <ImLinkedin2 className="fill-color-dark-meduim text-3xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center justify-between pt-6 text-paragraphSmall md:mt-12 md:flex-row md:items-center">
        <div className="flex flex-col gap-4">
          <h3 className="inline-block self-center rounded-sm bg-secondary text-paragraphBig font-semibold text-gray-dark">
            Contact Us
          </h3>
          <p>Email: info@email.com</p>
          <p>Phone: 555-567-8901</p>
          <p className="text-balance">
            Address:123 Block C, street 88 , Dubai, UAE
          </p>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">
          &copy; 2025.{' '}
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
