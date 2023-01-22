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
      <div className="my-7 pb-1">
        <a href="#">
          <svg className="h-7 w-11">
            <use xlinkHref="/images/logo.svg#logo"></use>
          </svg>
        </a>
        <button
          className="fixed top-7 right-4 z-50 flex h-8 w-10 items-center justify-center"
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
          }fixed inset-0 select-none bg-very-dark-blue transition-opacity duration-300 ease-linear`}
        />
        <nav
          id="primary-navigation"
          className={`${
            isOpen ? "translate-x-0 " : "translate-x-64 "
          }fixed inset-y-0 right-0 z-40 w-64 bg-off-white transition-transform duration-300 ease-in-out`}
        >
          <ul className="pt-36">
            {navlinks.map(({ href, label }) => (
              <li className="mb-5 px-6 last:mb-0" key={label}>
                <a
                  className="block py-2 text-xl text-very-dark-blue"
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
