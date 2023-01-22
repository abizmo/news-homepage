import { type NextComponentType } from "next";
import Image from "next/image";
import { useState } from "react";

interface NavLink {
  href: string;
  label: string;
}

const navlinks: NavLink[] = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#",
    label: "New",
  },
  {
    href: "#",
    label: "Popular",
  },
  {
    href: "#",
    label: "Trending",
  },
  {
    href: "#",
    label: "Categories",
  },
];

const Header: NextComponentType = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container mx-auto px-4">
      <div className="my-7 flex items-center justify-between pb-1 lg:mt-20 lg:mb-14">
        <a href="#">
          <svg className="h-7 w-11 lg:h-10 lg:w-16">
            <use xlinkHref="/images/logo.svg#logo"></use>
          </svg>
        </a>
        <button
          className={`${
            isOpen ? "fixed " : "absolute "
          }top-7 right-4 z-50 flex h-8 w-10 items-center justify-center lg:hidden`}
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Image
            src="/images/icon-menu.svg"
            alt=""
            width={40}
            height={18}
            aria-hidden="true"
            className={isOpen ? "hidden" : ""}
          />
          <Image
            src="/images/icon-menu-close.svg"
            alt=""
            width={32}
            height={32}
            aria-hidden="true"
            className={isOpen ? "" : "hidden"}
          />
          <span className="sr-only">Menu</span>
        </button>
        <div
          className={`${
            isOpen ? "translate-x-0 opacity-60 " : "translate-x-full opacity-0 "
          }fixed inset-0 select-none bg-very-dark-blue transition-opacity duration-300 ease-linear lg:hidden`}
        />
        <nav
          id="primary-navigation"
          className={`${
            isOpen ? "translate-x-0 " : "translate-x-64 "
          }fixed inset-y-0 right-0 z-40 w-64 bg-off-white transition-transform duration-300 ease-in-out lg:relative lg:w-auto lg:translate-x-0`}
        >
          <ul className="pt-36 lg:flex lg:items-center lg:gap-2 lg:pt-0">
            {navlinks.map(({ href, label }) => (
              <li className="mb-5 px-6 last:mb-0 lg:mb-0 lg:px-4" key={label}>
                <a
                  className="inline-block w-full py-2 text-xl text-very-dark-blue hover:text-soft-red lg:text-lg"
                  href={href}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
