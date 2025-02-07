'use client';
import { useState } from 'react';
import { FaBars, FaPhone, FaPhoneAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import Button from './Button';
import Link from 'next/link';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      <div
        className={`${
          isOpen ? 'h-svh bg-color-primary p-md text-secondary' : ''
        } fixed right-0 text-center text-[2rem] font-normal leading-[2.8rem] tablet:relative md:h-fit md:bg-transparent md:text-inherit`}
      >
        <button
          className={`text-h4 menu-toggle left-0 right-20 tablet:hidden ${
            isOpen ? 'text-white' : 'text-color-primary'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <FaBars />}
        </button>
        <ul
          className={`flex text-white  flex-col gap-md tablet:flex-row ${
            isOpen ? 'block' : 'hidden'
          } tablet:flex`}
        >
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/ac-aircondition">AC</Link>
          </li>
          <li>
            <Link href="/plumbing">Plumbin</Link>
          </li>
          <li>
            <Link href="/electric">Electric</Link>
          </li>

          <li>
            <Link href="/about">About us</Link>
          </li>
          <li>
            <Link href="/contact">Contact us</Link>
          </li>
          <li>
            <Button variation="outline" className={'flex items-center gap-2'}>
              <FaPhoneAlt />
              <span> +9755-29899800</span>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
