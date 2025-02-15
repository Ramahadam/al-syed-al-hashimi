'use client';
import { useState } from 'react';
import { FaBars, FaPhone, FaPhoneAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import Button from './Button';
import Link from 'next/link';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => setIsOpen((isOpen) => !isOpen);

  return (
    <nav className="relative z-50 ">
      <div
        className={`${
          isOpen ? 'h-svh bg-color-primary p-md text-secondary top-0' : ''
        } fixed right-0 left-0 text-center text-[2rem] font-normal leading-[2.8rem] md:relative md:h-fit md:bg-transparent md:text-inherit`}
      >
        <button
          className={`absolute top-4 right-14  mb-10 text-h4 menu-toggle md:hidden ${
            isOpen ? 'text-white' : 'text-color-primary'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <FaBars />}
        </button>
        <ul
          className={`md:block flex md:mt-0 mt-10 items-center md:text-color-dark-meduim md:text-[1.4rem] md:items-center text-white text-p-sm font-medium gap-8 uppercase flex-col  gap-md md:flex-row ${
            isOpen ? ' block' : 'hidden'
          } md:flex`}
        >
          <li>
            <Link onClick={handleCloseMenu} href="/">
              Home
            </Link>
          </li>

          <li>
            <Link onClick={handleCloseMenu} href="/ac-aircondition">
              AC
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseMenu} href="/plumbing">
              Plumbing
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseMenu} href="/electric">
              Electric
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseMenu} href="/zones-area">
              Zones
            </Link>
          </li>

          <li>
            <Link onClick={handleCloseMenu} href="/about">
              About us
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseMenu} href="/contact">
              Contact us
            </Link>
          </li>
          <li className="md:mt-0 mt-10">
            <a href="tel:+975529899800">
              <Button
                variation="outline"
                className="flex items-center gap-2 md:bg-color-dark-meduim md:text-color-very-light-gray !rounded-15"
              >
                <FaPhoneAlt />
                <span> +971505650190</span>
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
