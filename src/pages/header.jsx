import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Blogging Website</span>
            <img
              alt="Blog Logo"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
        {/* {username &&( */}
              <>
                <a href="/create"  className="text-sm font-semibold text-gray-900 hover:text-indigo-600">Create new post</a>
                <a href="/"  className="text-sm font-semibold text-gray-900 hover:text-indigo-600" onClick>Logout </a>
              </>
          {/* )} */}
          {/* {!username && ( */}
            <>
          <a href="/login" className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
            Login
          </a>
          <a href="/register" className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
            Register
          </a>
          </>
          {/* )} */}
          <a href="/about-us" className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
            About Us
          </a>
          <a href="/contact-us" className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
            Contact Us
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <Dialog.Panel className="fixed inset-0 z-50 bg-white p-6">
          {/* Close Button */}
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Blogging Website</span>
              <img
                alt="Blog Logo"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              className="text-gray-700 hover:text-indigo-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="mt-6 space-y-4">
            <a href="/login" className="block text-base font-semibold text-gray-900 hover:text-indigo-600">
              Login
            </a>
            <a href="/register" className="block text-base font-semibold text-gray-900 hover:text-indigo-600">
              Register
            </a>
            <a href="/about-us" className="block text-base font-semibold text-gray-900 hover:text-indigo-600">
              About Us
            </a>
            <a href="/contact-us" className="block text-base font-semibold text-gray-900 hover:text-indigo-600">
              Contact Us
            </a>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
