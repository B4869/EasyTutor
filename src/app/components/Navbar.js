import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import '../CSS/navbar.css';
import { useEffect, useState } from 'react';

const navigation = [
  {
    name: 'คอร์สเรียนทั้งหมด',
    href: '/pages/all_course',
    current: false,
    showIfLoggedIn: true,
    showIfLoggedOut: true,
  },
  {
    name: 'สมัครสมาชิก',
    href: '/pages/register',
    current: true,
    showIfLoggedIn: false,
    showIfLoggedOut: true,
  },
  {
    name: 'ออกจากระบบ',
    href: '/',
    current: false,
    showIfLoggedIn: true,
    showIfLoggedOut: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const role = localStorage.getItem('role');

    setIsLoggedIn(loggedIn);
    setUserRole(role || '');
  }, []);

  const handleLogout = () => {
    // Reset login state and localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('role');
    setIsLoggedIn(false);
    setUserRole('');
    // Redirect to the homepage
    window.location.href = '/';
  };

  return (
    <Disclosure as="nav" className="navbar">
      {({ open }) => (
        <>
          <div className="navbar-container mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="navbar-logo">
                  EasyTutor
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="mobile-menu-button">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon aria-hidden="true" className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Desktop menu */}
              <div className="hidden sm:flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
                <div className="desktop-menu flex space-x-4">
                  {navigation
                    .filter((item) => (isLoggedIn ? item.showIfLoggedIn : item.showIfLoggedOut))
                    .map((item) => {
                      const classes = classNames(
                        item.current ? 'active' : '',
                        'rounded-md px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-700 hover:text-white'
                      );

                      if (item.name === 'ออกจากระบบ') {
                        return (
                          <button
                            key={item.name}
                            onClick={handleLogout}
                            className={classes}
                          >
                            {item.name}
                          </button>
                        );
                      } else {
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classes}
                          >
                            {item.name}
                          </Link>
                        );
                      }
                    })}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu panel */}
          <Disclosure.Panel className="sm:hidden">
            <div className="mobile-menu-panel space-y-1 px-2 pb-3 pt-2">
              {navigation
                .filter((item) => (isLoggedIn ? item.showIfLoggedIn : item.showIfLoggedOut))
                .map((item) => {
                  const classes = classNames(
                    item.current ? 'active' : '',
                    'block w-full text-left rounded-md px-3 py-2 text-base font-medium text-blue-600 hover:bg-blue-700 hover:text-white'
                  );

                  if (item.name === 'ออกจากระบบ') {
                    return (
                      <button
                        key={item.name}
                        onClick={handleLogout}
                        className={classes}
                      >
                        {item.name}
                      </button>
                    );
                  } else {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classes}
                      >
                        {item.name}
                      </Link>
                    );
                  }
                })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
