"use client";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-20 w-full font-mono flex justify-between transition-colors duration-300 ${
        scroll ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <div className="ml-4 mt-4 sm:ml-10 lg:ml-20">
        <Link href="/">
          <span className="text-3xl cursor-pointer">Shreyansh Srivastava</span>
        </Link>
      </div>
      <div className="flex">
        <div className="relative md:hidden mr-4 mt-4">
          <Popover>
            <PopoverButton aria-label="Open menu">
              <Bars3BottomRightIcon className="text-white h-8" />
            </PopoverButton>
            <PopoverPanel className="z-10">
              <div className="grid">
                <Link href="/">
                  <span className="text-blue-300 cursor-pointer">about</span>
                </Link>
                <Link href="/resume">
                  <span className="text-purple-300 cursor-pointer">resume</span>
                </Link>
                <Link href="/portfolio">
                  <span className="text-red-300 cursor-pointer">portfolio</span>
                </Link>
                <Link href="/contact">
                  <span className="text-green-300 cursor-pointer">contact</span>
                </Link>
              </div>
            </PopoverPanel>
          </Popover>
        </div>
        <div className="hidden md:flex space-x-2 mr-4 mt-6 sm:mr-10 lg:mr-20 sm:space-x-4 lg:space-x-6">
          <Link href="/">
            <span className="text-blue-300 cursor-pointer">about</span>
          </Link>
          <span>|</span>
          <Link href="/resume">
            <span className="text-purple-300 cursor-pointer">resume</span>
          </Link>
          <span>|</span>
          <Link href="/portfolio">
            <span className="text-red-300 cursor-pointer">portfolio</span>
          </Link>
          <span>|</span>
          <Link href="/contact">
            <span className="text-green-300 cursor-pointer">contact</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
