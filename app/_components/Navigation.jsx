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
    <nav className="relative bg-yellow-200">
      <div
        className={`${
          isOpen ? 'h-svh bg-color-primary p-md text-secondary top-0' : ''
        } fixed right-0 left-0 text-center text-[2rem] font-normal leading-[2.8rem] tablet:relative md:h-fit md:bg-transparent md:text-inherit`}
      >
        <button
          className={`absolute top-0 right-4  mb-10 text-h4 menu-toggle tablet:hidden ${
            isOpen ? 'text-white' : 'text-color-primary'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <FaBars />}
        </button>
        <ul
          className={`flex mt-10 items-center text-white text-p-sm font-medium gap-8 uppercase flex-col gap-md tablet:flex-row ${
            isOpen ? 'block' : 'hidden'
          } tablet:flex`}
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
            <Link onClick={handleCloseMenu} href="/about">
              About us
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseMenu} href="/contact">
              Contact us
            </Link>
          </li>
          <li className="mt-10">
            <a href="tel:+975529899800">
              <Button variation="outline" className="flex items-center gap-2">
                <FaPhoneAlt />
                <span> +9755-29899800</span>
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
